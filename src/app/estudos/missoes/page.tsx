import type { Metadata } from "next";
import Link from "next/link";

import { estudos } from "@/data/estudos";

export const metadata: Metadata = {
  title: "Missões",
  description:
    "Conhecendo o propósito de Deus para alcançar as nações com o Evangelho de Jesus Cristo.",
};

export default function MissoesPage() {
  const estudosMissoes = estudos
    .filter(
      (estudo) =>
        estudo.serie === "Missões" &&
        estudo.ordemNaSerie !== undefined
    )
    .sort(
      (a, b) =>
        (a.ordemNaSerie ?? 0) - (b.ordemNaSerie ?? 0)
    );

  return (
    <main className="pagina-estudo">
      <article>
        <header className="cabecalho-estudo">
          <p className="categoria-estudo">Série Especial</p>

          <h1>Missões</h1>

          <p className="subtitulo-estudo">
            Conhecendo o propósito de Deus para alcançar as nações com o
            Evangelho de Jesus Cristo.
          </p>
        </header>

        <section className="conteudo-estudo">
          <blockquote>
            <p>
              &quot;Ide por todo o mundo e pregai o evangelho a toda
              criatura.&quot;
            </p>
            <cite>Marcos 16:15</cite>
          </blockquote>

          <h2>🌎 O Propósito das Missões</h2>

          <p>
            As missões não são uma invenção humana nem uma atividade secundária
            da Igreja. Elas nascem no coração de Deus.
          </p>

          <p>
            Desde o princípio, o Senhor demonstrou Seu desejo de alcançar todas
            as nações, povos e culturas com Sua graça e salvação.
          </p>

          <p>
            A Bíblia apresenta um Deus que busca o perdido, chama pecadores ao
            arrependimento e envia Seus servos para proclamar a mensagem da
            redenção.
          </p>

          <p>
            Por isso, missões não são responsabilidade apenas de missionários.
            Todo cristão participa da Grande Comissão de alguma forma: orando,
            contribuindo, servindo ou anunciando o Evangelho.
          </p>

          <h2>📖 O Coração Missionário de Deus</h2>

          <blockquote>
            <p>&quot;Em ti serão benditas todas as famílias da terra.&quot;</p>
            <cite>Gênesis 12:3</cite>
          </blockquote>

          <p>
            Muito antes da Igreja existir, Deus já havia revelado Seu plano de
            alcançar todos os povos da terra.
          </p>

          <p>
            A promessa feita a Abraão apontava para Cristo, através de quem
            homens e mulheres de toda tribo, língua e nação seriam reconciliados
            com Deus.
          </p>

          <p>A história da redenção sempre teve alcance mundial.</p>

          <h2>✝️ A Grande Comissão</h2>

          <blockquote>
            <p>
              &quot;Ide, portanto, fazei discípulos de todas as nações.&quot;
            </p>
            <cite>Mateus 28:19</cite>
          </blockquote>

          <p>
            Após Sua ressurreição, Jesus entregou à Igreja uma missão clara:
            anunciar o Evangelho e fazer discípulos.
          </p>

          <p>Essa ordem continua válida para cada geração de cristãos.</p>

          <p>
            Enquanto houver pessoas sem conhecer Cristo, a missão da Igreja
            continuará.
          </p>

          <h2>🔥 O Poder Para Testemunhar</h2>

          <blockquote>
            <p>
              &quot;Recebereis poder ao descer sobre vós o Espírito Santo, e
              sereis minhas testemunhas.&quot;
            </p>
            <cite>Atos 1:8</cite>
          </blockquote>

          <p>
            A obra missionária não depende apenas de recursos, planejamento ou
            capacidade humana.
          </p>

          <p>
            O mesmo Espírito Santo que capacitou a Igreja Primitiva continua
            fortalecendo e guiando os servos de Deus atualmente.
          </p>

          <p>Toda missão genuína nasce da dependência do Senhor.</p>

          <h2>🙏 Como Participar da Obra Missionária?</h2>

          <p>
            Nem todos são chamados para atravessar oceanos, mas todos podem
            participar da expansão do Reino de Deus.
          </p>

          <ul>
            <li>🙏 Orando pelos missionários e pelos povos não alcançados.</li>
            <li>💝 Contribuindo para o sustento da obra missionária.</li>
            <li>📖 Compartilhando o Evangelho em sua comunidade.</li>
            <li>🤝 Servindo na igreja local.</li>
            <li>🌎 Indo aos lugares onde Deus o enviar.</li>
          </ul>

          <p>Missões começam onde estamos, mas alcançam o mundo inteiro.</p>

          <h2>❤️ Um Convite à Missão</h2>

          <p>
            Deus continua chamando homens e mulheres para participarem de Sua
            obra.
          </p>

          <p>
            Nesta seção você encontrará estudos bíblicos, reflexões missionárias
            e histórias inspiradoras de servos que dedicaram suas vidas à
            proclamação do Evangelho.
          </p>

          <p>
            Que o Senhor desperte em nós o mesmo amor pelas almas que encontramos
            em Cristo.
          </p>
        </section>

        <section className="indice-serie">
          <h2>Estudos da Série</h2>

          <div className="grid-serie">
            {estudosMissoes.map((estudo) => (
              <Link
                key={estudo.id}
                href={`/estudos/${estudo.slug}`}
                className="card-serie"
              >
                <span className="numero-serie">
                  {estudo.ordemNaSerie}
                </span>

                <div>
                  <h3>{estudo.titulo}</h3>
                  <p>{estudo.resumo}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}