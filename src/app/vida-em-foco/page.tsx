import type { Metadata } from "next";
import Link from "next/link";
import AreaIntroModal from "@/components/AreaIntroModal";

export const metadata: Metadata = {
  title: "Vida em Foco",
  description:
    "Conteúdos voltados à transformação de vidas, testemunhos, recomendações e recursos para o dia a dia cristão.",
};

const areas = [
  {
    titulo: "Vida e Restauração",
    descricao:
      "O caminho da libertação, da restauração e da permanência em Cristo através da obediência diária.",
    destaque: "Restauração",
    introducao:
  "Vida e Restauração é um espaço dedicado a reflexões sobre libertação, recuperação e perseverança na caminhada cristã. Aqui, a Palavra de Deus encontra as experiências reais de quem enfrenta batalhas, recomeços e escolhas diárias. Mais do que falar sobre mudança, esta seção procura refletir sobre o caminho de permanecer firme, reconhecendo que a restauração também é construída no cotidiano, através da fé, da obediência e da dependência de Cristo.",
    estudos: [
      {
        titulo: "Liberto por Cristo, Sustentado pela Obediência",
        href: "/vida-em-foco/liberto-por-cristo",
      },
      {
        titulo: "O processo da recaída no cotidiano do indivíduo",
        href: "/vida-em-foco/quando-a-recaida-comeca",
      },
    ],
  },
  {
    titulo: "Filmes que Edificam",
    descricao:
      "Recomendações de filmes com mensagens de esperança, fé e transformação.",
    destaque: "Cinema e fé",
    introducao:
  "Filmes que Edificam é um espaço onde histórias contadas pelo cinema se tornam pontos de partida para refletirmos sobre a vida e a fé cristã. Não se trata apenas de recomendar bons filmes, mas de olhar para seus personagens, conflitos, escolhas e consequências à luz de princípios bíblicos. Histórias sobre família, perdão, responsabilidade, restauração, esperança e fé podem nos levar a enxergar questões que também fazem parte da nossa própria caminhada.",
    estudos: [
      {
        titulo: "O Retorno de Ben",
        href: "/vida-em-foco/o-retorno-de-ben",
      },
      {
        titulo: "Corajosos",
        href: "/vida-em-foco/corajosos",
      },
    ],
  },
  {
    titulo: "Livros que Edificam",
    descricao:
      "Leituras que inspiram, ensinam e fortalecem a caminhada cristã.",
    destaque: "Leitura",
    introducao:
    "Livros que Edificam é um espaço dedicado a obras que atravessam o tempo e continuam falando à caminhada cristã. Mais do que apresentar livros, queremos refletir sobre as verdades, perguntas e experiências que suas páginas despertam, relacionando a leitura com a fé e com a Palavra de Deus. São histórias e ensinamentos que nos convidam a pensar, amadurecer e prosseguir em nossa jornada com Cristo.",
    estudos: [
      {
        titulo: "O Peregrino — John Bunyan",
        href: "/vida-em-foco/o-peregrino",
      },
    ],
  },
  {
    titulo: "Cuidando da Criação",
    descricao:
      "Reflexões sobre sustentabilidade, responsabilidade ambiental e o cuidado com a obra de Deus.",
    destaque: "Responsabilidade",
     introducao:
    "Cuidando da Criação é um espaço para refletirmos sobre nossa responsabilidade diante do mundo que Deus criou. A fé cristã não diz respeito apenas à nossa relação com Deus e com o próximo, mas também à maneira como lidamos com aquilo que Ele colocou sob nossos cuidados. Aqui queremos olhar para questões ambientais e para nossas escolhas cotidianas à luz das Escrituras, entendendo que cuidar da criação também pode ser uma expressão de gratidão, responsabilidade e obediência ao Criador.",
    estudos: [
      {
        titulo: "O Cristão e o Cuidado com a Criação",
        href: "/vida-em-foco/o-cristao-e-o-cuidado-com-a-criacao",
      },
    ],
  },
  {
    titulo: "Fé e Tecnologia",
    descricao:
      "Reflexões bíblicas sobre tecnologia, Inteligência Artificial e os desafios da fé no mundo digital.",
    destaque: "Mundo digital",
     introducao:
    "Fé e Tecnologia é um espaço para refletirmos sobre as transformações provocadas pela tecnologia à luz das Escrituras. Novas ferramentas mudam a maneira como trabalhamos, nos comunicamos, aprendemos e até produzimos conteúdo cristão, trazendo também novas perguntas e responsabilidades. Aqui, não queremos tratar a tecnologia como inimiga da fé, nem aceitá-la sem reflexão. Queremos examinar seus usos, desafios e consequências com sabedoria e discernimento, lembrando que a tecnologia muda, mas os princípios da Palavra de Deus permanecem.",
    estudos: [
      {
        titulo: "Inteligência Artificial e Ética Cristã",
        href: "/vida-em-foco/inteligencia-artificial-e-etica-crista",
      },
    ],
  },
];

export default function VidaEmFocoPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0d]">
      {/* Hero */}
      <section className="border-b border-yellow-500/20 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-sm font-bold tracking-[0.25em] text-[#d4af37] uppercase">
            Jesus na Web
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight text-white sm:text-6xl">
            Vida em Foco
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300 sm:text-xl">
            Conteúdos voltados à transformação de vidas, testemunhos,
            recomendações e recursos para o dia a dia cristão.
          </p>

          <div className="mt-10 h-px max-w-24 bg-[#d4af37]" />
        </div>
      </section>

      {/* Conteúdo */}
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <header className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-bold tracking-[0.2em] text-[#d4af37] uppercase">
              Caminhos
            </p>

            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Fé para a vida real
            </h2>

            <p className="mt-5 leading-8 text-zinc-300">
              Reflexões que aproximam a Palavra de Deus das escolhas,
              desafios e experiências que fazem parte da nossa caminhada.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2">
            {areas.map((area, index) => (
              <article
                key={area.titulo}
                className={`flex flex-col rounded-xl border border-white/10 bg-[#161616] p-7 transition  hover:border-yellow-500/50 ${
                  index === areas.length - 1 ? "md:col-span-2" : ""
                }`}
              >
                <div className="mb-8 flex items-center justify-between gap-4">
                  <p className="text-xs font-bold tracking-[0.18em] text-[#d4af37] uppercase">
                    {area.destaque}
                  </p>

                  <span className="text-sm text-zinc-600">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
                  {area.titulo}
                </h3>

                <p className="mb-7 leading-7 text-zinc-300">
                  {area.descricao}
                </p>

                {/* Índice */}
                <div className="mt-auto border-t border-yellow-500/20 pt-5">
                  <p className="mb-4 text-xs font-bold tracking-[0.18em] text-[#d4af37] uppercase">
                    {area.introducao && (
  <AreaIntroModal
    titulo={area.titulo}
    destaque={area.destaque}
    introducao={area.introducao}
  />
)}
                    Índice
                  </p>

                  <div className="flex flex-col gap-3">
                    {area.estudos.map((estudo, estudoIndex) => (
                      <Link
                        key={estudo.href}
                        href={estudo.href}
                        className="group flex items-start gap-3 text-zinc-200 transition hover:text-[#d4af37]"
                      >
                        <span className="text-sm text-zinc-500">
                          {estudoIndex + 1}.
                        </span>

                        <span>{estudo.titulo}</span>

                        <span
                          aria-hidden="true"
                          className="ml-auto text-[#d4af37] opacity-0 transition group-hover:opacity-100"
                        >
                          →
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}