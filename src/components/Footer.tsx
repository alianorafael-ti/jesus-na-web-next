import Link from "next/link";

const links = [
  { nome: "Home", href: "/" },
  { nome: "Jornada", href: "/jornada" },
  { nome: "Estudos", href: "/estudos" },
  { nome: "Vida em Foco", href: "/vida-em-foco" },
  { nome: "Quem Somos", href: "/quem-somos" },
  { nome: "Testemunhos", href: "/testemunhos" },
  { nome: "Oração", href: "/oracao" },
];

export default function Footer() {
  return (
    <footer className="border-t border-yellow-500/20 bg-[#111111] text-zinc-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <section>
          <h2 className="mb-4 text-xl font-bold text-[#d4af37]">
            Jesus na Web
          </h2>

          <p className="max-w-sm leading-7">
            Um projeto de evangelização, esperança, libertação e
            reconstrução de vidas através da Palavra de Deus.
          </p>
        </section>

        <nav aria-label="Navegação do rodapé">
          <h2 className="mb-4 text-lg font-bold text-[#d4af37]">
            Navegação
          </h2>

          <div className="flex flex-col items-start gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-[#d4af37]"
              >
                {link.nome}
              </Link>
            ))}
          </div>
        </nav>

        <section>
          <h2 className="mb-4 text-lg font-bold text-[#d4af37]">
            Contato
          </h2>

          <a
            href="mailto:jesusnaweb1@gmail.com"
            className="transition-colors hover:text-[#d4af37]"
          >
            jesusnaweb1@gmail.com
          </a>

          <p className="mt-5 leading-7">
            Compartilhe esperança.
            <br />
            Compartilhe Jesus.
          </p>
        </section>
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-center">
        <p className="mb-3 text-sm italic text-zinc-300">
          “Se o Filho vos libertar, verdadeiramente sereis livres.”
          — João 8:36
        </p>

        <p className="text-sm text-zinc-500">
          © 2026 Jesus na Web
        </p>
      </div>
    </footer>
  );
}