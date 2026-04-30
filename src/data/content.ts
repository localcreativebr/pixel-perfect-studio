import fabricioPhoto from "@/assets/team/fabricio-costa.png";
import brenoPhoto from "@/assets/team/breno-franca.png";
import vamuCapa from "@/assets/motion-capa.gif";
import gonbankCapa from "@/assets/projects/gonbank/capa.gif";
import gonbank2 from "@/assets/projects/gonbank/slide-2.png";
import gonbank4 from "@/assets/projects/gonbank/slide-4.webp";
import gonbank5 from "@/assets/projects/gonbank/slide-5.gif";
import gonbank6 from "@/assets/projects/gonbank/slide-6.webp";
import gonbank7 from "@/assets/projects/gonbank/slide-7.webp";
import gonbank8 from "@/assets/projects/gonbank/slide-8.webp";
import gonbank9 from "@/assets/projects/gonbank/slide-9.gif";

export interface Project {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  images: string[];
  credits: {
    role: string;
    name: string;
  }[];
}

export interface TeamMember {
  name: string;
  photo: string;
  age?: number;
  pt: { role: string; bio: string };
  en: { role: string; bio: string };
}

export type Language = "pt" | "en";

const aboutPt = `A Local Creative é uma agência de branding que transforma ideias em experiências visuais completas. Com uma abordagem estratégica e multidisciplinar, a agência atua na construção de marcas que vão além da estética, conectando propósito, narrativa e identidade em cada ponto de contato.

Guiada pela premissa "Tudo é Design, e nós fazemos tudo", a Local Creative entende o design como um sistema integrado, presente em cada detalhe da comunicação. Do conceito à execução, cada projeto é pensado de forma holística, garantindo consistência, relevância e impacto.

A atuação da agência abrange desde o desenvolvimento de identidade visual até direção de arte, motion design, campanhas, interfaces digitais e experiências de marca. Tudo é construído com foco em criar conexões reais entre marcas e pessoas, sempre alinhado às demandas contemporâneas do mercado.

Mais do que criar, a Local Creative estrutura, posiciona e dá vida a marcas que desejam se destacar de forma autêntica e estratégica.`;

const aboutEn = `Local Creative is a branding agency that transforms ideas into complete visual experiences. With a strategic and multidisciplinary approach, the agency builds brands that go beyond aesthetics, connecting purpose, narrative and identity at every touchpoint.

Guided by the premise "Everything is Design, and we do everything", Local Creative understands design as an integrated system, present in every detail of communication. From concept to execution, each project is thought holistically, ensuring consistency, relevance and impact.

The agency's work spans visual identity, art direction, motion design, campaigns, digital interfaces and brand experiences. Everything is built to create real connections between brands and people, always aligned with the contemporary demands of the market.

More than creating, Local Creative structures, positions and brings to life brands that want to stand out authentically and strategically.`;

export const siteContent = {
  about: {
    pt: { title: "Quem Somos", description: aboutPt },
    en: { title: "Who We Are", description: aboutEn },
  },
  team: [
    {
      name: "Fabricio Costa",
      photo: fabricioPhoto,
      age: 27,
      pt: {
        role: "Fundador — 27 anos",
        bio: "Designer Gráfico | Branding & Diretor de Arte",
      },
      en: {
        role: "Founder — 27 years old",
        bio: "Graphic Designer | Branding & Art Director",
      },
    },
    {
      name: "Breno França",
      photo: brenoPhoto,
      age: 24,
      pt: {
        role: "Cofundador — 24 anos",
        bio: "Brand Identity | Designer Gráfico",
      },
      en: {
        role: "Co-Founder — 24 years old",
        bio: "Brand Identity | Graphic Designer",
      },
    },
  ] as TeamMember[],
  projects: [
    {
      id: "vamu",
      name: "Vamu",
      description:
        `A Vamo Entregas é um serviço de delivery rápido, acessível e totalmente transparente. Criada para quem precisa receber com agilidade e quer acompanhar tudo de perto, a Vamo prioriza a comunicação clara, o contato humano e uma experiência simples — do pedido à entrega.

Voltada para o público B e C, a marca nasce com um tom leve, próximo e sem excessos de formalidade. Aqui, o cliente não fala com uma empresa distante, fala com pessoas. A Vamo acredita que entrega rápida também pode ser entrega cuidadosa.

O processo criativo partiu da essência da marca: leveza, movimento e proximidade. Por isso, optamos por uma identidade tipográfica, sem símbolos complexos, reforçando simplicidade e agilidade. A logotipia possui cantos arredondados, transmitindo acessibilidade, acolhimento e fluidez — atributos fundamentais para uma marca que está sempre em movimento.

A tipografia foi pensada para remeter ao movimento do GPS pelas ruas, como se estivesse se deslocando até a casa do cliente. Essa sensação de percurso, trajeto e chegada reforça visualmente o propósito da marca: ir até você.

O azul foi escolhido em conjunto com o cliente por ser uma cor forte e ao mesmo tempo leve. Ele representa um dia sem nuvens, tranquilidade e confiança. O azul também carrega a ideia de esperança — a mesma esperança que existe quando aguardamos a chegada de algo que acabamos de comprar. Na Vamo, o azul simboliza a certeza de que a entrega vai chegar.`,
      thumbnail: vamuCapa,
      images: [],
      credits: [
        { role: "Creative Direction", name: "Fabricio Costa" },
        { role: "Design", name: "Breno França" },
        { role: "Motion Design", name: "Fabricio Costa" },
        { role: "Strategy & Copywriting", name: "Nicolle Truglio" },
      ],
    },
    {
      id: "gonbank",
      name: "GONBANK",
      description:
        `A GonBank é um banco digital pensado para a nova geração que quer fazer, conquistar, empreender e ter controle da própria vida financeira — mesmo sem ter nascido no centro do sistema.

Minimalista no visual, direto na proposta e radicalmente inclusivo na essência, o GonBank foi criado para a Geração Z das classes C e D: pessoas que cresceram ouvindo que o banco não era lugar pra elas, mas que agora querem ocupar esse espaço com autonomia e inteligência.

Reescrever o que significa ter um banco. Desburocratizar o acesso ao dinheiro. Dar poder pra quem sempre teve que se virar sem ele.

A gente fala a língua de quem tem pressa, plano e personalidade. Crédito fácil, conta leve, tudo no app. Não prometemos luxo — entregamos acesso.

Porque o banco tradicional não foi feito pra todo mundo. Porque nem todo mundo nasce com crédito — mas todo mundo merece crédito. Porque a Geração Z quer ter grana, sim. Mas quer também respeito, clareza, propósito.

E o GonBank é isso: um banco com alma digital, coração de rua e visão de futuro.`,
      thumbnail: gonbankCapa,
      images: [gonbank2, gonbank4, gonbank5, gonbank6, gonbank7, gonbank8, gonbank9],
      credits: [
        { role: "Creative Direction", name: "Fabricio Costa" },
        { role: "Design", name: "Rafael Purgatto / Fabrício Costa" },
        { role: "Motion Design", name: "Fabricio Costa / Anna Carolina" },
        { role: "Strategy & Copywriting", name: "Pamela Fernandes" },
      ],
    },
  ] as Project[],
};
