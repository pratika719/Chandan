"use client"

import { useState } from "react"

import { motion, AnimatePresence } from "framer-motion"

import Image from "next/image"

import { Button } from "@/components/ui/button"

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogDescription,
  DialogTitle
} from "@/components/ui/dialog"

import {
  Wifi,
  Bath,
  Wind,
  Coffee,
  Users,
  BedDouble,
  ConciergeBell,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const rooms = [
  {
    name: "Executive Non AC",

    description:
      "Comfortable non-AC room ideal for budget-friendly stays with essential modern amenities and a relaxing atmosphere.",

    single_occupancy: 1550,
    double_occupancy: 1900,
    extra_person: 600,

    images: [
      "/images/roomtwin.jpeg",
      "/images/2broomtwin.jpeg",
      "/images/ACroom2.jpeg",
      "/images/ACBroom.jpeg",
      "/images/ACroom.jpeg",
      "/images/ACB2room.jpeg",

    ],

    size: "300 sq.ft",

    guests: 3,

    bed: "1 Double Bed / Twin Sharing",

    bathroom: "1 Bathroom",

    breakfastIncluded: true,

    cancellation:
      "Free Cancellation till 24 hrs before check in",

    amenities: [
      {
        icon: Wifi,
        label: "Wi-Fi",
      },

      {
        icon: Bath,
        label: "Toiletry Kit",
      },

      {
        icon: ConciergeBell,
        label: "Room Service",
      },

      {
        icon: Coffee,
        label: "Mineral Water",
      },
    ],
  },

  {
    name: "Executive AC",

    description:
      "Modern air-conditioned executive room offering premium comfort for business and leisure travellers.",

    single_occupancy: 1900,
    double_occupancy: 2400,
    extra_person: 600,

    images: [
      "/images/ACroom2.jpeg",
      "/images/ACBroom.jpeg",
      "/images/ACroom.jpeg",
      "/images/roomtwin.jpeg",
      "/images/2broomtwin.jpeg",



      "/images/ACB2room.jpeg",
    ],

    size: "300 sq.ft",

    guests: 3,

    bed: "1 Double Bed / Twin Sharing",

    bathroom: "1 Attached Bathroom",

    breakfastIncluded: true,

    cancellation:
      "Free cancellation available up to 24 hours before check-in.",

    amenities: [
      {
        icon: Wind,
        label: "Air Conditioning",
      },

      {
        icon: Wifi,
        label: "Wi-Fi",
      },

      {
        icon: ConciergeBell,
        label: "Room Service",
      },

      {
        icon: Bath,
        label: "Toiletry Kit",
      },

      {
        icon: Coffee,
        label: "Mineral Water",
      },
    ],
  },

  {
    name: "Super Deluxe Room",

    description:
      "Spacious deluxe accommodation with enhanced interiors and premium comfort for a luxurious stay experience.",

    single_occupancy: 3000,
    double_occupancy: 3000,
    extra_person: 600,

    images: [
      "/images/1room116.jpeg",
      "/images/2room116.jpeg",
      "/images/3room116.jpeg",
      "/images/b1room116.jpeg",
      "/images/b2room116.jpeg",
      "/images/b3room116.jpeg",
    ],

    size: "600 sq.ft",

    guests: 3,

    bed: "1 Double Bed ",

    bathroom: "1 Attached Bathroom",

    breakfastIncluded: true,

    cancellation:
      "Free cancellation available up to 24 hours before check-in.",

    amenities: [
      {
        icon: Wind,
        label: "Air Conditioning",
      },

      {
        icon: Wifi,
        label: "Wi-Fi",
      },

      {
        icon: ConciergeBell,
        label: "Room Service",
      },

      {
        icon: BedDouble,
        label: "Sofa Set",
      },

      {
        icon: Users,
        label: "Dining Table",
      },

      {
        icon: Bath,
        label: "Toiletry Kit",
      },
      {
        icon: Coffee,
        label: "Mineral Water",
      },
    ],
  },
]

const containerVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants: any = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function Rooms() {
  const [selectedRoom, setSelectedRoom] =
    useState<any>(null)

  const [activeImage, setActiveImage] =
    useState(0)

  const nextImage = () => {
    if (!selectedRoom) return

    setActiveImage((prev: number) =>
      prev === selectedRoom.images.length - 1
        ? 0
        : prev + 1
    )
  }

  const prevImage = () => {
    if (!selectedRoom) return

    setActiveImage((prev: number) =>
      prev === 0
        ? selectedRoom.images.length - 1
        : prev - 1
    )
  }

  return (
    <section
      id="rooms"
      className="py-24 lg:py-32 bg-background scroll-mt-28"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase">
            Accommodations
          </span>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-4">
            Exceptional Rooms & Suites
          </h2>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Experience comfort, elegance, and warm
            hospitality in our thoughtfully designed
            rooms for business and leisure stays.
          </p>
        </motion.div>

        {/* Rooms Grid */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {rooms.map((room) => (
            <motion.div
              key={room.name}
              variants={itemVariants}
              className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
            >
              {/* IMAGE CLICK -> OPEN MODAL */}

              <Dialog>
                <DialogTrigger asChild>
                  <div
                    onClick={() => {
                      setSelectedRoom(room)
                      setActiveImage(0)
                    }}
                    className="cursor-pointer"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={room.images[0]}
                        alt={room.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                      <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white text-sm">
                        <Users size={16} />

                        <span>
                          Max {room.guests} Guests
                        </span>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>

                {/* MODAL */}

                <DialogContent className="max-w-[98vw] w-full h-[95vh] p-0 border-none bg-black/95 overflow-hidden flex flex-col">
                  <DialogTitle className="sr-only">
                    {selectedRoom?.name}
                  </DialogTitle>

                  <DialogDescription className="sr-only">
                    Room image gallery for {selectedRoom?.name}
                  </DialogDescription>
                  {selectedRoom && (
                    <div className="relative flex flex-col h-full w-full">
                      {/* MAIN IMAGE */}

                      <div className="relative flex-1 flex items-center justify-center p-4 md:p-12">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeImage}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{
                              duration: 0.3,
                            }}
                            className="relative w-full h-full flex items-center justify-center"
                          >
                            <img
                              src={
                                selectedRoom.images[
                                activeImage
                                ]
                              }
                              alt={selectedRoom.name}
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

                        {/* COUNTER */}

                        <div className="absolute top-4 left-4 text-white bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-sm z-20">
                          {activeImage + 1} /{" "}
                          {
                            selectedRoom.images
                              .length
                          }
                        </div>

                        {/* LEFT BUTTON */}

                        <button
                          onClick={prevImage}
                          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>

                        {/* RIGHT BUTTON */}

                        <button
                          onClick={nextImage}
                          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>
                      </div>

                      {/* THUMBNAILS */}

                      <div className="flex gap-3 overflow-x-auto px-5 py-4 bg-[#050505] border-t border-white/10">
                        {selectedRoom.images.map(
                          (
                            image: string,
                            index: number
                          ) => (
                            <button
                              key={index}
                              onClick={() =>
                                setActiveImage(index)
                              }
                              className={`relative flex-shrink-0 w-28 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${activeImage === index
                                ? "border-white scale-105"
                                : "border-transparent opacity-60 hover:opacity-100"
                                }`}
                            >
                              <img
                                src={image}
                                alt=""
                                className="w-full h-full object-cover"
                              />
                            </button>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </DialogContent>
              </Dialog>

              {/* CONTENT */}

              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-serif text-2xl text-card-foreground">
                    {room.name}
                  </h3>

                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {room.size}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {room.description}
                </p>

                {/* ROOM DETAILS */}

                <div className="space-y-2 mb-5 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <BedDouble size={15} />

                    <span>{room.bed}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Bath size={15} />

                    <span>{room.bathroom}</span>
                  </div>
                </div>

                {/* AMENITIES */}

                <div className="flex flex-wrap gap-2 mb-6">
                  {room.amenities.map((amenity) => {
                    const Icon = amenity.icon

                    return (
                      <div
                        key={amenity.label}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted text-xs text-muted-foreground"
                      >
                        <Icon size={14} />

                        <span>
                          {amenity.label}
                        </span>
                      </div>
                    )
                  })}
                </div>

                {/* POLICIES */}

                <div className="mb-6">
                  {room.breakfastIncluded && (
                    <p className="text-sm font-medium text-green-600 mb-1">
                      Breakfast Included
                    </p>
                  )}

                  <p className="text-xs text-muted-foreground">
                    {room.cancellation}
                  </p>
                </div>

                {/* PRICING */}

                <div className="border-t border-border pt-5">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">
                        Single occupancy
                      </p>

                      <div className="flex items-baseline gap-1">
                        <p className="text-lg font-semibold text-foreground">
                          ₹
                          {room.single_occupancy.toLocaleString(
                            "en-IN"
                          )}
                        </p>

                        <span className="text-xs text-muted-foreground">
                          / night
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">
                        Double occupancy
                      </p>

                      <div className="flex items-baseline gap-1">
                        <p className="text-lg font-semibold text-foreground">
                          ₹
                          {room.double_occupancy.toLocaleString(
                            "en-IN"
                          )}
                        </p>

                        <span className="text-xs text-muted-foreground">
                          / night
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <p className="text-sm text-muted-foreground">
                        Extra bed / person
                      </p>

                      <p className="text-base font-medium text-foreground">
                        ₹
                        {room.extra_person.toLocaleString(
                          "en-IN"
                        )}
                      </p>
                    </div>

                    <p className="text-xs text-muted-foreground">
                      Taxes as applicable.
                    </p>
                  </div>
                </div>

                {/* BUTTON */}

                <Button
                  asChild
                  className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <a href="#contact">
                    Book Now
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}