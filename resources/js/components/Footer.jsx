import { MapPin, Phone, Mail, Clock } from "lucide-react";
import useMaranatha from "../hooks/useMaranatha";

const QUICK_LINKS = [
  { label: "Inicio", page: 0 },
  { label: "Predicas", page: 1 },
  { label: "Biblia", page: 2 },
  { label: "Ministerios", page: 3 },
  { label: "Eventos", page: 4 },
  { label: "Visítanos", page: 5 },
];

export default function Footer() {
  const { setPage } = useMaranatha();
  return (
    <footer className="w-full px-8 py-14 lg:px-24 bg-coffee">
      <div className="mx-auto max-w-[1500px] text-white">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-[1.4fr_0.8fr_1fr]">
          {/* Logo */}

          <div>
            <button onClick={() => setPage(0)} className="cursor-pointer">
              <img
                src="/img/logo_completo.png"
                alt="imagen-logo"
                className="w-96"
              />
            </button>

            <p className="mt-10 max-w-[430px] text-[18px] leading-10 text-cream-100/65">
              Una comunidad de fe que proclama la gloria del Dios vivo, crece en
              su Palabra y sirve a la ciudad con amor. Te invitamos a adorar con
              nosotros.
            </p>

            <p className="mt-12 font-serif text-3xl italic text-gold-400">
              "Soli Deo Gloria"
            </p>

            <p className="mt-2 uppercase tracking-[0.35em] text-sm text-cream-100/40">
              Solo a Dios la Gloria
            </p>
          </div>

          {/* Navegación */}

          <div>
            <h3 className="uppercase tracking-[0.4em] text-gold-400 text-lg text-center md:text-start">
              Navegación
            </h3>

            <div className="mt-10 flex flex-col gap-6">
              {QUICK_LINKS.map((link) => (
                <button
                  key={link.page}
                  onClick={() => setPage(link.page)}
                  className="text-lg text-cream-100/75 transition hover:text-yellow-600 hover:-translate-y-1  text-center md:text-start py-5 md:py-0"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contacto */}

          <div>
            <h3 className="uppercase tracking-[0.4em] text-gold-400 text-lg text-center md:text-start">
              Contacto
            </h3>

            <div className="mt-10 flex flex-col gap-8">
              <div className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 text-gold-400" />

                <p className="text-lg text-cream-100/70 leading-8">
                  Av. de la Reforma 1842,
                  <br />
                  Col. Centro, CDMX · CP 06000
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-gold-400" />

                <p className="text-lg text-cream-100/70">+52 55 1234 5678</p>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-gold-400" />

                <p className="text-lg text-cream-100/70">
                  comunidad@graciayverdad.org
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Clock className="h-5 w-5 text-gold-400" />

                <p className="text-lg text-cream-100/70">
                  Martes a viernes · 9:00 — 17:00 h
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-10">
          <div className="flex flex-col gap-4 md:flex-row md:justify-between">
            <p className="text-sm text-cream-100/45 text-center md:text-start">
              © {new Date().getFullYear()} Iglesia Cristiana Gracia y Verdad.
              Todos los derechos reservados.
            </p>

            <p className="text-xs mt-3 md:mt-0 md:text-sm text-cream-100/35 text-center md:text-start">
              Hecho con amor y gratitud para la gloria de Dios.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
