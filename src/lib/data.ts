export const brand = {
  name: "Auto Lux",
  tagline: "Curadoria de carros de alto padrão.",
  city: "São Bernardo do Campo, SP",
  address: "Av. Kennedy, 1200 — Rudge Ramos, São Bernardo do Campo - SP",
  whatsapp: "5511940000000",
  whatsappDisplay: "(11) 94000-0000",
  email: "contato@autolux.com.br",
  hours: "Seg a sáb, 9h às 19h — visitas fora do horário por agendamento",
}

export const whatsappLink = (text: string) =>
  `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(text)}`

export type Vehicle = {
  slug: string
  brand: string
  model: string
  year: number
  price: number
  priceLabel: string
  tag?: "Novo" | "Reservado" | "Último"
  hp: number
  zeroToHundred: string
  topSpeed: string
  drivetrain: string
  km: string
  color: string
  summary: string
  highlights: string[]
}

export const heroVehicle: Vehicle = {
  slug: "porsche-911-turbo-s",
  brand: "Porsche",
  model: "911 Turbo S",
  year: 2024,
  price: 1890000,
  priceLabel: "R$ 1.890.000",
  tag: "Novo",
  hp: 650,
  zeroToHundred: "2,7s",
  topSpeed: "330 km/h",
  drivetrain: "Tração integral",
  km: "1.200 km",
  color: "GT Silver Metallic",
  summary:
    "A unidade que fechou o leilão de importação mais rápido este ano: pacote Lightweight, bancos em couro Club com costura em contraste e cerâmica de freio de fábrica.",
  highlights: [
    "Pacote Sport Chrono com modo Launch Control calibrado",
    "Freios cerâmicos PCCB — zero sinais de uso nos discos",
    "Único proprietário anterior, revisões em concessionária oficial",
  ],
}

export const catalog: Vehicle[] = [
  heroVehicle,
  {
    slug: "amg-gt-63s",
    brand: "Mercedes-AMG",
    model: "GT 63 S 4-Door",
    year: 2023,
    price: 1340000,
    priceLabel: "R$ 1.340.000",
    tag: "Reservado",
    hp: 639,
    zeroToHundred: "3,2s",
    topSpeed: "315 km/h",
    drivetrain: "4MATIC+",
    km: "8.400 km",
    color: "Preto Obsidiana",
    summary:
      "Revisado na concessionária há 3 meses. Teto panorâmico, suspensão AMG Active Ride Control e escapamento de performance com válvulas.",
    highlights: [
      "Interior Nappa vermelho — combinação rara no mercado nacional",
      "Pneus Michelin Pilot Sport com menos de 2 mil km de uso",
    ],
  },
  {
    slug: "m4-competition-xdrive",
    brand: "BMW",
    model: "M4 Competition xDrive",
    year: 2024,
    price: 890000,
    priceLabel: "R$ 890.000",
    hp: 530,
    zeroToHundred: "3,5s",
    topSpeed: "290 km/h",
    drivetrain: "xDrive",
    km: "3.100 km",
    color: "Isle of Man Green",
    summary:
      "Carbon package completo: teto, retrovisores e spoiler em fibra de carbono exposta. Rodas forjadas M Performance de 20 polegadas.",
    highlights: [
      "Freios M Carbon Ceramic — upgrade de fábrica",
      "Garantia de fábrica BMW vigente até 2027",
    ],
  },
  {
    slug: "rs-etron-gt",
    brand: "Audi",
    model: "RS e-tron GT",
    year: 2023,
    price: 980000,
    priceLabel: "R$ 980.000",
    hp: 646,
    zeroToHundred: "3,3s",
    topSpeed: "250 km/h",
    drivetrain: "quattro elétrico",
    km: "12.600 km",
    color: "Kemora Grey",
    summary:
      "100% elétrico com autonomia real de 450 km testada por nossa equipe. Carregamento residencial instalado incluso na negociação.",
    highlights: [
      "Bateria com 97% de capacidade original — laudo técnico incluso",
      "Suspensão pneumática adaptativa com três alturas",
    ],
  },
  {
    slug: "range-rover-autobiography",
    brand: "Land Rover",
    model: "Range Rover Autobiography",
    year: 2024,
    price: 1150000,
    priceLabel: "R$ 1.150.000",
    tag: "Novo",
    hp: 530,
    zeroToHundred: "4,6s",
    topSpeed: "250 km/h",
    drivetrain: "4x4 permanente",
    km: "600 km",
    color: "Belgravia Green",
    summary:
      "Configuração SV com bancos executivos reclináveis traseiros, frigobar e vidros com isolamento acústico triplo.",
    highlights: [
      "Captação de ar e suspensão pneumática com ajuste de altura automático",
      "Revestimento interno em couro Windsor com acabamento Shadow Walnut",
    ],
  },
  {
    slug: "urus-s",
    brand: "Lamborghini",
    model: "Urus S",
    year: 2023,
    price: 2250000,
    priceLabel: "R$ 2.250.000",
    tag: "Último",
    hp: 666,
    zeroToHundred: "3,5s",
    topSpeed: "305 km/h",
    drivetrain: "Tração integral",
    km: "4.800 km",
    color: "Giallo Auge",
    summary:
      "Última unidade da cor em estoque no Brasil. Pacote Ad Personam com costura dupla contraste e aerofólio em fibra de carbono.",
    highlights: [
      "Sistema de escape Akrapovič com modo Corsa",
      "Bancos dianteiros com ventilação e massagem",
    ],
  },
]

export const financingPlans = [
  {
    name: "À vista",
    description: "Transferência em até 48h após aprovação de procedência.",
    bullets: [
      "Desconto de 3% sobre o preço de tabela",
      "Documentação liberada em até 2 dias úteis",
      "Prioridade na fila de preparação estética",
    ],
    featured: false,
  },
  {
    name: "Financiamento tradicional",
    description: "Parcelas fixas em até 60x, com instituições parceiras.",
    bullets: [
      "Entrada a partir de 30% do valor do veículo",
      "Taxa pré-aprovada em até 24h para CNPJ e CPF",
      "Sem tarifa de abertura de crédito via Auto Lux",
    ],
    featured: true,
  },
  {
    name: "Consórcio de bens de luxo",
    description: "Para quem planeja a troca com previsibilidade de caixa.",
    bullets: [
      "Parcelas sem juros, só taxa de administração",
      "Lance embutido disponível a partir do 2º mês",
      "Carta de crédito pode ser usada em qualquer unidade do catálogo",
    ],
    featured: false,
  },
  {
    name: "Leasing executivo PJ",
    description: "Veículo no CNPJ, com manutenção incluída no contrato.",
    bullets: [
      "100% dedutível como despesa operacional",
      "Revisões e seguro total inclusos na mensalidade",
      "Troca de veículo a cada 24 ou 36 meses",
    ],
    featured: false,
  },
]

export const testimonials = [
  {
    name: "Marcelo Tavares",
    role: "Comprou um AMG GT 63 S",
    quote:
      "Pedi o laudo cautelar antes de sair de casa. Chegou no WhatsApp em 20 minutos, com fotos do chassi e das revisões. Fechei a compra no mesmo dia.",
  },
  {
    name: "Beatriz Lins",
    role: "Trocou um Cayenne por um Range Rover Autobiography",
    quote:
      "Minha troca foi avaliada por vídeo-chamada em uma tarde. O valor que me passaram foi exatamente o que apareceu no contrato — sem letra miúda.",
  },
  {
    name: "Diego Formiga",
    role: "Financiou um M4 Competition pelo CNPJ",
    quote:
      "Trabalho com logística e preciso de agilidade. A Auto Lux resolveu o leasing executivo em três dias, incluindo seguro e manutenção na mensalidade.",
  },
]

export const faqs = [
  {
    question: "Todo carro do catálogo tem laudo cautelar?",
    answer:
      "Sim. Emitimos laudo cautelar de procedência e estado estrutural antes de qualquer veículo entrar no catálogo — e reenviamos o laudo atualizado no fechamento, caso o carro tenha ficado mais de 30 dias em estoque.",
  },
  {
    question: "Posso agendar test-drive fora do horário comercial?",
    answer:
      "Sim, com agendamento prévio pelo WhatsApp. Test-drives aos domingos e à noite são possíveis para quem está decidindo entre duas unidades do catálogo.",
  },
  {
    question: "Vocês aceitam meu carro atual na troca?",
    answer:
      "Aceitamos seminovos de qualquer marca a partir de R$ 150.000. A avaliação é feita por vídeo-chamada em até 24h, com proposta por escrito antes da visita presencial.",
  },
  {
    question: "O financiamento funciona para CNPJ?",
    answer:
      "Sim — financiamento tradicional, consórcio e leasing executivo PJ têm condições específicas para pessoa jurídica, incluindo dedução como despesa operacional no leasing.",
  },
  {
    question: "Fazem entrega em outro estado?",
    answer:
      "Sim, com transporte em cegonheira fechada e seguro integral durante o trajeto. O prazo médio para o Sul e o Rio de Janeiro é de 3 a 5 dias úteis.",
  },
  {
    question: "A garantia de fábrica continua valendo depois da compra?",
    answer:
      "Sim, quando o veículo ainda está dentro do prazo original — informamos a data exata de vencimento na ficha técnica antes do fechamento, sem letras miúdas.",
  },
]

export const journal = [
  {
    slug: "curadoria-de-procedencia",
    title: "Como funciona nossa curadoria de procedência",
    excerpt:
      "Todo carro passa por 4 etapas antes de entrar no catálogo: laudo cautelar, inspeção de chassi, histórico de revisões e teste dinâmico de 40 km.",
    date: "2026-09-12",
  },
  {
    slug: "agenda-test-drive-outubro",
    title: "Agenda de test-drive de outubro está aberta",
    excerpt:
      "Reservamos horários de sábado exclusivos para quem está decidindo entre o GT 63 S e o M4 Competition — os dois ficam disponíveis no mesmo dia.",
    date: "2026-10-02",
  },
  {
    slug: "bastidores-preparacao-estetica",
    title: "Bastidores: a preparação estética antes da entrega",
    excerpt:
      "Nenhum carro sai do pátio sem passar por polimento técnico e higienização de couro — mostramos o processo completo do Urus S desta semana.",
    date: "2026-10-09",
  },
]
