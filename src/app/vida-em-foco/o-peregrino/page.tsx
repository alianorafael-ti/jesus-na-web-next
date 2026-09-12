import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "O Peregrino — John Bunyan | Livros que Edificam",
  description:
    "Uma reflexão cristã sobre O Peregrino, de John Bunyan, e a caminhada de fé, perseverança e dependência de Deus.",
};

export default function OPeregrinoPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] text-zinc-200">
      {/* Hero */}
      <section className="border-b border-yellow-500/20 px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/vida-em-foco"
            className="mb-8 inline-block text-sm font-semibold text-[#d4af37] transition hover:text-yellow-300"
          >
            ← Vida em Foco
          </Link>

          <p className="mb-4 text-sm font-bold tracking-[0.2em] text-[#d4af37] uppercase">
            Livros que Edificam
          </p>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            O Peregrino
          </h1>

          <p className="mt-6 text-xl leading-8 text-zinc-300">
            John Bunyan
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <article className="px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <blockquote className="mb-12 border-l-2 border-[#d4af37] pl-6 text-xl italic leading-9 text-zinc-300">
            “Persiste em ler, exortar e ensinar.”
            <footer className="mt-3 text-sm not-italic text-[#d4af37]">
              1 Timóteo 4:13
            </footer>
          </blockquote>

          <div className="space-y-12 leading-8 text-zinc-300">
            {/* Introdução */}
            <section>
              <p>
                Ao longo da história, Deus tem usado homens e mulheres para
                registrar ensinamentos, testemunhos e reflexões que auxiliam os
                cristãos em sua caminhada. Nesta seção reunimos livros que podem
                enriquecer seu conhecimento das Escrituras, fortalecer sua fé e
                inspirar uma vida mais próxima do Senhor.
              </p>

              <p className="mt-5">
                A leitura de bons livros cristãos não substitui a Bíblia, mas
                pode servir como uma ferramenta valiosa para aprofundar o
                entendimento da Palavra de Deus e aprender com a experiência de
                servos fiéis que marcaram a história da Igreja.
              </p>
            </section>

            {/* Livro em destaque */}
            <section>
              <p className="mb-3 text-sm font-bold tracking-[0.18em] text-[#d4af37] uppercase">
                Livro em Destaque
              </p>

              <h2 className="mb-6 text-2xl font-bold text-white sm:text-3xl">
                O Peregrino — John Bunyan
              </h2>

              <p>
                Publicado pela primeira vez em 1678, &quot;O Peregrino&quot; é
                uma das obras cristãs mais influentes de todos os tempos.
                Escrito por John Bunyan enquanto estava preso por pregar o
                Evangelho, o livro apresenta a jornada de um homem chamado
                Cristão, que deixa a Cidade da Destruição em busca da Cidade
                Celestial.
              </p>

              <p className="mt-5">
                Ao longo de sua caminhada, ele enfrenta desafios, tentações,
                perseguições e obstáculos que representam as lutas vividas por
                todo aquele que deseja seguir a Cristo. Através de personagens
                simbólicos e lições profundas, a obra mostra que a vida cristã
                é uma peregrinação marcada por fé, perseverança e dependência
                de Deus.
              </p>

              <p className="mt-5">
                Mais do que uma simples história, &quot;O Peregrino&quot; é um
                retrato da jornada espiritual de cada cristão. Suas páginas nos
                desafiam a permanecer firmes diante das dificuldades e a manter
                os olhos voltados para a eternidade.
              </p>

              <blockquote className="mt-7 border-l border-white/20 pl-5 italic text-zinc-400">
                “Esforcem-se para entrar pela porta estreita, porque eu lhes
                digo que muitos tentarão entrar e não conseguirão.”
                <footer className="mt-2 text-sm not-italic text-[#d4af37]">
                  Lucas 13:24
                </footer>
              </blockquote>
            </section>

            {/* Reflexão */}
            <section>
              <h2 className="mb-5 text-2xl font-bold text-white sm:text-3xl">
                Reflexão Cristã
              </h2>

              <p>
                A jornada de Cristão nos lembra que a fé não é um caminho livre
                de dificuldades. Pelo contrário, seguir a Cristo exige
                perseverança, confiança e dependência constante da graça de
                Deus.
              </p>

              <p className="mt-5">
                Em um mundo repleto de distrações e caminhos aparentemente mais
                fáceis, o livro nos convida a manter os olhos fixos no Senhor,
                lembrando que nossa verdadeira pátria não está neste mundo, mas
                na presença eterna de Deus.
              </p>

              <p className="mt-5">
                Assim como o personagem principal enfrentou vales escuros,
                montanhas difíceis e momentos de desânimo, cada cristão também
                encontrará desafios ao longo da caminhada. Porém, Deus
                permanece fiel para conduzir Seus filhos até o destino final.
              </p>

              <p className="mt-5">
                &quot;O Peregrino&quot; continua sendo uma leitura
                indispensável para todos aqueles que desejam compreender melhor
                a caminhada cristã e crescer em maturidade espiritual.
              </p>
            </section>

            <ShareButton
              title="O Peregrino — John Bunyan | Jesus na Web"
              text="Uma reflexão sobre a caminhada cristã, fé, perseverança e dependência de Deus."
            />

            {/* Continuação */}
            <section className="border-t border-yellow-500/20 pt-10">
              <p className="mb-3 text-xs font-bold tracking-[0.18em] text-[#d4af37] uppercase">
                Livros que Edificam
              </p>

              <div className="rounded-xl border border-white/10 bg-[#161616] p-6">
                <h2 className="text-2xl font-bold text-white">
                  Em Breve
                </h2>

                <p className="mt-3 text-zinc-300">
                  Novas recomendações de livros que fortalecem a fé, inspiram a
                  vida cristã e aprofundam o conhecimento bíblico.
                </p>

                <Link
                  href="/vida-em-foco"
                  className="mt-5 inline-block font-semibold text-[#d4af37] transition hover:text-yellow-300"
                >
                  ← Voltar para Vida em Foco
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}