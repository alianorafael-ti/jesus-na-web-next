import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Inteligência Artificial e Ética Cristã",
  description:
    "Um estudo bíblico sobre Inteligência Artificial, ética cristã, discernimento, responsabilidade e reverência diante de Deus.",
};

const indice = [
  {
    titulo:
      "Parte 1 — Deus, o homem e a capacidade de desenvolver tecnologia",
    href: "#parte-1",
  },
  {
    titulo: "Parte 2 — O pecado entrou na história",
    href: "#parte-2",
  },
  {
    titulo: "Parte 3 — Inteligência Artificial e conteúdo cristão",
    href: "#parte-3",
  },
  {
    titulo: "Parte 4 — A responsabilidade de quem ouve",
    href: "#parte-4",
  },
  {
    titulo:
      "Parte 5 — Quando o algoritmo começa a cuidar da nossa vida espiritual",
    href: "#parte-5",
  },
  {
    titulo: "Verdade Prática",
    href: "#verdade-pratica",
  },
  {
    titulo: "Conclusão",
    href: "#conclusao",
  },
];

export default function InteligenciaArtificialEticaCristaPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] text-zinc-200">
      {/* Hero */}
      <section className="border-b border-yellow-500/20 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/vida-em-foco"
            className="mb-8 inline-block text-sm text-zinc-400 transition hover:text-[#d4af37]"
          >
            ← Vida em Foco
          </Link>

          <p className="mb-5 text-sm font-bold tracking-[0.25em] text-[#d4af37] uppercase">
            Fé e Tecnologia
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white sm:text-6xl">
            Inteligência Artificial e Ética Cristã
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300 sm:text-xl">
            Quem é responsável pelo que estamos ouvindo?
          </p>

          <div className="mt-10 h-px w-24 bg-[#d4af37]" />
        </div>
      </section>

      <article className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl">
          {/* Introdução */}
          <section>
            <p className="mb-3 text-sm font-bold tracking-[0.2em] text-[#d4af37] uppercase">
              Introdução
            </p>

            <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl">
              Inteligência Artificial e fé cristã
            </h2>

            <div className="space-y-6 text-lg leading-8 text-zinc-300">
              <p>
                A Inteligência Artificial chegou e, ao que tudo indica, veio
                para ficar. Hoje ela escreve textos, produz imagens, cria
                músicas, reproduz vozes, auxilia pesquisas, organiza estudos e
                consegue produzir em poucos segundos aquilo que antes poderia
                exigir horas ou até dias de trabalho.
              </p>

              <p>E naturalmente ela também chegou ao meio cristão.</p>

              <p>
                Já existem músicas cristãs inteiramente produzidas por
                Inteligência Artificial, vozes de cantores que nunca existiram,
                imagens, vídeos, devocionais, estudos bíblicos e até pregações
                produzidas quase totalmente por máquinas.
              </p>

              <p>
                Diante disso, alguns cristãos imediatamente rejeitam a
                tecnologia. Outros parecem aceitá-la sem qualquer
                questionamento.
              </p>

              <p>Mas talvez estejamos começando pela pergunta errada.</p>

              <p>A questão não deveria ser simplesmente:</p>

              <blockquote className="border-l-2 border-[#d4af37] bg-[#161616] px-6 py-5 text-xl font-semibold text-white">
                “A Inteligência Artificial é boa ou má?”
              </blockquote>

              <p>
                Precisamos voltar muito antes do surgimento dos computadores.
              </p>

              <p>Precisamos voltar à criação.</p>
            </div>
          </section>

          {/* Índice */}
          <nav
            id="indice"
            aria-label="Índice do estudo"
            className="mt-16 scroll-mt-28 rounded-xl border border-yellow-500/20 bg-[#161616] p-6 sm:p-8"
          >
            <p className="mb-3 text-sm font-bold tracking-[0.2em] text-[#d4af37] uppercase">
              Navegação
            </p>

            <h2 className="mb-7 text-3xl font-bold text-white">
              📖 Neste estudo
            </h2>

            <ol className="space-y-4">
              {indice.map((item, index) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group flex items-start gap-4 border-b border-white/5 pb-4 text-zinc-300 transition last:border-0 last:pb-0 hover:text-[#d4af37]"
                  >
                    <span className="shrink-0 text-sm font-bold text-zinc-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="leading-7">{item.titulo}</span>

                    <span
                      aria-hidden="true"
                      className="ml-auto text-[#d4af37] opacity-0 transition group-hover:opacity-100"
                    >
                      ↓
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* CONTINUAÇÃO */}
                    {/* Parte 1 */}
          <section
            id="parte-1"
            className="mt-16 scroll-mt-28 border-t border-yellow-500/20 pt-16"
          >
            <p className="mb-3 text-sm font-bold tracking-[0.2em] text-[#d4af37] uppercase">
              Parte 1
            </p>

            <h2 className="mb-12 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Deus, o homem e a capacidade de desenvolver tecnologia
            </h2>

            <div className="space-y-12">
              {/* 1 */}
              <section>
                <h3 className="mb-6 text-2xl font-bold text-white">
                  1. Deus é o Criador
                </h3>

                <div className="space-y-6 text-lg leading-8 text-zinc-300">
                  <p>
                    A Bíblia começa com uma declaração que estabelece o
                    fundamento de tudo:
                  </p>

                  <blockquote className="border-l-2 border-[#d4af37] bg-[#161616] px-6 py-5">
                    <p className="text-xl leading-8 text-white">
                      “No princípio criou Deus os céus e a terra.”
                    </p>
                    <cite className="mt-3 block text-sm not-italic text-[#d4af37]">
                      Gênesis 1:1
                    </cite>
                  </blockquote>

                  <p>
                    Antes da ciência existe Deus.
                    <br />
                    Antes da tecnologia existe Deus.
                    <br />
                    Antes da inteligência humana existe Deus.
                  </p>

                  <p>
                    Tudo aquilo que o homem posteriormente estudaria já estava
                    presente, de alguma maneira, na criação.
                  </p>

                  <p>
                    Os minerais estavam lá.
                    <br />
                    As propriedades da matéria estavam lá.
                    <br />
                    A eletricidade estava lá.
                    <br />
                    As leis que regem o universo estavam lá.
                  </p>

                  <p>
                    O homem não criou essas coisas.
                    <br />
                    Ele passou a conhecê-las.
                  </p>

                  <p>
                    E isso nos leva a uma distinção muito importante entre{" "}
                    <strong className="text-white">
                      Criador e criatura
                    </strong>
                    .
                  </p>
                </div>
              </section>

              {/* 2 */}
              <section>
                <h3 className="mb-6 text-2xl font-bold text-white">
                  2. “Façamos o homem à nossa imagem”
                </h3>

                <div className="space-y-6 text-lg leading-8 text-zinc-300">
                  <p>Deus declara:</p>

                  <blockquote className="border-l-2 border-[#d4af37] bg-[#161616] px-6 py-5">
                    <p className="text-xl leading-8 text-white">
                      “E disse Deus: Façamos o homem à nossa imagem, conforme a
                      nossa semelhança; e domine sobre os peixes do mar, e sobre
                      as aves dos céus, e sobre o gado, e sobre toda a terra, e
                      sobre todo réptil que se move sobre a terra.”
                    </p>
                    <cite className="mt-3 block text-sm not-italic text-[#d4af37]">
                      Gênesis 1:26
                    </cite>
                  </blockquote>

                  <p>No hebraico encontramos duas palavras importantes.</p>

                  <p>
                    <strong className="text-white">צֶלֶם — ṣelem</strong> —
                    imagem, representação.
                    <br />
                    <strong className="text-white">דְּמוּת — demût</strong> —
                    semelhança, correspondência.
                  </p>

                  <p>
                    O homem não é Deus.
                    <br />
                    Mas foi criado de uma maneira singular para representá-lo
                    dentro da criação.
                  </p>

                  <p>
                    Por termos sido criados à imagem e semelhança de Deus,
                    possuímos capacidades que refletem atributos do Criador em
                    uma dimensão humana e limitada.
                  </p>

                  <p>
                    Deus conhece; nós podemos conhecer.
                    <br />
                    Deus comunica; nós podemos comunicar.
                    <br />
                    Deus exerce vontade; nós possuímos vontade.
                    <br />
                    Deus governa; recebemos autoridade para governar.
                    <br />
                    Deus cria; nós possuímos capacidade criativa.
                  </p>

                  <p>Mas aqui existe uma diferença fundamental.</p>

                  <p>
                    <strong className="text-white">Deus é Criador.</strong>
                    <br />
                    <strong className="text-white">
                      O homem é criatura criativa.
                    </strong>
                  </p>
                </div>
              </section>

              {/* CONTINUA PARTE 1 */}
                            {/* 3 */}
              <section>
                <h3 className="mb-6 text-2xl font-bold text-white">
                  3. Deus cria; o homem trabalha sobre a criação
                </h3>

                <div className="space-y-6 text-lg leading-8 text-zinc-300">
                  <p>
                    Em Gênesis encontramos a palavra hebraica:{" "}
                    <strong className="text-white">
                      בָּרָא — bārāʾ — criar.
                    </strong>
                  </p>

                  <blockquote className="border-l-2 border-[#d4af37] bg-[#161616] px-6 py-5">
                    <p className="text-xl leading-8 text-white">
                      “No princípio criou Deus...”
                    </p>
                    <cite className="mt-3 block text-sm not-italic text-[#d4af37]">
                      Gênesis 1:1
                    </cite>
                  </blockquote>

                  <p>E novamente:</p>

                  <blockquote className="border-l-2 border-[#d4af37] bg-[#161616] px-6 py-5">
                    <p className="text-xl leading-8 text-white">
                      “E criou Deus o homem à sua imagem...”
                    </p>
                    <cite className="mt-3 block text-sm not-italic text-[#d4af37]">
                      Gênesis 1:27
                    </cite>
                  </blockquote>

                  <p>Nós não ocupamos o lugar do Criador.</p>

                  <p>
                    O homem não criou o ferro.
                    <br />
                    Não criou o cobre.
                    <br />
                    Não criou o silício.
                    <br />
                    Não criou a eletricidade.
                    <br />
                    Não criou as propriedades físicas que tornam possível
                    construir um computador.
                  </p>

                  <p>
                    <strong className="text-white">
                      O que fizemos foi descobrir, estudar, organizar e utilizar
                      aquilo que já estava presente na criação.
                    </strong>
                  </p>

                  <p>
                    Isso é muito importante para compreendermos a tecnologia.
                  </p>
                </div>
              </section>

              {/* 4 */}
              <section>
                <h3 className="mb-6 text-2xl font-bold text-white">
                  4. “Sujeitai-a e dominai”
                </h3>

                <div className="space-y-6 text-lg leading-8 text-zinc-300">
                  <p>
                    Depois de criar o homem, Deus lhe entrega uma
                    responsabilidade:
                  </p>

                  <blockquote className="border-l-2 border-[#d4af37] bg-[#161616] px-6 py-5">
                    <p className="text-xl leading-8 text-white">
                      “E Deus os abençoou e Deus lhes disse: Frutificai, e
                      multiplicai-vos, e enchei a terra, e sujeitai-a; e dominai
                      sobre os peixes do mar, e sobre as aves dos céus, e sobre
                      todo o animal que se move sobre a terra.”
                    </p>
                    <cite className="mt-3 block text-sm not-italic text-[#d4af37]">
                      Gênesis 1:28
                    </cite>
                  </blockquote>

                  <p>
                    Duas palavras hebraicas ajudam a compreender essa
                    ordenança.
                  </p>

                  <p>
                    <strong className="text-white">רָדָה — rādâ</strong> —
                    dominar, governar, exercer domínio.
                    <br />
                    <strong className="text-white">כָּבַשׁ — kābaš</strong> —
                    sujeitar, colocar sob domínio.
                  </p>

                  <p>
                    Deus não colocou o homem na criação apenas para observá-la.
                    Deu-lhe capacidade e responsabilidade para trabalhar sobre
                    ela.
                  </p>

                  <p>Mas dominar não significa destruir.</p>

                  <p>Veja o que encontramos logo depois:</p>

                  <blockquote className="border-l-2 border-[#d4af37] bg-[#161616] px-6 py-5">
                    <p className="text-xl leading-8 text-white">
                      “E tomou o SENHOR Deus o homem e o pôs no jardim do Éden
                      para o lavrar e o guardar.”
                    </p>
                    <cite className="mt-3 block text-sm not-italic text-[#d4af37]">
                      Gênesis 2:15
                    </cite>
                  </blockquote>

                  <p>Aqui aparecem outros dois verbos importantes:</p>

                  <p>
                    <strong className="text-white">עָבַד — ʿābad</strong> —
                    trabalhar, servir, cultivar.
                    <br />
                    <strong className="text-white">שָׁמַר — šāmar</strong> —
                    guardar, preservar, cuidar.
                  </p>

                  <p>
                    Portanto, o domínio concedido por Deus envolve
                    responsabilidade.
                  </p>

                  <p>
                    O homem deveria:{" "}
                    <strong className="text-white">
                      dominar, trabalhar, cultivar e guardar.
                    </strong>
                  </p>
                </div>
              </section>

              {/* CONTINUA PARTE 1 — TÓPICOS 5 E 6 */}
                            {/* 5 */}
              <section>
                <h3 className="mb-6 text-2xl font-bold text-white">
                  5. Onde entra a ciência?
                </h3>

                <div className="space-y-6 text-lg leading-8 text-zinc-300">
                  <p>Agora podemos olhar para nossa própria história.</p>

                  <p>
                    O homem encontrou minério.
                    <br />
                    Descobriu suas propriedades.
                    <br />
                    Desenvolveu a metalurgia.
                    <br />
                    Descobriu a eletricidade.
                    <br />
                    Estudou matemática.
                    <br />
                    Aprendeu a trabalhar com diferentes materiais.
                    <br />
                    Desenvolveu componentes eletrônicos.
                    <br />
                    Construiu computadores.
                    <br />
                    Desenvolveu linguagens de programação.
                    <br />
                    Criou redes de computadores.
                    <br />
                    Desenvolveu algoritmos.
                  </p>

                  <p>
                    Chegamos finalmente àquilo que chamamos de{" "}
                    <strong className="text-white">
                      Inteligência Artificial.
                    </strong>
                  </p>

                  <p>
                    Mas em nenhum momento o homem criou as leis fundamentais que
                    permitem que essas coisas existam.
                  </p>

                  <p>Nós as descobrimos.</p>

                  <p>Daniel declarou:</p>

                  <blockquote className="border-l-2 border-[#d4af37] bg-[#161616] px-6 py-5">
                    <p className="text-xl leading-8 text-white">
                      “Seja bendito o nome de Deus para todo o sempre, porque
                      dele são a sabedoria e a força. E ele muda os tempos e as
                      horas; ele remove os reis e estabelece os reis; ele dá
                      sabedoria aos sábios e ciência aos entendidos. Ele revela
                      o profundo e o escondido; conhece o que está em trevas, e
                      com ele mora a luz.”
                    </p>
                    <cite className="mt-3 block text-sm not-italic text-[#d4af37]">
                      Daniel 2:20-22
                    </cite>
                  </blockquote>

                  <p>
                    Aquilo que para nós é descoberta nunca foi desconhecido para
                    Deus.
                  </p>

                  <p>
                    O homem descobre progressivamente propriedades de uma
                    criação que seu Criador sempre conheceu.
                  </p>

                  <p>
                    <strong className="text-white">
                      O desenvolvimento científico não acrescenta conhecimento
                      a Deus.
                      <br />
                      Acrescenta conhecimento ao homem.
                    </strong>
                  </p>

                  <p>
                    O computador não surpreendeu Deus.
                    <br />
                    A internet não surpreendeu Deus.
                    <br />
                    E a Inteligência Artificial também não surpreendeu Deus.
                  </p>
                </div>
              </section>

              {/* 6 */}
              <section>
                <h3 className="mb-6 text-2xl font-bold text-white">
                  6. Mas existe uma diferença entre “podemos” e “devemos”
                </h3>

                <div className="space-y-6 text-lg leading-8 text-zinc-300">
                  <p>
                    Reconhecer que a capacidade científica humana está
                    relacionada aos dons recebidos do Criador não significa
                    dizer que tudo aquilo que fazemos com essa capacidade recebe
                    automaticamente a aprovação de Deus.
                  </p>

                  <p>
                    Uma descoberta pode ser utilizada para salvar vidas ou
                    destruí-las.
                  </p>

                  <p>
                    Uma tecnologia pode servir à verdade ou à mentira.
                  </p>

                  <p>Por isso existem perguntas diferentes.</p>

                  <p>
                    <strong className="text-white">
                      “Podemos fazer?”
                    </strong>{" "}
                    é uma pergunta científica.
                    <br />
                    <strong className="text-white">
                      “Devemos fazer?”
                    </strong>{" "}
                    é uma pergunta ética.
                    <br />
                    <strong className="text-white">
                      “Como devemos fazer diante de Deus?”
                    </strong>{" "}
                    é uma pergunta teológica.
                  </p>

                  <p>
                    E para entender por que essa distinção é necessária
                    precisamos chegar a Gênesis 3.
                  </p>
                </div>
              </section>
            </div>

            <div className="mt-12 border-t border-white/10 pt-6">
              <a
                href="#indice"
                className="text-sm font-semibold text-[#d4af37] transition hover:text-yellow-300"
              >
                ↑ Voltar ao índice
              </a>
            </div>
          </section>

          {/* CONTINUAÇÃO — PARTE 2 */}
                    {/* Parte 2 */}
          <section
            id="parte-2"
            className="mt-16 scroll-mt-28 border-t border-yellow-500/20 pt-16"
          >
            <p className="mb-3 text-sm font-bold tracking-[0.2em] text-[#d4af37] uppercase">
              Parte 2
            </p>

            <h2 className="mb-12 text-3xl font-bold leading-tight text-white sm:text-4xl">
              O pecado entrou na história
            </h2>

            <div className="space-y-12">
              {/* 7 */}
              <section>
                <h3 className="mb-6 text-2xl font-bold text-white">
                  7. “E eis que era muito bom”
                </h3>

                <div className="space-y-6 text-lg leading-8 text-zinc-300">
                  <p>Depois de concluir sua obra, Deus declara:</p>

                  <blockquote className="border-l-2 border-[#d4af37] bg-[#161616] px-6 py-5">
                    <p className="text-xl leading-8 text-white">
                      “E viu Deus tudo quanto tinha feito, e eis que era muito
                      bom.”
                    </p>
                    <cite className="mt-3 block text-sm not-italic text-[#d4af37]">
                      Gênesis 1:31
                    </cite>
                  </blockquote>

                  <p>
                    A criação era boa.
                    <br />
                    O trabalho era bom.
                    <br />
                    A capacidade humana era boa.
                    <br />
                    O domínio concedido ao homem era bom.
                  </p>

                  <p>Então aconteceu a Queda.</p>

                  <p>
                    O pecado entrou na experiência humana e suas consequências
                    atingiram toda a criação.
                  </p>

                  <p>Paulo escreve:</p>

                  <blockquote className="border-l-2 border-[#d4af37] bg-[#161616] px-6 py-5">
                    <p className="text-xl leading-8 text-white">
                      “Porque sabemos que toda a criação, a um só tempo, geme e
                      suporta angústias até agora.”
                    </p>
                    <cite className="mt-3 block text-sm not-italic text-[#d4af37]">
                      Romanos 8:22
                    </cite>
                  </blockquote>

                  <p>Mas algo importante aconteceu.</p>

                  <p>
                    O pecado não retirou do homem sua inteligência.
                    <br />
                    O homem continuou pensando.
                    <br />
                    Continuou descobrindo.
                    <br />
                    Continuou trabalhando.
                    <br />
                    Continuou criando cultura.
                    <br />
                    Continuou desenvolvendo ferramentas.
                  </p>

                  <p>
                    O problema é que agora{" "}
                    <strong className="text-white">
                      quem exerce essas capacidades é um ser humano afetado pelo
                      pecado
                    </strong>
                    .
                  </p>
                </div>
              </section>

              {/* 8 */}
              <section>
                <h3 className="mb-6 text-2xl font-bold text-white">
                  8. O mesmo homem que faz música trabalha com o ferro
                </h3>

                <div className="space-y-6 text-lg leading-8 text-zinc-300">
                  <p>
                    Isso aparece de maneira impressionante já em Gênesis 4.
                    Encontramos Jabal ligado à criação de animais, Jubal ligado
                    à música e Tubalcaim trabalhando com metais.
                  </p>

                  <blockquote className="border-l-2 border-[#d4af37] bg-[#161616] px-6 py-5">
                    <p className="text-xl leading-8 text-white">
                      “E o nome do seu irmão era Jubal; este foi o pai de todos
                      os que tocam harpa e órgão. E Zilá também deu à luz a
                      Tubalcaim, mestre de toda obra de cobre e de ferro...”
                    </p>
                    <cite className="mt-3 block text-sm not-italic text-[#d4af37]">
                      Gênesis 4:21-22
                    </cite>
                  </blockquote>

                  <p>
                    A humanidade continua desenvolvendo cultura e tecnologia.
                    <br />
                    Temos música.
                    <br />
                    Temos instrumentos.
                    <br />
                    Temos metalurgia.
                  </p>

                  <p>
                    Mas no mesmo capítulo encontramos Caim assassinando Abel e
                    Lameque falando de violência.
                  </p>

                  <p>
                    Aqui encontramos um retrato impressionante da condição
                    humana depois da Queda.
                  </p>

                  <p>
                    <strong className="text-white">
                      A capacidade criativa permanece.
                    </strong>
                    <br />
                    <strong className="text-white">
                      Mas o pecado também está presente.
                    </strong>
                  </p>

                  <p>
                    Portanto, a pergunta sobre tecnologia não pode ser apenas:{" "}
                    <strong className="text-white">
                      “Esta ferramenta é boa ou má?”
                    </strong>
                  </p>

                  <p>Precisamos perguntar:</p>

                  <p>
                    <strong className="text-white">
                      Quem está utilizando?
                    </strong>
                    <br />
                    <strong className="text-white">
                      Com qual finalidade?
                    </strong>
                    <br />
                    <strong className="text-white">
                      Segundo quais valores?
                    </strong>
                    <br />
                    <strong className="text-white">
                      E quais consequências esse uso produz?
                    </strong>
                  </p>
                </div>
              </section>
            </div>

            <div className="mt-12 border-t border-white/10 pt-6">
              <a
                href="#indice"
                className="text-sm font-semibold text-[#d4af37] transition hover:text-yellow-300"
              >
                ↑ Voltar ao índice
              </a>
            </div>
          </section>

          {/* CONTINUAÇÃO — PARTE 3 */}
                    {/* Parte 3 */}
          <section
            id="parte-3"
            className="mt-16 scroll-mt-28 border-t border-yellow-500/20 pt-16"
          >
            <p className="mb-3 text-sm font-bold tracking-[0.2em] text-[#d4af37] uppercase">
              Parte 3
            </p>

            <h2 className="mb-12 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Inteligência Artificial e conteúdo cristão
            </h2>

            <div className="space-y-12">
              {/* 9 */}
              <section>
                <h3 className="mb-6 text-2xl font-bold text-white">
                  9. Quando a IA entra na igreja
                </h3>

                <div className="space-y-6 text-lg leading-8 text-zinc-300">
                  <p>
                    Agora podemos finalmente chegar ao problema que motivou este
                    estudo.
                  </p>

                  <p>
                    A Inteligência Artificial já está sendo utilizada para
                    produzir conteúdo cristão.
                  </p>

                  <p>
                    Existem músicas.
                    <br />
                    Devocionais.
                    <br />
                    Imagens.
                    <br />
                    Vídeos.
                    <br />
                    Estudos bíblicos.
                    <br />
                    Orações.
                    <br />
                    Roteiros.
                    <br />
                    E até pregações inteiras produzidas por IA.
                  </p>

                  <p>
                    Isso não significa que todo conteúdo produzido com auxílio
                    de IA seja errado.
                  </p>

                  <p>
                    A IA pode ajudar alguém a pesquisar um contexto histórico.
                    <br />
                    Pode ajudar na compreensão de uma palavra hebraica ou grega.
                    <br />
                    Pode comparar informações.
                    <br />
                    Pode organizar ideias.
                    <br />
                    Pode revisar um texto.
                    <br />
                    Pode ajudar na preparação visual de um estudo.
                  </p>

                  <p>
                    O problema começa quando deixamos de falar de{" "}
                    <strong className="text-white">auxílio</strong> e começamos a
                    falar de{" "}
                    <strong className="text-white">substituição</strong>.
                  </p>
                </div>
              </section>

              {/* 10 */}
              <section>
                <h3 className="mb-6 text-2xl font-bold text-white">
                  10. Uma IA pode falar sobre fé sem possuir fé
                </h3>

                <div className="space-y-6 text-lg leading-8 text-zinc-300">
                  <p>
                    Aqui encontramos uma diferença que não pode ser ignorada.
                  </p>

                  <p>
                    Uma Inteligência Artificial pode produzir uma oração muito
                    bonita.
                    <br />
                    Mas ela não orou.
                  </p>

                  <p>
                    Pode produzir uma música falando sobre sofrimento.
                    <br />
                    Mas ela nunca sofreu.
                  </p>

                  <p>
                    Pode escrever:{" "}
                    <strong className="text-white">
                      “Quando eu estava sozinho, Jesus me encontrou.”
                    </strong>
                    <br />
                    Mas ela nunca esteve sozinha.
                  </p>

                  <p>
                    Pode escrever uma pregação sobre comunhão com Deus.
                    <br />
                    Mas nunca teve comunhão com Deus.
                  </p>

                  <p>
                    Pode reproduzir perfeitamente a linguagem da fé sem possuir
                    fé.
                  </p>

                  <p>
                    <strong className="text-white">
                      eloquência não é espiritualidade.
                    </strong>
                    <br />
                    <strong className="text-white">
                      Informação bíblica não é necessariamente comunhão com
                      Deus.
                    </strong>
                    <br />
                    <strong className="text-white">
                      Emoção não é necessariamente ação do Espírito Santo.
                    </strong>
                    <br />
                    <strong className="text-white">
                      Engajamento não é necessariamente fruto espiritual.
                    </strong>
                    <br />
                    <strong className="text-white">
                      Viralização não é necessariamente evangelização.
                    </strong>
                  </p>
                </div>
              </section>

              {/* CONTINUA PARTE 3 — TÓPICOS 11 E 12 */}
                            {/* 11 */}
              <section>
                <h3 className="mb-6 text-2xl font-bold text-white">
                  11. Músicas e pessoas que nunca existiram
                </h3>

                <div className="space-y-6 text-lg leading-8 text-zinc-300">
                  <p>
                    Hoje encontramos músicas cristãs inteiramente produzidas por
                    Inteligência Artificial. Algumas possuem letras bonitas e
                    até biblicamente corretas.
                  </p>

                  <p>
                    O problema torna-se mais delicado quando uma voz artificial
                    é apresentada de tal maneira que o ouvinte acredita estar
                    ouvindo uma pessoa real.
                  </p>

                  <p>
                    Uma cantora pode ter:
                    <br />
                    nome,
                    <br />
                    rosto,
                    <br />
                    voz,
                    <br />
                    estilo,
                    <br />
                    história,
                    <br />
                    e nunca ter existido.
                  </p>

                  <p>Isso nos obriga a fazer duas perguntas diferentes.</p>

                  <p>
                    <strong className="text-white">
                      O conteúdo é biblicamente verdadeiro?
                    </strong>
                  </p>

                  <p>E:</p>

                  <p>
                    <strong className="text-white">
                      Aquilo que está sendo apresentado ao público é realmente
                      aquilo que parece ser?
                    </strong>
                  </p>

                  <p>
                    Uma música pode passar pelo primeiro teste e falhar no
                    segundo.
                  </p>

                  <p>
                    Quando a artificialidade é escondida deliberadamente para
                    produzir no ouvinte a impressão de uma experiência humana
                    inexistente, já não estamos tratando apenas de tecnologia.
                  </p>

                  <p>
                    Estamos tratando também de{" "}
                    <strong className="text-white">
                      verdade e transparência
                    </strong>
                    .
                  </p>
                </div>
              </section>

              {/* 12 */}
              <section>
                <h3 className="mb-6 text-2xl font-bold text-white">
                  12. Responsabilidade espiritual de quem produz
                </h3>

                <div className="space-y-6 text-lg leading-8 text-zinc-300">
                  <p>
                    A Inteligência Artificial não assume responsabilidade pelo
                    conteúdo publicado.
                  </p>

                  <p>
                    Se alguém utiliza IA para produzir um estudo e publica uma
                    interpretação bíblica equivocada, não pode simplesmente
                    dizer:{" "}
                    <strong className="text-white">
                      “Foi a IA que escreveu.”
                    </strong>
                  </p>

                  <p>
                    A máquina não decidiu publicar.
                    <br />
                    Uma pessoa decidiu.
                  </p>

                  <p>Por isso Tiago faz uma advertência muito séria:</p>

                  <blockquote className="border-l-2 border-[#d4af37] bg-[#161616] px-6 py-5">
                    <p className="text-xl leading-8 text-white">
                      “Meus irmãos, muitos de vós não sejam mestres, sabendo que
                      receberemos mais duro juízo.”
                    </p>
                    <cite className="mt-3 block text-sm not-italic text-[#d4af37]">
                      Tiago 3:1
                    </cite>
                  </blockquote>

                  <p>
                    A internet transformou qualquer pessoa em um potencial
                    mestre para milhares de pessoas.
                  </p>

                  <p>
                    E a IA tornou possível algo ainda mais impressionante:{" "}
                    <strong className="text-white">
                      alguém pode parecer possuir conhecimento que nunca
                      adquiriu.
                    </strong>
                  </p>

                  <p>
                    Uma pessoa que nunca estudou profundamente determinado texto
                    bíblico pode produzir em minutos um vídeo extremamente
                    convincente sobre ele.
                  </p>

                  <p>
                    Pode acrescentar uma voz bonita.
                    <br />
                    Imagens emocionantes.
                    <br />
                    Música de fundo.
                    <br />
                    Versículos.
                    <br />
                    E publicar para milhares de pessoas.
                  </p>

                  <p>
                    A aparência de conhecimento aumentou.
                    <br />
                    <strong className="text-white">
                      A responsabilidade espiritual não diminuiu.
                    </strong>
                  </p>
                </div>
              </section>
            </div>

            <div className="mt-12 border-t border-white/10 pt-6">
              <a
                href="#indice"
                className="text-sm font-semibold text-[#d4af37] transition hover:text-yellow-300"
              >
                ↑ Voltar ao índice
              </a>
            </div>
          </section>

          {/* CONTINUAÇÃO — PARTE 4 */}
                    {/* Parte 4 */}
          <section
            id="parte-4"
            className="mt-16 scroll-mt-28 border-t border-yellow-500/20 pt-16"
          >
            <p className="mb-3 text-sm font-bold tracking-[0.2em] text-[#d4af37] uppercase">
              Parte 4
            </p>

            <h2 className="mb-12 text-3xl font-bold leading-tight text-white sm:text-4xl">
              A responsabilidade de quem ouve
            </h2>

            <div className="space-y-12">
              {/* 13 */}
              <section>
                <h3 className="mb-6 text-2xl font-bold text-white">
                  13. “Não creiais a todo espírito”
                </h3>

                <div className="space-y-6 text-lg leading-8 text-zinc-300">
                  <p>
                    Até aqui poderíamos imaginar que toda responsabilidade
                    estivesse sobre quem produz o conteúdo.
                  </p>

                  <p>
                    Mas a Bíblia também responsabiliza{" "}
                    <strong className="text-white">
                      quem recebe a mensagem
                    </strong>
                    .
                  </p>

                  <p>João escreve:</p>

                  <blockquote className="border-l-2 border-[#d4af37] bg-[#161616] px-6 py-5">
                    <p className="text-xl leading-8 text-white">
                      “Amados, não creiais a todo espírito, mas provai se os
                      espíritos são de Deus, porque já muitos falsos profetas se
                      têm levantado no mundo.”
                    </p>
                    <cite className="mt-3 block text-sm not-italic text-[#d4af37]">
                      1 João 4:1
                    </cite>
                  </blockquote>

                  <p>No original grego:</p>

                  <p>
                    <strong className="text-white">
                      Ἀγαπητοί, μὴ παντὶ πνεύματι πιστεύετε, ἀλλὰ δοκιμάζετε τὰ
                      πνεύματα...
                    </strong>
                  </p>

                  <p>
                    A palavra{" "}
                    <strong className="text-white">
                      πιστεύετε — pisteuete
                    </strong>{" "}
                    vem de <em>pisteuō</em>: crer, confiar.
                  </p>

                  <p>
                    João está dizendo:{" "}
                    <strong className="text-white">
                      Não confiem automaticamente em toda mensagem que
                      reivindica autoridade espiritual.
                    </strong>
                  </p>

                  <p>
                    E observe para quem João escreve:{" "}
                    <strong className="text-white">“Amados”.</strong>
                  </p>

                  <p>
                    A responsabilidade de discernir não pertence somente aos
                    pastores. Pertence à comunidade cristã.
                  </p>
                </div>
              </section>

              {/* 14 */}
              <section>
                <h3 className="mb-6 text-2xl font-bold text-white">
                  14. “Provai”
                </h3>

                <div className="space-y-6 text-lg leading-8 text-zinc-300">
                  <p>
                    João utiliza:{" "}
                    <strong className="text-white">
                      δοκιμάζετε — dokimazete
                    </strong>
                    , do verbo{" "}
                    <strong className="text-white">
                      δοκιμάζω — dokimazō
                    </strong>
                    .
                  </p>

                  <p>
                    A ideia é:{" "}
                    <strong className="text-white">
                      testar, examinar, avaliar, verificar a autenticidade.
                    </strong>
                  </p>

                  <p>
                    João não diz:{" "}
                    <strong className="text-white">
                      “Veja se você gostou.”
                    </strong>
                  </p>

                  <p>
                    Não diz:{" "}
                    <strong className="text-white">
                      “Veja se emocionou você.”
                    </strong>
                  </p>

                  <p>
                    Não diz:{" "}
                    <strong className="text-white">
                      “Veja quantas visualizações possui.”
                    </strong>
                  </p>

                  <p>Ele manda:</p>

                  <p>
                    <strong className="text-white">Examine.</strong>
                  </p>

                  <p>
                    Uma pregação pode emocionar e estar errada.
                    <br />
                    Uma música pode ser linda e possuir uma afirmação
                    antibíblica.
                    <br />
                    Um vídeo pode possuir milhões de visualizações e ensinar
                    algo falso.
                    <br />
                    Uma voz pode parecer profundamente espiritual e nem sequer
                    pertencer a uma pessoa existente.
                  </p>

                  <p>
                    <strong className="text-white">
                      A emoção não pode substituir o discernimento.
                    </strong>
                  </p>
                </div>
              </section>

              {/* CONTINUA PARTE 4 — TÓPICOS 15 E 16 */}
                            {/* 15 */}
              <section>
                <h3 className="mb-6 text-2xl font-bold text-white">
                  15. “Se são de Deus”
                </h3>

                <div className="space-y-6 text-lg leading-8 text-zinc-300">
                  <p>
                    A expressão grega é:{" "}
                    <strong className="text-white">
                      εἰ ἐκ τοῦ θεοῦ ἐστιν
                    </strong>
                    .
                  </p>

                  <p>
                    A palavra{" "}
                    <strong className="text-white">ἐκ — ek</strong> traz a ideia
                    de origem, procedência.
                  </p>

                  <p>
                    João está preocupado com a procedência e a verdade daquilo
                    que está sendo apresentado como espiritual.
                  </p>

                  <p>
                    E nos versículos seguintes ele fornece critérios
                    relacionados à verdade sobre Cristo e ao testemunho
                    apostólico.
                  </p>

                  <p>
                    Portanto, a pergunta do cristão não pode ser apenas:
                  </p>

                  <p>
                    <strong className="text-white">“Gostei?”</strong>
                    <br />
                    <strong className="text-white">“Me emocionou?”</strong>
                    <br />
                    <strong className="text-white">“Falou de Deus?”</strong>
                    <br />
                    <strong className="text-white">
                      “Tinha um versículo?”
                    </strong>
                  </p>

                  <p>Precisamos perguntar:</p>

                  <p>
                    <strong className="text-white">
                      “Isso está de acordo com a Palavra de Deus?”
                    </strong>
                  </p>
                </div>
              </section>

              {/* 16 */}
              <section>
                <h3 className="mb-6 text-2xl font-bold text-white">
                  16. Os bereanos
                </h3>

                <div className="space-y-6 text-lg leading-8 text-zinc-300">
                  <p>
                    Essa responsabilidade aparece de maneira belíssima em Atos.
                  </p>

                  <blockquote className="border-l-2 border-[#d4af37] bg-[#161616] px-6 py-5">
                    <p className="text-xl leading-8 text-white">
                      “Ora, estes foram mais nobres do que os que estavam em
                      Tessalônica, porque de bom grado receberam a palavra,
                      examinando cada dia nas Escrituras se estas coisas eram
                      assim.”
                    </p>
                    <cite className="mt-3 block text-sm not-italic text-[#d4af37]">
                      Atos 17:11
                    </cite>
                  </blockquote>

                  <p>
                    Eles estavam ouvindo{" "}
                    <strong className="text-white">Paulo</strong>.
                    <br />
                    Mesmo assim examinavam as Escrituras.
                    <br />
                    E Lucas não os repreende.
                    <br />
                    Ele os chama de{" "}
                    <strong className="text-white">nobres</strong>.
                  </p>

                  <p>
                    Se os bereanos examinavam aquilo que ouviam do apóstolo
                    Paulo, quanto mais nós devemos examinar aquilo que aparece
                    no feed de uma rede social.
                  </p>

                  <p>Paulo resume esse princípio:</p>

                  <blockquote className="border-l-2 border-[#d4af37] bg-[#161616] px-6 py-5">
                    <p className="text-xl leading-8 text-white">
                      “Examinai tudo. Retende o bem.”
                    </p>
                    <cite className="mt-3 block text-sm not-italic text-[#d4af37]">
                      1 Tessalonicenses 5:21
                    </cite>
                  </blockquote>

                  <p>
                    Não diz:{" "}
                    <strong className="text-white">
                      “Rejeitai tudo.”
                    </strong>
                  </p>

                  <p>
                    Também não diz:{" "}
                    <strong className="text-white">
                      “Aceitai tudo.”
                    </strong>
                  </p>

                  <p>Diz:</p>

                  <p>
                    <strong className="text-white">
                      “Examinai tudo.”
                    </strong>
                  </p>
                </div>
              </section>
            </div>

            <div className="mt-12 border-t border-white/10 pt-6">
              <a
                href="#indice"
                className="text-sm font-semibold text-[#d4af37] transition hover:text-yellow-300"
              >
                ↑ Voltar ao índice
              </a>
            </div>
          </section>

          {/* CONTINUAÇÃO — PARTE 5 */}
                    {/* Parte 5 */}
          <section
            id="parte-5"
            className="mt-16 scroll-mt-28 border-t border-yellow-500/20 pt-16"
          >
            <p className="mb-3 text-sm font-bold tracking-[0.2em] text-[#d4af37] uppercase">
              Parte 5
            </p>

            <h2 className="mb-12 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Quando o algoritmo começa a cuidar da nossa vida espiritual
            </h2>

            <div className="space-y-12">
              {/* 17 */}
              <section>
                <h3 className="mb-6 text-2xl font-bold text-white">
                  17. Quem escolhe aquilo que estamos ouvindo?
                </h3>

                <div className="space-y-6 text-lg leading-8 text-zinc-300">
                  <p>
                    Existe ainda uma característica das redes sociais que merece
                    nossa atenção.
                  </p>

                  <p>
                    Assistimos a uma pregação.
                    <br />
                    Depois aparece outra.
                    <br />
                    Assistimos.
                    <br />
                    Outra aparece.
                    <br />
                    Depois uma música.
                    <br />
                    Depois uma “profecia”.
                    <br />
                    Depois alguém dizendo:{" "}
                    <strong className="text-white">
                      “Deus mandou te dizer isso hoje.”
                    </strong>
                    <br />
                    E continuamos assistindo.
                  </p>

                  <p>Em algum momento precisamos perguntar:</p>

                  <p>
                    <strong className="text-white">
                      Quem está escolhendo aquilo que alimenta minha vida
                      espiritual?
                    </strong>
                  </p>

                  <p>
                    Porque o algoritmo não foi desenvolvido para perguntar:{" "}
                    <strong className="text-white">
                      “Esta mensagem ajudará esta pessoa a crescer
                      espiritualmente?”
                    </strong>
                  </p>

                  <p>
                    Sua lógica é outra. Ele procura descobrir aquilo que
                    provavelmente fará com que continuemos assistindo.
                  </p>

                  <p>
                    Por isso existe um princípio extremamente importante para
                    nosso tempo:
                  </p>

                  <blockquote className="border-l-2 border-[#d4af37] bg-[#161616] px-6 py-5">
                    <p className="text-xl font-semibold leading-8 text-white">
                      Não entregue ao algoritmo o discernimento que Deus exige
                      de você.
                    </p>
                  </blockquote>
                </div>
              </section>

              {/* 18 */}
              <section>
                <h3 className="mb-6 text-2xl font-bold text-white">
                  18. Conteúdo cristão não é necessariamente comunhão cristã
                </h3>

                <div className="space-y-6 text-lg leading-8 text-zinc-300">
                  <p>
                    Uma pregação pela internet pode edificar.
                    <br />
                    Uma música pode edificar.
                    <br />
                    Um estudo bíblico disponível na internet pode ensinar.
                    <br />
                    Uma transmissão de culto pode ser uma bênção, especialmente
                    para alguém que por alguma razão esteja impossibilitado de
                    estar presencialmente.
                  </p>

                  <p>
                    Mas precisamos tomar cuidado para não confundir{" "}
                    <strong className="text-white">
                      consumir conteúdo cristão
                    </strong>{" "}
                    com{" "}
                    <strong className="text-white">
                      viver a vida cristã em comunidade
                    </strong>
                    .
                  </p>

                  <p>
                    A igreja no Novo Testamento não é formada apenas por pessoas
                    que escutam pregações.
                  </p>

                  <p>
                    Existe comunhão.
                    <br />
                    Existe serviço.
                    <br />
                    Existe oração uns pelos outros.
                    <br />
                    Existe cuidado.
                    <br />
                    Existe correção.
                    <br />
                    Existe ensino.
                    <br />
                    Existe Ceia.
                    <br />
                    Existe batismo.
                    <br />
                    Existem pessoas carregando as cargas umas das outras.
                  </p>

                  <p>O escritor aos Hebreus declara:</p>

                  <blockquote className="border-l-2 border-[#d4af37] bg-[#161616] px-6 py-5">
                    <p className="text-xl leading-8 text-white">
                      “E consideremo-nos uns aos outros, para nos estimularmos à
                      caridade e às boas obras, não deixando a nossa congregação,
                      como é costume de alguns; antes, admoestando-nos uns aos
                      outros; e tanto mais quanto vedes que se vai aproximando
                      aquele Dia.”
                    </p>
                    <cite className="mt-3 block text-sm not-italic text-[#d4af37]">
                      Hebreus 10:24-25
                    </cite>
                  </blockquote>

                  <p>
                    Existe uma expressão que não podemos ignorar:{" "}
                    <strong className="text-white">“uns aos outros”.</strong>
                  </p>

                  <p>
                    Um feed pode entregar conteúdo.
                    <br />
                    Mas conteúdo não abraça.
                    <br />
                    Conteúdo não percebe nossa ausência.
                    <br />
                    Conteúdo não divide conosco nossas cargas.
                    <br />
                    Conteúdo não nos permite servir ao irmão sentado ao nosso
                    lado.
                  </p>

                  <p>
                    Podemos passar horas diariamente assistindo a pregações,
                    músicas e devocionais e ainda assim permanecer
                    espiritualmente isolados.
                  </p>
                </div>
              </section>

              {/* CONTINUA PARTE 5 — TÓPICO 19 */}
                            {/* 19 */}
              <section>
                <h3 className="mb-6 text-2xl font-bold text-white">
                  19. Duas responsabilidades diante do mesmo conteúdo
                </h3>

                <div className="space-y-6 text-lg leading-8 text-zinc-300">
                  <p>
                    Chegamos então a uma conclusão importante para esta etapa do
                    estudo.
                  </p>

                  <p>
                    Existe responsabilidade espiritual{" "}
                    <strong className="text-white">de quem produz</strong>{" "}
                    conteúdo cristão. Mas existe também responsabilidade
                    espiritual{" "}
                    <strong className="text-white">de quem consome</strong> esse
                    conteúdo.
                  </p>

                  <p>Quem produz deve perguntar:</p>

                  <p>
                    <strong className="text-white">
                      Estou falando a verdade?
                    </strong>
                    <br />
                    <strong className="text-white">
                      Examinei biblicamente aquilo que estou publicando?
                    </strong>
                    <br />
                    <strong className="text-white">
                      Estou sendo transparente?
                    </strong>
                    <br />
                    <strong className="text-white">
                      Estou edificando ou apenas procurando engajamento?
                    </strong>
                  </p>

                  <p>E quem recebe precisa perguntar:</p>

                  <p>
                    <strong className="text-white">
                      Isso está de acordo com as Escrituras?
                    </strong>
                    <br />
                    <strong className="text-white">
                      Estou examinando ou apenas consumindo?
                    </strong>
                    <br />
                    <strong className="text-white">
                      Estou seguindo Cristo ou sendo conduzido pelo algoritmo?
                    </strong>
                    <br />
                    <strong className="text-white">
                      Estou utilizando conteúdo cristão como complemento da minha
                      caminhada ou como substituto da comunhão com a igreja?
                    </strong>
                  </p>

                  <p>
                    A Inteligência Artificial tornou possível produzir conteúdo
                    religioso numa velocidade que talvez nenhuma geração
                    anterior pudesse imaginar.
                  </p>

                  <p>
                    Mas nenhuma tecnologia retirou de nós aquilo que João
                    escreveu há quase dois mil anos:
                  </p>

                  <blockquote className="border-l-2 border-[#d4af37] bg-[#161616] px-6 py-5">
                    <p className="text-xl leading-8 text-white">
                      “Amados, não creiais a todo espírito, mas provai se os
                      espíritos são de Deus...”
                    </p>
                    <cite className="mt-3 block text-sm not-italic text-[#d4af37]">
                      1 João 4:1
                    </cite>
                  </blockquote>

                  <p>
                    A tecnologia mudou.
                    <br />
                    Os meios de comunicação mudaram.
                    <br />
                    A velocidade mudou.
                    <br />
                    <strong className="text-white">
                      Nossa responsabilidade de discernir permanece.
                    </strong>
                  </p>
                </div>
              </section>
            </div>

            <div className="mt-12 border-t border-white/10 pt-6">
              <a
                href="#indice"
                className="text-sm font-semibold text-[#d4af37] transition hover:text-yellow-300"
              >
                ↑ Voltar ao índice
              </a>
            </div>
          </section>

          {/* CONTINUAÇÃO — VERDADE PRÁTICA */}
                    {/* Verdade Prática */}
          <section
            id="verdade-pratica"
            className="mt-16 scroll-mt-28 border-t border-yellow-500/20 pt-16"
          >
            <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl">
              🎯 Verdade Prática
            </h2>

            <blockquote className="border-l-2 border-[#d4af37] bg-[#161616] px-6 py-6 sm:px-8">
              <p className="text-xl font-semibold leading-9 text-white">
                A Inteligência Artificial pode ser uma poderosa ferramenta nas
                mãos do cristão, mas jamais poderá substituir sua
                responsabilidade diante de Deus. Cabe a quem proclama fazê-lo
                com verdade, santidade e reverência; e a quem ouve, examinar
                tudo à luz das Escrituras, retendo o que é bom.
              </p>
            </blockquote>

            <div className="mt-10 border-t border-white/10 pt-6">
              <a
                href="#indice"
                className="text-sm font-semibold text-[#d4af37] transition hover:text-yellow-300"
              >
                ↑ Voltar ao índice
              </a>
            </div>
          </section>

          {/* CONTINUAÇÃO — CONCLUSÃO */}
                    {/* Conclusão */}
          <section
            id="conclusao"
            className="mt-16 scroll-mt-28 border-t border-yellow-500/20 pt-16"
          >
            <h2 className="mb-10 text-3xl font-bold leading-tight text-white sm:text-4xl">
              🙏 Conclusão — Reverência diante de Deus
            </h2>

            <div className="space-y-6 text-lg leading-8 text-zinc-300">
              <p>
                <strong className="text-white">
                  Isaías capítulo 6 nos apresenta um dos mais belos exemplos
                  bíblicos de reverência diante do Senhor. E, fazendo um
                  paralelo entre tudo o que estudamos até aqui e a situação
                  atual da sociedade cristã, talvez seja justamente isso que
                  esteja faltando em nosso meio: reverência.
                </strong>
              </p>

              <p>
                <strong className="text-white">
                  Isaías viveu em uma sociedade marcada pelo pecado. Ele mesmo
                  reconheceu:
                </strong>
              </p>

              <blockquote className="border-l-2 border-[#d4af37] bg-[#161616] px-6 py-5">
                <p className="text-xl leading-8 text-white">
                  “Ai de mim! Pois estou perdido; porque sou um homem de lábios
                  impuros e habito no meio de um povo de impuros lábios; e os
                  meus olhos viram o Rei, o SENHOR dos Exércitos!”
                </p>
                <cite className="mt-3 block text-sm not-italic text-[#d4af37]">
                  Isaías 6:5
                </cite>
              </blockquote>

              <p>
                <strong className="text-white">
                  Guardadas as diferenças históricas, não é difícil perceber a
                  atualidade desse princípio.
                </strong>
              </p>

              <p>
                <strong className="text-white">
                  Vivemos em uma geração na qual nunca foi tão fácil falar sobre
                  Deus para tantas pessoas.
                </strong>
              </p>

              <p>
                <strong className="text-white">
                  As redes sociais deram voz a praticamente todos. Homens e
                  mulheres, letrados e iletrados, pastores, teólogos, novos
                  convertidos e pessoas sem qualquer formação bíblica podem
                  alcançar centenas, milhares e até milhões de pessoas.
                </strong>
              </p>

              <p>
                <strong className="text-white">
                  Agora a Inteligência Artificial ampliou ainda mais essa
                  possibilidade.
                </strong>
              </p>

              <p>
                <strong className="text-white">
                  Em poucos minutos podemos produzir um texto, uma música, uma
                  imagem, um vídeo, um devocional ou até uma pregação inteira.
                </strong>
              </p>

              <p>
                <strong className="text-white">
                  Mas será que paramos para pensar na responsabilidade que
                  acompanha essa capacidade?
                </strong>
              </p>

              <p>
                <strong className="text-white">
                  No Antigo Testamento, o profeta era alguém chamado por Deus
                  para transmitir sua Palavra, revelar sua vontade, chamar o
                  povo ao arrependimento, denunciar o pecado e advertir acerca
                  do juízo.
                </strong>
              </p>

              <p>
                <strong className="text-white">
                  Hoje precisamos ter cuidado para não atribuir
                  indiscriminadamente a todo cristão o ofício profético
                  encontrado no Antigo Testamento. Entretanto, existe algo que
                  pertence claramente a todo povo de Deus: a responsabilidade da
                  proclamação.
                </strong>
              </p>

              <p>
                <strong className="text-white">Pedro escreve:</strong>
              </p>

              <blockquote className="border-l-2 border-[#d4af37] bg-[#161616] px-6 py-5">
                <p className="text-xl leading-8 text-white">
                  “Mas vós sois a geração eleita, o sacerdócio real, a nação
                  santa, o povo adquirido, para que anuncieis as virtudes
                  daquele que vos chamou das trevas para a sua maravilhosa luz.”
                </p>
                <cite className="mt-3 block text-sm not-italic text-[#d4af37]">
                  1 Pedro 2:9
                </cite>
              </blockquote>

              <p>
                <strong className="text-white">
                  Somos chamados a anunciar.
                </strong>
              </p>

              <p>
                <strong className="text-white">
                  E devemos glorificar a Deus porque vivemos em uma época na
                  qual o Evangelho pode chegar a lugares que gerações anteriores
                  jamais poderiam imaginar.
                </strong>
              </p>

              <p>
                <strong className="text-white">
                  Mas essa possibilidade também nos obriga a fazer algumas
                  perguntas.
                </strong>
              </p>

              <p>
                <strong className="text-white">
                  Quem está anunciando?
                  <br />
                  Existe uma pessoa real por trás daquele conteúdo?
                  <br />
                  Quem escreveu aquilo que estamos lendo?
                  <br />
                  Quem compôs aquilo que estamos cantando?
                  <br />
                  Quem interpreta aquela música?
                  <br />
                  Quem assume responsabilidade pela doutrina ensinada naquela
                  pregação?
                </strong>
              </p>

              <p>
                <strong className="text-white">
                  E, do outro lado, quem está ouvindo?
                </strong>
              </p>

              <p>
                <strong className="text-white">
                  Estamos realmente examinando aquilo que recebemos ou
                  simplesmente consumindo tudo aquilo que possui aparência
                  cristã?
                </strong>
              </p>

              <p>
                <strong className="text-white">
                  Estamos nos aproximando de Cristo ou apenas achando bonito,
                  emocionante e socialmente aceitável compartilhar determinado
                  conteúdo?
                </strong>
              </p>

              <p>
                <strong className="text-white">
                  A Palavra de Deus possui uma eficácia que não depende de nossa
                  capacidade de torná-la atraente. O próprio Senhor declara:
                </strong>
              </p>

              {/* CONTINUA CONCLUSÃO */}
                            <blockquote className="border-l-2 border-[#d4af37] bg-[#161616] px-6 py-5">
                <p className="text-xl leading-8 text-white">
                  “Assim será a palavra que sair da minha boca; ela não voltará
                  para mim vazia, antes fará o que me apraz e prosperará naquilo
                  para que a enviei.”
                </p>
                <cite className="mt-3 block text-sm not-italic text-[#d4af37]">
                  Isaías 55:11
                </cite>
              </blockquote>

              <p>
                <strong className="text-white">
                  Mas esse texto não pode servir de justificativa para nossa
                  irresponsabilidade.
                </strong>
              </p>

              <p>
                <strong className="text-white">
                  A promessa é que a Palavra de Deus cumprirá o propósito para o
                  qual Deus a envia, e não que podemos utilizá-la de qualquer
                  maneira porque, no final, “ela não voltará vazia”.
                </strong>
              </p>

              <p>
                <strong className="text-white">Pelo contrário.</strong>
              </p>

              <p>
                <strong className="text-white">
                  Justamente porque estamos lidando com a Palavra de Deus,
                  deveríamos fazê-lo com ainda maior temor.
                </strong>
              </p>

              <p>
                <strong className="text-white">
                  O que está em questão, portanto, não é simplesmente o uso da
                  Inteligência Artificial, mas como ela está sendo usada.
                </strong>
              </p>

              <p>
                <strong className="text-white">
                  Não é pecado utilizar uma ferramenta para pesquisar, organizar
                  informações, revisar um texto, compreender um contexto
                  histórico ou auxiliar na preparação de um conteúdo.
                </strong>
              </p>

              <p>
                <strong className="text-white">
                  O problema começa quando aquilo que deveria ser ferramenta
                  passa a substituir aquilo que Deus exige do ser humano:
                  responsabilidade, discernimento, integridade, comunhão,
                  santidade e temor.
                </strong>
              </p>

              <p>
                <strong className="text-white">
                  E a responsabilidade não pertence somente a quem produz.
                </strong>
              </p>

              <p>
                <strong className="text-white">João escreve:</strong>
              </p>

              <blockquote className="border-l-2 border-[#d4af37] bg-[#161616] px-6 py-5">
                <p className="text-xl leading-8 text-white">
                  “Amados, não creiais a todo espírito, mas provai se os
                  espíritos são de Deus, porque já muitos falsos profetas se têm
                  levantado no mundo.”
                </p>
                <cite className="mt-3 block text-sm not-italic text-[#d4af37]">
                  1 João 4:1
                </cite>
              </blockquote>

              <p>
                <strong className="text-white">
                  Quem produz precisa assumir responsabilidade pelo que publica.
                  <br />
                  Quem consome precisa assumir responsabilidade pelo que recebe.
                </strong>
              </p>

              <p>
                <strong className="text-white">
                  Não podemos entregar nosso discernimento a um algoritmo.
                </strong>
              </p>

              <p>
                <strong className="text-white">
                  Não podemos imaginar que horas assistindo a pregações
                  substituam automaticamente nossa comunhão com a igreja.
                </strong>
              </p>

              <p>
                <strong className="text-white">
                  Não podemos confundir quantidade de conteúdo cristão consumido
                  com maturidade espiritual.
                </strong>
              </p>

              <p>
                <strong className="text-white">A Palavra nos ordena:</strong>
              </p>

              <blockquote className="border-l-2 border-[#d4af37] bg-[#161616] px-6 py-5">
                <p className="text-xl leading-8 text-white">
                  “Examinai tudo. Retende o bem.”
                </p>
                <cite className="mt-3 block text-sm not-italic text-[#d4af37]">
                  1 Tessalonicenses 5:21
                </cite>
              </blockquote>

              <p>
                <strong className="text-white">E também:</strong>
              </p>

              <blockquote className="border-l-2 border-[#d4af37] bg-[#161616] px-6 py-5">
                <p className="text-xl leading-8 text-white">
                  “E consideremo-nos uns aos outros, para nos estimularmos à
                  caridade e às boas obras, não deixando a nossa congregação,
                  como é costume de alguns...”
                </p>
                <cite className="mt-3 block text-sm not-italic text-[#d4af37]">
                  Hebreus 10:24-25
                </cite>
              </blockquote>

              <p>
                <strong className="text-white">
                  Conteúdo cristão pode nos edificar.
                  <br />
                  Uma pregação pela internet pode nos ensinar.
                  <br />
                  Uma música pode nos levar a refletir.
                  <br />
                  Uma Inteligência Artificial pode nos ajudar a estudar.
                </strong>
              </p>

              <p>
                <strong className="text-white">
                  Mas nenhuma dessas coisas deve ocupar o lugar da comunhão, do
                  discipulado, da responsabilidade pessoal diante das Escrituras
                  e da vida no Corpo de Cristo.
                </strong>
              </p>

              <p>
                <strong className="text-white">
                  É aqui que precisamos voltar a Isaías.
                </strong>
              </p>

              <p>
                <strong className="text-white">
                  Antes que Isaías recebesse sua incumbência profética, ele viu
                  o Senhor.
                </strong>
              </p>

              <blockquote className="border-l-2 border-[#d4af37] bg-[#161616] px-6 py-5">
                <p className="text-xl leading-8 text-white">
                  “Santo, Santo, Santo é o SENHOR dos Exércitos; toda a terra
                  está cheia da sua glória.”
                </p>
                <cite className="mt-3 block text-sm not-italic text-[#d4af37]">
                  Isaías 6:3
                </cite>
              </blockquote>

              {/* CONTINUA CONCLUSÃO — BLOCO FINAL */}
                            <p>
                <strong className="text-white">
                  Até os serafins que estavam diante do Senhor cobriam o rosto e
                  os pés diante de sua majestade.
                </strong>
              </p>

              <p>
                <strong className="text-white">
                  Então Isaías olhou para si mesmo:
                </strong>
              </p>

              <blockquote className="border-l-2 border-[#d4af37] bg-[#161616] px-6 py-5">
                <p className="text-xl leading-8 text-white">“Ai de mim!”</p>
                <cite className="mt-3 block text-sm not-italic text-[#d4af37]">
                  Isaías 6:5
                </cite>
              </blockquote>

              <p>
                <strong className="text-white">
                  Depois veio a purificação:
                </strong>
              </p>

              <blockquote className="border-l-2 border-[#d4af37] bg-[#161616] px-6 py-5">
                <p className="text-xl leading-8 text-white">
                  “Eis que isto tocou os teus lábios; e a tua iniquidade foi
                  tirada, e purificado o teu pecado.”
                </p>
                <cite className="mt-3 block text-sm not-italic text-[#d4af37]">
                  Isaías 6:7
                </cite>
              </blockquote>

              <p>
                <strong className="text-white">
                  Somente então veio o chamado:
                </strong>
              </p>

              <blockquote className="border-l-2 border-[#d4af37] bg-[#161616] px-6 py-5">
                <p className="text-xl leading-8 text-white">
                  “A quem enviarei, e quem há de ir por nós?”
                </p>
                <cite className="mt-3 block text-sm not-italic text-[#d4af37]">
                  Isaías 6:8
                </cite>
              </blockquote>

              <p>
                <strong className="text-white">
                  E finalmente a resposta:
                </strong>
              </p>

              <blockquote className="border-l-2 border-[#d4af37] bg-[#161616] px-6 py-5">
                <p className="text-xl leading-8 text-white">
                  “Eis-me aqui, envia-me a mim.”
                </p>
                <cite className="mt-3 block text-sm not-italic text-[#d4af37]">
                  Isaías 6:8
                </cite>
              </blockquote>

              <p>
                <strong className="text-white">
                  Existe uma ordem que não deveríamos ignorar:
                </strong>
              </p>

              <blockquote className="border-l-2 border-[#d4af37] bg-[#161616] px-6 py-5">
                <p className="text-xl font-semibold leading-8 text-white">
                  Santidade de Deus → consciência do pecado → purificação →
                  chamado → proclamação.
                </p>
              </blockquote>

              <p>
                <strong className="text-white">
                  Talvez um dos perigos de nosso tempo seja termos transformado
                  essa caminhada em algo muito mais simples:
                </strong>
              </p>

              <blockquote className="border-l-2 border-[#d4af37] bg-[#161616] px-6 py-5">
                <p className="text-xl font-semibold leading-8 text-white">
                  comando → conteúdo → publicação → engajamento.
                </p>
              </blockquote>

              <p>
                <strong className="text-white">Devemos proclamar.</strong>
              </p>

              <p>
                <strong className="text-white">
                  Somos chamados a anunciar as virtudes daquele que nos chamou
                  das trevas para a sua maravilhosa luz.
                </strong>
              </p>

              <p>
                <strong className="text-white">
                  Mas não de qualquer maneira.
                </strong>
              </p>

              <p>
                <strong className="text-white">
                  A Palavra de Deus não deve ser transformada em mercadoria para
                  satisfazer nosso ego, alimentar nossa necessidade de
                  reconhecimento ou simplesmente aumentar números em uma rede
                  social.
                </strong>
              </p>

              <p>
                <strong className="text-white">
                  E também não devemos transformar conteúdo cristão digital em
                  substituto da comunhão, do arrependimento, da santificação e
                  da vida da igreja.
                </strong>
              </p>

              <p>
                <strong className="text-white">
                  Talvez, diante de toda essa tecnologia, precisemos recuperar
                  aquilo que Isaías demonstrou diante do trono:
                </strong>
              </p>

              <p>
                <strong className="text-white">reverência.</strong>
              </p>

              <p>
                <strong className="text-white">
                  A Inteligência Artificial pode ajudar a pesquisar. Pode
                  organizar. Pode revisar. Pode produzir uma melodia. Pode gerar
                  uma imagem. Pode até formular uma exposição bíblica.
                </strong>
              </p>

              <p>
                <strong className="text-white">
                  Mas ela não pode dizer: “Ai de mim”.
                </strong>
              </p>

              <p>
                <strong className="text-white">
                  Não pode arrepender-se.
                </strong>
              </p>

              <p>
                <strong className="text-white">
                  Não pode ser purificada.
                </strong>
              </p>

              <p>
                <strong className="text-white">
                  Não pode temer a Deus.
                </strong>
              </p>

              <p>
                <strong className="text-white">Não pode responder:</strong>
              </p>

              <blockquote className="border-l-2 border-[#d4af37] bg-[#161616] px-6 py-5">
                <p className="text-xl font-semibold leading-8 text-white">
                  “Eis-me aqui, envia-me a mim.”
                </p>
              </blockquote>

              <p>
                <strong className="text-white">
                  Essa resposta continua pertencendo ao ser humano.
                </strong>
              </p>

              <p>
                <strong className="text-white">
                  E talvez seja justamente por isso que Isaías 6 seja um
                  encerramento tão apropriado para um estudo sobre Inteligência
                  Artificial e ética cristã.
                </strong>
              </p>
            </div>

            <div className="mt-12 border-t border-white/10 pt-6">
              <a
                href="#indice"
                className="text-sm font-semibold text-[#d4af37] transition hover:text-yellow-300"
              >
                ↑ Voltar ao índice
              </a>
            </div>
          </section>

          {/* CONTINUAÇÃO — COMPARTILHAMENTO E ENCERRAMENTO */}
                    {/* Compartilhamento */}
          <section className="mt-16 border-t border-yellow-500/20 pt-10">
            <div className="rounded-xl border border-white/10 bg-[#161616] p-6 sm:p-8">
              <p className="mb-4 text-sm font-bold tracking-[0.2em] text-[#d4af37] uppercase">
                Compartilhe
              </p>

              <h2 className="mb-4 text-2xl font-bold text-white">
                Este estudo pode edificar outras pessoas
              </h2>

              <p className="mb-6 max-w-2xl leading-7 text-zinc-400">
                Se este conteúdo foi útil para você, compartilhe com alguém que
                também possa ser edificado por esta reflexão.
              </p>

              <ShareButton
                title="Inteligência Artificial e Ética Cristã"
                text="Um estudo bíblico sobre Inteligência Artificial, ética cristã, discernimento, responsabilidade e reverência diante de Deus."
              />
            </div>
          </section>

          {/* Próximo conteúdo */}
          <section className="mt-16 border-t border-white/10 pt-10">
            <p className="mb-3 text-sm font-bold tracking-[0.2em] text-[#d4af37] uppercase">
              Fé e Tecnologia
            </p>

            <h2 className="text-2xl font-bold text-white">Em Breve</h2>

            <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
              Novos conteúdos sobre fé, tecnologia e os desafios do nosso tempo
              serão adicionados a esta seção.
            </p>

            <Link
              href="/vida-em-foco"
              className="mt-8 inline-block font-semibold text-[#d4af37] transition hover:text-yellow-300"
            >
              ← Voltar para Vida em Foco
            </Link>
          </section>
        </div>
      </article>
    </main>
  );
}