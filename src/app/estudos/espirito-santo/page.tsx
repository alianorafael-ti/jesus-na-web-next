import type { Metadata } from "next";
import Link from "next/link";

import { estudos } from "@/data/estudos";

export const metadata: Metadata = {
  title: "Andando no Espírito",
  description:
    "Uma jornada de crescimento, santidade e comunhão com Deus, aprendendo a viver uma vida guiada pelo Espírito Santo.",
};

export default function EspiritoSantoPage() {
  const estudosEspiritoSanto = estudos
    .filter(
      (estudo) =>
        estudo.serie === "Andando no Espírito" &&
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
          <p className="categoria-estudo">Espírito Santo</p>

          <h1>Andando no Espírito</h1>

          <p className="subtitulo-estudo">
            Uma jornada de crescimento, santidade e comunhão com Deus.
          </p>
        </header>

        <section className="conteudo-estudo">
          <blockquote>
            <p>
              &quot;Por isso digo: deixem que o Espírito dirija a vida de vocês,
              e vocês não satisfarão os desejos da natureza humana.&quot;
            </p>
            <cite>Gálatas 5:16 — NTLH</cite>
          </blockquote>

          <h2>📖 Introdução</h2>

          <p>
            A vida cristã não é apenas uma decisão tomada no passado, mas um
            caminho diário de obediência, crescimento e dependência de Deus.
          </p>

          <p>
            Desde o momento em que somos alcançados pela graça de Cristo, somos
            chamados a viver uma nova vida. Essa nova vida não é sustentada por
            nossa própria força, mas pela atuação contínua do Espírito Santo.
          </p>

          <p>
            A Bíblia nos ensina que o cristão deve aprender a caminhar sob a
            direção do Espírito, permitindo que Deus transforme seus
            pensamentos, atitudes e escolhas.
          </p>

          <p>
            A seção <strong>Andando no Espírito</strong> foi criada para ajudar
            cristãos — novos ou maduros — a compreender, de forma clara e
            bíblica, o que significa viver uma vida guiada pelo Espírito Santo,
            fundamentada na Palavra e centrada em Jesus Cristo.
          </p>

          <h2>🚶 O Que Significa Andar no Espírito?</h2>

          <blockquote>
            <p>
              &quot;Se vivemos no Espírito, andemos também no Espírito.&quot;
            </p>
            <cite>Gálatas 5:25 — ARA</cite>
          </blockquote>

          <p>
            Na linguagem bíblica, &quot;andar&quot; significa modo de viver,
            comportamento diário e direção de vida.
          </p>

          <p>
            Portanto, andar no Espírito não se refere apenas a momentos
            emocionais, experiências extraordinárias ou ocasiões especiais de
            culto.
          </p>

          <p>Trata-se de uma vida inteira submetida à vontade de Deus.</p>

          <p>
            É permitir que o Espírito Santo influencie nossas decisões, molde
            nosso caráter e nos conduza a uma vida de santidade.
          </p>

          <p>
            Andar no Espírito significa viver cada dia em dependência de Deus,
            buscando agradá-Lo em tudo.
          </p>

          <h2>🔥 Quem é o Espírito Santo?</h2>

          <blockquote>
            <p>
              &quot;E eu pedirei ao Pai, e ele lhes dará outro Consolador, para
              estar com vocês para sempre.&quot;
            </p>
            <cite>João 14:16 — NTLH</cite>
          </blockquote>

          <p>
            O Espírito Santo não é uma energia, uma força impessoal ou apenas um
            símbolo.
          </p>

          <p>Ele é Deus, a terceira Pessoa da Trindade.</p>

          <p>
            Foi enviado pelo Pai e pelo Filho para habitar nos que creem,
            ensinar a verdade, convencer do pecado, fortalecer a fé e conduzir a
            Igreja.
          </p>

          <p>
            Sem a ação do Espírito Santo, não existe verdadeira transformação
            espiritual.
          </p>

          <h2>⚔️ O Conflito Entre a Carne e o Espírito</h2>

          <blockquote>
            <p>
              &quot;Pois a natureza humana deseja o que é contrário ao Espírito,
              e o Espírito deseja o que é contrário à natureza humana.&quot;
            </p>
            <cite>Gálatas 5:17 — NTLH</cite>
          </blockquote>

          <p>Todo cristão experimenta uma batalha interior.</p>

          <p>
            De um lado está a carne, representando nossa velha natureza marcada
            pelo pecado.
          </p>

          <p>
            Do outro lado está o Espírito Santo, conduzindo-nos à nova vida em
            Cristo.
          </p>

          <p>
            A vitória nessa batalha não é conquistada por esforço humano, mas
            por meio da rendição diária ao Senhor.
          </p>

          <p>
            Quanto mais nos aproximamos de Deus, mais o Espírito fortalece nossa
            caminhada.
          </p>

          <h2>🍇 O Fruto do Espírito</h2>

          <blockquote>
            <p>
              &quot;Mas o fruto do Espírito é amor, alegria, paz, paciência,
              amabilidade, bondade, fidelidade, mansidão e domínio próprio.&quot;
            </p>
            <cite>Gálatas 5:22–23 — NTLH</cite>
          </blockquote>

          <p>
            A maior evidência da atuação do Espírito Santo não são manifestações
            externas, mas a transformação interior produzida por Deus.
          </p>

          <p>
            O fruto do Espírito revela um caráter moldado à imagem de Cristo.
          </p>

          <p>
            Quanto mais caminhamos com Deus, mais essas características se
            tornam visíveis em nossa vida.
          </p>

          <p>
            O verdadeiro crescimento espiritual não é medido apenas pelo
            conhecimento adquirido, mas pela transformação que esse conhecimento
            produz.
          </p>

          <h2>🙏 Um Convite ao Crescimento</h2>

          <p>
            Deus não nos chamou apenas para acreditar em Cristo, mas para viver
            diariamente sob Sua direção.
          </p>

          <p>
            A caminhada cristã é uma jornada contínua de aprendizado,
            arrependimento, amadurecimento e comunhão.
          </p>

          <p>
            Ao longo desta série, estudaremos o que a Bíblia ensina sobre o
            Espírito Santo, Seu ministério, Seus dons, Seu fruto e Sua atuação na
            vida do cristão.
          </p>

          <blockquote>
            <p>
              &quot;Andar no Espírito é viver cada dia sob a direção de Deus,
              pela Palavra, para a glória de Cristo.&quot;
            </p>
          </blockquote>
        </section>

        <section className="indice-serie">
          <h2>Estudos da Série</h2>

          <div className="grid-serie">
            {estudosEspiritoSanto.map((estudo) => (
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