"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export default function Header() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      const headerOffset = 80 
      const elementPosition = targetElement.offsetTop
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
    })
 }
}
  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
        </div>
        <div className="flex gap-x-12">
          <Link
            href="#projetos"
            rel="noopener noreferrer"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Projetos    
          </Link>
          <Link
            href="#sobre"
            rel="noopener noreferrer"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Sobre
          </Link>
          <Link
            href="#contato"
            rel="noopener noreferrer"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Contato
          </Link>
        </div>
      </nav>
    </motion.header>
  )
}
