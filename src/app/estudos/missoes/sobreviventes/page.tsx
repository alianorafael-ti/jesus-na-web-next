
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";


const fotografias = [1, 2, 3, 4, 5, 6, 7, 9, 10].map(
  (numero) => ({
    src: `/images/missoes/sobreviventes/sobreviventes${numero}.jpeg`,
    alt: `Registro fotográfico ${numero} do Projeto Sobreviventes`,
  })
);


export const metadata: Metadata = {
  title: "Projeto Sobreviventes | Jesus na Web",
  description:
    "Conheça o Projeto Sobreviventes, uma iniciativa missionária cristã dedicada ao acolhimento, à escuta e à esperança de um recomeço.",
};

export default function SobreviventesPage() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#172033]">
    
      
{/* APRESENTAÇÃO */}
<section className="bg-[#071426] text-white">
  <div className="mx-auto max-w-5xl px-6 py-14 md:px-10 md:py-20">
    <Link
      href="/estudos/missoes"
      className="text-sm text-[#d4af37] hover:underline"
    >
      ← Voltar para Missões
    </Link>

    <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
      {/* TEXTO */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
          Missões em Ação · Brasil
        </p>
        {/* LOGOTIPO DO SOBREVIVENTES */}
<div className="relative mt-6 h-28 w-28 overflow-hidden rounded-full bg-white shadow-lg md:h-32 md:w-32">
  <Image
    src="/images/missoes/sobreviventes/logo.jpeg"
    alt="Logotipo oficial do Projeto Sobreviventes"
    fill
    sizes="(max-width: 768px) 112px, 128px"
    className="object-contain"
  />
</div>

        <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
          Sobreviventes
        </h1>

        <p className="mt-5 text-xl font-medium text-[#d4af37]">
          Uma oportunidade de recomeçar.
        </p>

        <p className="mt-7 leading-8 text-slate-300">
          Existem histórias que não terminaram nas ruas.
          Existem vidas que ainda esperam uma oportunidade,
          uma palavra de esperança e alguém disposto a ouvir.
        </p>

        <p className="mt-5 leading-8 text-slate-300">
          O Sobreviventes é um projeto missionário cristão
          que busca levar acolhimento, dignidade e o amor
          de Jesus Cristo a pessoas em situação de rua
          e que enfrentam a dependência química.
        </p>
      </div>

      {/* FOTOGRAFIA */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-800 shadow-xl">
        <Image
          src="/images/missoes/sobreviventes/capa2.jpeg"
          alt="Registro das ruas da região conhecida como Cracolândia, no centro de São Paulo"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </div>
  </div>
</section>



      {/* NOSSA MISSÃO */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10">
        <h2 className="text-3xl font-bold text-[#071426]">
          Nossa missão
        </h2>

        <div className="mt-6 space-y-5 leading-8 text-slate-700">
          <p>
            Acreditamos que toda pessoa possui uma história,
            uma dignidade que precisa ser respeitada e
            a possibilidade de construir um novo caminho.
          </p>

          <p>
            Nossa missão começa com a disposição de ouvir,
            acolher sem julgamentos e compartilhar a esperança
            encontrada no Evangelho de Jesus Cristo.
          </p>

          <p>
            Buscamos também orientar e apoiar pessoas que
            desejam iniciar um processo de recuperação,
            respeitando suas decisões e procurando construir
            caminhos de acesso à rede de atendimento.
          </p>
        </div>

        <blockquote className="mt-10 rounded-xl border-l-4 border-[#d4af37] bg-white p-6">
          <p className="text-xl italic text-[#071426]">
            &ldquo;Eu plantei, Apolo regou; mas Deus deu
            o crescimento.&rdquo;
          </p>
          <cite className="mt-3 block not-italic text-slate-600">
            1 Coríntios 3:6
          </cite>
        </blockquote>
      </section>

      {/* ORIGEM DO PROJETO */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#9a7b18]">
            Nossa história
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#071426]">
            A origem do Sobreviventes
          </h2>

          <p className="mt-5 text-xl font-medium text-slate-700">
            Quando uma história de superação se transforma
            em missão.
          </p>

          <div className="mt-6 space-y-5 leading-8 text-slate-700">
            <p>
              O Projeto Sobreviventes nasceu do desejo de
              transformar experiências de vida em cuidado
              e serviço ao próximo.
            </p>

            <p>
              Sua idealizadora, Rosana, conhece de perto
              os desafios relacionados à dependência química
              e compreende a importância de oferecer escuta,
              respeito e esperança às pessoas que enfrentam
              situações semelhantes.
            </p>

            <p>
              Ao longo de sua caminhada, compreendeu que
              gestos aparentemente pequenos podem representar
              muito para alguém que perdeu a esperança.
            </p>

            <p>
              Uma conversa, uma palavra de encorajamento
              ou simplesmente a disposição de ouvir podem
              abrir caminhos para um recomeço.
            </p>

            <p>
              O Sobreviventes nasceu dessa convicção:
              nenhuma pessoa deve ser tratada como alguém
              sem valor ou sem esperança.
            </p>
          </div>

          <blockquote className="mt-10 rounded-xl bg-[#f7f5ef] p-7">
            <p className="text-xl italic leading-8 text-[#071426]">
              &ldquo;Nossa missão é plantar a semente.
              Quem vai dar o crescimento é Deus.&rdquo;
            </p>
            <cite className="mt-4 block not-italic text-slate-600">
              Rosana — Idealizadora do Sobreviventes
            </cite>
          </blockquote>
        </div>
      </section>

      {/* NOSSA MANEIRA DE SERVIR */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10">
        <h2 className="text-3xl font-bold text-[#071426]">
          Nossa maneira de servir
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              titulo: "Acolher",
              texto:
                "Estar presente, ouvir com respeito e reconhecer a dignidade de cada pessoa.",
            },
            {
              titulo: "Orientar",
              texto:
                "Apoiar a busca por atendimento e por oportunidades de reconstrução da vida.",
            },
            {
              titulo: "Compartilhar esperança",
              texto:
                "Testemunhar o amor de Cristo por meio de palavras, atitudes e serviço.",
            },
          ].map((item) => (
            <article
              key={item.titulo}
              className="rounded-2xl border border-slate-200 bg-white p-7"
            >
              <h3 className="text-xl font-bold text-[#071426]">
                {item.titulo}
              </h3>
              <p className="mt-4 leading-7 text-slate-700">
                {item.texto}
              </p>
            </article>
          ))}
        </div>
      </section>


{/* GALERIA DO SOBREVIVENTES */}
<section className="bg-white py-16">
  <div className="mx-auto max-w-5xl px-6 md:px-10">
    <p className="text-sm font-semibold uppercase tracking-wider text-[#9a7b18]">
      Missão em Ação
    </p>

    <h2 className="mt-3 text-3xl font-bold text-[#071426]">
      Registros de uma missão que já começou
    </h2>

    <p className="mt-5 max-w-3xl leading-8 text-slate-700">
      Cada encontro representa uma oportunidade de ouvir,
      acolher e compartilhar esperança. Estes registros
      apresentam momentos da caminhada do Projeto
      Sobreviventes e das pessoas que fazem parte
      dessa história.
    </p>

    <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
      {fotografias.map((foto) => (
        <div
          key={foto.src}
          className="flex items-center justify-center overflow-hidden rounded-xl bg-[#f7f5ef] p-2"
        >
          <Image
            src={foto.src}
            alt={foto.alt}
            width={800}
            height={1000}
            sizes="(max-width: 768px) 50vw, 33vw"
            className="h-auto w-full rounded-lg object-contain"
          />
        </div>
      ))}
    </div>

    <p className="mt-8 text-sm italic leading-7 text-slate-500">
      Registros fotográficos compartilhados com o projeto.
      O respeito à dignidade das pessoas retratadas
      faz parte do nosso compromisso.
    </p>
  </div>
</section>


      {/* PARTICIPE */}
      <section className="bg-[#071426] py-16 text-white">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#d4af37]">
            Faça parte desta missão
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Você também pode ajudar a construir recomeços
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-slate-200">
            O Sobreviventes está dando seus primeiros passos.
            Para ampliar suas ações, busca desenvolver uma
            rede de apoio formada por pessoas, voluntários
            e parceiros comprometidos com essa missão.
          </p>

          <p className="mt-5 max-w-3xl leading-8 text-slate-200">
            Você pode participar em oração, compartilhar
            o projeto e contribuir para que mais pessoas
            conheçam essa iniciativa.
          </p>

          <p className="mt-6 text-sm leading-7 text-slate-300">
            Em breve, serão divulgadas informações sobre
            formas de participação e apoio ao projeto.
          </p>
        </div>
      </section>
    </main>
  );
}
