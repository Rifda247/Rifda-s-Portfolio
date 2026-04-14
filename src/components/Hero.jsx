import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

const marqueeItems = [
  "Frontend Development",
  "Virtual Assistance",
  "Web Design",
  "Social Media",
  "Responsive UI",
  "Clean Code",
  "Frontend Development",
  "Virtual Assistance",
  "Web Design",
  "Social Media",
  "Responsive UI",
  "Clean Code",
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.4 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-charcoal noise-bg">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[100px]" />

        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#C8A96E 1px, transparent 1px), linear-gradient(90deg, #C8A96E 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute top-28 right-6 md:right-16 flex items-center gap-2 px-3 py-2 bg-surface-2 border border-accent/20 rounded-full"
      >
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-xs font-mono text-muted">Available for hire</span>
      </motion.div>

      {/* Main content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 px-6 md:px-12 lg:px-24 pt-28 pb-16 max-w-6xl mx-auto w-full"
      >
        <motion.div variants={item} className="flex items-center gap-3 mb-6">
          <span className="section-label">Portfolio</span>
          <span className="text-accent/40">—</span>
          <span className="font-mono text-xs text-muted"></span>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] mb-6"
        >
          <span className="text-cream">I build websites</span>
          <br />
          <span className="text-cream">that work</span>
          <span className="text-accent italic font-normal"> hard</span>
          <br />
          <span className="text-cream">for your</span>
          <span className="gradient-text"> business</span>
          <span className="text-cream">.</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="font-body text-muted text-lg md:text-xl max-w-xl leading-relaxed mb-10"
        >
          I'm <span className="text-cream font-medium">Rifda Folawiyo</span> , a
          Frontend Developer & Virtual Assistant based in Nigeria. I craft
          clean, responsive websites and handle the digital tasks that free you
          to focus on growth.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 px-7 py-3.5 bg-accent text-charcoal font-body font-semibold text-sm tracking-wide hover:bg-accent-light transition-colors duration-300"
          >
            View My Work
            <ArrowDown
              size={15}
              className="group-hover:translate-y-1 transition-transform"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/15 text-cream font-body text-sm tracking-wide hover:border-accent hover:text-accent transition-all duration-300"
          >
            <Sparkles size={14} />
            Let's Talk
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={item}
          className="flex flex-wrap gap-12 mt-16 pt-12 border-t border-white/8"
        >
          {[
            { num: "10+", label: "Projects Delivered" },
            { num: "100%", label: "Client Satisfaction" },
            { num: "2+", label: "Years Learning" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl font-semibold text-cream mb-1">
                {stat.num}
              </p>
              <p className="text-xs font-mono text-muted tracking-widest uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Marquee */}
      <div className="relative z-10 w-full overflow-hidden border-y border-white/5 py-3 bg-surface/50">
        <div className="flex animate-marquee whitespace-nowrap">
          {marqueeItems.map((text, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-4 mx-6 font-mono text-xs tracking-widest uppercase text-muted"
            >
              {text}
              <span className="w-1 h-1 rounded-full bg-accent inline-block" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
