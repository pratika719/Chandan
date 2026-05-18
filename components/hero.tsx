"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/outboard1.jpeg"
          alt="Hotel Chandan Exterior"
          fill
          priority
          quality={100}
          className="
    object-cover
    object-[center_55%]
    scale-125
  "

        />

        {/* Luxury Overlay */}


        {/* Soft Gradient */}

      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-primary text-sm md:text-base tracking-[0.3em] uppercase mb-4"
        >
          Welcome to Hotel Chandan
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-medium leading-tight max-w-5xl text-balance"
        >
          Best Business Hotel in Gandhidham
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/80 text-base md:text-lg lg:text-xl max-w-2xl mt-6 leading-relaxed text-pretty"
        >
          Experience premium comfort and warm hospitality at Hotel Chandan, a leading 3 star business hotel in Gandhidham, Kutch. Enjoy spacious rooms, family-friendly dining and convenient access for business and leisure travelers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-sm tracking-widest uppercase font-medium"
            onClick={() => document.getElementById("rooms")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore Rooms
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 px-8 py-6 text-sm tracking-widest uppercase font-medium bg-transparent"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            Our Story
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/60 text-xs tracking-widest uppercase">
            Scroll
          </span>
          <ChevronDown className="text-white/60 w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}
