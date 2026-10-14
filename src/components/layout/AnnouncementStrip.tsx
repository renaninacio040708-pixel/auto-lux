import { ChevronRight } from "lucide-react"

export function AnnouncementStrip() {
  return (
    <div className="flex h-[72px] flex-col items-center justify-center bg-obsidian px-4 text-center light:bg-white">
      <p className="text-product-label text-porcelain light:text-carbon">
        Novo lote reservado para outubro
      </p>
      <a
        href="#catalogo"
        className="mt-1 inline-flex items-center gap-1 text-utility-nav text-electric-link hover:underline light:text-cobalt-link"
      >
        Agende sua visita privada antes do lançamento
        <ChevronRight className="size-3.5" />
      </a>
    </div>
  )
}
