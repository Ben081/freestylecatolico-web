import Reveal from './Reveal'

export default function Proyecto() {
  return (
    <section id="proyecto" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[280px_1fr]">
        <Reveal>
          <div className="font-label text-xs font-semibold tracking-[0.15em] text-gold-bright">
            SOBRE EL PROYECTO
          </div>
          <h2 className="mt-3 font-display text-[1.8rem] leading-tight text-parchment">
            Coaching, música y fe al servicio del clima laboral
          </h2>
        </Reveal>

        <div className="flex flex-col gap-6">
          <Reveal delay={0.05}>
            <p className="font-body text-[15.5px] leading-relaxed text-parchment/75">
              Hay tensiones que nadie se anima a decir en voz alta. Ese
              compañero difícil, esa reunión que terminó mal, ese silencio
              incómodo<br /><br />
              
              <strong className="text-parchment">Tomamos los conflictos</strong> y los subimos al escenario. 
              Se improvisan, se riman y se resuelven,<strong className="text-parchment">aplicando
              la gestión emocional, el perdón y el liderazgo de servicio</strong> que
              enseñó el monje benedictino Anselm Grün, ahora traducidos a
              ritmo y rima.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-body text-[15.5px] leading-relaxed text-parchment/75">
              Así nace el <strong className="text-parchment">UNDAR Music Coaching</strong>: música,
              coaching y fe. Y su momento más fuerte son
              los <strong className="text-parchment">Duelos Freestyle de Soluciones</strong>
              donde dos voces improvisan, no para ganar, sino para encontrarle
              salida a un conflicto, en vivo, frente a todos.
            </p>
          </Reveal>

          <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Reveal delay={0.15}>
              <div className="illuminated-border h-full rounded-xl bg-ink-deep p-5">
                <div className="font-label text-[13px] font-semibold text-gold-bright">
                  OBJETIVO
                </div>
                <div className="mt-2 font-body text-[13.5px] leading-relaxed text-parchment/70">
                  Llevar el programa taller a taller, a las 11 instituciones beneficiarias mediante
                  talleres presenciales y en linea hasta que la inteligencia emocional y un mejor clima 
                  laboral dejen de ser una meta y sean el día a día.
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="illuminated-border h-full rounded-xl bg-ink-deep p-5">
                <div className="font-label text-[13px] font-semibold text-gold-bright">ALCANCE</div>
                <div className="mt-2 font-body text-[13.5px] leading-relaxed text-parchment/70">
                  Se proyecta un total de 1,110 beneficiarios; 110 presenciales y 1,000
                  virtuales a través de talleres itinerantes y la difusión en la
                  plataforma y redes sociales.
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
