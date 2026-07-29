import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal'
import { instituciones } from '../data/content'

export default function Cobertura() {
  const grupos = useMemo(() => {
    return instituciones.reduce((acc, inst) => {
      if (!acc[inst.tipo]) acc[inst.tipo] = []
      acc[inst.tipo].push(inst)
      return acc
    }, {})
  }, [])

  const tipos = Object.keys(grupos)
  const [active, setActive] = useState(tipos[0])

  return (
    <section id="cobertura" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal className="max-w-xl">
        <div className="font-label text-xs font-semibold tracking-[0.15em] text-gold-bright">
          COBERTURA
        </div>
        <h2 className="mt-3 font-display text-[1.8rem] leading-tight text-parchment">
          11 instituciones, un mismo mensaje
        </h2>
        <p className="mt-3 font-body text-[15px] leading-relaxed text-parchment/65">
          Selecciona un tipo de institución para ver a quiénes llegamos.
        </p>
      </Reveal>

      <div className="relative mt-9 mb-6">
        <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gold/20" />
        <div className="relative flex flex-wrap gap-2">
          {tipos.map((tipo) => (
            <button
              key={tipo}
              onClick={() => setActive(tipo)}
              className={`rounded-full px-4 py-2 font-label text-[13px] font-semibold transition ${
                tipo === active
                  ? 'bg-gold text-ink-deep'
                  : 'border border-gold/25 bg-ink-deep text-parchment/70 hover:border-gold/50'
              }`}
            >
              {tipo}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="illuminated-border rounded-2xl bg-gradient-to-br from-ink-deep to-ink p-8"
        >
          <div className="flex flex-col gap-4">
            {grupos[active].map((inst) => (
              <div
                key={inst.nombre}
                className="flex items-start justify-between gap-4 border-b border-gold/10 pb-4 last:border-0 last:pb-0"
              >
                <div className="font-body text-[14.5px] leading-relaxed text-parchment/90">
                  {inst.nombre}
                </div>
                <div className="shrink-0 font-label text-[12px] text-parchment/50">
                  {inst.direccion}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}