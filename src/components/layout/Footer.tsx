import { brand } from "@/lib/data"

const columns = [
  {
    title: "Catálogo",
    links: [
      { label: "Veículos disponíveis", href: "#catalogo" },
      { label: "Avaliação do seu carro", href: "#avaliacoes" },
      { label: "Agendar test-drive", href: "#contato" },
    ],
  },
  {
    title: "Financiamento",
    links: [
      { label: "Planos e condições", href: "#financiamento" },
      { label: "Leasing para CNPJ", href: "#financiamento" },
      { label: "Perguntas frequentes", href: "#faq" },
    ],
  },
  {
    title: "Auto Lux",
    links: [
      { label: "Jornal", href: "#jornal" },
      { label: "Trabalhe conosco", href: "#contato" },
      { label: "Fale com a equipe", href: "#contato" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-light-hairline bg-porcelain text-carbon">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 border-b border-light-hairline pb-10 sm:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-body-strong text-carbon">{col.title}</h3>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-body text-slate hover:text-cobalt-link hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 pt-6 text-body text-slate sm:flex-row sm:items-center sm:justify-between">
          <p>
            {brand.name} — {brand.address}
          </p>
          <p>
            Copyright © {new Date().getFullYear()} {brand.name}. Todos os direitos reservados.
          </p>
        </div>
        <p className="mt-2 text-utility-nav text-slate">
          Preços e condições sujeitos a disponibilidade de estoque. Valores de financiamento
          dependem de análise de crédito junto às instituições parceiras.
        </p>
      </div>
    </footer>
  )
}
