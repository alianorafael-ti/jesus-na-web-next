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
    Ao longo dos séculos, a música tem ocupado um lugar especial na vida
    da Igreja. Por meio de cânticos de adoração, louvor e proclamação do
    Evangelho, homens e mulheres expressaram sua fé, transmitiram
    ensinamentos bíblicos e deixaram testemunhos que atravessaram gerações.
  </p>

  <p>
    Muitos desses cânticos continuam presentes em nossos cultos. Suas
    melodias nos são familiares, suas letras estão guardadas em nossa
    memória e, não raramente, acompanham momentos marcantes de nossa
    caminhada cristã. Entretanto, quantas vezes nos perguntamos quem
    foram as pessoas que os escreveram? Em que circunstâncias viveram?
    Quais experiências, dificuldades e acontecimentos influenciaram suas
    composições?
  </p>

  <p>
    Foi a partir dessas perguntas que nasceu a série{" "}
    <strong>Compositores da Harpa Cristã</strong>.
  </p>

  <h3>Preparando o Caminho: A Música Cristã Através da História</h3>

  <p>
    Desde o início deste projeto, compreendemos que seria necessário
    olhar para além das páginas da Harpa Cristã.
  </p>

  <p>
    Antes de conhecermos seus compositores, precisávamos compreender
    parte da trajetória histórica da música cristã e as transformações
    que contribuíram para a formação do repertório que hoje encontramos
    em nossas igrejas.
  </p>

  <p>
    Por essa razão, os primeiros estudos da série foram dedicados a
    personagens de diferentes períodos da história da Igreja, incluindo
    homens e mulheres cuja atuação esteve relacionada à Reforma
    Protestante e ao desenvolvimento do canto congregacional.
  </p>

  <p>
    A Reforma do século XVI representou um marco importante nesse
    processo, ao valorizar a participação da congregação no louvor e
    ampliar o uso da música como instrumento de ensino das Escrituras
    e proclamação da fé.
  </p>

  <p>
    Esses estudos não foram um desvio de nosso propósito inicial.
    Pelo contrário, constituíram uma preparação necessária para
    compreendermos como diferentes tradições musicais e experiências
    históricas contribuíram, ao longo do tempo, para a formação da
    hinódia cristã.
  </p>

  <p>
    Era preciso conhecer parte desse caminho antes de chegarmos ao
    nosso destino.
  </p>

  <h3>Uma Nova Etapa: Conhecendo os Compositores da Harpa Cristã</h3>

  <p>Agora, damos início à etapa central deste projeto.</p>

  <p>
    Nosso propósito é percorrer a Harpa Cristã, investigando a vida e
    o legado dos homens e mulheres que contribuíram para seus hinos,
    sejam eles compositores, tradutores ou adaptadores.
  </p>

  <p>
    Não pretendemos apenas apresentar nomes, datas de nascimento e
    falecimento ou relacionar os hinos atribuídos a cada pessoa.
  </p>

  <p>Queremos conhecer suas histórias.</p>

  <p>
    Desejamos compreender o mundo em que viveram, as condições sociais
    e econômicas de seu tempo, as dificuldades que enfrentaram, os
    caminhos que percorreram e, sempre que houver documentação
    suficiente, as experiências que inspiraram suas composições.
  </p>

  <p>
    Afinal, por trás de muitos hinos que cantamos há histórias de
    perseverança, sofrimento, esperança, dedicação e confiança em Deus.
  </p>

  <p>
    Conhecer essas circunstâncias pode nos ajudar a compreender melhor
    não apenas a origem dos cânticos, mas também a profundidade das
    mensagens que seus autores procuraram transmitir.
  </p>

  <h3>Um Trabalho Necessário, Apesar das Dificuldades</h3>

  <p>
    A continuidade desta série exigiu mais tempo do que inicialmente
    imaginávamos.
  </p>

  <p>
    Ao avançarmos nas pesquisas, percebemos que a tarefa era muito mais
    complexa do que reunir informações biográficas. Encontramos
    registros incompletos, divergências históricas, dificuldades para
    identificar determinadas autorias e fontes que nem sempre estavam
    disponíveis para consulta.
  </p>

  <p>
    Também descobrimos que muitos hinos possuem uma história de
    traduções e adaptações, tornando necessário distinguir a autoria
    original das contribuições daqueles que os introduziram no
    repertório brasileiro.
  </p>

  <p>
    Essas dificuldades nos levaram a dedicar mais tempo à preparação
    desta nova etapa.
  </p>

  <p>
    Entretanto, compreendemos que esse trabalho é necessário,
    especialmente em nossos dias, quando temos tantos recursos à
    disposição, mas nem sempre dedicamos tempo para conhecer a história
    daqueles que nos antecederam na fé.
  </p>

  <p>
    Não buscamos apresentar biografias como substitutas dos
    ensinamentos bíblicos, pois a Palavra de Deus permanece como nossa
    autoridade e fundamento.
  </p>

  <p>
    Contudo, as próprias Escrituras nos incentivam a considerar o
    exemplo daqueles que viveram e anunciaram a fé:
  </p>

  <blockquote>
    <p>
      “Lembrai-vos dos vossos pastores, que vos falaram a palavra de Deus,
      a fé dos quais imitai, atentando para a sua maneira de viver.”
    </p>
    <cite>Hebreus 13:7</cite>
  </blockquote>

  <p>
    É nesse espírito que desejamos desenvolver esta pesquisa:
    reconhecendo a contribuição desses homens e mulheres, sem perder
    de vista que toda honra e toda glória pertencem ao Senhor.
  </p>

  <h3>O Início de Uma Grande Jornada</h3>

  <p>
    Para inaugurar esta nova etapa, começaremos com a vida de{" "}
    <strong>Paulo Leivas Macalão</strong>, um dos nomes mais conhecidos
    entre os colaboradores da Harpa Cristã.
  </p>

  <p>
    Sua trajetória nos conduzirá aos subúrbios do Rio de Janeiro nas
    primeiras décadas do século XX, quando um jovem evangelista,
    enfrentando dificuldades e resistências, dedicou-se à proclamação
    do Evangelho e encontrou na música uma importante forma de
    expressar sua fé e perseverança.
  </p>

  <p>
    A partir de sua história, seguiremos conhecendo outros
    colaboradores do hinário, procurando respeitar as particularidades
    de cada trajetória e as informações que a documentação histórica
    nos permitir recuperar.
  </p>

  <p>
    Sabemos que este será um trabalho extenso e que nem sempre
    encontraremos respostas para todas as perguntas. Ainda assim,
    nosso compromisso será pesquisar com responsabilidade, reconhecer
    as limitações das fontes e compartilhar com nossos leitores aquilo
    que conseguirmos conhecer.
  </p>

  <p>
    Nosso desejo é que, ao final desta jornada, possamos abrir nossas
    Harpas Cristãs com uma compreensão mais profunda da história que
    existe por trás de suas páginas.
  </p>

  <p>
    Que cada biografia nos ajude a reconhecer não apenas a beleza dos
    hinos que recebemos, mas também o valor da fidelidade, da
    perseverança e da dedicação daqueles que contribuíram para
    transmiti-los às gerações seguintes.
  </p>

  <p>
    E que, acima de tudo, essas histórias nos conduzam à reflexão sobre
    nossa própria caminhada com Cristo.
  </p>

  <p>
    <strong>
      Porque os hinos permanecem, as gerações passam, mas a Palavra
      do nosso Deus subsiste eternamente. (Isaías 40:8)
    </strong>
  </p>
</section>


       
<section className="indice-serie">
  <h2>Estudos da Série</h2>

  <h3>Primeira Etapa — Preparação Histórica</h3>

  <p>
    Conheça os personagens que contribuíram para o desenvolvimento
    da música cristã e do canto congregacional, preparando o caminho
    para a formação da hinódia que chegou às nossas igrejas.
  </p>

  <div className="grid-serie">
    {compositores
      .filter((estudo) => (estudo.ordemNaSerie ?? 0) <= 5)
      .map((estudo) => (
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

  <h3 className="mt-12 mb-4 border-t border-yellow-500/30 pt-8 text-xl font-bold text-[#d4af37]">
  Segunda Etapa — Colaboradores da Harpa Cristã
</h3>

  <p>
    Nesta etapa, conheceremos os compositores, tradutores e
    adaptadores que contribuíram para a formação do repertório
    da Harpa Cristã, começando por Paulo Leivas Macalão.
  </p>

  <div className="grid-serie">
    {compositores
      .filter((estudo) => (estudo.ordemNaSerie ?? 0) > 5)
      .map((estudo) => (
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