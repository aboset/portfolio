import { motion } from 'framer-motion';
import { experiences } from '@/data/experience';
import TimelineItem from '@/components/TimelineItem';
import SectionTitle from '@/components/ui/SectionTitle';

export default function Experience() {
  return (
    <section id="experiencia" className="py-20 sm:py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-14"
        >
          <SectionTitle
            title="Experiência"
            subtitle="Trajetória profissional em desenvolvimento web e soluções digitais"
          />
        </motion.div>

        <div className="relative">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <TimelineItem
                experience={exp}
                isLast={i === experiences.length - 1}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
