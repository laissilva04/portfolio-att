"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useSpring, useInView } from "framer-motion"

const timelineEvents = [
  {
    startYear: "2021",
    endYear: "2022",
    title: "Samsung B2X",
    description: "Support Intern.",
    details:
      "Realizava Acompanhamento de KPI's e de todo o processo, gerava relatórios e testes de qualidade de hardware e software.",
  },
  {
    startYear: "2023",
    endYear: "2024",
    title: "Fiibo",
    description: "Software Quality Assurance Intern.",
    details:
      "Atuava na qualidade de software das plataformas Fiibo Mobile e Desktop, detectando e registrando bugs encontrados nas plataformas, além de desenvolver relatórios e scripts de casos de teste manuais e automatizados utilizando as ferramenta Robot e Playwright.",
  },
  {
    startYear: "2023",
    endYear: "Atual",
    title: "dumply",
    description: "CoFounder",
    details:
      "Startup em processo de aceleração no qual desenvolve uma plataforma que conecta você a produtos com qualidade próximos da data de vencimento e preços mais baixos. Praticando um consumo consciente e sustentável enquanto economiza.",
  },
  {
    startYear: "2024",
    endYear: "Atual",
    title: "Fiibo",
    description: "Software Quality Assurance Analyst.",
    details:
      "Atuava na qualidade de software das plataformas Fiibo Mobile e Desktop, detectando e registrando bugs encontrados nas plataformas, além de desenvolver relatórios e scripts de casos de teste manuais e automatizados utilizando as ferramenta Robot e Playwright.",
  },
]

export default function Timeline() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section ref={containerRef} className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Jornada</h2>
        </motion.div>

        <div className="relative">
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20"
            style={{ scaleY: scaleX }}
          />

          {timelineEvents.map((event, index) => (
            <TimelineEvent
              key={`${event.startYear}-${event.endYear}-${event.title}`}
              event={event}
              index={index}
              isExpanded={expandedEvent === index}
              onToggle={() => setExpandedEvent(expandedEvent === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineEvent({
  event,
  index,
  isExpanded,
  onToggle,
}: {
  event: (typeof timelineEvents)[0]
  index: number
  isExpanded: boolean
  onToggle: () => void
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  const formatYearRange = (startYear: string, endYear: string) => {
    if (startYear === endYear) {
      return startYear
    }
    return `${startYear} - ${endYear}`
  }

  return (
    <motion.div
      ref={ref}
      className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <div className="w-5/12" />
      <div className="z-20">
        <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-full">
          <div className="w-3 h-3 bg-background rounded-full" />
        </div>
      </div>
      <motion.div
        className="w-5/12 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onToggle}
      >
        <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
          <span className="font-bold text-primary">{formatYearRange(event.startYear, event.endYear)}</span>
          <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
          <p className="text-muted-foreground">{event.description}</p>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-sm text-muted-foreground">{event.details}</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
