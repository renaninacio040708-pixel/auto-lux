import { MotionConfig } from "motion/react"
import { AnnouncementStrip } from "@/components/layout/AnnouncementStrip"
import { Footer } from "@/components/layout/Footer"
import { ProductNav } from "@/components/layout/ProductNav"
import { UtilityNav } from "@/components/layout/UtilityNav"
import { WhatsAppButton } from "@/components/layout/WhatsAppButton"
import { Catalog } from "@/components/sections/Catalog"
import { Contact } from "@/components/sections/Contact"
import { Faq } from "@/components/sections/Faq"
import { Hero } from "@/components/sections/Hero"
import { Journal } from "@/components/sections/Journal"
import { Newsletter } from "@/components/sections/Newsletter"
import { Performance } from "@/components/sections/Performance"
import { Pricing } from "@/components/sections/Pricing"
import { Testimonials } from "@/components/sections/Testimonials"

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div id="top">
        <UtilityNav />
        <AnnouncementStrip />
        <ProductNav />
        <main>
          <Hero />
          <Performance />
          <Catalog />
          <Pricing />
          <Testimonials />
          <Faq />
          <Journal />
          <Contact />
          <Newsletter />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </MotionConfig>
  )
}

export default App
