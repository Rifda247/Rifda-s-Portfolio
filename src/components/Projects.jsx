import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "./useInView";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "LuxeLock",
    description:
      "A fully responsive, accessible website built for a LuxeLock,a feminine hairsalon brand that sells wigs and beautify women,focused on fast load times, clean UI, and driving conversions.",
    tech: ["Vanilla JavaScript"],
    liveUrl: "https://Luxelock.netlify.app",
    githubUrl: "https://github.com/Rifda247/LuxeLock",
    image: "./assets/images/project-01.png",
    color: "from-amber-900/30 to-transparent",
  },
  {
    id: "02",
    title: "PocketSense",
    description:
      "Designed and developed a responsive multi landing page for an e-commerce app where users can track expenses, . Pixel-perfect from mobile to desktop. ",
    tech: ["Javascript"],
    liveUrl: "https://pocketsensee.netlify.app",
    githubUrl: "https://github.com/Rifda247/PocketSense",
    image: "./assets/images/project-02.png",
    color: "from-stone-700/30 to-transparent",
  },
  {
    id: "03",
    title: "Movia",
    description: "A movie seaarch app built ",
    tech: ["Vanilla JS"],
    liveUrl: "https://movia-app-n.netlify.app",
    githubUrl: "https://github.com/Rifda247/movia",
    image: "./assets/images/project-03.png",
    color: "from-zinc-700/30 to-transparent",
  },
];

function ProjectCard({ project, index, inView }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group bg-surface-2 border border-white/5 rounded-sm overflow-hidden hover:border-accent/25 transition-all duration-500 card-hover"
    >
      {/* Screenshot preview */}
      <div
        className={`aspect-video relative overflow-hidden bg-gradient-to-br ${project.color} via-surface`}
      >
        {!imgError ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <span className="font-mono text-5xl font-bold text-accent/20 mb-2">
              {project.id}
            </span>
            <p className="text-xs font-mono text-muted/60">
              Add /public/project-{project.id}.png
            </p>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Links on hover */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-charcoal/90 border border-white/10 flex items-center justify-center rounded-sm hover:bg-accent hover:border-accent hover:text-charcoal transition-all"
            aria-label="Live site"
          >
            <ExternalLink size={13} />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-charcoal/90 border border-white/10 flex items-center justify-center rounded-sm hover:bg-accent hover:border-accent hover:text-charcoal transition-all"
            aria-label="GitHub repo"
          >
            <Github size={13} />
          </a>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-display text-xl font-semibold text-cream">
            {project.title}
          </h3>
          <span className="font-mono text-xs text-accent/60 mt-1 ml-2">
            {project.id}
          </span>
        </div>

        <p className="font-body text-muted text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 bg-accent/8 border border-accent/15 text-accent text-xs font-mono rounded-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [ref, inView] = useInView();

  return (
    <section
      id="projects"
      className="py-28 bg-charcoal relative overflow-hidden"
    >
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[600px] bg-accent/4 rounded-full blur-[100px] pointer-events-none" />

      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="section-label block mb-4">Projects</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-cream leading-tight">
              Work that <span className="italic text-accent">speaks</span>
            </h2>
          </div>
          <p className="font-body text-muted text-sm max-w-xs leading-relaxed">
            Each project is a real solution, not a template clone.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              inView={inView}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-body text-muted hover:text-accent transition-colors duration-300"
          >
            <Github size={14} />
            View all projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
