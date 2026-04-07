"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const HERO_CONTENT = {
  label: "// bem-vindo ao meu portfolio",
  title: "Olá, eu sou",
  name: "Laís",
  subtitle: "QA Analyst & Front-end Developer",
  techStack: ["React.js", "TypeScript", "Tailwind CSS", "Robot Framework", "QA", "E2E"],
}

const CodeBlock = () => (
  <div className="relative rounded-xl border border-zinc-800 bg-[#0d0d12] overflow-hidden">
    <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
      <div className="flex gap-1.5">
        {[1, 2, 3].map((i) => (
          <span key={i} className="h-3 w-3 rounded-full bg-zinc-700" />
        ))}
      </div>
      <span className="ml-2 text-xs text-zinc-500 font-mono">config.ts</span>
    </div>
    
    <div className="p-5 font-mono text-sm leading-relaxed">
      <pre className="text-zinc-300">
        <code>
          <span className="text-purple-400">const</span>{" "}
          <span className="text-zinc-100">lais</span>{" "}
          <span className="text-cyan-400">=</span>{" "}
          <span className="text-zinc-400">{"{"}</span>
          {"\n  "}<span className="text-cyan-300">role</span>: <span className="text-emerald-400">"QA & Front-end"</span>,
          {"\n  "}<span className="text-cyan-300">stack</span>: <span className="text-zinc-400">[</span>
          <span className="text-emerald-400">"React"</span>, <span className="text-emerald-400">"TS"</span>, <span className="text-emerald-400">"Playwright"</span>
          <span className="text-zinc-400">]</span>,
          {"\n  "}<span className="text-cyan-300">passion</span>: <span className="text-emerald-400">"Qualidade"</span>
          {"\n"}<span className="text-zinc-400">{"}"}</span>;
        </code>
      </pre>
    </div>
  </div>
)

export default function Hero() {
  const animationProps = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay }
  })

  return (
    <section className="relative min-h-screen flex items-center bg-[#0a0a0f] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-[600px] w-[600px] bg-cyan-500/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="order-1">
            <motion.span {...animationProps()} className="text-cyan-400 font-mono text-sm tracking-wide block">
              {HERO_CONTENT.label}
            </motion.span>

            <motion.h1 {...animationProps(0.1)} className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-100">
              {HERO_CONTENT.title} <span className="text-cyan-400">{HERO_CONTENT.name}</span>
            </motion.h1>

            <motion.h2 {...animationProps(0.2)} className="mt-4 text-xl sm:text-2xl font-medium text-zinc-400">
              {HERO_CONTENT.subtitle}
            </motion.h2>

            <motion.div {...animationProps(0.4)} className="mt-8 flex flex-wrap gap-2">
              {HERO_CONTENT.techStack.map((tech) => (
                <span key={tech} className="rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-xs font-medium text-zinc-400">
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.div {...animationProps(0.5)} className="mt-10 flex flex-wrap gap-4">
              <Link href="#projetos" className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-zinc-900 transition-all hover:bg-cyan-400">
                Ver projetos
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </Link>
              
              <Link href="#contato" className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-transparent px-6 py-3 text-sm font-semibold text-zinc-300 transition-all hover:border-zinc-600 hover:bg-zinc-800/50">
                Entrar em contato
              </Link>
            </motion.div>
          </div>
          <motion.div 
            className="order-2 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-2xl rounded-3xl" />
            <CodeBlock />
          </motion.div>

        </div>
      </div>

      <ScrollIndicator />
    </section>
  )
}

const ScrollIndicator = () => (
  <motion.div 
    className="absolute bottom-8 left-1/2 -translate-x-1/2"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1 }}
  >
    <motion.div 
      className="flex flex-col items-center gap-2 text-zinc-600"
      animate={{ y: [0, 6, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      <span className="text-xs font-mono uppercase tracking-widest">scroll</span>
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7" />
      </svg>
    </motion.div>
  </motion.div>
)