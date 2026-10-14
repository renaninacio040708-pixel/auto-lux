import { lazy, Suspense } from "react"
import { ChevronRight } from "lucide-react"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { heroVehicle, whatsappLink } from "@/lib/data"

const CarViewer = lazy(() =>
  import("@/components/car3d/CarViewer").then((m) => ({ default: m.CarViewer }))
)

export function Hero() {
  return (
    <section id="visao-geral" className="relative overflow-hidden bg-obsidian pt-10 pb-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <span className="rounded-pill bg-copper-new px-2 py-0.5 text-utility-nav text-white">
            {heroVehicle.tag}
          </span>
          <span className="text-utility-nav text-ash">Destaque da semana</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-hero-product-name text-porcelain"
        >
          {heroVehicle.brand} {heroVehicle.model}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-2 max-w-3xl text-display text-porcelain"
        >
          Potência que não precisa levantar a voz.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 h-[300px] w-full max-w-2xl sm:h-[380px] md:h-[440px]"
        >
          <Suspense
            fallback={
              <div className="flex h-full w-full items-center justify-center text-utility-nav text-ash">
                Carregando modelo 3D…
              </div>
            }
          >
            <CarViewer className="h-full w-full" />
          </Suspense>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-2 flex flex-col items-center gap-3"
        >
          <p className="text-product-label text-porcelain">{heroVehicle.priceLabel}</p>
          <p className="text-body text-ash">
            {heroVehicle.year} · {heroVehicle.km} · {heroVehicle.color}
          </p>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            <Button
              size="lg"
              className="h-11 rounded-button bg-apple-blue px-6 text-body-strong text-white hover:bg-apple-blue/85"
              render={
                <a
                  href={whatsappLink(
                    `Olá! Quero agendar um test-drive do ${heroVehicle.brand} ${heroVehicle.model}.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                />
              }
            >
              Agendar test-drive
            </Button>
            <a
              href="#catalogo"
              className="inline-flex items-center gap-0.5 text-section-nav text-electric-link hover:underline"
            >
              Ver catálogo completo
              <ChevronRight className="size-4" />
            </a>
          </div>

          <p className="mt-1 text-utility-nav text-ash">
            Arraste o modelo acima para girar · toque e segure no mobile
          </p>
        </motion.div>
      </div>
    </section>
  )
}
