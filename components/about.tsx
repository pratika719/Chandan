"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  Award,
  UtensilsCrossed,
} from "lucide-react"
const values = [
  {
    icon: Award,

    title: "Best Rated Business Hotel",

    description:
      "Trusted by business and corporate travelers for comfortable stays, professional service, and convenient connectivity.",
  },

  {
    icon: UtensilsCrossed,

    title: "Salt & Pepper Restaurant",

    description:
      "Enjoy delicious homely-style pure vegetarian meals with authentic flavors, family dining, and quality hospitality.",
  },
]


export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-card overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/images/building2.jpeg"
                alt="Chandan Hotel exterior at twilight"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-lg -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm tracking-[0.3em] uppercase">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6 text-balance">
              A Legacy of Exceptional Hospitality
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
              Positioned on Kandla Port Road, just off the National Highway 8A, Hotel Chandan can be reached in a 5 minute drive from Gandhidham Junction Railway Station.Ensuring a hassle-free experience for guests,
              the hotel also provides car rental and ticketing assistance. Further, facilities
              like car parking space, medical assistance and laundry are also offered.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-pretty">
              Stay in stylish and well-furnished rooms, While remote-control cable TV and rollaway beds are provided in all rooms, some also have amenities like work desk, refrigerator,dressing and dining tables. Beautiful paintings and warm tones enhance the room interiors.
              To suit varied taste buds, the on-site restaurant offers an array of palatable dishes.
              Pay homage to Mahatma Gandhi at the Gandhi Samadhi, which is approximately 10 minute drive from here.



            </p>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                    <value.icon size={20} />
                  </div>
                  <h3 className="font-serif text-lg text-foreground mb-1">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
