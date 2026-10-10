import type { MetadataRoute } from "next";
import { estudos } from "@/data/estudos";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jesusnaweb.aliano.com.br";

  const paginasEstaticas = [
    "",
    "/dependencia-quimica",
    "/estudos",
    "/estudos/apologetica",
    "/estudos/compositores-da-harpa",
    "/estudos/compositores-da-harpa/epilogo",
    "/estudos/disciplinas-espirituais",
    "/estudos/espirito-santo",
    "/estudos/estudos-biblicos",
    "/estudos/historia-da-igreja",
    "/estudos/louvor-e-adoracao",
    "/estudos/meditacoes",
    "/estudos/missoes",
    "/estudos/missoes/caminina",
    "/formacao-e-proposito",
    "/palavra-pastoral",
    "/quem-somos",
    "/renascendo-em-40-dias",
    "/vida-em-foco",
    "/vida-em-foco/corajosos",
    "/vida-em-foco/inteligencia-artificial-e-etica-crista",
    "/vida-em-foco/liberto-por-cristo",
    "/vida-em-foco/o-cristao-e-o-cuidado-com-a-criacao",
    "/vida-em-foco/o-peregrino",
    "/vida-em-foco/o-retorno-de-ben",
    "/vida-em-foco/quando-a-recaida-comeca",
    "/vida-em-foco/vida-e-restauracao",
  ];

  const paginasDoSite: MetadataRoute.Sitemap = paginasEstaticas.map(
    (rota) => ({
      url: `${baseUrl}${rota}`,
    })
  );

  const paginasDosEstudos: MetadataRoute.Sitemap = estudos.map(
    (estudo) => ({
      url: `${baseUrl}/estudos/${estudo.slug}`,
    })
  );

  return [...paginasDoSite, ...paginasDosEstudos];
}
