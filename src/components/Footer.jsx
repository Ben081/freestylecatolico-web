export default function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-ink-deep">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <div className="font-display text-lg text-parchment">
              Freestyle Católico 2026
            </div>
            <p className="mt-2 font-body text-[13px] leading-relaxed text-parchment/55">
              Programa Itinerante de Coaching Corporativo 2026
            </p>
          </div>

          <div>
            <div className="font-label text-xs font-semibold tracking-[0.1em] text-gold-bright">
              EXPLORA
            </div>
            <ul className="mt-3 flex flex-col gap-2 font-body text-[13.5px] text-parchment/65">
              <li><a href="#cobertura" className="hover:text-parchment">Cobertura</a></li>
              <li><a href="#instituciones" className="hover:text-parchment">Instituciones</a></li>
              <li><a href="#convocatoria" className="hover:text-parchment">Convocatoria</a></li>
            </ul>
          </div>

          <div>
            <div className="font-label text-xs font-semibold tracking-[0.1em] text-gold-bright">
              CONTACTO
            </div>
            <ul className="mt-3 flex flex-col gap-2 font-body text-[13.5px] text-parchment/65">
              <li>
                <a href="mailto:info@frate.lat" className="hover:text-parchment">
                  info@frate.lat
                </a>
              </li>
              <li className="text-parchment/45">Huánuco, Perú</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-gold/10 pt-6 font-body text-[12.5px] text-parchment/45 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Programa Itinerante de Coaching
            Corporativo Freestyle Católico. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}