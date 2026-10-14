import { MessageCircle } from "lucide-react"
import { motion } from "motion/react"
import { whatsappLink } from "@/lib/data"

export function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappLink("Olá! Vim pelo site e quero saber mais sobre um veículo.")}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-pill bg-apple-blue px-4 py-3.5 text-white shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
      aria-label="Falar com a Auto Lux no WhatsApp"
    >
      <MessageCircle className="size-5" />
      <span className="hidden text-body-strong sm:inline">Fale com a gente</span>
    </motion.a>
  )
}
