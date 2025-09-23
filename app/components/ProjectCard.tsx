"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  src?: string 
  size: "square" | "wide"
  technologies?: string[]
}

export default function ProjectCard({ title, description, image, src, size, technologies = [] }: ProjectCardProps) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl shadow-lg bg-white ${
        size === "wide" ? "aspect-[2/1]" : "aspect-square"
      }`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Image src={src || image || "/placeholder.svg"} alt={title} fill className="object-cover" />

      <motion.div
        className="absolute top-4 left-4 flex flex-wrap gap-2 opacity-0 hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-800 rounded-full shadow-sm"
          >
            {tech}
          </span>
        ))}
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-200">{description}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}
