import { useEffect, useState } from "react";
import { Menu, X, BookOpen } from "lucide-react";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Bienvenida", href: "#bienvenida" },
  { label: "Horarios", href: "#horarios" },
  { label: "Nuestra Fe", href: "#fe" },
  { label: "Ministerios", href: "#ministerios" },
  { label: "Eventos", href: "#eventos" },
  { label: "Visítanos", href: "#visitanos" },
];

const BIBLE_LINK = { label: "Biblia Digital", href: "/biblia" };

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 py-3 px-15 ${
          scrolled
            ? "bg-white/10 shadow-md shadow-ink-900/5 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav className="container-wide flex h-20 items-center justify-between lg:h-24">
          <button>
            <img
              src="/img/logo_completo.png"
              alt="Logo Maranatha"
              className="w-44"
            />
          </button>

          <ul className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`group relative font-medium transition-colors duration-300 ${
                    scrolled
                      ? "text-white hover:text-yellow-600"
                      : "text-white hover:text-yellow-400"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${
                      scrolled ? "bg-gold-500" : "bg-gold-300"
                    }`}
                  />
                </a>
              </li>
            ))}
            <li></li>
          </ul>

          <div className="flex items-center gap-5">
            <a
              href="#visitanos"
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-lg font-medium transition-colors duration-300  text-gold-200 hover:bg-yellow-500/20 backdrop-blur-sm border border-yellow-400 text-white`}
            >
              Predicas
            </a>
            <a
              href={BIBLE_LINK.href}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5  font-medium transition-colors duration-300 text-white text-lg bg-yellow-500/70 text-gold-200 hover:bg-yellow-500/20 backdrop-blur-sm`}
            >
              <BookOpen className="h-3.5 w-3.5" />
              {BIBLE_LINK.label}
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden ${
              scrolled
                ? "text-ink-800 hover:bg-ink-100"
                : "text-cream-50 hover:bg-white/10"
            }`}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden bg-ink-900 transition-all duration-500 lg:hidden ${
            open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="container-wide flex flex-col gap-1 py-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-cream-100 transition-colors hover:bg-ink-800 hover:text-gold-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={BIBLE_LINK.href}
                onClick={() => setOpen(false)}
                className="mt-1 flex items-center gap-2 rounded-lg bg-ink-800 px-4 py-3 text-base font-medium text-gold-300 transition-colors hover:bg-gold-600 hover:text-ink-900"
              >
                <BookOpen className="h-4 w-4" />
                {BIBLE_LINK.label}
              </a>
            </li>
            <li className="mt-3 px-4">
              <a
                href="#visitanos"
                onClick={() => setOpen(false)}
                className="btn-gold w-full"
              >
                Planifica tu visita
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
