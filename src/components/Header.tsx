"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { nome: "Home", href: "/" },
  { nome: "Jornada", href: "/jornada" },
  { nome: "Estudos", href: "/estudos" },
  { nome: "Quem Somos", href: "/quem-somos" },
  { nome: "Testemunhos", href: "/testemunhos" },
  { nome: "Oração", href: "/oracao" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuAberto, setMenuAberto] = useState(false);

  function linkAtivo(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-yellow-500/20 bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex min-h-18 max-w-7xl items-center justify-between px-5">
        <Link
          href="/"
          className="text-xl font-bold tracking-wide text-[#d4af37]"
          onClick={() => setMenuAberto(false)}
        >
          Jesus na Web
        </Link>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-md border border-yellow-500/30 text-2xl text-[#d4af37] md:hidden"
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
          aria-controls="menu-principal"
          onClick={() => setMenuAberto((aberto) => !aberto)}
        >
          {menuAberto ? "×" : "☰"}
        </button>

        <nav
          id="menu-principal"
          className="hidden items-center gap-1 md:flex"
          aria-label="Navegação principal"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                linkAtivo(link.href)
                  ? "bg-yellow-500/10 text-[#d4af37]"
                  : "text-zinc-200 hover:bg-white/5 hover:text-[#d4af37]"
              }`}
            >
              {link.nome}
            </Link>
          ))}
        </nav>
      </div>

      {menuAberto && (
        <nav
          className="border-t border-yellow-500/20 bg-[#111111] px-5 py-4 md:hidden"
          aria-label="Navegação para celular"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuAberto(false)}
                className={`rounded-md px-4 py-3 font-medium transition-colors ${
                  linkAtivo(link.href)
                    ? "bg-yellow-500/10 text-[#d4af37]"
                    : "text-zinc-200 hover:bg-white/5 hover:text-[#d4af37]"
                }`}
              >
                {link.nome}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}