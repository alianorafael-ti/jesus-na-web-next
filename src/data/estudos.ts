import type { Estudo } from "@/types/estudo";

import { eleEscolheuACruz } from "@/content/estudos/ele-escolheu-a-cruz";
import { nascidaAMargemAceitaAMesa } from "@/content/estudos/nascida-a-margem-aceita-a-mesa";
import { jesusCristo } from "@/content/estudos/jesus-cristo";

import { aImportanciaDaOracao } from "@/content/estudos/a-importancia-da-oracao";
import { oPoderDaLeituraBiblica } from "@/content/estudos/o-poder-da-leitura-biblica";

import { existeEvidenciaParaAExistenciaDeDeus } from "@/content/estudos/existe-evidencia-para-a-existencia-de-deus";
import { guerraDosCemAnos } from "@/content/estudos/guerra-dos-cem-anos";
import { oCismaDoGrandeOcidente } from "@/content/estudos/o-cisma-do-grande-ocidente";

import { aBibliaEImortalidadeDaAlma } from "@/content/estudos/a-biblia-e-a-imortalidade-da-alma";
import { deusEscolheOsDesprezados } from "@/content/estudos/deus-escolhe-os-desprezados";
import { novaCriatura } from "@/content/estudos/nova-criatura";
import { quandoABibliaFala } from "@/content/estudos/quando-a-biblia-fala";
import { rockEAdoracaoIssoGlorificaADeus } from "@/content/estudos/rock-e-adoracao-isso-glorifica-a-deus";

import { oQueSignificaAndarNoEspirito } from "@/content/estudos/o-que-significa-andar-no-espirito";

import { oChamadoMissionario } from "@/content/estudos/o-chamado-missionario";

import { osLevitas } from "@/content/estudos/os-levitas";


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
  oPoderDaLeituraBiblica,

  existeEvidenciaParaAExistenciaDeDeus,
  guerraDosCemAnos,
  oCismaDoGrandeOcidente,

  aBibliaEImortalidadeDaAlma,
  deusEscolheOsDesprezados,
  novaCriatura,
  quandoABibliaFala,
  rockEAdoracaoIssoGlorificaADeus,
  
  oQueSignificaAndarNoEspirito,

  oChamadoMissionario,

  osLevitas,
  
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