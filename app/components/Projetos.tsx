"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "dentalConnect",
    category: "Desenvolvimento Web",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Supabase"],
    link: "https://github.com/laissilva04/dentalconnect",
  },
  {
    id: 2,
    title: "tocloc",
    category: "Desenvolvimento Web",
    technologies: ["React", "HTML", "CSS", "JavaScript", "Supabase"],
    link: "https://github.com/laissilva04/tocloc-frontend",
  },
  {
    id: 3,
    title: "uniforte",
    category: "Desenvolvimento Mobile",
    technologies: ["Kotlin", "Java", "Node.js", "Supabase"],
    link: "https://github.com/laissilva04/uniforte",
  },
  {
    id: 4,
    title: "bikCraft Store",
    category: "Desenvolvimento Web",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    link: "https://github.com/laissilva04/bikcraft-store",
  },
  {
    id: 5,
    title: "japanFood",
    category: "Desenvolvimento Web",
    technologies: ["HTML", "CSS"],
    link: "https://japan-food-project.netlify.app/",
  },
  {
    id: 6,
    title: "celieve Brand",
    category: "Desenvolvimento Web",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://celieve.netlify.app/",
  },
]

const categories = ["Todos", ...new Set(projects.map((project) => project.category))]

export default function Projetos() {
  const [filter, setFilter] = useState("Todos")

  const filteredProjects = filter === "Todos" 
    ? projects 
    : projects.filter((project) => project.category === filter)

  return (
    <section id="projetos" className="relative py-24 bg-[#0a0a0f]">
      <div className="absolute top-0 left-1/2 h-px w-full max-w-4xl -translate-x-1/2 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-cyan-400 font-mono text-sm">{"// projetos"}</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-zinc-100">
            Meus <span className="text-cyan-400">Projetos</span>
          </h2>
        </motion.div>

        <motion.div 
          className="flex flex-wrap gap-3 mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-cyan-400 text-zinc-900"
                  : "border border-zinc-800 bg-zinc-800/50 text-zinc-300 hover:border-zinc-700 hover:text-zinc-100"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 transition-all duration-300 hover:border-cyan-400/30"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
                  {project.category}
                </p>

                <h3 className="text-xl font-bold text-zinc-100 mb-4">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded-md border border-zinc-800 bg-zinc-800/50 px-3 py-1.5 text-xs font-medium text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Visualizar Projeto
                  <ExternalLink className="h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div 
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="https://github.com/laissilva04?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/30 px-8 py-3.5 text-sm font-medium text-zinc-100 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-800/50"
          >
            Ver todos no github
            <svg 
              className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7-7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}