import type { Metadata } from "next";
import Link from "next/link";

import { estudos } from "@/data/estudos";

export const metadata: Metadata = {
  title: "Estudos Bíblicos",
  description:
    "Estudos bíblicos e reflexões cristãs para fortalecer a fé e aprofundar o conhecimento da Palavra de Deus.",
};

export default function EstudosPage() {
  const compositoresDaHarpa = estudos
    .filter(
      (estudo) =>
        estudo.serie === "Compositores da Harpa Cristã" &&
        estudo.ordemNaSerie !== undefined
    )
    .sort(
      (a, b) =>
        (a.ordemNaSerie ?? 0) - (b.ordemNaSerie ?? 0)
    );

  const meditacoes = estudos
    .filter(
      (estudo) =>
        estudo.serie === "Meditações" &&
        estudo.ordemNaSerie !== undefined
    )
    .sort(
      (a, b) =>
        (a.ordemNaSerie ?? 0) - (b.ordemNaSerie ?? 0)
    );

  const disciplinasEspirituais = estudos
    .filter(
      (estudo) =>
        estudo.serie === "Disciplinas Espirituais" &&
        estudo.ordemNaSerie !== undefined
    )
    .sort(
      (a, b) =>
        (a.ordemNaSerie ?? 0) - (b.ordemNaSerie ?? 0)
    );

  const apologetica = estudos
    .filter(
      (estudo) =>
        estudo.serie === "Apologética" &&
        estudo.ordemNaSerie !== undefined
    )
    .sort(
      (a, b) =>
        (a.ordemNaSerie ?? 0) - (b.ordemNaSerie ?? 0)
    );

  const historiaDaIgreja = estudos
    .filter(
      (estudo) =>
        estudo.serie === "História da Igreja" &&
        estudo.ordemNaSerie !== undefined
    )
    .sort(
      (a, b) =>
        (a.ordemNaSerie ?? 0) - (b.ordemNaSerie ?? 0)
    );

  const estudosBiblicos = estudos
    .filter(
      (estudo) =>
        estudo.serie === "Estudos Bíblicos" &&
        estudo.ordemNaSerie !== undefined
    )
    .sort(
      (a, b) =>
        (a.ordemNaSerie ?? 0) - (b.ordemNaSerie ?? 0)
    );

  const estudosIndependentes = estudos.filter(
    (estudo) => !estudo.serie
  );

  return (
    <main className="min-h-screen px-5 py-16 sm:px-8">
      <section className="mx-auto max-w-6xl">
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 text-sm font-bold tracking-[0.2em] text-[#d4af37] uppercase">
            Palavra de Deus
          </p>

          <h1 className="mb-5 text-4xl font-bold text-white sm:text-5xl">
            Estudos Bíblicos
          </h1>

          <p className="text-lg leading-8 text-zinc-300">
            Reflexões e estudos para fortalecer a fé, compreender melhor
            as Escrituras e caminhar mais perto de Cristo.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Série: Compositores da Harpa Cristã */}
          <article className="flex flex-col rounded-xl border border-yellow-500/20 bg-[#1a1a1a] p-7 shadow-xl shadow-black/10 transition hover:border-yellow-500/60">
            <p className="mb-3 text-sm font-bold tracking-wider text-[#d4af37] uppercase">
              Série Especial
            </p>

            <h2 className="mb-3 text-2xl font-bold leading-tight text-white">
              Compositores da Harpa Cristã
            </h2>

            <p className="mb-6 leading-7 text-zinc-300">
              Conheça a história, a fé e o legado dos homens e mulheres
              que contribuíram para os hinos que edificam a Igreja até hoje.
            </p>

            <div className="mb-7 border-t border-yellow-500/20 pt-5">
              <p className="mb-4 text-sm font-bold tracking-wider text-[#d4af37] uppercase">
                Índice
              </p>

              <div className="flex flex-col gap-3">
                <Link
                  href="/estudos/compositores-da-harpa"
                  className="text-zinc-200 transition hover:text-[#d4af37]"
                >
                  Introdução
                </Link>

                {compositoresDaHarpa.map((estudo) => (
                  <Link
                    key={estudo.id}
                    href={`/estudos/${estudo.slug}`}
                    className="text-zinc-200 transition hover:text-[#d4af37]"
                  >
                    {estudo.ordemNaSerie}.{" "}
                    {estudo.subcategoria ?? estudo.titulo}
                  </Link>
                ))}

                <div className="mt-3 border-t border-yellow-500/20 pt-4">
                  <p className="mb-2 text-xs font-bold tracking-wider text-[#d4af37] uppercase">
                    Epílogo
                  </p>

                  <Link
                    href="/estudos/compositores-da-harpa/epilogo"
                    className="text-zinc-200 transition hover:text-[#d4af37]"
                  >
                    Muito Além das Biografias
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/estudos/compositores-da-harpa"
              className="inline-flex w-fit rounded-md border border-[#d4af37] px-5 py-3 font-semibold text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"
            >
              Conhecer a série
            </Link>
          </article>

          {/* Série: Meditações */}
          <article className="flex flex-col rounded-xl border border-yellow-500/20 bg-[#1a1a1a] p-7 shadow-xl shadow-black/10 transition hover:border-yellow-500/60">
            <p className="mb-3 text-sm font-bold tracking-wider text-[#d4af37] uppercase">
              Série
            </p>

            <h2 className="mb-3 text-2xl font-bold leading-tight text-white">
              Meditações
            </h2>

            <p className="mb-6 leading-7 text-zinc-300">
              Reflexões cristãs para fortalecer a fé e contemplar a pessoa,
              a obra e o chamado de Deus.
            </p>

            <div className="mb-7 border-t border-yellow-500/20 pt-5">
              <p className="mb-4 text-sm font-bold tracking-wider text-[#d4af37] uppercase">
                Índice
              </p>

              <div className="flex flex-col gap-3">
                {meditacoes.map((estudo) => (
                  <Link
                    key={estudo.id}
                    href={`/estudos/${estudo.slug}`}
                    className="text-zinc-200 transition hover:text-[#d4af37]"
                  >
                    {estudo.ordemNaSerie}.{" "}
                    {estudo.subcategoria ?? estudo.titulo}
                  </Link>
                ))}
              </div>
            </div>
          </article>

          {/* Série: Disciplinas Espirituais */}
          <article className="flex flex-col rounded-xl border border-yellow-500/20 bg-[#1a1a1a] p-7 shadow-xl shadow-black/10 transition hover:border-yellow-500/60">
            <p className="mb-3 text-sm font-bold tracking-wider text-[#d4af37] uppercase">
              Série
            </p>

            <h2 className="mb-3 text-2xl font-bold leading-tight text-white">
              Disciplinas Espirituais
            </h2>

            <p className="mb-6 leading-7 text-zinc-300">
              Exercitando a fé para crescer em comunhão, santidade
              e maturidade cristã.
            </p>

            <div className="mb-7 border-t border-yellow-500/20 pt-5">
              <p className="mb-4 text-sm font-bold tracking-wider text-[#d4af37] uppercase">
                Índice
              </p>

              <div className="flex flex-col gap-3">
                <Link
                  href="/estudos/disciplinas-espirituais"
                  className="text-zinc-200 transition hover:text-[#d4af37]"
                >
                  Introdução
                </Link>

                {disciplinasEspirituais.map((estudo) => (
                  <Link
                    key={estudo.id}
                    href={`/estudos/${estudo.slug}`}
                    className="text-zinc-200 transition hover:text-[#d4af37]"
                  >
                    {estudo.ordemNaSerie}.{" "}
                    {estudo.subcategoria ?? estudo.titulo}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/estudos/disciplinas-espirituais"
              className="inline-flex w-fit rounded-md border border-[#d4af37] px-5 py-3 font-semibold text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"
            >
              Conhecer a série
            </Link>
          </article>

          {/* Série: Apologética */}
          <article className="flex flex-col rounded-xl border border-yellow-500/20 bg-[#1a1a1a] p-7 shadow-xl shadow-black/10 transition hover:border-yellow-500/60">
            <p className="mb-3 text-sm font-bold tracking-wider text-[#d4af37] uppercase">
              Série
            </p>

            <h2 className="mb-3 text-2xl font-bold leading-tight text-white">
              Apologética Cristã
            </h2>

            <p className="mb-6 leading-7 text-zinc-300">
              Compreendendo e apresentando as razões da fé cristã com amor,
              sabedoria e firmeza.
            </p>

            <div className="mb-7 border-t border-yellow-500/20 pt-5">
              <p className="mb-4 text-sm font-bold tracking-wider text-[#d4af37] uppercase">
                Índice
              </p>

              <div className="flex flex-col gap-3">
                <Link
                  href="/estudos/apologetica"
                  className="text-zinc-200 transition hover:text-[#d4af37]"
                >
                  Introdução
                </Link>

                {apologetica.map((estudo) => (
                  <Link
                    key={estudo.id}
                    href={`/estudos/${estudo.slug}`}
                    className="text-zinc-200 transition hover:text-[#d4af37]"
                  >
                    {estudo.ordemNaSerie}.{" "}
                    {estudo.subcategoria ?? estudo.titulo}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/estudos/apologetica"
              className="inline-flex w-fit rounded-md border border-[#d4af37] px-5 py-3 font-semibold text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"
            >
              Conhecer a série
            </Link>
          </article>

          {/* Série: História da Igreja */}
          <article className="flex flex-col rounded-xl border border-yellow-500/20 bg-[#1a1a1a] p-7 shadow-xl shadow-black/10 transition hover:border-yellow-500/60">
            <p className="mb-3 text-sm font-bold tracking-wider text-[#d4af37] uppercase">
              Série Especial
            </p>

            <h2 className="mb-3 text-2xl font-bold leading-tight text-white">
              História da Igreja
            </h2>

            <p className="mb-6 leading-7 text-zinc-300">
              Uma caminhada pela história cristã entre a fidelidade de Deus
              e as marcas da fragilidade humana.
            </p>

            <div className="mb-7 border-t border-yellow-500/20 pt-5">
              <p className="mb-4 text-sm font-bold tracking-wider text-[#d4af37] uppercase">
                Índice
              </p>

              <div className="flex flex-col gap-3">
                <Link
                  href="/estudos/historia-da-igreja"
                  className="text-zinc-200 transition hover:text-[#d4af37]"
                >
                  Introdução
                </Link>

                {historiaDaIgreja.map((estudo) => (
                  <Link
                    key={estudo.id}
                    href={`/estudos/${estudo.slug}`}
                    className="text-zinc-200 transition hover:text-[#d4af37]"
                  >
                    {estudo.ordemNaSerie}.{" "}
                    {estudo.subcategoria ?? estudo.titulo}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/estudos/historia-da-igreja"
              className="inline-flex w-fit rounded-md border border-[#d4af37] px-5 py-3 font-semibold text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"
            >
              Conhecer a série
            </Link>
          </article>

          {/* Série: Estudos Bíblicos */}
          <article className="flex flex-col rounded-xl border border-yellow-500/20 bg-[#1a1a1a] p-7 shadow-xl shadow-black/10 transition hover:border-yellow-500/60">
            <p className="mb-3 text-sm font-bold tracking-wider text-[#d4af37] uppercase">
              Série
            </p>

            <h2 className="mb-3 text-2xl font-bold leading-tight text-white">
              Estudos Bíblicos
            </h2>

            <p className="mb-6 leading-7 text-zinc-300">
              Examinando as Escrituras para compreender a verdade, fortalecer a
              fé e viver segundo a Palavra de Deus.
            </p>

            <div className="mb-7 border-t border-yellow-500/20 pt-5">
              <p className="mb-4 text-sm font-bold tracking-wider text-[#d4af37] uppercase">
                Índice
              </p>

              <div className="flex flex-col gap-3">
                <Link
                  href="/estudos/estudos-biblicos"
                  className="text-zinc-200 transition hover:text-[#d4af37]"
                >
                  Introdução
                </Link>

                {estudosBiblicos.map((estudo) => (
                  <Link
                    key={estudo.id}
                    href={`/estudos/${estudo.slug}`}
                    className="text-zinc-200 transition hover:text-[#d4af37]"
                  >
                    {estudo.ordemNaSerie}.{" "}
                    {estudo.subcategoria ?? estudo.titulo}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/estudos/estudos-biblicos"
              className="inline-flex w-fit rounded-md border border-[#d4af37] px-5 py-3 font-semibold text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"
            >
              Conhecer a série
            </Link>
          </article>

          {/* Estudos independentes */}
          {estudosIndependentes.map((estudo) => (
            <article
              key={estudo.id}
              className="flex flex-col rounded-xl border border-yellow-500/20 bg-[#1a1a1a] p-7 shadow-xl shadow-black/10 transition hover:-translate-y-1 hover:border-yellow-500/60"
            >
              <p className="mb-3 text-sm font-bold tracking-wider text-[#d4af37] uppercase">
                {estudo.categoria}
              </p>

              <h2 className="mb-4 text-2xl font-bold leading-tight text-white">
                {estudo.titulo}
              </h2>

              <p className="mb-7 flex-1 leading-7 text-zinc-300">
                {estudo.resumo}
              </p>

              <Link
                href={`/estudos/${estudo.slug}`}
                className="inline-flex w-fit rounded-md border border-[#d4af37] px-5 py-3 font-semibold text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"
              >
                Ler estudo
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}