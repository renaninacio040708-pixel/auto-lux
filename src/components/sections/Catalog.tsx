import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { catalog, whatsappLink } from "@/lib/data"

const tagStyles: Record<string, string> = {
  Novo: "bg-copper-new text-white",
  Reservado: "bg-steel text-porcelain",
  Último: "bg-apple-blue text-white",
}

export function Catalog() {
  return (
    <section id="catalogo" className="bg-obsidian py-16 light:bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h2 className="text-display text-porcelain light:text-carbon">O catálogo desta semana.</h2>
          <p className="mt-4 text-body text-ash light:text-slate">
            Seis unidades em estoque hoje. Cada ficha abre direto no WhatsApp com a equipe que
            cuidou da inspeção — sem formulário, sem espera.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {catalog.map((vehicle, i) => (
            <motion.a
              key={vehicle.slug}
              href={whatsappLink(
                `Olá! Tenho interesse no ${vehicle.brand} ${vehicle.model} (${vehicle.year}) anunciado no site.`
              )}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col rounded-card border border-steel/50 bg-carbon p-4 transition-colors hover:border-steel light:border-light-hairline light:bg-porcelain light:hover:border-slate"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-utility-nav text-ash light:text-slate">{vehicle.brand}</p>
                  <h3 className="text-product-label text-porcelain light:text-carbon">
                    {vehicle.model}
                  </h3>
                </div>
                {vehicle.tag && (
                  <Badge className={`rounded-pill ${tagStyles[vehicle.tag]}`}>{vehicle.tag}</Badge>
                )}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 text-body text-ash light:text-slate">
                <span>{vehicle.year}</span>
                <span className="text-right">{vehicle.km}</span>
                <span>{vehicle.hp} cv</span>
                <span className="text-right">{vehicle.zeroToHundred}</span>
              </div>

              <p className="mt-4 text-body text-ash light:text-slate">{vehicle.summary}</p>

              <div className="mt-5 flex items-center justify-between border-t border-steel/50 pt-4 light:border-light-hairline">
                <span className="text-section-nav text-porcelain light:text-carbon">
                  {vehicle.priceLabel}
                </span>
                <span className="flex items-center gap-1 text-utility-nav text-electric-link group-hover:underline light:text-cobalt-link">
                  Falar no WhatsApp
                  <ArrowUpRight className="size-3.5" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
