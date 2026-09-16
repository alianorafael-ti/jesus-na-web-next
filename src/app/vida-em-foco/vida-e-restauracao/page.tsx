import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vida e Restauração",
  description:
    "Reflexões sobre libertação, recuperação, obediência, prevenção à recaída e uma nova vida com Cristo.",
};

const reflexoes = [
  {
    numero: "01",
    titulo: "Liberto por Cristo, Sustentado pela Obediência",
    subtitulo: "O caminho da libertação e a decisão diária",
    descricao:
      "Uma reflexão sobre a libertação que vem de Cristo e a importância da obediência, da vigilância e da renovação diária para permanecer no caminho da liberdade.",
    href: "/vida-em-foco/liberto-por-cristo",
  },
  {
    numero: "02",
    titulo: "O processo da recaída no cotidiano do indivíduo",
    subtitulo: "Você está em recuperação. O mundo não.",
    descricao:
      "Uma reflexão sobre os sinais que podem surgir muito antes do retorno ao uso e sobre a importância de reconhecer o processo, pedir ajuda e preservar aquilo que sustenta a recuperação.",
    href: "/vida-em-foco/quando-a-recaida-comeca",
  },
];

export default function VidaERestauracaoPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0d]">
      <section className="border-b border-yellow-500/20 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/vida-em-foco"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 transition hover:text-[#d4af37]"
          >
            <span aria-hidden="true">←</span>
            Vida em Foco
          </Link>

          <p className="mb-5 text-sm font-bold tracking-[0.25em] text-[#d4af37] uppercase">
            Restauração
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white sm:text-6xl">
            Vida e Restauração
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300 sm:text-xl">
            O caminho da libertação, da restauração e da permanência em
            Cristo através da obediência diária.
          </p>

          <div className="mt-10 h-px max-w-24 bg-[#d4af37]" />
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="mb-3 text-sm font-bold tracking-[0.2em] text-[#d4af37] uppercase">
                Um novo modo de viver
              </p>

              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                A recuperação vai além de deixar algo para trás.
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-zinc-300">
              <p>
                A dependência química alcança diferentes áreas da vida.
                Por isso, restauração também envolve reconstruir pensamentos,
                relacionamentos, escolhas, rotina e comunhão com Deus.
              </p>

              <p>
                A libertação vem de Cristo, mas a caminhada continua nas
                decisões tomadas todos os dias, na vigilância, na obediência
                e na disposição de reconhecer quando é necessário pedir ajuda.
              </p>

              <blockquote className="mt-8 border-l-2 border-[#d4af37] pl-6 text-xl font-semibold leading-8 text-white">
                “Recuperação não é apenas parar de usar uma substância.
                É construir e preservar um novo modo de viver.”
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <header className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-bold tracking-[0.2em] text-[#d4af37] uppercase">
              Reflexões
            </p>

            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Para continuar a caminhada
            </h2>
          </header>

          <div className="grid gap-6 lg:grid-cols-2">
            {reflexoes.map((reflexao) => (
              <article
                key={reflexao.href}
                className="group flex min-h-96 flex-col rounded-xl border border-white/10 bg-[#161616] p-7 transition hover:-translate-y-1 hover:border-yellow-500/50 sm:p-8"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.18em] text-[#d4af37] uppercase">
                    Estudo
                  </span>

                  <span className="text-sm text-zinc-600">
                    {reflexao.numero}
                  </span>
                </div>

                <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                  {reflexao.titulo}
                </h3>

                <p className="mt-3 font-semibold text-[#d4af37]">
                  {reflexao.subtitulo}
                </p>

                <p className="mt-5 flex-1 leading-7 text-zinc-300">
                  {reflexao.descricao}
                </p>

                <Link
                  href={reflexao.href}
                  className="mt-8 inline-flex w-fit items-center gap-2 font-semibold text-[#d4af37] transition group-hover:gap-3"
                >
                  Ler reflexão
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}