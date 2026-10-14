const sections = [
  { href: "#visao-geral", label: "Visão geral" },
  { href: "#performance", label: "Performance" },
  { href: "#catalogo", label: "Catálogo" },
  { href: "#financiamento", label: "Financiamento" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#faq", label: "Perguntas" },
]

export function ProductNav() {
  return (
    <div className="sticky top-11 z-40 flex justify-center px-4 py-2">
      <nav className="flex max-w-full items-center gap-1 overflow-x-auto rounded-nav border border-steel/60 bg-carbon/85 px-2 py-1.5 backdrop-blur-xl [scrollbar-width:none] light:border-light-hairline light:bg-white/85">
        {sections.map((s) => (
          <a
            key={s.href}
            href={s.href}
            className="whitespace-nowrap rounded-nav px-3 py-1.5 text-utility-nav text-ash transition-colors hover:bg-steel/40 hover:text-porcelain light:hover:bg-porcelain light:hover:text-carbon"
          >
            {s.label}
          </a>
        ))}
      </nav>
    </div>
  )
}
