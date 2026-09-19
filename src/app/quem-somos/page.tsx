export default function QuemSomosPage() {
  const crencas = [
    "Cremos na Trindade: um só Deus subsistente em três Pessoas — Pai, Filho e Espírito Santo.",
    "Cremos na Bíblia Sagrada como a inerrante e única regra de fé e prática.",
    "Cremos na divindade de Jesus Cristo, em Seu nascimento virginal, Sua morte expiatória, Sua ressurreição corporal e Sua ascensão aos céus.",
    "Cremos que a salvação é pela graça, mediante a fé em Jesus Cristo, e não por obras.",
    "Cremos na Segunda Vinda de Cristo para julgar vivos e mortos e estabelecer Seu Reino.",
  ];

  return (
    <main className="bg-[#f7f5ef] text-[#172033]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#071426] text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
            Nossa Missão
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Quem Somos e No Que Cremos
          </h1>

          <p className="mt-7 max-w-2xl text-xl leading-relaxed text-slate-300 md:text-2xl">
            Conhecendo ao Senhor e fazendo-O conhecido através da internet.
          </p>
        </div>
      </section>

      {/* NOSSA MISSÃO */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7b18]">
            Jesus na Web
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#071426] md:text-4xl">
            Nossa Missão
          </h2>

          <p className="mt-7 text-lg leading-8 text-slate-700">
            O projeto Jesus na Web nasceu do desejo de ensinar, exortar e
            discipular através da rede, conforme o chamado de seguir e
            prosseguir em conhecer ao Senhor, expresso em Oséias 6:3.
            Dedicamo-nos à pregação fiel das Escrituras e à defesa da sã
            doutrina.
          </p>
        </div>
      </section>

      {/* CRENÇAS */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7b18]">
              Nossa Fé
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#071426] md:text-4xl">
              Crenças Fundamentais
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              Estes são alguns dos pilares da nossa fé, alinhados à fé cristã
              histórica e reformada.
            </p>

            <div className="mt-10 space-y-4">
              {crencas.map((crenca, index) => (
                <div
                  key={crenca}
                  className="flex gap-5 rounded-2xl border border-slate-200 bg-[#f7f5ef] p-6"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#071426] text-sm font-bold text-[#d4af37]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="leading-7 text-slate-700">{crenca}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AUTOR */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-3xl rounded-3xl bg-[#071426] p-8 text-white shadow-lg md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d4af37]">
            Conheça o autor
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            O Resgate de uma Vida
          </h2>

          <p className="mt-5 text-xl font-semibold text-slate-200">
            Aliano Rafael
          </p>

          <p className="mt-6 leading-8 text-slate-300">
            A história por trás do Jesus na Web não começou com um site. Ela
            passa por perdas, escolhas, dependência, ruas, restauração e,
            sobretudo, pela graça de Deus. É dessa história que nasce o desejo
            de usar a internet para anunciar a esperança encontrada em Jesus
            Cristo.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://www.instagram.com/alia.norafael/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#d4af37]/60 px-5 py-2.5 text-sm font-semibold !text-white transition hover:bg-[#d4af37] hover:!text-[#071426]"
            >
              Instagram pessoal
            </a>

            <a
              href="https://www.instagram.com/jesus_naweb/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#d4af37]/60 px-5 py-2.5 text-sm font-semibold !text-white transition hover:bg-[#d4af37] hover:!text-[#071426]"
            >
              Instagram Jesus na Web
            </a>

            <a
              href="https://wa.me/5511964545706"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#d4af37]/60 px-5 py-2.5 text-sm font-semibold !text-white transition hover:bg-[#d4af37] hover:!text-[#071426]"
            >
              WhatsApp
            </a>

            <a
              href="mailto:jesusnaweb1@gmail.com"
              className="rounded-full border border-[#d4af37]/60 px-5 py-2.5 text-sm font-semibold !text-white transition hover:bg-[#d4af37] hover:!text-[#071426]"
            >
              E-mail
            </a>
          </div>
        </div>
      </section>

      {/* TESTEMUNHO */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
          <article className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7b18]">
              Testemunho
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#071426] md:text-4xl">
              Um Amor que Começa Antes do Tempo
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-slate-700">
              <p>
                Por muito tempo, acreditei que minha jornada havia começado na
                rebeldia da adolescência. Contudo, em experiências recentes com
                o Senhor, fui levado a contemplar um tempo anterior, quando Sua
                mão já operava em meu favor.
              </p>

              <p>
                Fui adotado ainda bebê, o quarto de cinco filhos. O segredo da
                minha adoção e o rumor de que a mulher que me gerou não apenas
                não me quis, mas teria tentado ceifar minha vida, produziram
                uma ferida que por muito tempo me consumiu. Não sei o que havia
                de verdade ou de mentira nesse rumor. Mas hoje reconheço algo
                que, para mim, é inegável: o Senhor já me guardava.
              </p>
            </div>

            <blockquote className="my-10 border-l-4 border-[#d4af37] bg-[#f7f5ef] px-6 py-5 text-lg italic leading-8 text-slate-700">
              “Porque eu bem sei os pensamentos que tenho a vosso respeito,
              diz o Senhor; pensamentos de paz, e não de mal, para vos dar o
              fim que esperais.”
              <span className="mt-3 block not-italic font-semibold text-[#071426]">
                Jeremias 29:11
              </span>
            </blockquote>

            <div className="mt-14">
              <h2 className="text-2xl font-bold text-[#071426] md:text-3xl">
                A Rebeldia e a Escuridão do Mundo
              </h2>

              <div className="mt-6 space-y-6 text-lg leading-8 text-slate-700">
                <p>
                  Guardar esse segredo durante anos alimentou em mim uma
                  profunda rebeldia. A raiva, especialmente contra meu pai,
                  impulsionou-me para fora de casa aos 18 anos.
                </p>

                <p>
                  Em busca de uma falsa liberdade, morar sozinho acabou
                  revelando-se um abismo. Instalou-se um ciclo de empregos
                  perdidos, frustrações e dependência. Para sustentar o uso de
                  álcool, maconha e cocaína, entrei no tráfico e aprofundei
                  escolhas que me conduziam cada vez mais à destruição.
                </p>

                <p>
                  Mais tarde, trabalhando em cozinhas de restaurantes,
                  continuei cercado por ambientes de festas e excessos. Aquilo
                  que parecia liberdade apenas aumentava o vazio.
                </p>
              </div>
            </div>

            <div className="mt-14">
              <h2 className="text-2xl font-bold text-[#071426] md:text-3xl">
                O Cativeiro Espiritual e a Queda
              </h2>

              <div className="mt-6 space-y-6 text-lg leading-8 text-slate-700">
                <p>
                  Em uma dessas festas, tive contato com o Candomblé. Movido
                  pela curiosidade, permaneci para acompanhar os rituais e,
                  posteriormente, envolvi-me profundamente com aquelas
                  práticas. À luz da fé cristã que hoje professo, compreendo
                  aquele período como parte de um cativeiro espiritual que se
                  somava às outras prisões que já dominavam minha vida.
                </p>

                <p>
                  O abismo se aprofundou quando comecei a usar crack. Perdi
                  amigos, trabalho e casa. Tornei-me morador de rua e, por fim,
                  cheguei à Cracolândia, em São Paulo. Foram cerca de quinze
                  anos marcados pela sobrevivência, pela dependência e pela
                  perda de quase tudo.
                </p>
              </div>
            </div>

            <blockquote className="my-10 border-l-4 border-[#d4af37] bg-[#f7f5ef] px-6 py-5 text-lg italic leading-8 text-slate-700">
              “Sede sóbrios; vigiai; porque o diabo, vosso adversário, anda em
              derredor, bramando como leão, buscando a quem possa tragar.”
              <span className="mt-3 block not-italic font-semibold text-[#071426]">
                1 Pedro 5:8
              </span>
            </blockquote>

            <div className="mt-14">
              <h2 className="text-2xl font-bold text-[#071426] md:text-3xl">
                O Milagre da Restauração
              </h2>

              <div className="mt-6 space-y-6 text-lg leading-8 text-slate-700">
                <p>
                  Acometido pela tuberculose, prostrado e sozinho, clamei a
                  Deus em um momento de completa angústia. Deus ouviu.
                </p>
              </div>
            </div>

            <blockquote className="my-10 border-l-4 border-[#d4af37] bg-[#f7f5ef] px-6 py-5 text-lg italic leading-8 text-slate-700">
              “Clamou este pobre, e o Senhor o ouviu; e o salvou de todas as
              suas angústias.”
              <span className="mt-3 block not-italic font-semibold text-[#071426]">
                Salmos 34:6
              </span>
            </blockquote>

            <div className="space-y-6 text-lg leading-8 text-slate-700">
              <p>
                No dia 27 de dezembro de 2021, uma enfermeira do CAPS me
                ofereceu a oportunidade de iniciar um tratamento. Ali começou
                uma nova etapa da minha caminhada de recuperação.
              </p>

              <p>
                A tuberculose deixou sequelas graves em meus pulmões, mas
                também aprendi que, mesmo em meio às limitações, a graça de
                Deus continua sendo suficiente. Há dificuldades que nos fazem
                reconhecer de maneira ainda mais profunda nossa dependência
                dEle.
              </p>
            </div>

            <blockquote className="my-10 border-l-4 border-[#d4af37] bg-[#f7f5ef] px-6 py-5 text-lg italic leading-8 text-slate-700">
              “A minha graça te basta, porque o meu poder se aperfeiçoa na
              fraqueza.”
              <span className="mt-3 block not-italic font-semibold text-[#071426]">
                2 Coríntios 12:9
              </span>
            </blockquote>

            <div className="space-y-6 text-lg leading-8 text-slate-700">
              <p>
                Quando antigas possibilidades de trabalho deixaram de ser
                viáveis, surgiu uma nova porta: o desenvolvimento web.
              </p>

              <p>
                O Jesus na Web também é fruto dessa nova etapa. Um projeto que
                nasceu do encontro entre aquilo que aprendi a fazer e aquilo
                que creio ter recebido como missão.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* PROPÓSITO */}
      <section className="bg-[#071426] text-white">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center md:px-10 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d4af37]">
            Por que existimos
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Nosso Propósito
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300">
            Nosso propósito é usar as habilidades que Deus me concedeu nesta
            nova etapa da vida — especialmente o desenvolvimento web — para
            ensinar, exortar e discipular através da internet, levando a
            mensagem do Evangelho a pessoas que também atravessam seus vales,
            para que encontrem esperança em Jesus Cristo.
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-lg font-semibold leading-8 text-white">
            Este projeto é consagrado a Deus, a quem pertence toda a honra e
            toda a glória.
          </p>
        </div>
      </section>
    </main>
  );
}