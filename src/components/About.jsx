import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { CheckCircle2 } from 'lucide-react'

const values = [
  'Deadline-driven and detail-oriented',
  'Clear communication, always',
  'Remote-ready and globally accessible',
  'Results first, excuses never',
]

export default function About() {
  const [ref, inView] = useInView()
  const [imgError, setImgError] = useState(false)

  return (
    <section id="about" className="py-28 bg-charcoal relative overflow-hidden">
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-accent/4 rounded-full blur-[100px] pointer-events-none" />

      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            {/* Profile photo — add public/profile.jpg */}
            <div className="relative aspect-[4/5] bg-surface-2 rounded-sm overflow-hidden border border-white/8">
              {!imgError ? (
                <img
                  src="/public/profile.jpg"
                  alt="Rifda Folawiyo — Frontend Developer & Virtual Assistant"
                  className="w-full h-full object-cover object-center"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-accent/20 border-2 border-accent/40 mx-auto mb-4 flex items-center justify-center">
                      <span className="font-display text-3xl text-accent font-semibold">RF</span>
                    </div>
                    <p className="text-muted text-sm font-mono">Add profile.jpg to /public</p>
                  </div>
                </div>
              )}
              {/* Decorative bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent-light to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -right-4 -bottom-6 bg-surface-2 border border-white/8 p-4 max-w-[200px] animate-float"
            >
              <p className="font-mono text-xs text-accent mb-1 tracking-wider">CURRENT STATUS</p>
              <p className="font-display text-sm text-cream">Open to freelance & full-time roles</p>
            </motion.div>

            {/* Decorative line */}
            <div className="absolute -left-4 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-accent/40 to-transparent" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          >
            <span className="section-label block mb-4">About Me</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-cream leading-tight mb-6">
              Not just another{' '}
              <span className="italic text-accent">developer.</span>
              <br />A problem-solver.
            </h2>

            <div className="space-y-4 font-body text-muted text-base leading-relaxed mb-8">
              <p>
                I'm Rifda Folawiyo, a self-driven frontend developer and virtual
                assistant who turned curiosity into a career. What started as
                learning HTML and CSS out of passion became a professional journey
                into building digital experiences that actually work.
              </p>
              <p>
                My edge? I don't just write code, I understand your business
                needs. Whether it's a pixel-perfect website that converts visitors
                into clients, or reliable backend support that keeps your operations
                running smoothly, I bring both <span className="text-cream">technical skill</span> and{' '}
                <span className="text-cream">professional reliability</span> to every project.
              </p>
              <p>
                Based in Nigeria, available worldwide.
              </p>
            </div>

            <ul className="space-y-3 mb-10">
              {values.map((v, i) => (
                <motion.li
                  key={v}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 text-sm font-body text-muted"
                >
                  <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                  {v}
                </motion.li>
              ))}
            </ul>

            <a
              href="/rifda-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-body font-medium text-accent border-b border-accent/40 pb-0.5 hover:border-accent transition-colors duration-300"
            >
              Download CV
              <span className="text-xs">↗</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
