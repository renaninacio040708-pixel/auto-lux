import { useState, type FormEvent } from "react"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [sent, setSent] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Digite um e-mail válido")
      return
    }
    setError("")
    setSent(true)
  }

  return (
    <section className="bg-carbon py-14 light:bg-white">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex max-w-2xl flex-col items-center px-4 text-center"
      >
        <h2 className="text-hero-product-name text-porcelain light:text-carbon">
          Novas chegadas, antes de todo mundo.
        </h2>
        <p className="mt-2 text-body text-ash light:text-slate">
          Um e-mail quando um carro raro entra no catálogo. Sem spam, sem revenda de contato.
        </p>

        {sent ? (
          <p className="mt-6 text-body-strong text-electric-link light:text-cobalt-link">
            Inscrito! Você será avisado nas próximas chegadas.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 flex w-full max-w-md gap-2" noValidate>
            <Input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="E-mail para newsletter"
              className="h-11 rounded-input border-steel bg-obsidian px-5 text-porcelain light:border-light-hairline light:bg-white light:text-carbon"
            />
            <Button
              type="submit"
              className="h-11 rounded-button bg-apple-blue px-5 text-body-strong text-white hover:bg-apple-blue/85"
            >
              Avise-me
            </Button>
          </form>
        )}
        {error && <p className="mt-2 text-utility-nav text-destructive">{error}</p>}
      </motion.div>
    </section>
  )
}
