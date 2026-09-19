import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f0e8] text-[#171717]">
      {/* HERO */}
      <section
        className="relative flex min-h-[calc(100vh-74px)] items-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/header.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 md:py-20 lg:px-16">
          <div className="max-w-4xl">
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-[5.25rem]">
              A Palavra que transforma.

              <span className="mt-3 block font-normal italic text-[#d4af37]">
                Uma fé para ser vivida.
              </span>
            </h1>

            <p className="mt-10 max-w-2xl text-lg leading-8 text-zinc-200 sm:text-xl">
              Estudos, reflexões e conteúdos para quem deseja conhecer mais a
              Deus, crescer na fé e viver o Evangelho todos os dias.
            </p>

            <div className="mt-10">
              <Link
                href="/estudos"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#d4af37] px-8 py-3 text-sm font-semibold text-black shadow-lg transition hover:bg-[#e2c45d]"
              >
                Explorar estudos
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-white/60 md:block">
          Continue para explorar
        </div>
      </section>

      {/* CAMINHOS PRINCIPAIS */}
      <section className="bg-[#f4f0e8] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">
          {/* Introdução */}
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9b792c]">
              Jesus na Web
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] text-[#171717] sm:text-5xl">
              Três caminhos.

              <span className="block font-normal italic text-[#9b792c]">
                Um só propósito.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#625e56]">
              Conhecer a Palavra e permitir que ela alcance as diferentes áreas
              da nossa vida.
            </p>
          </div>

          {/* CARDS */}
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {/* ESTUDOS BÍBLICOS */}
            <Link
              href="/estudos"
              className="group relative min-h-[480px] overflow-hidden rounded-3xl bg-[#111111] shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <Image
                src="/estudos.png"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10" />

              <div className="absolute inset-0 z-10 flex flex-col p-8">
                <span className="text-sm font-medium tracking-[0.25em] text-[#d4af37]">
                  01
                </span>

                <div className="mt-auto">
                  <h3 className="text-3xl font-semibold tracking-tight text-white">
                    Estudos Bíblicos
                  </h3>

                  <p className="mt-4 leading-7 text-zinc-200">
                    Estudos, séries e reflexões para compreender melhor as
                    Escrituras e crescer no conhecimento da Palavra.
                  </p>

                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#d4af37]">
                    Explorar estudos
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>
              </div>
            </Link>

            {/* VIDA EM FOCO */}
            <Link
              href="/vida-em-foco"
              className="group relative min-h-[480px] overflow-hidden rounded-3xl bg-[#111111] shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <Image
                src="/vida-em-foco.png"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/5" />

              <div className="absolute inset-0 z-10 flex flex-col p-8">
                <span className="text-sm font-medium tracking-[0.25em] text-[#d4af37]">
                  02
                </span>

                <div className="mt-auto">
                  <h3 className="text-3xl font-semibold tracking-tight text-white">
                    Vida em Foco
                  </h3>

                  <p className="mt-4 leading-7 text-zinc-200">
                    Fé, restauração, cultura e os desafios do nosso tempo
                    observados à luz das Escrituras.
                  </p>

                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#d4af37]">
                    Conhecer Vida em Foco
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>
              </div>
            </Link>

            {/* RENASCENDO EM 40 DIAS */}
            <Link
              href="/renascendo-em-40-dias"
              className="group relative min-h-[480px] overflow-hidden rounded-3xl bg-[#071426] shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <Image
                src="/capa.png"
                alt="Capa do e-book Renascendo em 40 Dias"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-top transition duration-700 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

              <div className="absolute inset-0 z-10 flex flex-col p-8">
                <span className="text-sm font-medium tracking-[0.25em] text-[#d4af37]">
                  03
                </span>

                <div className="mt-auto">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
                    E-book
                  </p>

                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#d4af37]">
                    Conhecer o livro
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
           </section>

      {/* VERSÍCULO DE ENCERRAMENTO */}
      <section className="bg-[#071426] text-white">
        <div className="mx-auto max-w-5xl px-6 py-14 text-center md:px-10 md:py-16">
          <p className="text-2xl font-medium leading-relaxed md:text-3xl">
            “Conheçamos e prossigamos em conhecer ao Senhor.”
          </p>

          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#d4af37]">
            Oséias 6:3
          </p>
        </div>
      </section>
    </main>
  );
}
    