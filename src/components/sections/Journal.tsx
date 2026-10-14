import { motion } from "motion/react"
import { journal } from "@/lib/data"

const formatter = new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "long" })

export function Journal() {
  return (
    <section id="jornal" className="bg-carbon py-16 light:bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-display text-porcelain light:text-carbon"
        >
          Jornal Auto Lux.
        </motion.h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {journal.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="flex flex-col rounded-card border border-steel/50 bg-obsidian p-6 light:border-light-hairline light:bg-porcelain"
            >
              <time className="text-utility-nav text-ash light:text-slate" dateTime={post.date}>
                {formatter.format(new Date(post.date))}
              </time>
              <h3 className="mt-2 text-product-label text-porcelain light:text-carbon">
                {post.title}
              </h3>
              <p className="mt-3 text-body text-ash light:text-slate">{post.excerpt}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
