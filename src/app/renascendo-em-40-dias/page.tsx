import Image from "next/image";
import Link from "next/link";

export default function RenascendoEm40DiasPage() {
  return (
    <main className="bg-[#f7f5ef] text-[#172033]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#071426] text-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          {/* CAPA */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative aspect-[342/509] w-full max-w-[330px] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/capa.png"
                alt="Capa do e-book Renascendo em 40 Dias"
                fill
                priority
                sizes="(max-width: 768px) 80vw, 330px"
                className="object-contain"
              />
            </div>
          </div>

          {/* APRESENTAÇÃO */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
              E-book gratuito
            </p>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Renascendo em 40 Dias
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-slate-200">
              Um caminho de libertação, reconstrução e renovação em Cristo.
            </p>

            <p className="mt-6 max-w-2xl leading-8 text-slate-300">
              Um guia espiritual de 40 dias para quem deseja reconstruir a
              vida através da fé em Jesus Cristo. Ao longo do caminho, você
              encontrará reflexões, textos bíblicos, práticas diárias e
              momentos de oração.
            </p>

            <div className="mt-8">
              <a
                href="/renascendo-em-40-dias.pdf"
                download
                className="inline-flex items-center justify-center rounded-full bg-[#d4af37] px-7 py-3.5 font-semibold text-[#071426] transition hover:scale-[1.02] hover:bg-[#e3c35b]"
              >
                Baixar e-book gratuitamente
              </a>
            </div>

            <p className="mt-5 text-sm text-slate-400">
              Autor: Aliano Rafael da Silva
            </p>
          </div>
        </div>
      </section>

      {/* SOBRE O LIVRO */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7b18]">
            Sobre o livro
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#071426] md:text-4xl">
            Um dia de cada vez
          </h2>

          <div className="mt-7 space-y-5 text-lg leading-8 text-slate-700">
            <p>
              Renascendo em 40 Dias nasceu da experiência de quem conheceu de
              perto a realidade das dependências, das ruas e da necessidade de
              reconstruir a própria vida.
            </p>

            <p>
              Mais do que apresentar conceitos, o livro propõe um caminho
              diário de reflexão e prática. Durante 40 dias, o leitor é
              convidado a ler, meditar, praticar e orar, permitindo que a
              Palavra de Deus alcance não apenas os pensamentos, mas também as
              escolhas e os caminhos da vida.
            </p>

            <p>
              A proposta não é alcançar a perfeição em quarenta dias. É
              começar uma caminhada de renovação, reconhecendo que mudanças
              profundas são construídas passo a passo.
            </p>
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ ENCONTRARÁ */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7b18]">
              Durante os 40 dias
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#071426] md:text-4xl">
              Uma caminhada de fé e renovação
            </h2>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {[
                {
                  titulo: "Reflexão",
                  texto:
                    "Temas que ajudam a olhar para a vida, para as escolhas e para o relacionamento com Deus.",
                },
                {
                  titulo: "Palavra",
                  texto:
                    "Versículos e princípios bíblicos que orientam cada etapa da caminhada.",
                },
                {
                  titulo: "Prática",
                  texto:
                    "Pequenos passos para transformar a reflexão em atitudes concretas no cotidiano.",
                },
                {
                  titulo: "Oração",
                  texto:
                    "Momentos para falar com Deus e entregar a Ele cada parte do processo de renovação.",
                },
              ].map((item) => (
                <div
                  key={item.titulo}
                  className="rounded-2xl border border-slate-200 bg-[#f7f5ef] p-6"
                >
                  <h3 className="text-xl font-bold text-[#071426]">
                    {item.titulo}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VERSÍCULO */}
      <section className="bg-[#071426] text-white">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center md:px-10 md:py-20">
          <blockquote className="text-2xl font-medium leading-relaxed md:text-3xl">
            “Se o Filho vos libertar, verdadeiramente sereis livres.”
          </blockquote>

          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
            João 8:36
          </p>
        </div>
      </section>

      {/* DOWNLOAD FINAL */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 text-center shadow-sm md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a7b18]">
            Distribuição gratuita
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#071426]">
            Comece sua leitura
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-600">
            Este material é gratuito e pode ser compartilhado livremente para
            alcançar pessoas que precisam de esperança, libertação e renovação
            através de Jesus Cristo.
          </p>

          <a
            href="/renascendo-em-40-dias.pdf"
            download
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#071426] px-7 py-3.5 font-semibold !text-white transition hover:scale-[1.02] hover:bg-[#10284a]"
          >
            Baixar Renascendo em 40 Dias
          </a>

          <div className="mt-8">
            <Link
              href="/"
              className="text-sm font-semibold text-[#8a6c13] transition hover:text-[#071426]"
            >
              ← Voltar para a página inicial
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}