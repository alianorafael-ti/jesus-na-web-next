import type { Metadata } from "next";
import Link from "next/link";

import { estudos } from "@/data/estudos";

export const metadata: Metadata = {
  title: "Estudos Bíblicos",
  description:
    "Estudos das Escrituras para aprofundar o conhecimento da Palavra de Deus e aplicar suas verdades à vida cristã.",
};

export default function EstudosBiblicosPage() {
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

  return (
    <main className="pagina-estudo">
      <article>
        <header className="cabecalho-estudo">
          <p className="categoria-estudo">Série Especial</p>

          <h1>Estudos Bíblicos</h1>

          <p className="subtitulo-estudo">
            Examinando as Escrituras para compreender a verdade, fortalecer a fé
            e viver segundo a Palavra de Deus.
          </p>
        </header>

        <section className="conteudo-estudo">
          <h2>📖 Quando a Bíblia Fala</h2>

          <p>
            A Bíblia não foi dada apenas para ocupar um lugar em nossas casas,
            ser aberta durante os cultos ou servir como fonte de frases
            inspiradoras.
          </p>

          <p>
            Ela é a Palavra de Deus e, por meio dela, somos confrontados com
            verdades que alcançam nossa fé, nossas escolhas e nossa maneira de
            viver.
          </p>

          <blockquote>
            <p>
              &quot;Lâmpada para os meus pés é tua palavra e luz, para o meu
              caminho.&quot;
            </p>
            <cite>Salmos 119:105</cite>
          </blockquote>

          <h2>🔎 Examinar as Escrituras</h2>

          <p>
            Estudar a Bíblia exige mais do que procurar versículos que confirmem
            aquilo em que já acreditamos.
          </p>

          <p>
            Precisamos permitir que a própria Escritura examine nossas ideias,
            confronte nossas tradições e, quando necessário, corrija nossa
            compreensão.
          </p>

          <p>
            Isso significa observar o contexto, comparar passagens e reconhecer
            com humildade que algumas questões exigem estudo cuidadoso.
          </p>

          <blockquote>
            <p>
              &quot;Examinai tudo. Retende o bem.&quot;
            </p>
            <cite>1 Tessalonicenses 5:21</cite>
          </blockquote>

          <h2>✝️ Cristo no Centro</h2>

          <p>
            O conhecimento bíblico possui um propósito maior do que simplesmente
            acumular informações.
          </p>

          <p>
            As Escrituras nos conduzem a Cristo, revelam a obra de Deus na
            história da redenção e nos ensinam como viver diante dele.
          </p>

          <blockquote>
            <p>
              &quot;Examinais as Escrituras, porque vós cuidais ter nelas a vida
              eterna, e são elas que de mim testificam.&quot;
            </p>
            <cite>João 5:39</cite>
          </blockquote>

          <p>
            Por isso, todo estudo bíblico precisa nos levar além da curiosidade.
            A verdade que conhecemos deve alcançar também a maneira como vivemos.
          </p>

          <h2>🌱 Conhecimento que Produz Transformação</h2>

          <p>
            Nesta série, examinaremos diferentes temas das Escrituras, inclusive
            assuntos que despertam perguntas, debates e interpretações
            diferentes entre os cristãos.
          </p>

          <p>
            Nosso compromisso será voltar continuamente ao texto bíblico,
            procurando compreender aquilo que ele realmente ensina.
          </p>

          <p>
            Não estudaremos para simplesmente vencer discussões, mas para crescer
            no conhecimento de Deus, fortalecer nossa fé e aprender a obedecer à
            sua Palavra.
          </p>

          <blockquote>
            <p>
              &quot;E sede cumpridores da palavra e não somente ouvintes,
              enganando-vos com falsos discursos.&quot;
            </p>
            <cite>Tiago 1:22</cite>
          </blockquote>

          <h2>🙏 Uma Jornada pelas Escrituras</h2>

          <p>
            Cada estudo desta série será um convite para abrir a Bíblia,
            fazer perguntas e permitir que a Palavra tenha a última palavra.
          </p>

          <p>
            Alguns assuntos serão simples. Outros exigirão uma investigação mais
            profunda. Em todos eles, porém, permanecerá o mesmo princípio:
            nossa autoridade não está em opiniões humanas, mas nas Escrituras.
          </p>

          <p>
            Que cada estudo aumente não apenas aquilo que sabemos sobre a Bíblia,
            mas também nosso desejo de conhecer, amar e seguir Jesus Cristo.
          </p>

          <blockquote>
            <p>
              Quando a Bíblia fala, queremos ouvi-la. Quando ela nos confronta,
              queremos obedecer. E quando ela aponta para Cristo, queremos
              segui-lo.
            </p>
          </blockquote>
        </section>

        <section className="indice-serie">
          <h2>Estudos da Série</h2>

          <div className="grid-serie">
            {estudosBiblicos.map((estudo) => (
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