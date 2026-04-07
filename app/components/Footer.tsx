"use client"

import { Mail, Github, Linkedin } from "lucide-react"

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/laissilva04",
    label: "GitHub",
  },
  {
    icon: Mail,
    href: "mailto:p4v22bnhdn@privaterelay.app",
    label: "Email",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/lais-barbosaqa/",
    label: "LinkedIn",
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-[#0a0a0f] border-t border-zinc-800/50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-lg font-bold text-zinc-100 mb-2">
              Laís Barbosa
            </h3>
            <p className="text-sm text-zinc-400">
              QA Analyst & Front-end Developer
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-zinc-100 mb-4 uppercase tracking-wider">
              Conecte-se
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/30 text-zinc-400 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-400"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800/50 pt-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            © {currentYear} Laís Barbosa. Todos os direitos reservados.
          </p>
          <p className="text-xs text-zinc-600">
            Desenvolvido com <span className="text-pink-400">♥</span> usando React, TypeScript e Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}