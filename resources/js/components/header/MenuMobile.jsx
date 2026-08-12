import React from "react";
import { BookOpen, Menu, X } from "lucide-react";
import useMaranatha from "../../hooks/useMaranatha";

export default function MenuMobile({ isOpen, setOpen }) {
  const { page, setPage } = useMaranatha();

  const NAV_LINKS = [
    { label: "Inicio", value: 0 },
    { label: "Bienvenida", value: 1 },
    { label: "Horarios", value: 2 },
  ];
  const BIBLE_LINK = { label: "Biblia", href: "/biblia" };
  return (
    <div
      className={`overflow-hidden bg-ink-900 transition-all duration-500 lg:hidden ${
        isOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <ul className="container-wide flex flex-col gap-1 py-6">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <button
              onClick={() => setPage(link.value)}
              className="block rounded-lg px-4 py-3 text-base font-medium text-cream-100 transition-colors hover:bg-ink-800 hover:text-gold-300"
            >
              {link.label}
            </button>
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
  );
}
