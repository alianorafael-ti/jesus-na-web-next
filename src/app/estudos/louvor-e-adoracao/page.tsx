import type { Metadata } from "next";
import Link from "next/link";

import { estudos } from "@/data/estudos";

export const metadata: Metadata = {
  title: "Louvor e Adoração",
  description:
    "Estudos bíblicos sobre o verdadeiro significado do louvor, da adoração e do serviço dedicado à glória de Deus.",
};

export default function LouvorEAdoracaoPage() {
  const estudosLouvorEAdoracao = estudos
    .filter(
      (estudo) =>
        estudo.serie === "Louvor e Adoração" &&
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

          <h1>Louvor e Adoração</h1>

          <p className="subtitulo-estudo">
            Compreendendo o verdadeiro significado do louvor e de uma vida
            dedicada à glória de Deus.
          </p>
        </header>

        <section className="conteudo-estudo">
          <p>
            Desde os primeiros capítulos da Bíblia até a adoração eterna
            descrita em Apocalipse, o louvor ocupa um lugar central no
            relacionamento entre Deus e o Seu povo.
          </p>

          <p>
            Embora muitas pessoas associem o louvor apenas à música, as
            Escrituras revelam que ele é muito mais do que cantar. O verdadeiro
            louvor nasce de um coração transformado e se manifesta em uma vida
            dedicada à glória de Deus.
          </p>

          <p>
            Louvar é reconhecer quem Deus é, anunciar Suas maravilhas, agradecer
            por Sua graça e viver em obediência à Sua Palavra.
          </p>

          <blockquote>
            <p>
              &quot;Eu te louvarei, Senhor, de todo o meu coração; contarei
              todas as tuas maravilhas.&quot;
            </p>
            <cite>Salmos 9:1</cite>
          </blockquote>

          <h2>📖 Muito Além da Música</h2>

          <p>
            A música sempre fez parte da adoração ao Senhor, mas ela representa
            apenas uma das formas de expressarmos nosso amor por Deus.
          </p>

          <p>
            Quando servimos ao próximo, anunciamos o Evangelho, utilizamos
            nossos dons para o Reino e vivemos de maneira santa, também estamos
            oferecendo louvor ao Senhor.
          </p>

          <p>
            O verdadeiro adorador glorifica a Deus não apenas com os lábios,
            mas também com suas atitudes.
          </p>

          <h2>🎼 O Que Você Encontrará Nesta Série</h2>

          <p>
            Ao longo desta série estudaremos como Deus estabeleceu o louvor em
            diferentes momentos da história bíblica.
          </p>

          <ul>
            <li>O ministério dos levitas;</li>
            <li>Davi e a organização do louvor em Israel;</li>
            <li>Os Salmos e sua riqueza espiritual;</li>
            <li>Os principais personagens ligados ao louvor;</li>
            <li>O louvor no Novo Testamento;</li>
            <li>O significado da verdadeira adoração.</li>
          </ul>

          <p>
            Cada estudo será fundamentado nas Escrituras, buscando mostrar que
            o louvor sempre teve como objetivo glorificar exclusivamente a
            Deus.
          </p>

          <h2>🙏 Um Convite à Adoração</h2>

          <p>
            Nosso desejo é que esta série não apenas aumente seu conhecimento
            bíblico, mas fortaleça sua comunhão com o Senhor.
          </p>

          <p>
            Que, ao compreender o verdadeiro significado do louvor, você seja
            encorajado a viver cada dia para a glória de Deus.
          </p>

          <blockquote>
            <p>
              O verdadeiro louvor não é apenas aquilo que cantamos, mas a
              maneira como vivemos diante de Deus.
            </p>
          </blockquote>
        </section>

        <section className="indice-serie">
          <h2>Estudos da Série</h2>

          <div className="grid-serie">
            {estudosLouvorEAdoracao.map((estudo) => (
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