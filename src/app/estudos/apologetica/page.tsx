import type { Metadata } from "next";
import Link from "next/link";

import { estudos } from "@/data/estudos";

export const metadata: Metadata = {
  title: "Apologética Cristã",
  description:
    "Estudos para compreender, defender e apresentar as razões da fé cristã com amor, sabedoria e firmeza.",
};

export default function ApologeticaPage() {
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

  return (
    <main className="pagina-estudo">
      <article>
        <header className="cabecalho-estudo">
          <p className="categoria-estudo">Série Especial</p>

          <h1>Apologética Cristã</h1>

          <p className="subtitulo-estudo">
            Compreendendo e apresentando as razões da fé cristã com amor,
            sabedoria e firmeza.
          </p>
        </header>

        <section className="conteudo-estudo">
          <h2>🛡️ O Chamado para Defender a Fé</h2>

          <p>
            Vivemos em uma geração cercada por perguntas.
          </p>

          <p>
            Alguns questionam a existência de Deus. Outros duvidam da
            confiabilidade das Escrituras. Há aqueles que enxergam Jesus apenas
            como um personagem histórico, enquanto muitos acreditam que todas as
            religiões conduzem ao mesmo caminho.
          </p>

          <p>
            Diante de tantas vozes, o cristão é chamado não apenas a crer, mas
            também a compreender as razões da sua fé.
          </p>

          <p>
            A apologética cristã nasce exatamente nesse contexto. Seu propósito
            não é alimentar discussões vazias nem produzir orgulho intelectual,
            mas apresentar a verdade do Evangelho com amor, sabedoria e firmeza.
          </p>

          <blockquote>
            <p>
              &quot;Antes, santificai a Cristo como Senhor em vosso coração; e
              estai sempre preparados para responder a todo aquele que vos pedir
              a razão da esperança que há em vós.&quot;
            </p>
            <cite>1 Pedro 3:15</cite>
          </blockquote>

          <h2>📖 Mais do que Vencer Debates</h2>

          <p>
            Muitas pessoas imaginam que apologética significa apenas discutir
            religião. Entretanto, a verdadeira apologética bíblica possui um
            propósito muito mais elevado.
          </p>

          <p>
            Ela existe para glorificar a Cristo, fortalecer a fé dos cristãos e
            remover obstáculos que impedem muitas pessoas de ouvir o Evangelho.
          </p>

          <p>
            O objetivo não é vencer debates, mas apontar para Aquele que é o
            Caminho, a Verdade e a Vida.
          </p>

          <p>
            Conhecimento sem amor produz arrogância, mas conhecimento submetido
            a Cristo torna-se uma poderosa ferramenta para servir ao Reino de
            Deus.
          </p>

          <h2>🔥 Fé e Razão Caminham Juntas</h2>

          <p>
            O cristianismo não é uma fé construída sobre mitos ou superstições.
            Desde os tempos bíblicos, Deus tem se revelado na história, nas
            Escrituras e principalmente através da pessoa de Jesus Cristo.
          </p>

          <p>
            A fé cristã não exige que abandonemos a razão. Pelo contrário, ela
            convida o ser humano a examinar, refletir e conhecer a verdade.
          </p>

          <blockquote>
            <p>
              &quot;Conhecereis a verdade, e a verdade vos libertará.&quot;
            </p>
            <cite>João 8:32</cite>
          </blockquote>

          <p>
            Quanto mais investigamos honestamente as evidências da fé cristã,
            mais percebemos que Deus não teme perguntas sinceras.
          </p>

          <h2>🌎 Por Que Estudar Apologética?</h2>

          <p>
            Nesta série você encontrará estudos destinados a responder algumas
            das perguntas mais importantes levantadas contra a fé cristã.
          </p>

          <p>Vamos analisar temas como:</p>

          <ul>
            <li>A existência de Deus;</li>
            <li>A confiabilidade da Bíblia;</li>
            <li>A historicidade da ressurreição de Cristo;</li>
            <li>Ciência e fé;</li>
            <li>O problema do sofrimento;</li>
            <li>Seitas e falsas doutrinas;</li>
            <li>As principais objeções ao cristianismo.</li>
          </ul>

          <p>
            Cada estudo será desenvolvido com base nas Escrituras, na história
            e em evidências confiáveis, sempre mantendo Cristo no centro de toda
            argumentação.
          </p>

          <h2>🙏 Uma Jornada de Crescimento</h2>

          <p>
            Nosso desejo não é apenas transmitir informação.
          </p>

          <p>
            Queremos fortalecer sua confiança na Palavra de Deus, encorajá-lo a
            permanecer firme diante dos desafios da fé e ajudá-lo a proclamar o
            Evangelho com convicção e graça.
          </p>

          <p>
            A apologética cristã não começa em uma biblioteca nem termina em um
            debate. Ela começa aos pés da cruz e conduz o coração à adoração.
          </p>

          <blockquote>
            <p>
              Toda verdade pertence a Deus, e toda verdade genuína aponta para
              Cristo.
            </p>
          </blockquote>
        </section>

        <section className="indice-serie">
          <h2>Estudos da Série</h2>

          <div className="grid-serie">
            {apologetica.map((estudo) => (
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