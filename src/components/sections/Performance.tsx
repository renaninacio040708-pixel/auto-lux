import { motion } from "motion/react"
import { heroVehicle } from "@/lib/data"

const stats = [
  { value: heroVehicle.hp, suffix: " cv", label: "Potência combinada" },
  { value: heroVehicle.zeroToHundred, suffix: "", label: "0 a 100 km/h" },
  { value: heroVehicle.topSpeed, suffix: "", label: "Velocidade máxima" },
  { value: heroVehicle.drivetrain, suffix: "", label: "Tração" },
]

export function Performance() {
  return (
    <section id="performance" className="bg-carbon py-16 light:bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-display text-porcelain light:text-carbon">
            Feito para ser sentido, não só visto.
          </h2>
          <p className="mt-4 text-body text-ash light:text-slate">
            Cada unidade passa por teste dinâmico de 40 km antes de entrar no catálogo — o que
            chega até você já foi conferido na pista, não só no papel.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-steel/50 sm:grid-cols-4 light:border-light-hairline">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex flex-col items-center justify-center gap-1 bg-obsidian px-4 py-8 text-center light:bg-porcelain"
            >
              <span className="text-feature-stat text-porcelain light:text-carbon">
                {stat.value}
                {stat.suffix}
              </span>
              <span className="text-utility-nav text-ash light:text-slate">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
