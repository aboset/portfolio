import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  /** If provided, renders as <a> (external) or <Link> (internal) */
  href?: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  icon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-brand-purple text-white hover:bg-brand-purple-dark ' +
    'shadow-[0_0_20px_rgba(120,62,244,0.3)] hover:shadow-[0_0_30px_rgba(120,62,244,0.5)]',
  outline:
    'border border-brand-purple/40 text-brand-purple-light ' +
    'hover:bg-brand-purple/10 hover:border-brand-purple/60',
  ghost: 'text-white/60 hover:text-white hover:bg-white/5',
};

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3.5 text-base',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  download,
  target,
  rel,
  onClick,
  className = '',
  icon,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseClasses =
    `inline-flex items-center gap-2 font-medium rounded-xl transition-all duration-300 ` +
    `${variantClasses[variant]} ${sizeClasses[size]} ` +
    `${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer'} ` +
    className;

  const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </>
  );

  if (href) {
    const isExternal =
      href.startsWith('http') ||
      href.startsWith('mailto:') ||
      href.startsWith('https://wa.me') ||
      !!download;

    if (isExternal) {
      return (
        <a
          href={href}
          download={download || undefined}
          target={target}
          rel={rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)}
          className={baseClasses}
          onClick={onClick}
        >
          {content}
        </a>
      );
    }

    return (
      <Link to={href} className={baseClasses} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={baseClasses}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
