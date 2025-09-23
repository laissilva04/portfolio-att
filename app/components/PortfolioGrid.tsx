"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "DentalConnect",
    description: "Plataforma de conexão entre clinicas odontologicas e pacientes",
    imageUrl: "/placeholder.svg?height=800&width=600",
    src: "dentalconnect.png",
    category: "Desenvolvimento Web",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Supabase"],
    link: "https://github.com/laissilva04/dentalconnect",
  },
  {
    id: 2,
    title: "Tocloc",
    description: "Plataforma para locação de quadras espotivas",
    imageUrl: "/placeholder.svg?height=600&width=800",
    src: "tocloc.png", 
    category: "Desenvolvimento Web",
    technologies: ["React", "HTML", "CSS", "JavaScript", "Supabase"],
    link: "https://github.com/laissilva04/tocloc-frontend",
  },
  {
    id: 3,
    title: "Uniforte",
    description: "Aplicativo de Academia universitária",
    imageUrl: "/placeholder.svg?height=600&width=800",
    src: "uniforte.png",
    category: "Desenvolvimento Mobile",
    technologies: ["Kotlin", "Java", "Node.js", "Supabase"],
    link: "https://github.com/laissilva04/uniforte",
  },
  {
    id: 4,
    title: "BikCraft Store",
    description: "Loja de Bicicletas",
    imageUrl: "/placeholder.svg?height=600&width=800",
    src: "bikecraft.png",
    category: "Desenvolvimento Web",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    link: "https://github.com/laissilva04/bikcraft-store",
  },
  {
    id: 5,
    title: "JapanFood",
    description: "Site para exercicio de integração com o Whatsapp",
    imageUrl: "/placeholder.svg?height=600&width=800",
    src: "japanfood.jpg",
    category: "Desenvolvimento Web",
    technologies: ["HTML", "CSS"],
    link: "https://japan-food-project.netlify.app/",
  },
  {
    id: 6,
    title: "Celieve Brand",
    description: "Marca de moda feminina de luxo",
    imageUrl: "/placeholder.svg?height=600&width=800",
    src: "celieve-brand.png",
    category: "Desenvolvimento Web",
    technologies: ["HTML", "CSS", "JavaScript", ],
    link: "https://celieve.netlify.app/",
  },
]

const categories = ["Todos", ...new Set(projects.map((project) => project.category))]

// Cores para diferentes tecnologias
const getTechColor = (tech: string) => {
  const colors: { [key: string]: string } = {
    React: "bg-blue-100 text-blue-800",
    "Next.js": "bg-gray-100 text-gray-800",
    TypeScript: "bg-blue-100 text-blue-800",
    JavaScript: "bg-yellow-100 text-yellow-800",
    HTML: "bg-orange-100 text-orange-800",
    CSS: "bg-blue-100 text-blue-800",
    "Tailwind CSS": "bg-cyan-100 text-cyan-800",
    "Node.js": "bg-green-100 text-green-800",
    Supabase: "bg-orange-100 text-orange-800",
    "React Native": "bg-blue-100 text-blue-800",
    Java: "bg-purple-100 text-purple-800",
    Kotlin: "bg-purple-100 text-purple-800",
    MySQL: "bg-blue-100 text-blue-800",
  }
  return colors[tech] || "bg-gray-100 text-gray-800"
}

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("Todos")

  const filteredProjects = filter === "Todos" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section className="py-20 bg-background" id="projetos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Projetos</h2>
        </motion.div>

        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-900/50 rounded-3xl shadow-lg overflow-hidden hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.src || project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  <motion.div
                    className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 transition-opacity duration-300"
                    whileHover={{ opacity: 1 }}
                  >
                    <p className="text-white text-center px-4">{project.description}</p>
                  </motion.div>
                </div>
                <div className="p-6 ">
                  <div className="text-sm font-medium text-primary mb-2">{project.category}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>

                  {/* Technologies badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className={`px-2 py-1 text-xs font-medium rounded-full ${getTechColor(tech)}`}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center"
                  >
                    Visualizar Projeto
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
