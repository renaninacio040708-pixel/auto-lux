import { motion } from "motion/react"
import { testimonials } from "@/lib/data"

export function Testimonials() {
  return (
    <section id="avaliacoes" className="bg-carbon py-16 light:bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-display text-porcelain light:text-carbon"
        >
          Quem comprou, conta.
        </motion.h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, x: i === 0 ? -24 : i === 2 ? 24 : 0, y: i === 1 ? 20 : 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="flex flex-col justify-between rounded-card border border-steel/50 bg-obsidian p-6 light:border-light-hairline light:bg-porcelain"
            >
              <blockquote className="text-body text-porcelain light:text-carbon">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 border-t border-steel/50 pt-4 light:border-light-hairline">
                <p className="text-body-strong text-porcelain light:text-carbon">{t.name}</p>
                <p className="text-utility-nav text-ash light:text-slate">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
