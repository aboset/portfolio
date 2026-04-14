import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';

const STRENGTHS = [
  'Construção de soluções digitais do início à entrega',
  'Automações que eliminam processos manuais e geram escala',
  'WordPress avançado: temas, plugins, WooCommerce e SEO',
  'Desenvolvimento de landing pages e CRMs em React',
  'Integração de sistemas via API e scripts Python',
  'Disponível para CLT, PJ e projetos freelance',
];

export default function About() {
  return (
    <section id="sobre" className="py-20 sm:py-28">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column – text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle
              title="Sobre Mim"
              subtitle="Construo soluções digitais que funcionam, escalam e entregam resultado real."
            />

            <div className="mt-6 space-y-4 text-white/60 text-base leading-relaxed">
              <p>
                Desenvolvedor web com experiência na construção de{' '}
                <strong className="text-white/80">soluções digitais completas</strong> — desde
                sites institucionais e landing pages até sistemas internos, CRMs e automações
                que eliminam processos manuais e geram resultado real para empresas e clientes.
              </p>
              <p>
                Trabalho com <strong className="text-white/80">WordPress avançado</strong>,
                desenvolvimento de interfaces em{' '}
                <strong className="text-white/80">React e TypeScript</strong>, e back-end com{' '}
                <strong className="text-white/80">PHP e Python</strong>. Integro sistemas via
                API, automatizo fluxos com scripts e ferramentas como n8n e Make, e aplico
                inteligência artificial para otimizar processos.
              </p>
              <p>
                Tenho sólida atuação em SEO técnico, hospedagem, DNS, cPanel e
                gerenciamento de infraestrutura. Cada entrega passa por validação funcional
                completa — garantindo estabilidade, performance e compatibilidade antes de
                ir ao ar.
              </p>
              <p>
                Disponível para oportunidades como{' '}
                <strong className="text-white/80">desenvolvedor front-end, full-stack</strong>{' '}
                ou para projetos freelance em WordPress, React e automações.
              </p>
            </div>
          </motion.div>

          {/* Right column – strengths */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            {/* Card header */}
            <div className="p-5 sm:p-6 rounded-2xl bg-surface-card border border-surface-border">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
                Diferenciais
              </p>
              <ul className="space-y-3">
                {STRENGTHS.map((s, i) => (
                  <motion.li
                    key={s}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 + 0.2 }}
                    className="flex items-start gap-3 text-white/65 text-sm"
                  >
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 flex-shrink-0 text-brand-purple-light"
                    />
                    {s}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Quick-info badges */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Localização',    value: 'Curitiba, PR'        },
                { label: 'Disponibilidade', value: 'Imediata'            },
                { label: 'Modalidade',     value: 'CLT / PJ / Freelance' },
                { label: 'Idiomas',        value: 'ES · PT · EN'         },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="p-3.5 rounded-xl bg-surface-card border border-surface-border"
                >
                  <p className="text-white/35 text-xs mb-1">{label}</p>
                  <p className="text-white/80 text-sm font-medium">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
