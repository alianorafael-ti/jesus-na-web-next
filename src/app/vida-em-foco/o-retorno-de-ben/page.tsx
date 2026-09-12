import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "O Retorno de Ben | Filmes que Edificam",
  description:
    "Uma reflexão cristã sobre O Retorno de Ben, dependência química, família, restauração, perdão, esperança e graça.",
};

export default function ORetornoDeBenPage() {
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
            Filmes que Edificam
          </p>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            O Retorno de Ben
          </h1>

          <p className="mt-6 text-xl leading-8 text-zinc-300">
            Ben Is Back
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <article className="px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <blockquote className="mb-12 border-l-2 border-[#d4af37] pl-6 text-xl italic leading-9 text-zinc-300">
            “Tudo o que é verdadeiro, tudo o que é honesto, tudo o que é justo,
            tudo o que é puro, tudo o que é amável, tudo o que é de boa fama,
            se há alguma virtude, e se há algum louvor, nisso pensai.”
            <footer className="mt-3 text-sm not-italic text-[#d4af37]">
              Filipenses 4:8
            </footer>
          </blockquote>

          <div className="space-y-12 leading-8 text-zinc-300">
            <section>
              <p>
                O cinema possui o poder de contar histórias que despertam
                emoções, promovem reflexão e nos fazem enxergar a vida sob
                novas perspectivas. Nesta seção reunimos filmes que apresentam
                valores compatíveis com os princípios cristãos e que podem
                contribuir para o crescimento espiritual, fortalecimento da fé
                e compreensão de importantes desafios da vida.
              </p>
            </section>

            <section>
              <p className="mb-3 text-sm font-bold tracking-[0.18em] text-[#d4af37] uppercase">
                Filme em Destaque
              </p>

              <h2 className="mb-6 text-2xl font-bold text-white sm:text-3xl">
                O Retorno de Ben (Ben Is Back)
              </h2>

              <p>
                Na véspera de Natal, uma mãe recebe uma visita inesperada: seu
                filho Ben retorna para casa após um período em recuperação da
                dependência química. O reencontro desperta alegria, mas também
                medo, dúvidas e lembranças de feridas ainda abertas.
              </p>

              <p className="mt-5">
                Ao longo de um único dia, o filme revela a dura realidade
                enfrentada por muitas famílias que convivem com os efeitos da
                dependência. Mais do que uma história sobre vícios, &quot;O
                Retorno de Ben&quot; retrata o amor incondicional de uma mãe, a
                luta pela restauração e o desafio de permanecer firme diante
                das tentações e das consequências do passado.
              </p>

              <p className="mt-5">
                Com atuações marcantes e uma narrativa emocionante, o filme nos
                faz refletir sobre perdão, responsabilidade, esperança e a
                importância de nunca desistir daqueles que precisam de uma nova
                oportunidade.
              </p>

              <p className="mt-5">
                Uma obra sensível e impactante que nos lembra que a restauração
                é um caminho difícil, mas que o amor, a perseverança e a graça
                podem iluminar até os momentos mais sombrios.
              </p>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-bold text-white sm:text-3xl">
                Assista ao Trailer
              </h2>

              <p>
                Confira o trailer e conheça um pouco desta emocionante história
                de amor, restauração e esperança.
              </p>

              <div className="mt-7 overflow-hidden rounded-xl border border-white/10 bg-black">
                <div className="aspect-video">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/4kom3reM_gI"
                    title="Trailer - O Retorno de Ben"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>

              <div className="mt-5 text-center">
                <a
                  href="https://www.youtube.com/watch?v=4kom3reM_gI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#d4af37] transition hover:text-yellow-300"
                >
                  ▶ Assistir no YouTube
                </a>
              </div>
            </section>

            <blockquote className="border-l-2 border-[#d4af37] pl-6 text-xl italic leading-9 text-zinc-300">
              “Assim também vos digo que há alegria diante dos anjos de Deus
              por um pecador que se arrepende.”
              <footer className="mt-3 text-sm not-italic text-[#d4af37]">
                Lucas 15:10
              </footer>
            </blockquote>

            <section>
              <h2 className="mb-5 text-2xl font-bold text-white sm:text-3xl">
                Reflexão Cristã
              </h2>

              <p>
                A história de Ben nos lembra que a restauração nem sempre
                acontece de forma instantânea. Muitas vezes ela é construída
                dia após dia, através de escolhas, perseverança e do amor
                daqueles que se recusam a desistir.
              </p>

              <p className="mt-5">
                O Evangelho nos mostra que Deus continua buscando, recebendo e
                transformando vidas que parecem sem esperança. Nenhuma história
                está além do alcance da graça de Cristo.
              </p>

              <p className="mt-5">
                Assim como o pai da parábola do filho pródigo aguardava o
                retorno de seu filho, Deus continua de braços abertos para
                aqueles que desejam recomeçar.
              </p>

              <p className="mt-5">
                Que esta história nos lembre da importância da compaixão, do
                perdão e da perseverança na caminhada cristã, especialmente
                quando lidamos com pessoas que enfrentam batalhas difíceis.
              </p>
            </section>
            <ShareButton
  title="O Retorno de Ben | Jesus na Web"
  text="Uma reflexão sobre restauração, esperança e graça."
/>

            {/* Próximo filme */}
            <section className="border-t border-yellow-500/20 pt-10">
              <p className="mb-3 text-xs font-bold tracking-[0.18em] text-[#d4af37] uppercase">
                Próximo Filme
              </p>

              <Link
                href="/vida-em-foco/corajosos"
                className="group block rounded-xl border border-white/10 bg-[#161616] p-6 transition hover:-translate-y-1 hover:border-yellow-500/50"
              >
                <h2 className="text-2xl font-bold text-white transition group-hover:text-[#d4af37]">
                  Corajosos
                </h2>

                <p className="mt-3 text-zinc-300">
                  Uma emocionante história sobre responsabilidade, fé e
                  compromisso com Deus no lar e na vida cristã.
                </p>

                <p className="mt-5 font-semibold text-[#d4af37]">
                  Ler reflexão →
                </p>
              </Link>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}