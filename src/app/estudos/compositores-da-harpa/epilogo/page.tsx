import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Muito Além das Biografias | Compositores da Harpa Cristã",
  description:
    "Deus e Seus Instrumentos de Louvor — encerramento da primeira etapa da série Compositores da Harpa Cristã.",
};

export default function EpilogoCompositoresPage() {
  return (
    <main className="pagina-estudo">
      <article>
        <header className="cabecalho-estudo">
          <p className="categoria-estudo">
            Compositores da Harpa Cristã · Epílogo
          </p>

          <h1>Muito Além das Biografias</h1>

          <p className="subtitulo-estudo">
            Deus e Seus Instrumentos de Louvor
          </p>
        </header>

        <section className="conteudo-estudo">
          <h2>📖 Encerramento da Primeira Etapa</h2>

          <p>
            Ao chegarmos ao final desta primeira etapa da seção{" "}
            <strong>Compositores da Harpa Cristã</strong>, queremos,
            antes de tudo, render graças ao Senhor por levantar homens
            e mulheres que, ao longo dos séculos, dedicaram seus talentos
            para proclamar o Evangelho através da música.
          </p>

          <p>
            Nesta série procuramos conhecer um pouco da vida daqueles
            que marcaram profundamente a história da música cristã,
            especialmente a partir da Reforma Protestante, período em
            que o canto congregacional passou a ocupar um lugar central
            na adoração do povo de Deus.
          </p>

          <p>
            Entretanto, seria impossível reunir em uma única série todos
            os servos de Deus que contribuíram para esse legado. Muitos
            outros nomes exerceram influência extraordinária na formação
            da hinologia cristã e merecem nossa gratidão e respeito.
          </p>

          <h2>🎶 Servos que Deus Levantou</h2>

          <p>
            Entre eles podemos citar, por exemplo, Philip Paul Bliss,
            George Bennard, Charles H. Gabriel, William J. Kirkpatrick,
            Daniel B. Towner, James McGranahan, Elisha A. Hoffman,
            Ira D. Sankey, James Rowe, John R. Sweney, Ada Blenkhorn,
            Mary Dagworthy James, Thomas O. Chisholm, Civilla D. Martin,
            Alfred H. Ackley, B. B. McKinney, Oswald J. Smith, além de
            muitos outros compositores, poetas, tradutores e músicos que
            Deus usou poderosamente ao longo dos séculos.
          </p>

          <p>
            Cada um deles contribuiu de maneira singular para que milhões
            de cristãos encontrassem, através dos hinos, palavras de
            consolo, esperança, arrependimento, fé e adoração.
          </p>

          <h2>🎼 Muito Além das Biografias</h2>

          <p>
            Contudo, o objetivo desta seção nunca foi construir um catálogo
            completo de biografias. Nosso propósito sempre foi muito maior.
          </p>

          <p>
            A Bíblia nos ensina que toda boa dádiva vem do Senhor
            (Tiago 1:17) e que tudo deve ser feito para a glória de Deus
            (1 Coríntios 10:31).
          </p>

          <p>
            Os compositores foram apenas instrumentos nas mãos do Supremo
            Compositor, aquele que inspirou corações, concedeu dons e
            sustentou Seus servos em meio às lutas da vida.
          </p>

          <blockquote>
            <p>
              "Cantai ao Senhor um cântico novo; cantai ao Senhor, todos
              os moradores da terra."
            </p>
            <cite>Salmo 96:1</cite>
          </blockquote>

          <blockquote>
            <p>
              "Louvai ao Senhor, porque é bom cantar louvores ao nosso Deus."
            </p>
            <cite>Salmo 147:1</cite>
          </blockquote>

          <p>
            A música sempre ocupou um lugar especial na história do povo
            de Deus. Desde os cânticos de Moisés, passando pelos salmos de
            Davi, até os hinos entoados pela Igreja Primitiva, o louvor
            sempre foi uma resposta de gratidão, reverência e adoração ao
            Senhor.
          </p>

          <p>
            Por isso, nosso desejo é que cada biografia apresentada aqui
            conduza o leitor não à admiração pelo homem, mas à adoração
            daquele que chamou, capacitou e sustentou esses servos durante
            sua caminhada.
          </p>

          <blockquote>
            <p>
              Toda honra, toda glória e todo louvor pertencem
              exclusivamente ao nosso Senhor Jesus Cristo.
            </p>
          </blockquote>

          <h2>📚 O Que Veremos a Seguir</h2>

          <p>
            Encerramos aqui esta primeira etapa da história dos grandes
            compositores cristãos.
          </p>

          <p>
            A partir da próxima seção iniciaremos uma nova jornada,
            desta vez estudando os compositores presentes na{" "}
            <strong>Harpa Cristã</strong>, um a um.
          </p>

          <p>
            Conheceremos suas histórias, o contexto em que viveram,
            as circunstâncias que deram origem aos seus hinos e as
            mensagens bíblicas presentes em cada composição.
          </p>

          <p>
            Esperamos que esse estudo ajude você não apenas a conhecer
            melhor os autores dos hinos que canta em sua igreja, mas,
            principalmente, a compreender ainda mais a fidelidade de Deus
            ao longo da história.
          </p>

          <p>
            Que o Senhor continue falando ao seu coração por meio de Sua
            Palavra e também através dos hinos que exaltam o nome de Cristo.
          </p>

          <blockquote>
            <p>
              "Tudo quanto tem fôlego louve ao Senhor. Louvai ao Senhor!"
            </p>
            <cite>Salmo 150:6</cite>
          </blockquote>
        </section>

       <nav className="navegacao-serie">
  <p className="nome-serie">
    Série: Compositores da Harpa Cristã
  </p>

  <div className="links-serie">
    <div>
      <Link href="/estudos/philip-bliss">
        ← Philip Paul Bliss
      </Link>
    </div>

    <div />
  </div>
</nav>
      </article>
    </main>
  );
}