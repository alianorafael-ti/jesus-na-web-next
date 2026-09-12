import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "O Cristão e o Cuidado com a Criação | Jesus na Web",
  description:
    "Uma reflexão cristã sobre sustentabilidade, responsabilidade ambiental e o cuidado com a criação de Deus.",
};

const acoes = [
  "💧 Evite desperdício de água.",
  "💡 Apague luzes e economize energia quando possível.",
  "🗑️ Descarte o lixo corretamente.",
  "♻️ Recicle materiais sempre que houver oportunidade.",
  "🌳 Valorize áreas verdes e espaços naturais.",
  "🛒 Pratique o consumo consciente.",
  "🐾 Respeite os animais e a natureza.",
];

export default function CuidadoComACriacaoPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] text-zinc-200">
      {/* Hero */}
      <section className="border-b border-yellow-500/20 px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/vida-em-foco"
            className="mb-8 inline-block text-sm font-semibold text-[#d4af37] transition hover:text-yellow-300"
          >
            ← Vida em Foco
          </Link>

          <p className="mb-4 text-sm font-bold tracking-[0.2em] text-[#d4af37] uppercase">
            Cuidando da Criação
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            O Cristão e o Cuidado com a Criação
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300 sm:text-xl">
            Reflexões sobre sustentabilidade, responsabilidade ambiental e o
            cuidado com a obra criada por Deus.
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <article className="px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <blockquote className="mb-12 border-l-2 border-[#d4af37] pl-6 text-xl italic leading-9 text-zinc-300">
            “Tomou, pois, o Senhor Deus ao homem e o colocou no jardim do Éden
            para o cultivar e o guardar.”
            <footer className="mt-3 text-sm not-italic text-[#d4af37]">
              Gênesis 2:15
            </footer>
          </blockquote>

          <div className="space-y-12 leading-8 text-zinc-300">
            {/* Introdução */}
            <section>
              <p>
                Desde o princípio, Deus confiou ao ser humano a responsabilidade
                de cuidar da criação. O mundo que habitamos não é fruto do
                acaso, mas obra das mãos do Criador. Cada floresta, rio, montanha
                e ser vivo revela a sabedoria, o poder e a bondade de Deus.
              </p>

              <p className="mt-5">
                Como cristãos, somos chamados a exercer uma administração
                responsável dos recursos que recebemos. Isso inclui evitar
                desperdícios, preservar o meio ambiente e adotar hábitos que
                contribuam para um mundo mais saudável para as gerações futuras.
              </p>
            </section>

            {/* Cuidado com a criação */}
            <section>
              <h2 className="mb-5 text-2xl font-bold text-white sm:text-3xl">
                O Cristão e o Cuidado com a Criação
              </h2>

              <p>
                Muitas vezes pensamos que questões ambientais pertencem apenas
                aos governos ou às organizações especializadas. No entanto,
                pequenas atitudes diárias também fazem diferença e refletem
                nosso compromisso com a criação de Deus.
              </p>

              <p className="mt-5">
                Economizar água, evitar desperdícios, descartar corretamente
                resíduos, reciclar materiais e consumir de forma consciente são
                exemplos práticos de como podemos exercer uma boa mordomia dos
                recursos que Deus colocou em nossas mãos.
              </p>

              <p className="mt-5">
                Quando cuidamos da criação, demonstramos respeito pelo Criador.
                Afinal, tudo o que existe pertence ao Senhor e foi confiado à
                humanidade para ser administrado com sabedoria e
                responsabilidade.
              </p>

              <blockquote className="mt-7 border-l border-white/20 pl-5 italic text-zinc-400">
                “Ao Senhor pertence a terra e tudo o que nela se contém, o mundo
                e os que nele habitam.”
                <footer className="mt-2 text-sm not-italic text-[#d4af37]">
                  Salmos 24:1
                </footer>
              </blockquote>
            </section>

            {/* Ações práticas */}
            <section>
              <h2 className="mb-5 text-2xl font-bold text-white sm:text-3xl">
                Pequenas Ações, Grandes Resultados
              </h2>

              <p>
                Nem sempre são necessárias grandes mudanças para causar impacto
                positivo. Pequenas atitudes praticadas diariamente por muitas
                pessoas podem produzir resultados significativos.
              </p>

              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {acoes.map((acao) => (
                  <li
                    key={acao}
                    className="rounded-lg border border-white/10 bg-[#161616] px-5 py-4 text-zinc-300"
                  >
                    {acao}
                  </li>
                ))}
              </ul>
            </section>

            {/* Reflexão */}
            <section>
              <h2 className="mb-5 text-2xl font-bold text-white sm:text-3xl">
                Reflexão Cristã
              </h2>

              <p>
                O cuidado com a criação não substitui a missão principal da
                Igreja de anunciar o Evangelho, mas faz parte do testemunho
                cristão. Um discípulo de Cristo busca glorificar a Deus em todas
                as áreas da vida, inclusive na forma como utiliza os recursos
                que recebeu.
              </p>

              <p className="mt-5">
                Ao cuidarmos do mundo criado por Deus, lembramos que somos
                administradores e não proprietários. Tudo pertence ao Senhor, e
                um dia prestaremos contas da forma como usamos aquilo que Ele
                confiou às nossas mãos.
              </p>

              <p className="mt-5">
                Que possamos viver com gratidão, responsabilidade e sabedoria,
                honrando ao Criador através de atitudes que demonstrem amor,
                cuidado e respeito por Sua maravilhosa criação.
              </p>
            </section>

            <ShareButton
              title="O Cristão e o Cuidado com a Criação | Jesus na Web"
              text="Uma reflexão cristã sobre nossa responsabilidade diante da criação de Deus."
            />

            {/* Continuação */}
            <section className="border-t border-yellow-500/20 pt-10">
              <p className="mb-3 text-xs font-bold tracking-[0.18em] text-[#d4af37] uppercase">
                Cuidando da Criação
              </p>

              <div className="rounded-xl border border-white/10 bg-[#161616] p-6">
                <h2 className="text-2xl font-bold text-white">Em Breve</h2>

                <p className="mt-3 text-zinc-300">
                  Novos conteúdos sobre sustentabilidade, responsabilidade
                  social e princípios cristãos para a vida cotidiana.
                </p>

                <Link
                  href="/vida-em-foco"
                  className="mt-5 inline-block font-semibold text-[#d4af37] transition hover:text-yellow-300"
                >
                  ← Voltar para Vida em Foco
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}