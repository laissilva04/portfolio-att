"use client"

import { motion } from "framer-motion"
import { GraduationCap, BookOpen, Clock, Github } from "lucide-react"

const graduacao = {
  degree: "Tecnólogia em Análise e Desenvolvimento de Sistemas",
  institution: "Universidade de Fortaleza (UNIFOR)",
  period: "jun. 2023 — dez. 2025",
  type: "Graduação",
}

const cursos = [
  { name: "Git e GitHub: dominando controle de versão de código", institution: "Alura", hours: 8 },
  { name: "React 19: JSX, Componentes, FormAction e UseState", institution: "Alura", hours: 12 },
  { name: "Oracle Cloud Infrastructure 2023 AI", institution: "Oracle University", hours: 8 },
  { name: "Desenvolvimento Front-End com React.js", institution: "Origamid", hours: 23 },
  { name: "CSS FlexBox", institution: "Udemy", hours: 5 },
  { name: "Universo Robot", institution: "Udemy", hours: 14 },
  { name: "Projetos de Sistema de TI", institution: "Bradesco", hours: 12 },
  { name: "Introdução ao Desenvolvimento Full-Stack", institution: "DIO", hours: 12 },
]

export default function Formacao() {
  return (
    <section id="formacao" className="relative py-24 bg-[#0a0a0f]">
      <div className="absolute top-0 left-1/2 h-px w-full max-w-4xl -translate-x-1/2 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-cyan-400 font-mono text-sm">{"// formação"}</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-zinc-100">
            Educação & <span className="text-cyan-400">Cursos</span>
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl">
            Formação acadêmica e cursos que fundamentam minha atuação como desenvolvedora e QA.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-8 h-full overflow-hidden">
              <div className="pointer-events-none absolute -top-16 -left-16 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="relative">
                <div className="mb-8 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10">
                    <GraduationCap className="h-6 w-6 text-cyan-400" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                    {graduacao.type}
                  </span>
                </div>

                <div className="border-l-2 border-cyan-400 pl-5">
                  <h3 className="text-xl font-bold leading-snug text-zinc-100">
                    {graduacao.degree}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-cyan-400">{graduacao.period}</p>
                  <p className="mt-3 text-sm text-zinc-400">{graduacao.institution}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-800/50">
                  <BookOpen className="h-5 w-5 text-zinc-400" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                    Cursos & Certificações
                  </span>
                  <p className="text-xs text-zinc-600 mt-0.5">{cursos.length} concluídos</p>
                </div>
              </div>

              <ul className="space-y-0 divide-y divide-zinc-800/60">
                {cursos.map((cursos, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.06 }}
                    className="group flex items-center justify-between gap-4 py-4"
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/60" />
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-zinc-200 group-hover:text-cyan-400 transition-colors duration-200 truncate">
                          {cursos.name}
                        </p>
                        <p className="text-xs text-zinc-500 mt-0.5">{cursos.institution}</p>
                      </div>
                    </div>
                    <div className="shrink-0 flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-800/50 px-2.5 py-1">
                      <Clock className="h-3 w-3 text-zinc-500" />
                      <span className="text-xs font-medium text-zinc-400">{cursos.hours}h</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}