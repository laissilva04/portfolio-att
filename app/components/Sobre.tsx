"use client"

import { motion } from "framer-motion"
import { MapPin, Github } from "lucide-react"
import Perfil from "../../public/perfil.jpg"
import NextImage from "next/image"

const conhecimentos = [
  "React.js",
  "TypeScript",
  "Next.js",
  "Playwright",
  "Robot Framework",
  "Testes E2E",
  "BDD",
  "Git",
]

export default function Sobre() {
  return (
    <section id="sobre" className="relative py-24 bg-[#0a0a0f]">
      <div className="absolute top-0 left-1/2 h-px w-full max-w-4xl -translate-x-1/2 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-cyan-400 font-mono text-sm">{"// sobre mim"}</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-zinc-100">
            Conhecimentos
          </h2>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6">
              <div className="flex items-start gap-5">
                <div className="relative flex-shrink-0">
                  <div className="h-28 w-28 overflow-hidden rounded-xl relative">
                    <NextImage 
                      src={Perfil} 
                      alt="Foto de perfil" 
                      fill 
                      className="object-cover"
                      priority 
                    />
                  </div>
                  <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-zinc-900 bg-green-500" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-zinc-100">Laís</h3>
                  <p className="mt-1 text-sm text-zinc-400">QA Analyst · Front-end Developer</p>
                  
                  <a 
                    href="https://github.com/laissilva04" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group/gh flex items-center gap-1.5 text-zinc-500 hover:text-cyan-400 transition-colors w-fit mt-2"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span className="font-mono">github/laissilva04</span>
                  </a>

                  <div className="mt-3 flex flex-col gap-2">
                    <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>Brasil</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {conhecimentos.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-zinc-800 bg-zinc-800/50 px-3 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:border-cyan-400/30 hover:text-cyan-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 h-full">
              <h3 className="text-lg font-semibold text-zinc-100 mb-4">
                QA Analyst & Front-end Developer
              </h3>
              
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  Profissional focada em <span className="text-cyan-400 font-medium">qualidade de software</span> e{" "}
                  <span className="text-cyan-400 font-medium">desenvolvimento front-end</span>. Combino a precisão 
                  dos testes automatizados com a criatividade do desenvolvimento de interfaces.
                </p>
                
                <p>
                  Experiência em automação de testes E2E com Playwright e Robot Framework (BDD), 
                  garantindo que cada feature entregue funcione corretamente. No front-end, 
                  construo aplicações com React.js e TypeScript priorizando performance e código limpo.
                </p>

                <p className="italic text-zinc-500">
                  "Qualidade não é uma fase do projeto — é uma mentalidade aplicada em cada linha de código."
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-zinc-800">
                <a 
                  href="#contato" 
                  className="group inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Entrar em contato
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}