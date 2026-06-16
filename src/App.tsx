import { lazy, Suspense, Component, type ReactNode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import ModernPortfolio from './pages/ModernPortfolio';

const XPApp = lazy(() => import('./pages/XPApp'));

class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state: { error: Error | null } = { error: null };
  static getDerivedStateFromError(error: Error) { return { error }; }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 40, fontFamily: 'monospace', color: 'red', background: '#fff' }}>
          <h1>Runtime Error</h1>
          <pre>{this.state.error.message}</pre>
          <pre>{this.state.error.stack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ModernPortfolio />} />
          <Route
            path="/xp"
            element={
              <Suspense fallback={<div style={{ background: '#000', height: '100vh' }} />}>
                <XPApp />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
