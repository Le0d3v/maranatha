import { useState, useEffect } from "react";
import { BookOpen, Menu, X } from "lucide-react";
import MenuMobile from "./MenuMobile";
import useMaranatha from "../../hooks/useMaranatha";

const NAV_LINKS = [
  { label: "Inicio", value: 0 },
  { label: "Predicas", value: 1 },
  { label: "Biblia Digital", value: 2 },
];

const BIBLE_LINK = { label: "Biblia", href: "/biblia" };

export default function Navegacion() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { page, setPage } = useMaranatha();

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
    <div>
      <nav className="container-wide flex h-20 items-center justify-between gap-10 lg:h-24">
        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => setPage(link.value)}
                className={`group relative text-sm font-medium transition-colors duration-300 text-white hover:cursor-pointer ${
                  scrolled
                    ? "text-white hover:text-gold-600"
                    : "text-cream-100/90 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${
                    scrolled ? "bg-gold-500" : "bg-gold-300"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

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
        <MenuMobile isOpen={open} setOpen={setOpen} />
      </nav>
    </div>
  );
}
