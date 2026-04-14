import { motion } from "framer-motion";
import { useInView } from "./useInView";

const skillGroups = [
  {
    category: "Development",
    icon: "⌨",
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3 / SCSS", level: 85 },
      { name: "JavaScript", level: 55 },
      { name: "React ", level: 90 },
      { name: "Responsive Design", level: 100 },
    ],
  },
  {
    category: "Digital Support",
    icon: "⚡",
    skills: [
      { name: "Virtual Assistance", level: 92 },
      { name: "Email Management", level: 90 },
      { name: "Calendar & Scheduling", level: 88 },
      { name: "Social Media Mgmt", level: 80 },
      { name: "Content Creation", level: 75 },
    ],
  },
  {
    category: "Tools",
    icon: "◈",
    skills: [
      { name: "Figma", level: 70 },
      { name: "Git & GitHub", level: 65 },
      { name: "VS Code", level: 88 },
      { name: "Notion / Trello", level: 85 },
      { name: "Google Workspace", level: 90 },
    ],
  },
];

function SkillBar({ name, level, inView, delay }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-body text-muted">{name}</span>
        <span className="text-xs font-mono text-accent">{level}%</span>
      </div>
      <div className="h-0.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: [0.25, 0.1, 0.25, 1] }}
          className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView();

  return (
    <section id="skills" className="py-28 bg-surface relative">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #C8A96E 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="section-label block mb-4">Skills</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-cream leading-tight">
              What I bring{" "}
              <span className="italic text-accent">to the table</span>
            </h2>
          </div>
          <p className="font-body text-muted text-sm max-w-sm leading-relaxed">
            A growing, intentional toolkit built for real-world results — not
            just checkbox skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: gi * 0.15 }}
              className="bg-surface-2 border border-white/5 p-6 rounded-sm hover:border-accent/20 transition-colors duration-500"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                <span className="text-xl" aria-hidden="true">
                  {group.icon}
                </span>
                <h3 className="font-display text-lg font-semibold text-cream">
                  {group.category}
                </h3>
              </div>

              {group.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  inView={inView}
                  delay={gi * 0.15 + si * 0.08 + 0.3}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
