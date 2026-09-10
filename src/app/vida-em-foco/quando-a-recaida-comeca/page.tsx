import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "O Processo da Recaída no Cotidiano do Indivíduo",
  description:
    "Você está em recuperação. O mundo não. Uma reflexão sobre o processo da recaída, seus sinais e a importância da vigilância na recuperação.",
};

export default function QuandoARecaidaComecaPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] text-zinc-200">
      {/* Hero */}
      <section className="border-b border-yellow-500/20 px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/vida-em-foco"
            className="mb-8 inline-block text-sm font-semibold text-[#d4af37] transition hover:text-yellow-300"
          >
            ← Vida em Foco
          </Link>

          <p className="mb-4 text-sm font-bold tracking-[0.2em] text-[#d4af37] uppercase">
            Vida e Restauração
          </p>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            O processo da recaída no cotidiano do indivíduo
          </h1>

          <p className="mt-6 text-xl leading-8 text-zinc-300">
            Você está em recuperação. O mundo não.
          </p>
        </div>
      </section>

      {/* Estudo */}
      <article className="px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-12 leading-8 text-zinc-300">
            <section>
              <h2 className="mb-5 text-2xl font-bold text-white sm:text-3xl">
                Quando a recaída começa?
              </h2>

              <p>
                Imagine uma pessoa que está passando por um processo de
                recuperação da dependência química. Ela já está há um bom tempo
                sem fazer uso de substâncias, ainda vive em um ambiente
                protegido e participa constantemente de terapias, grupos de
                apoio e atividades voltadas à manutenção de sua recuperação.
              </p>

              <p className="mt-5">
                Depois de um longo período, chega um momento importante:{" "}
                <strong className="text-white">
                  o processo de ressocialização.
                </strong>
              </p>

              <p className="mt-5">
                Ela volta para casa, consegue um emprego e começa novamente a
                ocupar seu espaço na sociedade. É uma conquista enorme, mas
                também o início de uma nova etapa, na qual precisará colocar em
                prática, no cotidiano, tudo aquilo que aprendeu durante o
                período de recuperação.
              </p>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-bold text-white sm:text-3xl">
                Primeiro mês
              </h2>

              <p>
                No início, seu foco está completamente voltado para a nova vida.
              </p>

              <p className="mt-5">
                Mesmo trabalhando, continua frequentando os grupos de apoio,
                mantém suas terapias e procura preservar a rotina que construiu
                durante o tratamento. No ambiente profissional, cumpre suas
                responsabilidades e mantém bem definidos seus objetivos.
              </p>

              <p className="mt-5">
                Trabalho, recuperação e vida pessoal caminham juntos.
              </p>

              <p className="mt-5">O primeiro mês termina muito bem.</p>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-bold text-white sm:text-3xl">
                Segundo mês
              </h2>

              <p>
                Com o passar do tempo, o ambiente de trabalho deixa de ser
                novidade.
              </p>

              <p className="mt-5">
                Ele começa a conhecer melhor os colegas, cria vínculos e passa a
                fazer parte de pequenos grupos durante os intervalos. Surgem
                conversas descontraídas, brincadeiras, cigarros e assuntos que
                antes não faziam parte de sua rotina.
              </p>

              <p className="mt-5">
                Nada disso, isoladamente, significa uma recaída.
              </p>

              <p className="mt-5">
                Conviver, fazer amizades e reconstruir relacionamentos fazem
                parte da ressocialização.
              </p>

              <p className="mt-5">
                Entretanto, quase imperceptivelmente, algumas prioridades
                começam a mudar.
              </p>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-bold text-white sm:text-3xl">
                Terceiro mês
              </h2>

              <p>
                A pessoa ainda se considera completamente comprometida com sua
                recuperação. Continua dizendo para si mesma que sabe de onde
                veio e que jamais deseja voltar para aquela vida.
              </p>

              <p className="mt-5">
                Porém, sua frequência nos grupos de apoio começa a diminuir.
              </p>

              <p className="mt-5">
                Ao mesmo tempo, os novos amigos ocupam cada vez mais espaço em
                sua rotina. Entre eles existe uma moça muito simpática. A
                amizade cresce, o interesse aparece e aquele novo círculo social
                torna-se ainda mais importante.
              </p>

              <p className="mt-5">
                Na última sexta-feira do mês surge o primeiro convite:
              </p>

              <blockquote className="mt-6 border-l-2 border-[#d4af37] pl-6 text-xl italic text-zinc-300">
                — Vamos para o happy hour?
              </blockquote>

              <p className="mt-5">
                Ele pensa por alguns instantes, mas recusa.
              </p>

              <p className="mt-5">
                Ainda existe uma percepção muito clara do risco.
              </p>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-bold text-white sm:text-3xl">
                Quarto mês
              </h2>

              <p>Agora as coisas estão diferentes.</p>

              <p className="mt-5">
                Os grupos de apoio, antes constantes, tornaram-se esporádicos.
                As terapias, que faziam parte da rotina, praticamente
                desapareceram.
              </p>

              <p className="mt-5">
                Não houve uma decisão consciente de abandonar a recuperação.
              </p>

              <p className="mt-5">Ele simplesmente foi deixando.</p>

              <div className="my-6 space-y-2 border-l border-white/20 pl-5 text-zinc-400">
                <p>Uma falta aqui.</p>
                <p>Outra ali.</p>
                <p>Um compromisso que parecia mais importante.</p>
                <p>Uma justificativa perfeitamente aceitável.</p>
                <p>E outra.</p>
              </div>

              <p>A moça simpática também já não é apenas uma amiga.</p>

              <p className="mt-5">
                Então surge novamente o convite para o happy hour.
              </p>

              <p className="mt-5">Dessa vez, a resposta é diferente:</p>

              <blockquote className="mt-6 border-l-2 border-[#d4af37] pl-6 text-xl italic text-zinc-300">
                — Tudo bem. Eu vou. Mas não vou beber.
              </blockquote>

              <p className="mt-5">Ele vai.</p>

              <p className="mt-5">
                Os amigos bebem, conversam e se divertem. Ele permanece com
                eles durante toda a noite.
              </p>

              <p className="mt-5">
                E realmente não bebe nenhuma gota de álcool.
              </p>

              <p className="mt-5">Volta para casa satisfeito.</p>

              <p className="mt-5">
                Mas aquela aparente vitória pode esconder um perigo.
              </p>

              <p className="mt-5">
                Porque uma nova ideia começa a ganhar força:
              </p>

              <blockquote className="mt-6 border-l-2 border-[#d4af37] pl-6 text-xl font-semibold text-white">
                “Eu consigo me controlar.”
              </blockquote>
            </section>
                        <section>
              <h2 className="mb-5 text-2xl font-bold text-white sm:text-3xl">
                Algumas semanas depois
              </h2>

              <p>A rotina de recuperação praticamente desapareceu.</p>

              <p className="mt-5">
                Grupos de apoio já não fazem parte da agenda. As terapias
                ficaram para trás. A convivência com pessoas ligadas à
                recuperação diminuiu enquanto o novo círculo social passou a
                ocupar aquele espaço.
              </p>

              <div className="my-6 space-y-2 border-l border-white/20 pl-5 text-zinc-400">
                <p>Chega outra sexta-feira.</p>
                <p>Outro encontro.</p>
                <p>Outra mesa.</p>
                <p>Outra oportunidade.</p>
              </div>

              <p>Dessa vez acontece.</p>

              <blockquote className="mt-6 border-l-2 border-[#d4af37] pl-6 text-xl italic text-zinc-300">
                — Só um copo de cerveja. Nada mais.
              </blockquote>

              <p className="mt-5">Ele bebe.</p>

              <p className="mt-5">E o primeiro copo chama o segundo.</p>

              <p className="mt-5">
                Mesmo assim, a noite termina sem maiores consequências.
              </p>

              <p className="mt-5">
                No dia seguinte, em vez de enxergar aquilo como um sinal de
                alerta, surge uma interpretação completamente diferente:
              </p>

              <blockquote className="mt-6 border-l-2 border-[#d4af37] pl-6 text-xl font-semibold leading-9 text-white">
                “Eu bebi e consegui parar. Está vendo? Agora eu tenho controle.”
              </blockquote>

              <p className="mt-5">
                Esse pensamento pode se tornar muito perigoso.
              </p>

              <p className="mt-5">
                Porque aquilo que antes era considerado impossível passa a
                parecer administrável.
              </p>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-bold text-white sm:text-3xl">
                A próxima sexta-feira
              </h2>

              <p>Dessa vez ninguém precisa oferecer.</p>

              <p className="mt-5">Ele mesmo pede a cerveja.</p>

              <p className="mt-5">Depois vem outra.</p>

              <p className="mt-5">Logo a cerveja já não é suficiente.</p>

              <p className="mt-5">Vem o conhaque.</p>

              <p className="mt-5">A tequila.</p>

              <p className="mt-5">
                As barreiras que durante tanto tempo foram construídas começam
                a cair rapidamente.
              </p>

              <p className="mt-5">
                E aquela noite termina muito longe do lugar onde começou.
              </p>

              <p className="mt-5">
                Em um quarto de hotel barato, aparecem as primeiras carreiras
                de cocaína.
              </p>

              <p className="mt-5">Depois, uma lata improvisada.</p>

              <p className="mt-5">Uma pedra de crack.</p>

              <p className="mt-5">
                E, diante dele, está novamente a substância da qual durante
                tanto tempo lutou para permanecer distante.
              </p>

              <p className="mt-5">
                Mas seria um erro olhar apenas para aquele quarto e dizer:
              </p>

              <blockquote className="mt-6 border-l-2 border-[#d4af37] pl-6 text-xl font-semibold text-white">
                “Foi aqui que aconteceu a recaída.”
              </blockquote>

              <p className="mt-5">
                Talvez aquele tenha sido apenas o momento em que a recaída se
                tornou visível.
              </p>

              <p className="mt-5">
                O processo vinha acontecendo muito antes.
              </p>

              <div className="my-6 space-y-3 border-l border-white/20 pl-5 text-zinc-400">
                <p>
                  Começou quando aquilo que sustentava a recuperação foi sendo
                  deixado de lado.
                </p>

                <p>Quando uma falta ao grupo deixou de preocupar.</p>

                <p>Quando a terapia deixou de parecer necessária.</p>

                <p>Quando antigos limites começaram a ser negociados.</p>

                <p>Quando situações de risco passaram a parecer seguras.</p>
              </div>

              <p>
                Quando o pensamento mudou de{" "}
                <strong className="text-white">
                  “eu preciso cuidar da minha recuperação”
                </strong>{" "}
                para{" "}
                <strong className="text-white">
                  “agora eu consigo me controlar”.
                </strong>
              </p>

              <p className="mt-5">
                A recaída não acontece da mesma maneira para todas as pessoas e
                não existe uma sequência inevitável que leve alguém novamente
                ao uso. Porém, muitas vezes, o consumo da substância é a etapa
                final de um processo que começou muito antes, por meio de
                mudanças graduais nos pensamentos, comportamentos,
                relacionamentos e na rotina que sustentava a recuperação.
              </p>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-bold text-white sm:text-3xl">
                O que a Palavra de Deus pode nos ensinar?
              </h2>

              <blockquote className="mb-8 border-l-2 border-[#d4af37] pl-6 text-xl italic leading-9 text-zinc-300">
                “Mas cada um é tentado, quando atraído e engodado pela sua
                própria concupiscência. Depois, havendo a concupiscência
                concebido, dá à luz o pecado; e o pecado, sendo consumado, gera
                a morte.”

                <footer className="mt-3 text-sm not-italic text-[#d4af37]">
                  Tiago 1:14–15 (ARC)
                </footer>
              </blockquote>

              <p>
                É incrível como um texto tão antigo pode ser tão atual em nossos
                dias. Isso acontece porque a Palavra de Deus permanece viva e
                atual, falando conosco em diferentes épocas e circunstâncias.
              </p>

              <p className="mt-5">
                Mas quero trazer para nossa reflexão algo que tenho aprendido no
                decorrer dos meus dias.
              </p>

              <p className="mt-5">
                Ao contrário do que muitos podem pensar, eu não sou escritor nem
                pregador. Sou alguém que viveu e que ainda traz no corpo as
                marcas da dependência química.
              </p>

              <p className="mt-5">
                E aprouve ao Senhor me ensinar um pouquinho de programação para
                que eu pudesse compartilhar com outras pessoas aquilo que Deus,
                pela sua misericórdia, tem me ensinado.
              </p>

              <p className="mt-5">
                Tiago, no primeiro capítulo de sua carta dirigida aos judeus
                dispersos, trata de algo que constantemente enfrentamos em nosso
                dia a dia: tentações e provações.
              </p>

              <p className="mt-5">
                Isso não acontece somente com um grupo específico.
              </p>

              <p className="mt-5">
                Todos nós — cristãos ou não cristãos, homens ou mulheres,
                dependentes químicos ou não — enfrentamos tentações e
                provações.
              </p>

              <p className="mt-5">
                Entretanto, quero trazer esta reflexão especialmente para um
                grupo:{" "}
                <strong className="text-white">o dependente químico.</strong>
              </p>

              <p className="mt-5">
                Se você leu a história acima, saiba que ela não é uma mera
                ficção.
              </p>

              <p className="mt-5">
                Talvez, enquanto lia, você tenha pensado:
              </p>

              <blockquote className="mt-6 border-l-2 border-[#d4af37] pl-6 text-xl font-semibold text-white">
                “Eu já passei por isso.”
              </blockquote>

              <p className="mt-5">Ou:</p>

              <blockquote className="mt-6 border-l-2 border-[#d4af37] pl-6 text-xl font-semibold text-white">
                “Meu filho passou por isso.”
              </blockquote>

              <p className="mt-5">
                Talvez tenha se lembrado de um irmão, amigo, marido, esposa ou
                de alguém que conheceu.
              </p>

              <p className="mt-5">
                Se olharmos ao nosso redor, certamente encontraremos pessoas que
                estão vivendo ou já viveram algo semelhante.
              </p>

              <p className="mt-5">
                A dependência química está em todos os lugares e alcança todas
                as classes sociais. Para ela, pouco importa se alguém é filho de
                empresário ou de operário, filho de pastor ou de alguém que
                nunca entrou em uma igreja.
              </p>

              <p className="mt-5">
                Ela não escolhe posição social, formação acadêmica ou condição
                financeira.
              </p>

              <p className="mt-5">
                E, quando consegue espaço, derruba, destrói e pode matar.
              </p>

              <p className="mt-5">
                <strong className="text-white">
                  Mas não precisa terminar assim.
                </strong>
              </p>

              <p className="mt-5">
                <strong className="text-white">Existe uma saída.</strong>
              </p>

              <p className="mt-5">E aqui preciso abrir um parêntese.</p>
            </section>
                        <section>
              <h2 className="mb-5 text-2xl font-bold text-white sm:text-3xl">
                Quando eu mesmo já não acreditava
              </h2>

              <p>
                Eu fui uma das pessoas que não acreditavam mais que existisse
                uma saída.
              </p>

              <p className="mt-5">
                Durante minha vida foram tantas recaídas, tantas tentativas,
                tantos altos e baixos, que chegou um momento em que eu mesmo já
                não acreditava que pudesse ser liberto.
              </p>

              <p className="mt-5">
                Então, um dia, Deus, em sua infinita misericórdia, colocou no
                meu caminho pessoas que, até aquele momento, eram completamente
                desconhecidas para mim.
              </p>

              <p className="mt-5">
                Deus as usou para demonstrar um amor tão grande que, mesmo sem
                acreditar que alguma coisa pudesse mudar, resolvi dar uma
                chance.
              </p>

              <p className="mt-5">
                Não uma chance para mim, porque naquele momento eu já não
                acreditava em mim.
              </p>

              <blockquote className="mt-6 border-l-2 border-[#d4af37] pl-6 text-xl font-semibold leading-9 text-white">
                Dei uma chance para que aquelas pessoas me convencessem de que
                ainda era possível.
              </blockquote>

              <p className="mt-5">E elas me convenceram.</p>

              <p className="mt-5">
                Foi assim que iniciei meu processo de recuperação.
              </p>

              <p className="mt-5">
                Hoje, olhando novamente para a Palavra do Senhor e especialmente
                para Tiago 1:14–15, percebi algo que me deixou maravilhado e que
                senti necessidade de compartilhar.
              </p>

              <p className="mt-5">
                Guardadas as devidas proporções do contexto bíblico, aquilo que
                Tiago descreve nos oferece um princípio que nos ajuda a
                compreender o que, na recuperação, conhecemos como{" "}
                <strong className="text-white">processo de recaída.</strong>
              </p>

              <p className="mt-5">Observe a sequência.</p>

              <div className="my-7 space-y-3 border-l border-white/20 pl-5 text-zinc-400">
                <p>Tiago não começa falando do pecado consumado.</p>
                <p>Primeiro existe a tentação.</p>
                <p>Depois alguém é atraído.</p>
                <p>O desejo é alimentado.</p>
                <p>Ele é concebido.</p>
                <p>Então dá à luz o pecado.</p>
                <p>E o pecado consumado produz suas consequências.</p>
              </div>

              <blockquote className="mt-6 border-l-2 border-[#d4af37] pl-6 text-xl font-semibold text-white">
                Existe um processo.
              </blockquote>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-bold text-white sm:text-3xl">
                Antes de chegar às mãos
              </h2>

              <p>
                Talvez seja exatamente aqui que esteja uma das grandes lições
                para nós que estamos em recuperação.
              </p>

              <p className="mt-5">
                Durante a caminhada podemos ser tentados muitas vezes.
              </p>

              <p className="mt-5">Memórias podem surgir.</p>

              <p className="mt-5">Desejos podem aparecer.</p>

              <p className="mt-5">
                Lugares, pessoas, situações, sentimentos e determinados
                períodos da nossa vida podem despertar coisas que imaginávamos
                ter deixado definitivamente para trás.
              </p>

              <p className="mt-5">
                <strong className="text-white">
                  Ser tentado, porém, não significa necessariamente ter recaído.
                </strong>
              </p>

              <p className="mt-5">
                A questão começa a mudar quando deixamos de reconhecer o perigo
                e passamos a alimentar aquilo que surgiu dentro de nós.
              </p>

              <p className="mt-5">
                Um pensamento que deveria passar começa a receber espaço.
              </p>

              <p className="mt-5">
                Uma lembrança começa a ser romantizada.
              </p>

              <p className="mt-5">
                Um limite que antes era inegociável começa a parecer exagerado.
              </p>

              <p className="mt-5">
                Uma falta ao grupo parece não fazer diferença.
              </p>

              <p className="mt-5">Depois vem outra.</p>

              <p className="mt-5">
                A terapia que antes considerávamos necessária começa a parecer
                dispensável.
              </p>

              <p className="mt-5">
                As pessoas que nos ajudavam a permanecer firmes vão ficando
                distantes.
              </p>

              <p className="mt-5">Então aparece aquele pensamento:</p>

              <blockquote className="mt-6 border-l-2 border-[#d4af37] pl-6 text-xl font-semibold text-white">
                “Agora eu estou bem.”
              </blockquote>

              <p className="mt-5">Depois:</p>

              <blockquote className="mt-6 border-l-2 border-[#d4af37] pl-6 text-xl font-semibold text-white">
                “Eu consigo me controlar.”
              </blockquote>

              <p className="mt-5">E finalmente:</p>

              <blockquote className="mt-6 border-l-2 border-[#d4af37] pl-6 text-xl font-semibold text-white">
                “Só uma vez não vai acontecer nada.”
              </blockquote>

              <p className="mt-5">
                Perceba: talvez a substância ainda nem tenha chegado às mãos,
                mas alguma coisa já começou a acontecer.
              </p>

              <p className="mt-5">
                Por isso, muitas vezes,{" "}
                <strong className="text-white">
                  a recaída não começa quando a droga entra no organismo.
                </strong>
              </p>

              <p className="mt-5">Ela pode começar muito antes.</p>

              <p className="mt-5">
                Começa quando aquilo que deveria apenas passar pela nossa mente
                encontra lugar para permanecer.
              </p>

              <p className="mt-5">
                Quando o desejo deixa de ser apenas percebido e começa a ser
                alimentado.
              </p>

              <p className="mt-5">
                Quando aquilo que antes reconhecíamos como perigo passa a ser
                negociado.
              </p>

              <p className="mt-5">
                Quando começamos a abandonar silenciosamente os padrões, os
                limites, os relacionamentos e os cuidados que Deus utilizou
                para nos ajudar a reconstruir a vida.
              </p>

              <p className="mt-5">Tiago diz:</p>

              <blockquote className="mt-6 border-l-2 border-[#d4af37] pl-6 text-xl italic leading-9 text-zinc-300">
                “Depois, havendo a concupiscência concebido, dá à luz o
                pecado...”

                <footer className="mt-3 text-sm not-italic text-[#d4af37]">
                  Tiago 1:15 (ARC)
                </footer>
              </blockquote>

              <p className="mt-5">O desejo alimentado produz alguma coisa.</p>

              <p className="mt-5">
                E, trazendo esse princípio para a realidade da dependência
                química, precisamos aprender a reconhecer o processo{" "}
                <strong className="text-white">
                  antes que ele chegue ao último estágio.
                </strong>
              </p>

              <p className="mt-5">
                Talvez seja justamente esse um dos grandes propósitos da
                prevenção à recaída: perceber os sinais enquanto ainda podemos
                pedir ajuda, conversar com alguém, retornar ao grupo, procurar
                quem nos acompanha, retomar as terapias, reorganizar a rotina e
                reconhecer:
              </p>

              <blockquote className="mt-6 border-l-2 border-[#d4af37] pl-6 text-xl font-semibold text-white">
                “Alguma coisa dentro de mim não está bem.”
              </blockquote>

              <div className="my-7 space-y-3 border-l border-white/20 pl-5 text-zinc-400">
                <p>Não precisamos esperar a primeira cerveja.</p>
                <p>Não precisamos esperar a primeira carreira.</p>
                <p>Não precisamos esperar a primeira pedra.</p>
                <p>
                  Não precisamos esperar perder novamente aquilo que levou tanto
                  tempo para ser reconstruído.
                </p>
              </div>

              <blockquote className="mt-6 rounded-xl border border-yellow-500/20 bg-[#161616] p-7 text-xl font-semibold leading-9 text-white sm:p-9">
                Se a queda pode ser um processo, a vigilância também precisa
                fazer parte do processo de recuperação.
              </blockquote>
            </section>
                    <section>
              <h2 className="mb-5 text-2xl font-bold text-white sm:text-3xl">
                E se eu já tiver recaído?
              </h2>

              <p>Existe ainda algo fundamental.</p>

              <p className="mt-5">
                Se você está lendo estas palavras depois de uma recaída, esta
                reflexão não foi escrita para condená-lo.
              </p>

              <p className="mt-5">
                Foi escrita porque{" "}
                <strong className="text-white">existe esperança.</strong>
              </p>

              <p className="mt-5">Talvez você tenha caído.</p>

              <p className="mt-5">
                Talvez tenha voltado para um lugar onde jurou que nunca mais
                pisaria.
              </p>

              <p className="mt-5">
                Talvez esteja olhando para tudo aquilo que perdeu e pensando:
              </p>

              <blockquote className="mt-6 border-l-2 border-[#d4af37] pl-6 text-xl font-semibold text-white">
                “Acabou. Para mim não existe mais jeito.”
              </blockquote>

              <p className="mt-5">Eu também já pensei assim.</p>

              <p className="mt-5">
                Mas uma queda não precisa ser o último capítulo da nossa
                história.
              </p>

              <p className="mt-5">A Bíblia diz:</p>

              <blockquote className="mt-6 border-l-2 border-[#d4af37] pl-6 text-xl italic leading-9 text-zinc-300">
                “Porque sete vezes cairá o justo e se levantará...”

                <footer className="mt-3 text-sm not-italic text-[#d4af37]">
                  Provérbios 24:16 (ARC)
                </footer>
              </blockquote>

              <p className="mt-5">
                O mesmo Deus que colocou pessoas no meu caminho quando eu já não
                acreditava em mim continua sendo poderoso para levantar aquele
                que caiu, restaurar aquilo que foi quebrado e ensinar novamente
                a caminhar.
              </p>

              <p className="mt-5">
                A recuperação não precisa terminar porque houve uma queda.
              </p>

              <p className="mt-5">
                Pode ser necessário reconhecer o que aconteceu, pedir ajuda,
                retornar ao tratamento e reconstruir aquilo que foi abandonado.
              </p>

              <p className="mt-5">Mas ainda existe caminho.</p>

              <p className="mt-5">Ainda existe esperança.</p>

              <p className="mt-5">Ainda existe restauração.</p>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-bold text-white sm:text-3xl">
                Conclusão para reflexão
              </h2>

              <p>A ressocialização é uma conquista fundamental.</p>

              <p className="mt-5">
                Recuperar a possibilidade de trabalhar, estudar, amar, construir
                amizades, formar uma família, passear e participar novamente da
                sociedade faz parte da reconstrução da vida.
              </p>

              <p className="mt-5">
                <strong className="text-white">
                  O problema não está em voltar a viver.
                </strong>
              </p>

              <p className="mt-5">
                O desafio está em não abandonar, justamente porque a vida
                melhorou, aquilo que ajudou a tornar essa nova vida possível.
              </p>

              <p className="mt-5">
                Por isso, diante da história que acabamos de acompanhar, algumas
                perguntas merecem reflexão:
              </p>

              <blockquote className="mt-6 border-l-2 border-[#d4af37] pl-6 text-xl font-semibold text-white">
                Em que momento ocorreu a recaída?
              </blockquote>

              <div className="my-7 space-y-3 border-l border-white/20 pl-5 text-zinc-400">
                <p>Foi quando apareceu o crack?</p>
                <p>Quando veio a cocaína?</p>
                <p>Quando ele tomou a primeira cerveja?</p>
                <p>Quando aceitou o primeiro happy hour?</p>
                <p>Quando começou a faltar aos grupos?</p>
                <p>
                  Ou quando, pouco a pouco, deixou de perceber como importantes
                  as práticas que sustentavam sua recuperação?
                </p>
              </div>

              <p>Talvez não exista um único momento.</p>

              <p className="mt-5">
                Talvez a grande lição esteja justamente aí:
              </p>

              <blockquote className="mt-6 rounded-xl border border-yellow-500/20 bg-[#161616] p-7 text-xl font-semibold leading-9 text-white sm:p-9">
                Antes de chegar às mãos, muitas vezes a recaída passa pelos
                pensamentos, pelos hábitos, pelas escolhas, pelos
                relacionamentos e pela rotina.
              </blockquote>

              <p className="mt-7">
                Por isso, talvez a pergunta mais importante não seja apenas:
              </p>

              <blockquote className="mt-6 border-l-2 border-[#d4af37] pl-6 text-xl font-semibold text-white">
                “Quando foi a última vez que usei?”
              </blockquote>

              <p className="mt-5">Mas também:</p>

              <blockquote className="mt-6 border-l-2 border-[#d4af37] pl-6 text-xl font-semibold text-white">
                “Como está a minha vida hoje?”
              </blockquote>

              <div className="my-7 space-y-3 border-l border-white/20 pl-5 text-zinc-400">
                <p>Como estão meus pensamentos?</p>
                <p>Como estão meus relacionamentos?</p>
                <p>
                  Como estão os limites que estabeleci para proteger minha
                  recuperação?
                </p>
                <p>
                  Tenho permanecido próximo das pessoas que me ajudam?
                </p>
                <p>Tenho mantido aquilo que aprendi?</p>
                <p>
                  Ou estou, pouco a pouco, negociando coisas que um dia
                  compreendi que eram essenciais?
                </p>
              </div>

              <p>
                Reconhecer esses sinais não significa viver com medo de voltar à
                sociedade.
              </p>

              <p className="mt-5">
                Significa aprender a viver nela com consciência.
              </p>

              <p className="mt-5">
                Porque recuperação não é apenas parar de usar uma substância.
              </p>

              <p className="mt-5">
                <strong className="text-white">
                  É construir e preservar um novo modo de viver.
                </strong>
              </p>

              <p className="mt-5">
                E talvez uma das maiores vitórias não seja somente poder dizer:
              </p>

              <blockquote className="mt-6 border-l-2 border-[#d4af37] pl-6 text-xl font-semibold text-white">
                “Hoje eu não usei.”
              </blockquote>

              <p className="mt-5">
                Mas olhar para nossa caminhada, reconhecer os sinais enquanto
                ainda estão longe da substância e dizer:
              </p>

              <blockquote className="mt-6 rounded-xl border border-yellow-500/20 bg-[#161616] p-7 text-xl font-semibold leading-9 text-white sm:p-9">
                “Eu conheço esse caminho. Sei onde ele pode terminar. E, pela
                graça de Deus, hoje escolho não continuar por ele.”
              </blockquote>

              <p className="mt-7">
                E, quando chegar o momento de voltar ao trabalho, reconstruir
                amizades, estudar, passear, amar e ocupar novamente seu lugar na
                sociedade, não se esqueça de algo muito simples:
              </p>

              <blockquote className="mt-6 rounded-xl border border-[#d4af37]/40 bg-[#161616] p-7 text-2xl font-bold leading-10 text-white sm:p-9 sm:text-3xl">
                Lembre-se: você está em recuperação. O mundo não.
              </blockquote>

              <p className="mt-7">
                O mundo continuará oferecendo seus convites, suas festas, seus
                bares, suas bebidas e inúmeras situações que talvez não
                representem perigo algum para outras pessoas.
              </p>

              <p className="mt-5">
                Não espere que o mundo se adapte à sua recuperação.
              </p>

              <p className="mt-5">
                <strong className="text-white">
                  Aprenda, com a ajuda de Deus e das pessoas que caminham com
                  você, a proteger sua recuperação enquanto volta a viver no
                  mundo.
                </strong>
              </p>
            </section>
          </div>

          {/* Navegação */}
          <div className="mt-16 border-t border-white/10 pt-10">
            <p className="mb-3 text-xs font-bold tracking-[0.18em] text-[#d4af37] uppercase">
              Vida e Restauração
            </p>

            <Link
              href="/vida-em-foco/liberto-por-cristo"
              className="group block"
            >
              <h2 className="text-2xl font-bold text-white transition group-hover:text-[#d4af37]">
                ← Liberto por Cristo, Sustentado pela Obediência
              </h2>

              <p className="mt-3 text-zinc-400">
                O caminho da libertação e a decisão diária.
              </p>
            </Link>
          </div>

          <div className="mt-12">
            <Link
              href="/vida-em-foco"
              className="text-sm font-semibold text-[#d4af37] transition hover:text-yellow-300"
            >
              ← Voltar para Vida em Foco
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
        