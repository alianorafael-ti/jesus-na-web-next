import Image from "next/image";
import Link from "next/link";

export default function DependenciaQuimicaPage() {
  return (
    <main className="bg-[#f7f5ef] text-[#172033]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#071426] text-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          
          {/* CAPA */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative aspect-[3/4] w-full max-w-[350px] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/dependencia-quimica-capa.jpg"
                alt="Capa da apostila Dependência Química — Conhecer para Cuidar"
                fill
                priority
                sizes="(max-width: 768px) 80vw, 350px"
                className="object-contain"
              />
            </div>
          </div>

          {/* APRESENTAÇÃO */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
              Material gratuito de formação
            </p>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Dependência Química
            </h1>

            <p className="mt-3 text-2xl font-semibold text-[#d4af37]">
              Conhecer para Cuidar
            </p>

            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-slate-200">
              Formação para missionários, líderes cristãos, voluntários,
              familiares e agentes comunitários.
            </p>

            <p className="mt-6 max-w-2xl leading-8 text-slate-300">
              Um material que une conhecimento, cuidado comunitário e fé
              cristã para ajudar pessoas a compreenderem melhor a dependência,
              a recuperação e os limites de quem deseja ajudar.
            </p>

            <div className="mt-8">
              <a
                href="/dependencia-quimica-conhecer-para-cuidar.pdf"
                download
                className="inline-flex items-center justify-center rounded-full bg-[#d4af37] px-7 py-3.5 font-semibold text-[#071426] transition hover:scale-[1.02] hover:bg-[#e3c35b]"
              >
                Baixar apostila gratuitamente
              </a>
            </div>

            <p className="mt-5 text-sm text-slate-400">
              Aliano Rafael • 2026
            </p>
          </div>
        </div>
      </section>

      {/* ORIGEM */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7b18]">
            Onde esta história começou
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#071426] md:text-4xl">
            De Caminina para além de Caminina
          </h2>

          <div className="mt-7 space-y-5 text-lg leading-8 text-slate-700">
            <p>
              Esta apostila nasceu de uma necessidade missionária encontrada
              em Caminina, comunidade localizada em Luena, na província do
              Moxico, Angola.
            </p>

            <p>
              O material começou a ser preparado para auxiliar missionários
              diante de situações relacionadas ao consumo de álcool e cannabis.
              Durante sua elaboração, porém, ficou evidente que muitas das
              perguntas encontradas em Caminina também existem em famílias,
              igrejas e comunidades de muitos outros lugares.
            </p>

            <p>
              Assim nasceu a decisão de compartilhar gratuitamente esse
              conhecimento através do Jesus na Web.
            </p>
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7b18]">
              O que você encontrará
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#071426] md:text-4xl">
              Conhecimento para cuidar com responsabilidade
            </h2>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {[
                {
                  titulo: "Compreender",
                  texto:
                    "Dependência, álcool, cannabis, cérebro, abstinência e os mecanismos envolvidos no desenvolvimento da dependência.",
                },
                {
                  titulo: "Recuperação",
                  texto:
                    "Mudança de comportamento, padrões de pensamento, prevenção de recaídas e reconstrução da vida.",
                },
                {
                  titulo: "Família e comunidade",
                  texto:
                    "Como familiares, igrejas e comunidades podem ajudar sem assumir responsabilidades que pertencem à própria pessoa.",
                },
                {
                  titulo: "Cuidado responsável",
                  texto:
                    "Como acolher, reconhecer situações de risco e compreender quando é necessário procurar ajuda profissional.",
                },
              ].map((item) => (
                <div
                  key={item.titulo}
                  className="rounded-2xl border border-slate-200 bg-[#f7f5ef] p-6"
                >
                  <h3 className="text-xl font-bold text-[#071426]">
                    {item.titulo}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRINCÍPIO */}
      <section className="bg-[#071426] text-white">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center md:px-10 md:py-20">
          <p className="text-2xl font-medium leading-relaxed md:text-3xl">
            “Conhecimento não substitui compaixão.
            Mas compaixão sem conhecimento pode cometer erros.”
          </p>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
            Conhecer para cuidar
          </p>
        </div>
      </section>

      {/* DOWNLOAD */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 text-center shadow-sm md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7b18]">
            Distribuição gratuita
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#071426]">
            Conhecer para compreender. Compreender para cuidar.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-600">
            Este material foi preparado para compartilhar conhecimento de
            maneira acessível e responsável, preservando sempre a dignidade da
            pessoa que está diante de nós.
          </p>

          <a
            href="/dependencia-quimica-conhecer-para-cuidar.pdf"
            download
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#071426] px-7 py-3.5 font-semibold !text-white transition hover:scale-[1.02] hover:bg-[#10284a]"
          >
            Baixar a apostila
          </a>

          <div className="mt-8">
           <Link
  href="/formacao-e-proposito"
  className="text-sm font-semibold text-[#8a6c13] transition hover:text-[#071426]"
>
  ← Voltar para Formação e Propósito
</Link>
          </div>
        </div>
      </section>
    </main>
  );
}