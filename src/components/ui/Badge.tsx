interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'category' | 'success' | 'freelance';
  className?: string;
}

const variantClasses: Record<NonNullable<BadgeProps['variant']>, string> = {
  default:
    'bg-brand-purple/10 text-brand-purple-light border border-brand-purple/20',
  category:
    'bg-surface-base/80 backdrop-blur-sm text-white/70 border border-surface-border',
  success:
    'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
  freelance:
    'bg-violet-500/10 text-violet-300 border border-violet-500/20',
};

export default function Badge({
  children,
  variant = 'default',
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
