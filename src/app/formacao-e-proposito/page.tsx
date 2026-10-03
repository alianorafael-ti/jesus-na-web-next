import Image from "next/image";
import Link from "next/link";

const recursos = [
  {
    titulo: "Renascendo em 40 Dias",
    categoria: "E-book • Jornada devocional",
    descricao:
      "Uma caminhada de 40 dias de libertação, reconstrução e renovação em Cristo, com reflexões, Palavra, práticas e oração.",
    imagem: "/capa.png",
    href: "/renascendo-em-40-dias",
    alt: "Capa do e-book Renascendo em 40 Dias",
  },
  {
    titulo: "Dependência Química — Conhecer para Cuidar",
    categoria: "Apostila • Formação",
    descricao:
      "Conhecimento acessível para missionários, líderes cristãos, voluntários, familiares e pessoas que desejam compreender melhor a dependência e o processo de recuperação.",
    imagem: "/dependencia-quimica-capa.jpg",
    href: "/dependencia-quimica",
    alt: "Capa da apostila Dependência Química — Conhecer para Cuidar",
  },
];

export default function FormacaoEPropositoPage() {
  return (
    <main className="bg-[#f7f5ef] text-[#172033]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#071426] text-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
              Jesus na Web
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Formação e Propósito
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-slate-200">
              Conhecimento que fortalece a caminhada e prepara para servir.
            </p>

            <p className="mt-6 max-w-2xl leading-8 text-slate-300">
              Um espaço dedicado a e-books, apostilas e recursos de formação
              que unem fé, conhecimento e aplicação prática para diferentes
              momentos da jornada cristã.
            </p>

            <a
              href="#recursos"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#d4af37] px-7 py-3.5 font-semibold text-[#071426] transition hover:scale-[1.02] hover:bg-[#e3c35b]"
            >
              Explorar conteúdos
            </a>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/proposito.png"
                alt="Livros, caderno, bússola e mochila representando formação e propósito"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 420px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROPÓSITO */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7b18]">
            Aprender para viver
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#071426] md:text-4xl">
            Conteúdos que não terminam na leitura
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            Formação ganha sentido quando aquilo que aprendemos alcança nossa
            maneira de pensar, nossas escolhas, nossos relacionamentos e a
            forma como servimos a Deus e às pessoas.
          </p>
        </div>
      </section>

      {/* RECURSOS */}
      <section id="recursos" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7b18]">
              Recursos disponíveis
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#071426] md:text-4xl">
              Escolha por onde continuar
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Todos os conteúdos desta seção são disponibilizados gratuitamente.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {recursos.map((recurso) => (
              <article
                key={recurso.href}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-[#f7f5ef] shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="grid sm:grid-cols-[180px_1fr]">
                  <div className="relative min-h-[310px] bg-[#071426] sm:min-h-full">
                    <Image
                      src={recurso.imagem}
                      alt={recurso.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 180px"
                      className="object-contain"
                    />
                  </div>

                  <div className="flex flex-col p-7">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a7b18]">
                      {recurso.categoria}
                    </p>

                    <h3 className="mt-3 text-2xl font-bold leading-tight text-[#071426]">
                      {recurso.titulo}
                    </h3>

                    <p className="mt-4 flex-1 leading-7 text-slate-600">
                      {recurso.descricao}
                    </p>

                    <Link
                      href={recurso.href}
                      className="mt-6 inline-flex font-semibold text-[#8a6c13] transition group-hover:text-[#071426]"
                    >
                      Conhecer este conteúdo →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FECHAMENTO */}
      <section className="bg-[#071426] text-white">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center md:px-10 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d4af37]">
            Formação e Propósito
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Conhecimento que encontra um propósito
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-300">
            Aprender também é uma forma de se preparar: para caminhar com mais
            consciência, cuidar com mais responsabilidade e servir com mais
            sabedoria.
          </p>

          <div className="mt-8">
            <Link
              href="/"
              className="font-semibold text-[#d4af37] transition hover:text-white"
            >
              ← Voltar para a página inicial
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}