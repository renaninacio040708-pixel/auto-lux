import { Menu, Moon, Sun } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useTheme } from "@/hooks/useTheme"
import { brand, whatsappLink } from "@/lib/data"

const links = [
  { href: "#catalogo", label: "Catálogo" },
  { href: "#financiamento", label: "Financiamento" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#jornal", label: "Jornal" },
  { href: "#contato", label: "Contato" },
]

export function UtilityNav() {
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 h-11 border-b border-steel/60 bg-graphite/90 backdrop-blur-xl light:border-light-hairline light:bg-white/90">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="text-section-nav font-semibold text-porcelain light:text-carbon">
          {brand.name}
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-utility-nav text-ash transition-colors hover:text-porcelain light:hover:text-carbon"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
            onClick={toggle}
            className="text-ash hover:text-porcelain light:hover:text-carbon"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </Button>

          <a
            href={whatsappLink("Olá! Quero falar sobre um veículo do catálogo da Auto Lux.")}
            target="_blank"
            rel="noreferrer"
            className="hidden text-utility-nav text-electric-link hover:underline sm:inline light:text-cobalt-link"
          >
            Falar no WhatsApp
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-sm"
                  aria-label="Abrir menu"
                  className="text-porcelain md:hidden light:text-carbon"
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-72 border-steel bg-graphite text-porcelain light:border-light-hairline light:bg-white light:text-carbon"
            >
              <SheetHeader>
                <SheetTitle className="text-porcelain light:text-carbon">{brand.name}</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1 px-4">
                {links.map((link) => (
                  <SheetClose
                    key={link.href}
                    render={
                      <a
                        href={link.href}
                        className="rounded-link px-3 py-3 text-section-nav text-porcelain transition-colors hover:bg-carbon light:text-carbon light:hover:bg-porcelain"
                      />
                    }
                  >
                    {link.label}
                  </SheetClose>
                ))}
                <SheetClose
                  render={
                    <a
                      href={whatsappLink("Olá! Quero falar sobre um veículo do catálogo da Auto Lux.")}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 rounded-link px-3 py-3 text-section-nav text-electric-link light:text-cobalt-link"
                    />
                  }
                >
                  Falar no WhatsApp
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
