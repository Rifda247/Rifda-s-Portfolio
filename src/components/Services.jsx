import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { Code2, Headphones, Share2, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Code2,
    number: '01',
    title: 'Frontend Web Development',
    tagline: 'Websites built to convert, not just impress.',
    description:
      'I design and build responsive, accessible websites using HTML, CSS, and JavaScript. From landing pages to multi-section sites — every pixel has a purpose. Your site will load fast, look sharp on every device, and represent your brand at its best.',
    deliverables: [
      'Responsive multi-page websites',
      'Landing pages that convert',
      'Website audits & fixes',
      'HTML/CSS templates',
    ],
  },
  {
    icon: Headphones,
    number: '02',
    title: 'Virtual Assistance',
    tagline: 'Your remote right hand.',
    description:
      'I handle the operational tasks that eat your time — inbox management, scheduling, research, document prep, data entry, and more. Reliable, confidential, and always on time. So you can focus on what only you can do.',
    deliverables: [
      'Email & calendar management',
      'Research & data entry',
      'Document preparation',
      'Customer support',
    ],
  },
  {
    icon: Share2,
    number: '03',
    title: 'Social Media Management',
    tagline: 'Consistent presence that builds trust.',
    description:
      'I create and schedule content that keeps your brand visible and engaging across platforms. Strategy, captions, scheduling, and basic graphics — handled. Your audience will hear from you consistently without it consuming your day.',
    deliverables: [
      'Content planning & scheduling',
      'Caption writing',
      'Basic graphic creation',
      'Engagement monitoring',
    ],
  },
]

export default function Services() {
  const [ref, inView] = useInView()

  return (
    <section id="services" className="py-28 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="section-label block mb-4">Services</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-cream leading-tight max-w-lg">
            How I can{' '}
            <span className="italic text-accent">help you</span>{' '}
            grow
          </h2>
        </motion.div>

        <div className="space-y-px">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="group bg-surface-2 border border-white/5 p-8 hover:border-accent/25 transition-all duration-500"
              >
                <div className="grid md:grid-cols-[auto_1fr_auto] gap-8 items-start">
                  {/* Icon + number */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                      <Icon size={18} className="text-accent group-hover:text-charcoal transition-colors duration-300" />
                    </div>
                    <span className="font-mono text-xs text-accent/40">{service.number}</span>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-cream mb-1">{service.title}</h3>
                    <p className="font-mono text-xs text-accent mb-3">{service.tagline}</p>
                    <p className="font-body text-muted text-sm leading-relaxed mb-4 max-w-xl">{service.description}</p>

                    <ul className="flex flex-wrap gap-2">
                      {service.deliverables.map((d) => (
                        <li key={d} className="text-xs font-mono text-muted/70 flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-accent/60 inline-block" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="md:self-center">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-xs font-mono text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      Enquire
                      <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
