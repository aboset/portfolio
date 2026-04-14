interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  align = 'left',
  className = '',
}: SectionTitleProps) {
  return (
    <div className={`${align === 'center' ? 'text-center' : ''} ${className}`}>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-white/50 text-base leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
