import { useForm } from "react-hook-form"
import { motion } from "motion/react"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { brand } from "@/lib/data"

type ContactForm = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactForm>()

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 600))
    reset()
  }

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(brand.address)}&output=embed`

  return (
    <section id="contato" className="bg-obsidian py-16 light:bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-display text-porcelain light:text-carbon"
        >
          Fale com a equipe.
        </motion.h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            {isSubmitSuccessful ? (
              <div className="flex flex-col items-start gap-3 rounded-card border border-steel/50 bg-carbon p-8 light:border-light-hairline light:bg-porcelain">
                <CheckCircle2 className="size-8 text-apple-blue" />
                <h3 className="text-product-label text-porcelain light:text-carbon">
                  Mensagem enviada.
                </h3>
                <p className="text-body text-ash light:text-slate">
                  Nossa equipe responde em até 1 hora útil pelo e-mail ou telefone que você
                  deixou. Se for urgente, fale direto pelo WhatsApp no botão flutuante.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4 rounded-card border border-steel/50 bg-carbon p-8 light:border-light-hairline light:bg-porcelain"
                noValidate
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="name" className="text-ash light:text-slate">
                      Nome
                    </Label>
                    <Input
                      id="name"
                      className="rounded-link border-steel bg-obsidian text-porcelain light:border-light-hairline light:bg-white light:text-carbon"
                      {...register("name", { required: "Informe seu nome" })}
                    />
                    {errors.name && (
                      <p className="text-utility-nav text-destructive">{errors.name.message}</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="phone" className="text-ash light:text-slate">
                      Telefone / WhatsApp
                    </Label>
                    <Input
                      id="phone"
                      className="rounded-link border-steel bg-obsidian text-porcelain light:border-light-hairline light:bg-white light:text-carbon"
                      {...register("phone", { required: "Informe um telefone" })}
                    />
                    {errors.phone && (
                      <p className="text-utility-nav text-destructive">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="email" className="text-ash light:text-slate">
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    className="rounded-link border-steel bg-obsidian text-porcelain light:border-light-hairline light:bg-white light:text-carbon"
                    {...register("email", {
                      required: "Informe seu e-mail",
                      pattern: { value: /^\S+@\S+\.\S+$/, message: "E-mail inválido" },
                    })}
                  />
                  {errors.email && (
                    <p className="text-utility-nav text-destructive">{errors.email.message}</p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="subject" className="text-ash light:text-slate">
                    Assunto
                  </Label>
                  <Input
                    id="subject"
                    placeholder="Comprar, vender meu carro, trabalhar com a gente..."
                    className="rounded-link border-steel bg-obsidian text-porcelain light:border-light-hairline light:bg-white light:text-carbon"
                    {...register("subject", { required: "Conte o que você precisa" })}
                  />
                  {errors.subject && (
                    <p className="text-utility-nav text-destructive">{errors.subject.message}</p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="message" className="text-ash light:text-slate">
                    Mensagem
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    className="rounded-link border-steel bg-obsidian text-porcelain light:border-light-hairline light:bg-white light:text-carbon"
                    {...register("message", { required: "Escreva uma mensagem" })}
                  />
                  {errors.message && (
                    <p className="text-utility-nav text-destructive">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 h-11 rounded-button bg-apple-blue text-body-strong text-white hover:bg-apple-blue/85"
                >
                  {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                </Button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <div className="overflow-hidden rounded-media border border-steel/50 light:border-light-hairline">
              <iframe
                title="Localização Auto Lux"
                src={mapSrc}
                className="h-64 w-full border-0 sm:h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="rounded-card border border-steel/50 bg-carbon p-6 text-body text-ash light:border-light-hairline light:bg-porcelain light:text-slate">
              <p className="text-body-strong text-porcelain light:text-carbon">{brand.name}</p>
              <p className="mt-1">{brand.address}</p>
              <p className="mt-1">{brand.hours}</p>
              <p className="mt-1">{brand.email}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
