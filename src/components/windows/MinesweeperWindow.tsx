import { useCallback, useEffect, useRef, useState } from 'react';
import WindowChrome from './WindowChrome';

type Difficulty = 'beginner' | 'intermediate';

const CONFIGS: Record<Difficulty, { rows: number; cols: number; mines: number }> = {
  beginner: { rows: 9, cols: 9, mines: 10 },
  intermediate: { rows: 16, cols: 16, mines: 40 },
};

type CellState = {
  mine: boolean;
  revealed: boolean;
  flagged: boolean;
  adjacent: number;
};

type GameStatus = 'idle' | 'playing' | 'won' | 'lost';

function createBoard(rows: number, cols: number, mines: number, firstRow: number, firstCol: number): CellState[][] {
  const board: CellState[][] = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => ({ mine: false, revealed: false, flagged: false, adjacent: 0 }))
  );

  // Place mines avoiding first click and its neighbors
  const safe = new Set<string>();
  for (let dr = -1; dr <= 1; dr++) {
    for (let dc = -1; dc <= 1; dc++) {
      const r = firstRow + dr;
      const c = firstCol + dc;
      if (r >= 0 && r < rows && c >= 0 && c < cols) safe.add(`${r},${c}`);
    }
  }

  let placed = 0;
  while (placed < mines) {
    const r = Math.floor(Math.random() * rows);
    const c = Math.floor(Math.random() * cols);
    if (!board[r][c].mine && !safe.has(`${r},${c}`)) {
      board[r][c].mine = true;
      placed++;
    }
  }

  // Calculate adjacency
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c].mine) continue;
      let count = 0;
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          const nr = r + dr;
          const nc = c + dc;
          if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && board[nr][nc].mine) count++;
        }
      }
      board[r][c].adjacent = count;
    }
  }
  return board;
}

function floodReveal(board: CellState[][], row: number, col: number): CellState[][] {
  const next = board.map((r) => r.map((c) => ({ ...c })));
  const rows = next.length;
  const cols = next[0].length;
  const queue: [number, number][] = [[row, col]];
  const visited = new Set<string>();

  while (queue.length) {
    const [r, c] = queue.shift()!;
    const key = `${r},${c}`;
    if (visited.has(key)) continue;
    visited.add(key);
    if (next[r][c].flagged || next[r][c].mine) continue;
    next[r][c].revealed = true;
    if (next[r][c].adjacent === 0) {
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          const nr = r + dr;
          const nc = c + dc;
          if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && !next[nr][nc].revealed) {
            queue.push([nr, nc]);
          }
        }
      }
    }
  }
  return next;
}

const NUM_COLORS = ['', 'ms-num-1', 'ms-num-2', 'ms-num-3', 'ms-num-4', 'ms-num-5', 'ms-num-6', 'ms-num-7', 'ms-num-8'];

export default function MinesweeperWindow() {
  const [difficulty, setDifficulty] = useState<Difficulty>('beginner');
  const [board, setBoard] = useState<CellState[][] | null>(null);
  const [status, setStatus] = useState<GameStatus>('idle');
  const [flagCount, setFlagCount] = useState(0);
  const [time, setTime] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { rows, cols, mines } = CONFIGS[difficulty];

  const resetGame = useCallback(() => {
    setBoard(null);
    setStatus('idle');
    setFlagCount(0);
    setTime(0);
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  useEffect(() => { resetGame(); }, [difficulty, resetGame]);

  useEffect(() => {
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  function startTimer() {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setTime((t) => Math.min(t + 1, 999)), 1000);
  }

  function handleReveal(row: number, col: number) {
    if (status === 'won' || status === 'lost') return;
    const cell = board?.[row]?.[col];
    if (cell?.revealed || cell?.flagged) return;

    let currentBoard = board;

    // First click: generate board
    if (!currentBoard) {
      currentBoard = createBoard(rows, cols, mines, row, col);
      setStatus('playing');
      startTimer();
    }

    if (currentBoard[row][col].mine) {
      // Game over — reveal all mines
      const revealed = currentBoard.map((r) =>
        r.map((c) => ({ ...c, revealed: c.mine ? true : c.revealed }))
      );
      revealed[row][col] = { ...revealed[row][col], revealed: true };
      setBoard(revealed);
      setStatus('lost');
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    const next = floodReveal(currentBoard, row, col);
    const unrevealed = next.flat().filter((c) => !c.revealed && !c.mine).length;
    if (unrevealed === 0) {
      setStatus('won');
      if (timerRef.current) clearInterval(timerRef.current);
    }
    setBoard(next);
  }

  function handleFlag(e: React.MouseEvent, row: number, col: number) {
    e.preventDefault();
    if (status === 'won' || status === 'lost') return;
    if (!board) return;
    const cell = board[row][col];
    if (cell.revealed) return;
    const next = board.map((r) => r.map((c) => ({ ...c })));
    next[row][col].flagged = !next[row][col].flagged;
    setFlagCount((f) => f + (next[row][col].flagged ? 1 : -1));
    setBoard(next);
  }

  const mineCounter = Math.max(0, mines - flagCount);
  const face = status === 'won' ? '😎' : status === 'lost' ? '😵' : '🙂';

  const windowWidth = cols * 18 + 80;
  const windowHeight = rows * 18 + 130;

  return (
    <WindowChrome
      id="minesweeper"
      title="Minesweeper"
      width={windowWidth}
      height={windowHeight}
    >
      <div className="minesweeper" style={{ width: '100%', height: '100%' }}>
        <div className="ms-difficulty">
          <label>
            <input
              type="radio"
              checked={difficulty === 'beginner'}
              onChange={() => setDifficulty('beginner')}
            />
            Beginner
          </label>
          <label>
            <input
              type="radio"
              checked={difficulty === 'intermediate'}
              onChange={() => setDifficulty('intermediate')}
            />
            Intermediate
          </label>
        </div>

        <div className="ms-header">
          <div className="ms-counter">{String(mineCounter).padStart(3, '0')}</div>
          <button className="ms-reset-btn" onClick={resetGame}>{face}</button>
          <div className="ms-counter">{String(time).padStart(3, '0')}</div>
        </div>

        <div
          className="ms-grid"
          style={{ gridTemplateColumns: `repeat(${cols}, 18px)` }}
          onContextMenu={(e) => e.preventDefault()}
        >
          {Array.from({ length: rows }, (_, r) =>
            Array.from({ length: cols }, (_, c) => {
              const cell = board?.[r]?.[c];
              const revealed = cell?.revealed ?? false;
              const flagged = cell?.flagged ?? false;
              const mine = cell?.mine ?? false;
              const adj = cell?.adjacent ?? 0;
              const isHitMine = revealed && mine;

              let content = '';
              let cls = 'ms-cell';
              if (flagged && !revealed) { content = '🚩'; cls += ' flagged'; }
              else if (!revealed) { content = ''; }
              else if (mine) { content = '💣'; cls += ' revealed mine-hit'; if (isHitMine) cls += ' mine-hit'; }
              else {
                cls += ' revealed' + (adj === 0 ? ' empty' : '');
                if (adj > 0) { content = String(adj); cls += ` ${NUM_COLORS[adj]}`; }
              }

              return (
                <div
                  key={`${r}-${c}`}
                  className={cls}
                  onClick={() => handleReveal(r, c)}
                  onContextMenu={(e) => handleFlag(e, r, c)}
                >
                  {content}
                </div>
              );
            })
          )}
        </div>

        {status === 'won' && (
          <div style={{ fontWeight: 'bold', color: 'green', fontSize: 12 }}>You win! 🎉</div>
        )}
        {status === 'lost' && (
          <div style={{ fontWeight: 'bold', color: 'red', fontSize: 12 }}>Game over 💥</div>
        )}
      </div>
    </WindowChrome>
  );
}
