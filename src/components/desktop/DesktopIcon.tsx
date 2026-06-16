interface Props {
  label: string;
  icon: string;
  onDoubleClick: () => void;
}

export default function DesktopIcon({ label, icon, onDoubleClick }: Props) {
  return (
    <div className="desktop-icon" onDoubleClick={onDoubleClick}>
      <img src={icon} alt={label} draggable={false} />
      <span>{label}</span>
    </div>
  );
}
