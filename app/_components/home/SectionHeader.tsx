type SectionHeaderProps = {
  badge: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
};

export default function SectionHeader({ badge, title, description, className }: SectionHeaderProps) {
  return (
    <div className={`section-head split-head reveal ${className ?? ''}`}>
      <div>
        <div className="section-badge">{badge}</div>
        <h2 className="section-title">{title}</h2>
      </div>
      {description ? <p className="section-lead">{description}</p> : null}
    </div>
  );
}
