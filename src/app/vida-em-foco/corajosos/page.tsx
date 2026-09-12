import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Corajosos | Filmes que Edificam",
  description:
    "Uma reflexão cristã sobre Corajosos, fé, família, responsabilidade e compromisso diante de Deus.",
};

export default function CorajososPage() {
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
            Corajosos
          </h1>

          <p className="mt-6 text-xl leading-8 text-zinc-300">
            Uma história sobre fé, responsabilidade e compromisso diante de
            Deus.
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <article className="px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl">
          {/* Informações do filme */}
          <section className="mb-12 rounded-xl border border-white/10 bg-[#161616] p-6 sm:p-7">
            <p>
              <strong className="text-white">Título original:</strong>{" "}
              Courageous
            </p>

            <p className="mt-2">
              <strong className="text-white">Direção:</strong> Alex Kendrick{" "}
              <span className="text-zinc-600">|</span>{" "}
              <strong className="text-white">Ano:</strong> 2011
            </p>

            <p className="mt-2">
              <strong className="text-white">Categoria:</strong> Drama Cristão /
              Família
            </p>
          </section>

          <blockquote className="mb-12 border-l-2 border-[#d4af37] pl-6 text-xl italic leading-9 text-zinc-300">
            “Escolhei hoje a quem sirvais... Eu e a minha casa serviremos ao
            Senhor.”
            <footer className="mt-3 text-sm not-italic text-[#d4af37]">
              Josué 24:15
            </footer>
          </blockquote>

          <div className="space-y-12 leading-8 text-zinc-300">
            {/* Sinopse */}
            <section>
              <h2 className="mb-5 text-2xl font-bold text-white sm:text-3xl">
                Sinopse
              </h2>

              <p>
                Após uma grande tragédia, quatro homens são confrontados com
                uma pergunta que mudará suas vidas: que tipo de pais, maridos e
                servos de Deus eles realmente desejam ser?
              </p>

              <p className="mt-5">
                Enquanto enfrentam desafios pessoais, familiares e espirituais,
                eles descobrem que a verdadeira coragem não consiste apenas em
                enfrentar o perigo, mas em assumir a responsabilidade que Deus
                confiou a cada um deles.
              </p>

              <p className="mt-5">
                A partir dessa compreensão, decidem firmar uma resolução diante
                do Senhor, comprometendo-se a viver de acordo com os princípios
                da Palavra de Deus.
              </p>

              <p className="mt-5">
                Mais do que um filme sobre paternidade,{" "}
                <strong className="text-white">Corajosos</strong> é um chamado
                para que todo cristão viva uma fé prática, perseverante e
                transformadora.
              </p>
            </section>

            {/* Muito Mais que um Filme */}
            <section>
              <h2 className="mb-5 text-2xl font-bold text-white sm:text-3xl">
                Muito Mais que um Filme
              </h2>

              <p>
                Corajosos apresenta homens que trabalham diariamente protegendo
                outras pessoas, enfrentando perigos e situações difíceis.
              </p>

              <p className="mt-5">
                Entretanto, eles começam a perceber que os maiores desafios de
                suas vidas não estão apenas nas ruas ou em seu trabalho, mas
                dentro de suas próprias casas.
              </p>

              <p className="mt-5">
                Ser um bom profissional, sustentar uma família ou demonstrar
                coragem diante do perigo não substitui a responsabilidade de
                amar, orientar, proteger e conduzir espiritualmente aqueles que
                Deus colocou sob seus cuidados.
              </p>

              <p className="mt-5">
                O filme nos lembra de que podemos parecer fortes diante das
                pessoas e, ainda assim, estar negligenciando áreas importantes
                de nossa vida espiritual e familiar.
              </p>
            </section>

            {/* Trailer */}
            <section>
              <h2 className="mb-5 text-2xl font-bold text-white sm:text-3xl">
                Assista ao Trailer
              </h2>

              <p>
                Confira o trailer e conheça um pouco desta história sobre fé,
                família, responsabilidade e transformação.
              </p>

              <div className="mt-7 overflow-hidden rounded-xl border border-white/10 bg-black">
                <div className="aspect-video">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/-O4VmjmIL5U"
                    title="Trailer do filme Corajosos"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>

              <div className="mt-5 text-center">
                <a
                  href="https://www.youtube.com/watch?v=-O4VmjmIL5U"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#d4af37] transition hover:text-yellow-300"
                >
                  ▶ Assistir ao trailer no YouTube
                </a>
              </div>
            </section>

            {/* Devocional */}
            <section>
              <h2 className="mb-5 text-2xl font-bold text-white sm:text-3xl">
                Devocional — Uma Resolução Diante de Deus
              </h2>

              <p>
                Há momentos em que Deus fala tão profundamente ao nosso coração
                que já não basta apenas concordar com Sua Palavra.
              </p>

              <p className="mt-5">É preciso tomar uma decisão.</p>

              <p className="mt-5">
                Na Bíblia encontramos homens e mulheres que marcaram suas vidas
                por meio de resoluções espirituais.
              </p>

              <p className="mt-5">
                Daniel resolveu não se contaminar com as iguarias do rei.
              </p>

              <blockquote className="mt-6 border-l border-white/20 pl-5 italic text-zinc-400">
                “E Daniel assentou no seu coração não se contaminar com a
                porção do manjar do rei, nem com o vinho que ele bebia.”
                <footer className="mt-2 text-sm not-italic text-[#d4af37]">
                  Daniel 1:8
                </footer>
              </blockquote>

              <p className="mt-7">
                Josué, depois de acompanhar a fidelidade de Deus durante tantos
                anos, reuniu o povo e declarou publicamente qual seria a decisão
                de sua família.
              </p>

              <blockquote className="mt-6 border-l border-white/20 pl-5 italic text-zinc-400">
                “Porém, se vos parece mal aos vossos olhos servir ao Senhor,
                escolhei hoje a quem sirvais... Porém eu e a minha casa
                serviremos ao Senhor.”
                <footer className="mt-2 text-sm not-italic text-[#d4af37]">
                  Josué 24:15
                </footer>
              </blockquote>

              <p className="mt-7">
                Daniel e Josué compreenderam que servir ao Senhor exige mais do
                que boas intenções. Exige um compromisso firmado no coração.
              </p>

              <p className="mt-5">
                É exatamente essa a mensagem central de{" "}
                <strong className="text-white">Corajosos</strong>.
              </p>

              <p className="mt-5">
                A resolução apresentada no filme não é um documento com poderes
                especiais nem uma promessa feita na força humana.
              </p>

              <p className="mt-5">
                Ela representa uma decisão sincera de viver para a glória de
                Deus, reconhecendo que somente o Senhor pode sustentar aqueles
                que desejam permanecer fiéis.
              </p>

              <p className="mt-5">
                Todos nós fazemos planos. Desejamos orar mais, amar mais, servir
                mais e obedecer mais.
              </p>

              <p className="mt-5">
                Porém, muitas vezes essas intenções ficam apenas no campo dos
                desejos.
              </p>

              <p className="mt-5">
                A resolução transforma um desejo em um compromisso diante de
                Deus.
              </p>

              <p className="mt-5">
                Isso não significa que nunca falharemos. Significa que, quando
                tropeçarmos, voltaremos ao Senhor, lembrando-nos da decisão que
                tomamos de caminhar ao Seu lado.
              </p>
            </section>

            {/* Aplicação */}
            <section>
              <h2 className="mb-5 text-2xl font-bold text-white sm:text-3xl">
                Aplicação para Nossa Vida
              </h2>

              <p>
                Talvez Deus esteja chamando você, hoje, não apenas para assistir
                a este filme, mas para refletir sobre uma pergunta muito
                importante:
              </p>

              <blockquote className="my-7 border-l-2 border-[#d4af37] pl-6 text-xl italic leading-9 text-zinc-300">
                Existe alguma área da sua vida em que está faltando uma
                resolução?
              </blockquote>

              <div className="space-y-3">
                <p>Pode ser na sua comunhão com Deus.</p>
                <p>Pode ser na sua família.</p>
                <p>Pode ser no seu testemunho.</p>
                <p>Pode ser no perdão.</p>
                <p>Pode ser na santidade.</p>
                <p>Ou talvez no serviço cristão.</p>
              </div>

              <p className="mt-7">
                Deus continua procurando homens e mulheres dispostos a viver
                uma fé verdadeira, não apenas de palavras, mas de atitudes.
              </p>

              <blockquote className="mt-6 border-l border-white/20 pl-5 italic text-zinc-400">
                “Sede cumpridores da palavra e não somente ouvintes,
                enganando-vos a vós mesmos.”
                <footer className="mt-2 text-sm not-italic text-[#d4af37]">
                  Tiago 1:22
                </footer>
              </blockquote>
            </section>

            {/* Reflexão final */}
            <section>
              <h2 className="mb-5 text-2xl font-bold text-white sm:text-3xl">
                Reflexão Final
              </h2>

              <p>Que este filme seja mais do que um momento de emoção.</p>

              <p className="mt-5">
                Que ele seja um instrumento para levá-lo a renovar seu
                compromisso com Cristo, lembrando que a verdadeira coragem
                nasce quando decidimos obedecer ao Senhor, custe o que custar.
              </p>

              <blockquote className="mt-7 border-l-2 border-[#d4af37] pl-6 text-xl italic leading-9 text-zinc-300">
                A maior demonstração de coragem não é enfrentar os perigos
                deste mundo, mas permanecer fiel Àquele que venceu o mundo.
              </blockquote>
            </section>

            <ShareButton
              title="Corajosos | Jesus na Web"
              text="Uma reflexão sobre fé, família, responsabilidade e compromisso diante de Deus."
            />

            {/* Continuação */}
            <section className="border-t border-yellow-500/20 pt-10">
              <p className="mb-3 text-xs font-bold tracking-[0.18em] text-[#d4af37] uppercase">
                Filmes que Edificam
              </p>

              <div className="rounded-xl border border-white/10 bg-[#161616] p-6">
                <h2 className="text-2xl font-bold text-white">Em Breve</h2>

                <p className="mt-3 text-zinc-300">
                  Continue acompanhando a série{" "}
                  <strong className="text-white">Filmes que Edificam</strong> e
                  descubra novas histórias que fortalecem a fé, inspiram a
                  caminhada cristã e apontam para Cristo.
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