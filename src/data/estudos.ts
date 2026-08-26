import type { Estudo } from "@/types/estudo";

import { eleEscolheuACruz } from "@/content/estudos/ele-escolheu-a-cruz";
import { nascidaAMargemAceitaAMesa } from "@/content/estudos/nascida-a-margem-aceita-a-mesa";
import { jesusCristo } from "@/content/estudos/jesus-cristo";

import { aImportanciaDaOracao } from "@/content/estudos/a-importancia-da-oracao";

import { martinhoLutero } from "@/content/estudos/martinho-lutero";
import { isaacWatts } from "@/content/estudos/isaac-watts";
import { charlesWesley } from "@/content/estudos/charles-wesley";
import { fannyCrosby } from "@/content/estudos/fanny-crosby";
import { philipBliss } from "@/content/estudos/philip-bliss";

export const estudos: Estudo[] = [
  eleEscolheuACruz,
  nascidaAMargemAceitaAMesa,
  jesusCristo,

  aImportanciaDaOracao,

  martinhoLutero,
  isaacWatts,
  charlesWesley,
  fannyCrosby,
  philipBliss,
];

export function buscarEstudoPorSlug(slug: string): Estudo | undefined {
  return estudos.find((estudo) => estudo.slug === slug);
}

export function buscarNavegacaoDaSerie(estudoAtual: Estudo) {
  if (!estudoAtual.serie || estudoAtual.ordemNaSerie === undefined) {
    return {
      anterior: undefined,
      proximo: undefined,
    };
  }

  const estudosDaSerie = estudos
    .filter(
      (estudo) =>
        estudo.serie === estudoAtual.serie &&
        estudo.ordemNaSerie !== undefined
    )
    .sort(
      (a, b) =>
        (a.ordemNaSerie ?? 0) - (b.ordemNaSerie ?? 0)
    );

  const indiceAtual = estudosDaSerie.findIndex(
    (estudo) => estudo.slug === estudoAtual.slug
  );

  return {
    anterior:
      indiceAtual > 0
        ? estudosDaSerie[indiceAtual - 1]
        : undefined,

    proximo:
      indiceAtual >= 0 && indiceAtual < estudosDaSerie.length - 1
        ? estudosDaSerie[indiceAtual + 1]
        : undefined,
  };
}