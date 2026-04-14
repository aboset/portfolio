interface TechTagProps {
  children: React.ReactNode;
  className?: string;
}

export default function TechTag({ children, className = '' }: TechTagProps) {
  return (
    <span
      className={`tech-tag ${className}`}
    >
      {children}
    </span>
  );
}
