"use client"

import { motion } from "framer-motion"
import { 
  FaReact, 
  FaGitAlt, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs 
} from "react-icons/fa"
import { 
  SiTailwindcss, 
  SiRobotframework,
  SiTypescript,
  SiTestinglibrary
} from "react-icons/si"

const icons = [
  { icon: FaReact, color: "text-blue-500", name: "React" },
  { icon: SiTypescript, color: "text-blue-400", name: "TypeScript" },
  { icon: FaGitAlt, color: "text-orange-500", name: "Git" },
  { icon: FaNodeJs, color: "text-green-500", name: "Node.js" },
  { icon: FaHtml5, color: "text-orange-600", name: "HTML5" },
  { icon: FaCss3Alt, color: "text-blue-600", name: "CSS3" },
  { icon: SiTailwindcss, color: "text-cyan-500", name: "Tailwind" },
  { icon: FaJs, color: "text-yellow-500", name: "JavaScript" },
  { icon: SiTestinglibrary, color: "text-green-400", name: "Playwright" },
  { icon: SiRobotframework, color: "text-zinc-400", name: "Robot Framework" },
]

export default function Carrossel() {
  return (
    <section id="tecnologias" className="relative py-24 bg-[#0a0a0f]">
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-cyan-400 font-mono text-sm tracking-wide">
            {"// tecnologias"}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
            Stack & <span className="text-cyan-400">Ferramentas</span>
          </h2>
        </motion.div>

        <div className="relative w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/30 py-10">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-20 bg-gradient-to-r from-[#0a0a0f] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-20 bg-gradient-to-l from-[#0a0a0f] to-transparent" />

          <motion.div
            className="flex whitespace-nowrap relative z-0"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          >
            {[...Array(20)].map((_, index) => {
              const tech = icons[index % icons.length]
              const IconComponent = tech.icon
              
              return (
                <div 
                  key={index} 
                  className="flex flex-col items-center mx-8 group"
                >
                  <IconComponent 
                    size={80} 
                    className={`${tech.color} transition-transform duration-300 group-hover:scale-110`} 
                  />
                  <span className="mt-2 text-xs font-medium text-zinc-500 opacity-0 transition-opacity group-hover:opacity-100">
                    {tech.name}
                  </span>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}