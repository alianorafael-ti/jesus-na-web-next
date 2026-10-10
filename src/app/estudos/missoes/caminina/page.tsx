
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projeto Caminina para Cristo | Jesus na Web",
  description:
    "Conheça o Projeto Missionário Caminina para Cristo, em Angola, e acompanhe os relatórios mensais.",
};

const fotografias = Array.from({ length: 9 }, (_, i) => ({
  src: `/images/missoes/caminina/caminina${i + 1}.jpeg`,
  alt: `Registro fotográfico ${i + 1} do Projeto Caminina para Cristo`,
}));

const relatorios = [
  {
    mes: "Setembro de 2026",
    arquivo: "/documentos/missoes/caminina/relatorio-setembro-2026.pdf",
    descricao:
      "Evangelização, discipulado, cultos, formação cristã, desafios e pedidos de oração.",
  },
];

export default function CamininaPage() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#172033]">
      <section className="bg-[#071426] text-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
          <Link
            href="/estudos/missoes"
            className="text-sm text-[#d4af37] hover:underline"
          >
            ← Voltar para Missões
          </Link>

          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
            Missões em Ação · Angola
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            Projeto Missionário Caminina para Cristo
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Uma missão de evangelização, discipulado e cuidado
            comunitário no bairro Caminina, em Luena,
            província do Moxico, Angola.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-14 md:px-10">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200">
            <Image
              src="/images/missoes/caminina/caminina0.jpeg"
              alt="Missionários Eduardo e Ester Kanganjo com sua família"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#071426]">
              Uma família a serviço da missão
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              Os missionários Eduardo e Ester Kanganjo,
              ao lado dos filhos Kitilson, Acácia e Adriel,
              estão envolvidos no trabalho missionário
              desenvolvido na comunidade de Caminina,
              em Angola.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              A família reside em Luena e participa
              diretamente da aproximação com a comunidade,
              compartilhando o Evangelho de Jesus Cristo.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <h2 className="text-3xl font-bold text-[#071426]">
            Conheça o Projeto Caminina
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-slate-700">
            <p>
              O Caminina para Cristo integra o Projeto
              Missionário Moxico, desenvolvido pela Agência
              Missionária Hora de Profetizar (AMHP), em
              cooperação com a Igreja Cafarnaum Internacional
              (ICI).
            </p>

            <p>
              Seu propósito é anunciar o Evangelho,
              promover o discipulado, contribuir para
              a formação de uma comunidade cristã local
              e desenvolver ações de cuidado comunitário.
            </p>

            <p>
              Segundo o levantamento apresentado no
              material do projeto, Caminina possui
              aproximadamente entre 3.500 e 5.000
              habitantes. Entre os desafios identificados
              estão dificuldades de acesso à água,
              à saúde e à educação.
            </p>
          </div>

          <blockquote className="mt-10 rounded-xl border-l-4 border-[#d4af37] bg-[#f7f5ef] p-6">
            <p className="text-xl italic text-[#071426]">
              “Portanto ide, fazei discípulos de todas as nações.”
            </p>
            <cite className="mt-3 block not-italic text-slate-600">
              Mateus 28:19
            </cite>
          </blockquote>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10">
        <h2 className="text-3xl font-bold text-[#071426]">
          Registros da Missão
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Fotografias compartilhadas pela família missionária,
          apresentando registros do trabalho desenvolvido
          no Projeto Caminina para Cristo.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {fotografias.map((foto) => (
            <div
              key={foto.src}
              className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-200"
            >
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <h2 className="text-3xl font-bold text-[#071426]">
            Diário da Missão
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-slate-700">
            Acompanhe os relatórios mensais compartilhados
            pelo missionário Eduardo Kanganjo, conhecendo
            as atividades realizadas, os desafios enfrentados
            e os pedidos de oração.
          </p>

          <div className="mt-8 grid gap-5">
            {relatorios.map((relatorio) => (
              <article
                key={relatorio.mes}
                className="rounded-2xl border border-slate-200 bg-[#f7f5ef] p-7"
              >
                <p className="text-sm font-semibold uppercase tracking-wider text-[#9a7b18]">
                  Relatório Missionário
                </p>

                <h3 className="mt-3 text-2xl font-bold text-[#071426]">
                  {relatorio.mes}
                </h3>

                <p className="mt-4 leading-7 text-slate-700">
                  {relatorio.descricao}
                </p>

                <a
                  href={relatorio.arquivo}
                  target="_blank"
                  className="mt-6 inline-flex items-center justify-center rounded-lg bg-[#d4af37] px-6 py-3 font-bold !text-[#071426] transition hover:bg-[#e8c65b]"
                >
                  Ler relatório completo (PDF) ↗
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      <section className="bg-[#071426] py-16 text-white">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#d4af37]">
                Participe desta missão
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Apoie esta obra missionária
              </h2>

              <p className="mt-6 leading-8 text-slate-200">
                O trabalho missionário em Caminina é realizado
                com dedicação, fé e compromisso com a
                proclamação do Evangelho de Jesus Cristo.
              </p>

              <p className="mt-4 leading-8 text-slate-200">
                Sua contribuição voluntária pode ajudar a
                família missionária a dar continuidade às
                atividades de evangelização, discipulado
                e cuidado com a comunidade.
              </p>

              <h3 className="mt-8 text-xl font-bold text-[#d4af37]">
                Você também pode participar em oração
              </h3>

              <p className="mt-3 leading-8 text-slate-200">
                Ore pela família missionária, pelos novos
                convertidos, pelas crianças da comunidade
                e pelos recursos necessários para o
                desenvolvimento da missão.
              </p>

              <p className="mt-6 text-sm leading-7 text-slate-300">
                Para informações sobre como contribuir,
                consulte o material oficial disponibilizado
                pela família missionária.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl bg-white p-3 shadow-xl">
              <Image
                src="/images/missoes/caminina/caminina10.jpeg"
                alt="Flyer oficial de apoio e contribuição ao Projeto Caminina para Cristo"
                width={800}
                height={1100}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-auto w-full rounded-xl object-contain"
              />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
