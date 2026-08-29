import type { Metadata } from "next";
import Link from "next/link";

import { estudos } from "@/data/estudos";

export const metadata: Metadata = {
  title: "História da Igreja",
  description:
    "Uma caminhada pela História da Igreja entre a fidelidade de Deus e as marcas da fragilidade humana.",
};

export default function HistoriaDaIgrejaPage() {
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

  return (
    <main className="pagina-estudo">
      <article>
        <header className="cabecalho-estudo">
          <p className="categoria-estudo">Série Especial</p>

          <h1>História da Igreja</h1>

          <p className="subtitulo-estudo">
            Entre a fidelidade de Deus e as marcas da fragilidade humana
          </p>
        </header>

        <section className="conteudo-estudo">
          <blockquote>
            <p>
              &quot;Lembra-te dos dias da antiguidade, atenta para os anos de
              muitas gerações; pergunta a teu pai, e ele te informará; aos teus
              anciãos, e eles te dirão.&quot;
            </p>
            <cite>Deuteronômio 32:7</cite>
          </blockquote>

          <p>
            Estudar a História da Igreja é muito mais do que conhecer datas,
            nomes, concílios, guerras, reis, papas, reformadores e movimentos
            religiosos. É observar a caminhada de homens e mulheres que, ao
            longo dos séculos, professaram a fé cristã em meio às
            transformações do mundo.
          </p>

          <p>
            Essa história possui momentos de extraordinária coragem e
            fidelidade. Homens e mulheres enfrentaram perseguições,
            atravessaram fronteiras, traduziram as Escrituras, defenderam
            aquilo em que acreditavam e, em muitos casos, entregaram a própria
            vida por causa de sua fé.
          </p>

          <p>
            Mas essa mesma história também possui capítulos dolorosos.
          </p>

          <p>
            Houve períodos em que interesses políticos se confundiram com
            interesses religiosos; momentos em que a busca pelo poder falou
            mais alto que o serviço; guerras foram travadas entre povos que se
            declaravam cristãos; autoridades espirituais envolveram-se
            profundamente nas disputas dos governantes; e instituições que
            deveriam apontar para Cristo também carregaram as marcas da
            ambição e da fragilidade humana.
          </p>

          <p>
            Por isso, estudar a História da Igreja exige discernimento.
          </p>

          <p>
            Não estamos estudando uma história de homens perfeitos.
          </p>

          <p>
            Estamos estudando a história de seres humanos imperfeitos que
            viveram diante de um Deus perfeito.
          </p>

          <h2>A Igreja e Cristo</h2>

          <p>
            Existe uma distinção fundamental que acompanhará todos os estudos
            desta série: <strong>os erros cometidos por pessoas e instituições
            religiosas ao longo da história não podem ser atribuídos a Cristo
            nem ao Evangelho.</strong>
          </p>

          <p>
            Jesus nunca prometeu que todos aqueles que utilizassem Seu nome
            agiriam de acordo com Seus ensinamentos.
          </p>

          <p>
            Pelo contrário, as próprias Escrituras alertam repetidamente sobre
            falsos mestres, corrupção espiritual, ambição e afastamento da
            verdade.
          </p>

          <blockquote>
            <p>&quot;Examinai tudo. Retende o bem.&quot;</p>
            <cite>1 Tessalonicenses 5:21</cite>
          </blockquote>

          <p>
            Esse princípio será fundamental em nossa caminhada.
          </p>

          <p>
            Não estudaremos a história para simplesmente condenar aqueles que
            viveram antes de nós. Também não tentaremos esconder seus erros.
          </p>

          <p>Vamos examiná-la.</p>

          <p>
            Quando encontrarmos exemplos de fé, aprenderemos com eles.
          </p>

          <p>
            Quando encontrarmos coragem, reconheceremos seu valor.
          </p>

          <p>
            Quando encontrarmos injustiça, não a justificaremos.
          </p>

          <p>
            Quando encontrarmos corrupção, entenderemos suas consequências.
          </p>

          <p>
            E quando encontrarmos homens utilizando a religião para conquistar
            poder, voltaremos nossos olhos para Aquele que declarou:
          </p>

          <blockquote>
            <p>&quot;O meu reino não é deste mundo.&quot;</p>
            <cite>João 18:36</cite>
          </blockquote>

          <h2>Quando a fé encontra o poder</h2>

          <p>
            Durante muitos séculos, especialmente na Europa medieval, religião
            e política estiveram profundamente entrelaçadas.
          </p>

          <p>
            Reis necessitavam da legitimidade religiosa. Autoridades religiosas
            exerciam enorme influência sobre reis e governos. Territórios,
            riquezas, alianças políticas e autoridade espiritual
            frequentemente se encontravam dentro das mesmas disputas.
          </p>

          <p>
            Compreender essa relação é essencial para entender acontecimentos
            como a <strong>Guerra dos Cem Anos</strong>, o{" "}
            <strong>Grande Cisma do Ocidente</strong> e, posteriormente, as
            profundas transformações que contribuíram para o surgimento da{" "}
            <strong>Reforma Protestante</strong>.
          </p>

          <p>Não foram acontecimentos isolados.</p>

          <p>Cada crise deixou marcas.</p>

          <p>Cada conflito revelou problemas.</p>

          <p>
            Cada transformação preparou o cenário para aquilo que viria depois.
          </p>

          <p>
            É justamente por isso que nossa jornada será construída em
            sequência: para percebermos que a história não acontece em
            capítulos desconectados.
          </p>

          <h2>Por que um cristão deve conhecer essa história?</h2>

          <p>
            Porque conhecer o passado também nos ajuda a discernir o presente.
          </p>

          <p>
            Os nomes mudam. Os governos mudam. As instituições mudam. As
            tecnologias mudam.
          </p>

          <p>
            Mas muitos conflitos do coração humano permanecem
            surpreendentemente semelhantes.
          </p>

          <p>
            A busca pelo poder, o orgulho, a ambição, o medo, a manipulação da
            fé e o desejo de controlar outras pessoas não pertencem apenas à
            Idade Média.
          </p>

          <p>
            Por isso, a História da Igreja não deve servir apenas para aumentar
            nosso conhecimento.
          </p>

          <p>Ela deve produzir reflexão.</p>

          <p>
            Ao observarmos os erros de outras gerações, somos convidados a
            examinar também nossa própria geração — e principalmente nosso
            próprio coração.
          </p>

          <blockquote>
            <p>
              &quot;Porque tudo o que dantes foi escrito para nosso ensino foi
              escrito.&quot;
            </p>
            <cite>Romanos 15:4</cite>
          </blockquote>

          <h2>Uma caminhada pela História</h2>

          <p>
            Nos próximos estudos, atravessaremos períodos de conflitos
            políticos, crises religiosas, transformações sociais e grandes
            mudanças na maneira como o mundo ocidental compreendia a
            autoridade, a Igreja e as Escrituras.
          </p>

          <p>Veremos guerras.</p>

          <p>Veremos disputas pelo poder.</p>

          <p>
            Veremos momentos em que mais de um homem reivindicava
            simultaneamente possuir a maior autoridade da cristandade
            ocidental.
          </p>

          <p>
            Encontraremos personagens extraordinários e personagens
            profundamente contraditórios.
          </p>

          <p>
            E, pouco a pouco, veremos o cenário histórico que antecedeu uma das
            maiores transformações da história do cristianismo: a Reforma
            Protestante.
          </p>

          <p>
            Nossa primeira parada será uma Europa dividida por interesses
            dinásticos, políticos e territoriais durante um conflito que
            atravessaria gerações.
          </p>
        </section>

        <section className="indice-serie">
          <h2>Estudos da Série</h2>

          <div className="grid-serie">
            {historiaDaIgreja.map((estudo) => (
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