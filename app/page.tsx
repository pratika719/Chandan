import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Rooms } from "@/components/rooms"
import { Amenities } from "@/components/amenities"
import { Gallery } from "@/components/gallery"
import { Testimonials } from "@/components/testimonials"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Restaurant } from "@/components/restaurant"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Rooms />
      <Amenities />
      <Gallery />
      <Restaurant />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
