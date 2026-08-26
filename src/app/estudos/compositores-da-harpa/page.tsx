import type { Metadata } from "next";
import Link from "next/link";

import { estudos } from "@/data/estudos";

export const metadata: Metadata = {
  title: "Compositores da Harpa Cristã",
  description:
    "Conheça a história, a fé e o legado dos homens e mulheres que contribuíram para os hinos que edificam a Igreja até hoje.",
};

export default function CompositoresDaHarpaPage() {
  const compositores = estudos
    .filter(
      (estudo) =>
        estudo.serie === "Compositores da Harpa Cristã" &&
        estudo.ordemNaSerie !== undefined
    )
    .sort(
      (a, b) =>
        (a.ordemNaSerie ?? 0) - (b.ordemNaSerie ?? 0)
    );

  return (
    <main className="pagina-estudo">
      <article>
        <header className="cabecalho-estudo">
          <p className="categoria-estudo">
            Série Especial
          </p>

          <h1>Compositores da Harpa Cristã</h1>

          <p className="subtitulo-estudo">
            Conheça a história, a fé e o legado dos homens e mulheres
            que contribuíram para os hinos que edificam a Igreja até hoje.
          </p>
        </header>

        <section className="conteudo-estudo">
          <h2>Introdução</h2>

          <h3>A História por Trás dos Hinos que Cantamos</h3>

          <p>
            Ao longo dos cultos cristãos, milhões de vozes se unem para
            cantar hinos que atravessaram gerações. Suas melodias são
            familiares, suas letras estão gravadas na memória da Igreja,
            mas, paradoxalmente, suas origens são pouco conhecidas. Quem
            escreveu esses hinos? Em que contexto nasceram? Que lutas,
            dores, avivamentos e esperanças deram forma às palavras que
            ainda hoje proclamamos?
          </p>

          <p>
            Esta série nasce com o propósito de despertar o interesse pela
            história dos hinos cristãos, especialmente daqueles que compõem
            a Harpa Cristã. Não se trata apenas de música, mas de fé cantada,
            de teologia expressa em versos, de testemunhos que ecoam através
            do tempo. Cada hino carrega consigo a marca de seu autor e do
            mundo em que ele viveu.
          </p>

          <h3>O Legado da Reforma</h3>

          <p>
            Antes da Reforma Protestante, a música no culto cristão era, em
            grande parte, restrita ao clero e aos coros. O povo assistia, mas
            não participava. A fé era ouvida, não cantada pela congregação.
            Foi somente com a Reforma do século XVI que o canto congregacional
            passou a ocupar um lugar central, tornando-se um poderoso
            instrumento de ensino bíblico, adoração e proclamação do Evangelho.
          </p>

          <p>
            Ao longo desta série, o leitor será conduzido por uma linha
            cronológica, dos compositores mais antigos aos mais contemporâneos,
            sempre situados em seu contexto histórico mundial e eclesiástico.
            O objetivo não é esgotar o assunto, mas instigar: provocar
            curiosidade, despertar reverência e incentivar um mergulho mais
            profundo na história da Igreja e da música cristã.
          </p>

          <p>
            Este conteúdo, apresentado de forma introdutória no site, é uma
            preparação natural para um estudo mais amplo e aprofundado, que
            futuramente será reunido em formato de livro. Aqui, o convite é
            simples: olhar para os hinos que sempre cantamos com novos olhos,
            reconhecendo que eles são fruto da ação de Deus na história, por
            meio de vidas rendidas à Sua Palavra.
          </p>
        </section>

        <section className="indice-serie">
          <h2>Estudos da Série</h2>

          <div className="grid-serie">
            {compositores.map((estudo) => (
              <Link
                key={estudo.id}
                href={`/estudos/${estudo.slug}`}
                className="card-serie"
              >
                <span className="numero-serie">
                  {estudo.ordemNaSerie}
                </span>

                <div>
                  <h3>{estudo.titulo}</h3>
                  <p>{estudo.resumo}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}