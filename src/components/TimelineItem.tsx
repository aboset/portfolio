import type { Experience, ExperienceType } from '@/types';
import TechTag from '@/components/ui/TechTag';

const TYPE_COLORS: Record<ExperienceType, string> = {
  Freelance:  'bg-violet-500/10 text-violet-300 border border-violet-500/20',
  Remoto:     'bg-sky-500/10    text-sky-300    border border-sky-500/20',
  Presencial: 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20',
  Híbrido:    'bg-amber-500/10  text-amber-300  border border-amber-500/20',
};

interface TimelineItemProps {
  experience: Experience;
  isLast: boolean;
}

export default function TimelineItem({ experience, isLast }: TimelineItemProps) {
  return (
    <div className="relative pl-10 sm:pl-14">
      {/* Vertical line */}
      {!isLast && (
        <div className="absolute left-3.5 sm:left-[18px] top-8 bottom-0 w-px bg-gradient-to-b from-brand-purple/40 to-transparent" />
      )}

      {/* Dot */}
      <div
        className={`absolute left-0 sm:left-1 top-1.5 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-colors duration-300 ${
          experience.current
            ? 'border-brand-purple bg-brand-purple/20'
            : 'border-surface-border bg-surface-card'
        }`}
      >
        <div
          className={`w-2 h-2 rounded-full ${
            experience.current ? 'bg-brand-purple animate-pulse-slow' : 'bg-white/20'
          }`}
        />
      </div>

      {/* Content card */}
      <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-surface-card border border-surface-border hover:border-brand-purple/20 transition-colors duration-300">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
          <div>
            <h3 className="font-heading font-semibold text-white text-base leading-snug">
              {experience.role}
            </h3>
            <p className="text-brand-purple-light text-sm mt-0.5">{experience.company}</p>
          </div>
          <div className="flex flex-wrap items-center gap-2 flex-shrink-0">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium ${TYPE_COLORS[experience.type]}`}>
              {experience.type}
            </span>
            {experience.current && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-slow" />
                Atual
              </span>
            )}
            <span className="text-white/40 text-xs font-medium">{experience.period}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-white/55 text-sm leading-relaxed mb-4">{experience.description}</p>

        {/* Achievements */}
        {experience.achievements && experience.achievements.length > 0 && (
          <ul className="space-y-1.5 mb-4">
            {experience.achievements.map((a) => (
              <li key={a} className="flex items-start gap-2 text-white/50 text-sm">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-purple/60 flex-shrink-0" />
                {a}
              </li>
            ))}
          </ul>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5">
          {experience.technologies.map((tech) => (
            <TechTag key={tech}>{tech}</TechTag>
          ))}
        </div>
      </div>
    </div>
  );
}
