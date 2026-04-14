import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { technologies, techCategoryLabels, categoryOrder } from '@/data/technologies';
import SectionTitle from '@/components/ui/SectionTitle';
import type { TechCategory } from '@/types';

// ── Accent color per category (left border) ────────────────────
const CATEGORY_ACCENT: Record<TechCategory, string> = {
  cms:        'border-indigo-400',
  frontend:   'border-brand-purple',
  backend:    'border-violet-400',
  database:   'border-sky-400',
  automation: 'border-emerald-400',
  tools:      'border-amber-400',
  devops:     'border-rose-400',
};

const CATEGORY_ICON_COLOR: Record<TechCategory, string> = {
  cms:        '#818cf8',  // indigo
  frontend:   '#9b6bff',  // purple
  backend:    '#a78bfa',  // violet
  database:   '#38bdf8',  // sky
  automation: '#34d399',  // emerald
  tools:      '#fbbf24',  // amber
  devops:     '#fb7185',  // rose
};

// ── Tech icon (Simple Icons CDN with per-category color) ───────
interface TechIconProps {
  icon?: string;
  name: string;
  color: string;
}

function TechIcon({ icon, name, color }: TechIconProps) {
  const [error, setError] = useState(false);

  if (icon && !error) {
    // Remove '#' for CDN URL; encode color as hex without #
    const hex = color.replace('#', '');
    return (
      <img
        src={`https://cdn.simpleicons.org/${icon}/${hex}`}
        alt={name}
        loading="lazy"
        className="w-5 h-5 object-contain flex-shrink-0"
        onError={() => setError(true)}
      />
    );
  }
  return <Code2 size={18} style={{ color }} className="flex-shrink-0" />;
}

// ── Single tech chip inside a category card ─────────────────────
function TechChip({
  name,
  icon,
  color,
}: {
  name: string;
  icon?: string;
  color: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -1 }}
      transition={{ duration: 0.15 }}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-elevated/50 border border-surface-border hover:border-white/15 transition-colors duration-200 cursor-default"
    >
      <TechIcon icon={icon} name={name} color={color} />
      <span className="text-white/70 text-xs font-medium whitespace-nowrap">{name}</span>
    </motion.div>
  );
}

// ── Category card ───────────────────────────────────────────────
function CategoryCard({
  category,
  index,
}: {
  category: TechCategory;
  index: number;
}) {
  const items = technologies.filter((t) => t.category === category);
  if (items.length === 0) return null;

  const accentBorder = CATEGORY_ACCENT[category];
  const iconColor = CATEGORY_ICON_COLOR[category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className={`rounded-2xl bg-surface-card border border-surface-border border-l-2 ${accentBorder} p-5 flex flex-col gap-4 hover:border-white/10 hover:shadow-[0_4px_24px_rgba(0,0,0,0.25)] transition-all duration-300`}
    >
      {/* Category header */}
      <div className="flex items-center gap-2">
        <span
          className="inline-block w-1 h-4 rounded-full flex-shrink-0"
          style={{ background: iconColor }}
        />
        <h3 className="text-white/90 text-sm font-semibold tracking-wide">
          {techCategoryLabels[category]}
        </h3>
        <span className="ml-auto text-white/20 text-xs">{items.length}</span>
      </div>

      {/* Tech chips */}
      <div className="flex flex-wrap gap-2">
        {items.map((tech) => (
          <TechChip
            key={tech.name}
            name={tech.name}
            icon={tech.icon}
            color={iconColor}
          />
        ))}
      </div>
    </motion.div>
  );
}

// ── Main section ────────────────────────────────────────────────
export default function Technologies() {
  return (
    <section id="tecnologias" className="py-20 sm:py-28">
      <div className="section-container">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12"
        >
          <SectionTitle
            title="Tecnologias"
            subtitle="Ferramentas e tecnologias que uso no dia a dia para entregar soluções completas"
          />
        </motion.div>

        {/* Category cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categoryOrder.map((cat, i) => (
            <CategoryCard key={cat} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
