import { Check } from "lucide-react"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { financingPlans, whatsappLink } from "@/lib/data"

export function Pricing() {
  return (
    <section id="financiamento" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h2 className="text-display text-carbon">Quatro formas de levar o seu.</h2>
          <p className="mt-4 text-body text-slate">
            Compare as condições e fale direto com a equipe financeira — sem simulação
            automática genérica, cada proposta é montada para o seu caso.
          </p>
        </motion.div>

        <div className="mt-10 overflow-hidden rounded-card border border-light-hairline">
          <div className="grid gap-px bg-light-hairline sm:grid-cols-2 lg:grid-cols-4">
            {financingPlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: plan.featured ? 0 : 16, scale: plan.featured ? 0.98 : 1 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: plan.featured ? 0.55 : 0.4, delay: i * 0.08 }}
                className={
                  plan.featured
                    ? "flex flex-col gap-4 bg-carbon p-6 text-porcelain"
                    : "flex flex-col gap-4 bg-white p-6"
                }
              >
                <div>
                  <h3 className={plan.featured ? "text-product-label text-porcelain" : "text-product-label text-carbon"}>
                    {plan.name}
                  </h3>
                  {plan.featured && (
                    <p className="mt-0.5 text-utility-nav text-electric-link">
                      Escolhido por 6 em cada 10 clientes este ano
                    </p>
                  )}
                </div>
                <p className={plan.featured ? "text-body text-ash" : "text-body text-slate"}>
                  {plan.description}
                </p>
                <ul className="flex flex-col gap-2">
                  {plan.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className={`flex items-start gap-2 text-body ${plan.featured ? "text-porcelain" : "text-carbon"}`}
                    >
                      <Check
                        className={`mt-0.5 size-4 shrink-0 ${plan.featured ? "text-electric-link" : "text-apple-blue"}`}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.featured ? "default" : "outline"}
                  className={`mt-auto h-11 rounded-button ${
                    plan.featured
                      ? "bg-apple-blue text-white hover:bg-apple-blue/85"
                      : "border-light-hairline text-cobalt-link hover:bg-porcelain"
                  }`}
                  render={
                    <a
                      href={whatsappLink(`Olá! Quero simular o plano "${plan.name}" da Auto Lux.`)}
                      target="_blank"
                      rel="noreferrer"
                    />
                  }
                >
                  Simular condições
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
