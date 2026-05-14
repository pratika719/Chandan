"use client"

import { useState } from "react"

import {
  motion,
  AnimatePresence,
} from "framer-motion"

import Image from "next/image"

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const gallerySections = [
  {
    title: "Reception",
    category: "Front Desk",
    cover: "/images/reception4.jpeg",

    images: [
      "/images/reception1.jpeg",
      "/images/reception2.jpeg",
      "/images/reception3.jpeg",
      "/images/reception4.jpeg",
    ],

    span: "col-span-2 row-span-2",
  },

  {
    title: "Restaurant",
    category: "Salt & Pepper",
    cover: "/images/restaurant1.jpeg",

    images: [
      "/images/restaurant1.jpeg",
      "/images/restaurant2.jpeg",
    ],

    span: "col-span-1 row-span-1",
  },

  {
    title: "Lobby",
    category: "Luxury Interiors",
    cover: "/images/lobby1.jpeg",

    images: [
      "/images/lobby1.jpeg",
      "/images/lobby2.jpeg",
    ],

    span: "col-span-1 row-span-1",
  },

  {
    title: "Maharaja Suite",
    category: "Premium Stay",
    cover: "/images/Maharaja1.jpeg",

    images: [
      "/images/Maharaja1.jpeg",
      "/images/Maharaja2.jpeg",
      "/images/Maharaja3.jpeg",
      "/images/Maharaja4.jpeg",
    ],

    span: "col-span-2 row-span-1",
  },

  {
    title: "Hotel Building",
    category: "Exterior",
    cover: "/images/building1.jpeg",

    images: [
      "/images/building1.jpeg",
    ],

    span: "col-span-1 row-span-1",
  },
]

export function Gallery() {
  const [selectedSection, setSelectedSection] =
    useState<any>(null)

  const [activeImage, setActiveImage] =
    useState(0)

  const nextImage = () => {
    if (!selectedSection) return

    setActiveImage((prev: number) =>
      prev ===
        selectedSection.images.length - 1
        ? 0
        : prev + 1
    )
  }

  const prevImage = () => {
    if (!selectedSection) return

    setActiveImage((prev: number) =>
      prev === 0
        ? selectedSection.images.length - 1
        : prev - 1
    )
  }

  return (
    <section
      id="gallery"
      className="py-24 lg:py-32 bg-background"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase">
            Visual Journey
          </span>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-4">
            Gallery
          </h2>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
            Experience the elegance, comfort, and warm hospitality
            that define Hotel Chandan.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[240px]">
          {gallerySections.map(
            (section, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <motion.div
                    onClick={() => {
                      setSelectedSection(section)
                      setActiveImage(0)
                    }}
                    className={`relative overflow-hidden rounded-3xl cursor-pointer group ${section.span}`}
                  >
                    <Image
                      src={section.cover}
                      alt={section.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute bottom-6 left-6 z-10">
                      <p className="text-white/70 text-xs tracking-[0.3em] uppercase mb-2">
                        {section.category}
                      </p>

                      <h3 className="text-white text-2xl md:text-3xl font-serif">
                        {section.title}
                      </h3>
                    </div>
                  </motion.div>
                </DialogTrigger>

                <DialogContent className="max-w-[98vw] w-full h-[95vh] p-0 border-none bg-black/95 overflow-hidden flex flex-col">

                  {/* ACCESSIBILITY FIX */}
                  <DialogTitle className="sr-only">
                    {selectedSection?.title}
                  </DialogTitle>

                  <DialogDescription className="sr-only">
                    Image gallery viewer for {selectedSection?.title}
                  </DialogDescription>

                  {selectedSection && (
                    <div className="relative flex flex-col h-full w-full">

                      <div className="relative flex-1 flex items-center justify-center p-4 md:p-12">

                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeImage}
                            initial={{
                              opacity: 0,
                              scale: 0.95,
                            }}
                            animate={{
                              opacity: 1,
                              scale: 1,
                            }}
                            exit={{
                              opacity: 0,
                              scale: 0.95,
                            }}
                            transition={{
                              duration: 0.3,
                            }}
                            className="relative w-full h-full flex items-center justify-center"
                          >
                            <img
                              src={
                                selectedSection.images[
                                activeImage
                                ]
                              }
                              alt={
                                selectedSection.title
                              }
                              className="
                                max-w-full
                                max-h-full
                                w-auto
                                h-auto
                                object-contain
                                rounded-lg
                                shadow-2xl
                              "
                            />
                          </motion.div>
                        </AnimatePresence>

                        <button
                          onClick={prevImage}
                          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>

                        <button
                          onClick={nextImage}
                          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>
                      </div>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            )
          )}
        </div>
      </div>
    </section>
  )
}