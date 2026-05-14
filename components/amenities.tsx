"use client"

import { motion } from "framer-motion"

import {
  Wifi,
  ParkingCircle,
  AirVent,
  UtensilsCrossed,
  ShieldCheck,
  ConciergeBell,
  Bed,
  Tv,
  Shirt
} from "lucide-react"

const amenities = [
  {
    icon: Wifi,
    title: "Free Wi-Fi",
    description:
      "High-speed internet connectivity available throughout the hotel.",
  },
  {
    icon: Shirt,
    title: "Laundry",
    description:
      "Convenient laundry service available during your stay.",
  },

  {
    icon: AirVent,
    title: "Air Conditioning",
    description:
      "Comfortable air-conditioned rooms for a relaxing stay.",
  },

  {
    icon: UtensilsCrossed,
    title: "Restaurant",
    description:
      "Delicious Indian vegetarian food served fresh daily.",
  },

  {
    icon: ParkingCircle,
    title: "Parking",
    description:
      "Secure parking facility available for hotel guests.",
  },

  {
    icon: ConciergeBell,
    title: "Room Service",
    description:
      "Convenient in-room dining and guest assistance service.",
  },

  {
    icon: ShieldCheck,
    title: "24/7 Security",
    description:
      "CCTV surveillance and security staff for guest safety.",
  },

  {
    icon: Bed,
    title: "Housekeeping",
    description:
      "Daily housekeeping service for a clean and pleasant stay.",
  },

  {
    icon: Tv,
    title: "Cable TV",
    description:
      "Entertainment with TV and cable channels in rooms.",
  },
]

const containerVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants: any = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function Amenities() {
  return (
    <section
      id="amenities"
      className="py-24 lg:py-32 bg-card"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase">
            Hotel Facilities
          </span>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-4">
            Amenities & Services
          </h2>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Experience comfort and convenience with thoughtfully
            selected facilities designed for a pleasant stay.
          </p>
        </motion.div>

        {/* Amenities Grid */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {amenities.map((amenity) => {
            const Icon = amenity.icon

            return (
              <motion.div
                key={amenity.title}
                variants={itemVariants}
                className="group p-6 lg:p-8 bg-background rounded-2xl border border-border hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Icon size={24} />
                </div>

                <h3 className="font-serif text-lg text-foreground mb-2">
                  {amenity.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {amenity.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}