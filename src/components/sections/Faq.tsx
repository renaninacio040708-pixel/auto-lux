import { motion } from "motion/react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from "@/lib/data"

export function Faq() {
  return (
    <section id="faq" className="bg-obsidian py-16 light:bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-display text-porcelain light:text-carbon"
        >
          Perguntas antes de decidir.
        </motion.h2>

        <Accordion className="mt-10">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.question}
              value={faq.question}
              className="border-steel/50 light:border-light-hairline"
            >
              <AccordionTrigger className="py-5 text-section-nav text-porcelain hover:no-underline light:text-carbon">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-body text-ash light:text-slate">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
