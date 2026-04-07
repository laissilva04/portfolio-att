"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Linkedin, Github, ExternalLink, ArrowRight } from "lucide-react"

const contactMethods = [
  {
    id: 1,
    icon: Mail,
    label: "Email",
    value: "lais2209la@gmail.com",
    href: "mailto:lais2209la@gmail.com",
    color: "cyan",
  },
  {
    id: 2,
    icon: Phone,
    label: "Telefone",
    value: "(85) 98753-4578",
    href: "https://wa.me/5585987534578",
    color: "cyan",
  },
  {
    id: 3,
    icon: Linkedin,
    label: "LinkedIn",
    value: "lais-barbosaqa",
    href: "https://www.linkedin.com/in/lais-barbosaqa/",
    color: "cyan",
  },
  {
    id: 4,
    icon: Github,
    label: "GitHub",
    value: "laissilva04",
    href: "https://github.com/laissilva04",
    color: "cyan",
  },
]

export default function Contato() {
  return (
    <section id="contato" className="relative py-24 bg-[#0a0a0f]">
      <div className="absolute top-0 left-1/2 h-px w-full max-w-4xl -translate-x-1/2 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-cyan-400 font-mono text-sm">{"// contato"}</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-zinc-100">
            Vamos Conversar?
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            Estou sempre aberta para novas oportunidades, colaborações e conexões. Sinta-se livre para entrar em contato por qualquer um dos canais abaixo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <motion.a
                key={method.id}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                
                <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 transition-all duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/5">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10">
                      <Icon className="h-6 w-6 text-cyan-400" />
                    </div>
                    <ExternalLink className="h-4 w-4 text-zinc-600 group-hover:text-cyan-400 transition-colors" />
                  </div>

                  <h3 className="text-lg font-bold text-zinc-100 mb-2">
                    {method.label}
                  </h3>
                  <p className="text-cyan-400 font-mono text-sm break-all group-hover:text-cyan-300 transition-colors">
                    {method.value}
                  </p>
                </div>
              </motion.a>
            )
          })}
        </div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="mailto:p4v22bnhdn@privaterelay.app"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-400/80 to-cyan-500/80 px-8 py-4 text-sm font-semibold text-[#0a0a0f] transition-all duration-300 hover:from-cyan-400 hover:to-cyan-500 hover:shadow-lg hover:shadow-cyan-400/25"
          >
            Enviar Mensagem
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}