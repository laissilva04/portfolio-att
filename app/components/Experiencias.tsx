"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Briefcase, Calendar, MapPin, ChevronRight, ChevronDown, ListChecks } from "lucide-react"

const experiences = [
  {
    id: 1,
    period: "ago. 2024 – Atual",
    company: "Fiibo",
    role: "Software Quality Assurance Analyst",
    location: "Brasil",
    skills: ["Playwright", "Robot Framework", "BDD", "Testes E2E", "React.js", "TypeScript", "Tailwind CSS", "Nest.js", "Postman", "Scrum"],
    isCurrent: true,
    activities: [
      "Automatizo testes end-to-end com Playwright e testes de API com Postman/Insomnia.",
      "Automatizo testes com RobotFramework e BDD.",
      "Atuo próxima ao time de produto e back-end, participando de todo o ciclo de desenvolvimento ágil (Scrum/Kanban).",
      "Desenvolvo componentes reutilizáveis com React.js, TypeScript e Tailwind CSS em produto healthtech.",
      "Realizo integrações com APIs REST e consumo de endpoints back-end utilizando Nest.js.",
    ],
  },
  {
    id: 2,
    period: "out. 2023 – ago. 2024",
    company: "Fiibo",
    role: "Software Quality Assurance Intern",
    location: "Brasil",
    skills: ["Robot Framework", "BDD", "Testes Funcionais", "Regressão", "JIRA"],
    isCurrent: false,
    activities: [
      "Automação de testes com RobotFramework e BDD.",
      "Testes funcionais, regressão e gestão de bugs via JIRA.",
    ],
  },
  {
    id: 3,
    period: "mai. 2022 – jul. 2023",
    company: "Samsung Electronics",
    role: "Technical Support Intern",
    location: "Fortaleza, CE",
    skills: ["Suporte Técnico", "Resolução de Problemas"],
    isCurrent: false,
    activities: [
      "Suporte técnico a usuários e resolução de problemas relacionados a dispositivos e sistemas Samsung.",
      "Atendimento e diagnóstico de falhas em equipamentos, garantindo satisfação do cliente.",
    ],
  },
]

export default function Experiencias() {
  const [openId, setOpenId] = useState<number | null>(null)

  const toggle = (id: number) => setOpenId((prev) => (prev === id ? null : id))

  return (
    <section id="experiencia" className="relative py-24 bg-[#0a0a0f]">
      <div className="absolute top-0 left-1/2 h-px w-full max-w-4xl -translate-x-1/2 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-cyan-400 font-mono text-sm">{"// experiência"}</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-zinc-100">
            Minha <span className="text-cyan-400">Trajetória</span>
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl">
            Experiências e projetos que moldaram minha carreira como desenvolvedora e QA.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-zinc-800 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="absolute left-8 top-8 -translate-x-1/2 hidden md:block">
                  <div className={`h-4 w-4 rounded-full border-2 ${exp.isCurrent ? "border-cyan-400 bg-cyan-400" : "border-zinc-600 bg-zinc-900"}`}>
                    {exp.isCurrent && (
                      <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-30" />
                    )}
                  </div>
                </div>

                <div className="md:ml-20">
                  <div className={`rounded-2xl border ${exp.isCurrent ? "border-cyan-400/30 bg-cyan-400/5" : "border-zinc-800 bg-zinc-900/30"} p-6 md:p-8 transition-all duration-300 hover:border-cyan-400/30`}>
                    
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${exp.isCurrent ? "bg-cyan-400/10" : "bg-zinc-800/50"}`}>
                          <Briefcase className={`h-6 w-6 ${exp.isCurrent ? "text-cyan-400" : "text-zinc-400"}`} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-zinc-100">{exp.role}</h3>
                          <p className="text-cyan-400 font-medium">{exp.company}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-zinc-400">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="rounded-md border border-zinc-800 bg-zinc-800/50 px-3 py-1.5 text-xs font-medium text-zinc-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="border-t border-zinc-800/60 mb-5" />

                    <div className="flex items-center justify-between">
                      {exp.isCurrent ? (
                        <span className="inline-flex items-center gap-2 text-sm text-cyan-400 font-medium">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                          </span>
                          Posição Atual
                        </span>
                      ) : (
                        <span />
                      )}

                      <button
                        onClick={() => toggle(exp.id)}
                        className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-cyan-400 transition-colors duration-200"
                        aria-expanded={openId === exp.id}
                      >
                        <ListChecks className="h-4 w-4" />
                        Ver atividades
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 ${openId === exp.id ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>

                    <AnimatePresence initial={false}>
                      {openId === exp.id && (
                        <motion.div
                          key="activities"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <ul className="mt-5 space-y-3 border-t border-zinc-800/60 pt-5">
                            {exp.activities.map((activity, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                                {activity}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="https://www.linkedin.com/in/lais-barbosaqa"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/30 px-8 py-3.5 text-sm font-medium text-zinc-100 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5"
          >
            Ver perfil completo no LinkedIn
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}