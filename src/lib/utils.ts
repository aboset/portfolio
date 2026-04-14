/** Merge class names (lightweight classnames alternative) */
export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

/** Truncate text to a given length */
export function truncate(str: string, length: number): string {
  return str.length <= length ? str : str.slice(0, length) + '…';
}

/** Extract numeric part and suffix from a metric value like "50+" or "3+" */
export function parseMetricValue(value: string): {
  num: number;
  suffix: string;
} {
  const match = value.match(/^(\d+)(\D*)$/);
  if (!match) return { num: 0, suffix: '' };
  return { num: parseInt(match[1], 10), suffix: match[2] || '' };
}
