"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const nav = [
  { label: "Sobre", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Projetos", href: "#projetos" },
  { label: "Formação", href: "#formacao" },
  { label: "Contato", href: "#contato" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-zinc-800/50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/" className="flex items-center gap-2 group">
              <span className="hidden sm:inline text-sm font-bold text-zinc-100 group-hover:text-cyan-400 transition-colors">
                Laís Barbosa
              </span>
            </Link>
          </motion.div>

          <motion.div
            className="hidden md:flex items-center gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="group relative px-3 py-2 text-sm font-medium text-zinc-400 transition-colors hover:text-cyan-400"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </motion.div>

          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-zinc-800/50 transition-colors"
            onClick={toggleMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {isOpen ? (
              <X className="h-5 w-5 text-zinc-100" />
            ) : (
              <Menu className="h-5 w-5 text-zinc-100" />
            )}
          </motion.button>
        </nav>

        <motion.div
          className="md:hidden border-t border-zinc-800/50"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ overflow: "hidden" }}
        >
          <div className="px-6 py-4 space-y-2 bg-[#0a0a0f]/95">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-zinc-400 hover:text-cyan-400 hover:bg-zinc-800/30 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.header>
      <div className="h-16" />
    </>
  )
}