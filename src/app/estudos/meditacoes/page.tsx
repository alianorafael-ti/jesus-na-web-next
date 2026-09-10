import type { Metadata } from "next";
import Link from "next/link";

import { estudos } from "@/data/estudos";

export const metadata: Metadata = {
  title: "Meditações",
  description:
    "Meditações cristãs para contemplar a pessoa de Jesus Cristo, sua graça, seu sacrifício e as verdades das Escrituras.",
};

export default function MeditacoesPage() {
  const estudosMeditacoes = estudos
    .filter(
      (estudo) =>
        estudo.serie === "Meditações" &&
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
          <p className="categoria-estudo">Série</p>

          <h1>Meditações</h1>

          <p className="subtitulo-estudo">
            Reflexões para contemplar Cristo, compreender Sua graça e permitir
            que a Palavra de Deus fale ao coração.
          </p>
        </header>

        <section className="conteudo-estudo">
          <p>
            Há momentos em que não precisamos apenas avançar na leitura, mas
            permanecer diante da Palavra. Observar com atenção, refletir,
            contemplar e permitir que aquilo que Deus revelou alcance não
            somente nossa mente, mas também nosso coração.
          </p>

          <p>
            É essa a proposta desta série. Em cada meditação, voltamos nosso
            olhar para as Escrituras e para a pessoa de Jesus Cristo,
            procurando compreender não apenas o que aconteceu, mas o que essas
            verdades revelam sobre Deus e o que significam para nossa vida.
          </p>

          <blockquote>
            <p>
              &quot;Meditarei nos teus preceitos e terei respeito aos teus
              caminhos.&quot;
            </p>
            <cite>Salmos 119:15</cite>
          </blockquote>

          <h2>📖 Contemplando Cristo nas Escrituras</h2>

          <p>
            A cruz nos leva ao Getsêmani, ao sofrimento e ao sacrifício
            voluntário de Jesus, mas também nos conduz ao túmulo vazio e à
            vitória sobre a morte.
          </p>

          <p>
            A mulher cananeia nos mostra uma fé que persevera mesmo diante das
            barreiras e nos faz contemplar uma graça que alcança aquele que
            clama por misericórdia.
          </p>

          <p>
            E, ao percorrermos as promessas das Escrituras, encontramos Jesus
            como o Rei prometido, o Salvador que morreu e ressuscitou e aquele
            cuja história ainda aponta para Sua volta.
          </p>

          <h2>🌿 Um Tempo Para Refletir</h2>

          <p>
            Meditar na Palavra é mais do que acumular informações. É permitir
            que a verdade bíblica confronte nossas certezas, fortaleça nossa
            fé, renove nossa esperança e transforme nossa maneira de viver.
          </p>

          <p>
            Por isso, estes textos foram preparados para serem lidos sem
            pressa. Cada narrativa é um convite para observar os detalhes,
            retornar às Escrituras e refletir sobre aquilo que Deus deseja nos
            ensinar.
          </p>

          <h2>🙏 Um Convite à Meditação</h2>

          <p>
            Ao caminhar por esta série, nosso desejo é que você não encontre
            apenas histórias conhecidas, mas seja conduzido a olhar novamente
            para Cristo.
          </p>

          <p>
            Que cada meditação desperte o desejo de conhecer mais profundamente
            a Palavra de Deus e de viver à luz da graça, da esperança e da
            verdade que encontramos em Jesus.
          </p>

          <blockquote>
            <p>
              Algumas verdades não foram dadas apenas para serem conhecidas,
              mas para serem guardadas no coração e vividas.
            </p>
          </blockquote>
        </section>

        <section className="indice-serie">
          <h2>Meditações da Série</h2>

          <div className="grid-serie">
            {estudosMeditacoes.map((estudo) => (
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