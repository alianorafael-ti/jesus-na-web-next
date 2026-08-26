import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  buscarEstudoPorSlug,
  buscarNavegacaoDaSerie,
  estudos,
} from "@/data/estudos";

type EstudoPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return estudos.map((estudo) => ({
    slug: estudo.slug,
  }));
}

export async function generateMetadata({
  params,
}: EstudoPageProps): Promise<Metadata> {
  const { slug } = await params;
  const estudo = buscarEstudoPorSlug(slug);

  if (!estudo) {
    return {
      title: "Estudo não encontrado",
    };
  }

  return {
    title: estudo.titulo,
    description: estudo.resumo,
    keywords: estudo.palavrasChave,
    authors: [
      {
        name: estudo.autor,
      },
    ],
  };
}

export default async function EstudoPage({
  params,
}: EstudoPageProps) {
  const { slug } = await params;
  const estudo = buscarEstudoPorSlug(slug);

  if (!estudo) {
    notFound();
  }
  const { anterior, proximo } = buscarNavegacaoDaSerie(estudo);

  return (
    <main className="pagina-estudo">
      <article>
        <header className="cabecalho-estudo">
          <p className="categoria-estudo">
            {estudo.categoria}
          </p>

          <h1>{estudo.titulo}</h1>

          {estudo.subtitulo && (
            <p className="subtitulo-estudo">
              {estudo.subtitulo}
            </p>
          )}

          <p className="autor-estudo">
            Por {estudo.autor}
          </p>
        </header>

        <section
          className="conteudo-estudo"
          dangerouslySetInnerHTML={{
            __html: estudo.conteudo,
          }}
        />
        {estudo.serie && (
  <nav className="navegacao-serie">
    <p className="nome-serie">
      Série: {estudo.serie}
    </p>

    <div className="links-serie">
      <div>
        {anterior && (
          <a href={`/estudos/${anterior.slug}`}>
            ← {anterior.titulo}
          </a>
        )}
      </div>

      <div>
        {proximo && (
          <a href={`/estudos/${proximo.slug}`}>
            {proximo.titulo} →
          </a>
        )}
      </div>
    </div>
  </nav>
)}
      </article>
    </main>
  );
}