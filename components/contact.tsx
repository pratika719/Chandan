"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",

    details: [
      "Hotel Chandan",
      "Plot no-18,ward:12-A,opposite Railway Station, Gandhidham",
      "Kutch, Gujarat 370201",
    ],
  },

  {
    icon: Phone,
    title: "Phone",

    details: [
      "+91 9687690623",
      "02836-229097",
    ],
  },

  {
    icon: Mail,
    title: "Email",

    details: [
      "contact@hotelchandan.com",

    ],
  },

  {
    icon: Clock,
    title: "Hotel Timing",


    details: [
      "Check-in & Check-out",
      "Time 24 Hours",
    ],

  },
]

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-background"
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
            Contact Us
          </span>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-4">
            Book Your Stay
          </h2>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have questions or want to reserve your room?
            Our team is here to help you with your stay at Hotel Chandan.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">

          {/* Contact Information */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            {/* Map Section */}

            <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.3153674773916!2d70.14191207531515!3d23.066843979142785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950b98a950b28cd%3A0xc6654376253788cb!2sHotel%20Chandan!5e1!3m2!1sen!2sin!4v1778662109500!5m2!1sen!2sin"
                className="w-full h-full"
                loading="lazy"
              />

              <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow">
                <p className="text-sm font-medium text-foreground">
                  Hotel Chandan
                </p>

                <p className="text-xs text-muted-foreground">
                  Gandhidham, Gujarat
                </p>
              </div>
            </div>

            {/* Contact Cards */}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
              {contactInfo.map((info, index) => {
                const Icon = info.icon

                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="h-full p-6 bg-card rounded-2xl border border-border hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                        <Icon size={18} />
                      </div>

                      <h3 className="font-medium text-foreground">
                        {info.title}
                      </h3>
                    </div>

                    {info.details.map((detail, i) => (
                      <p
                        key={i}
                        className="text-muted-foreground text-sm leading-relaxed"
                      >
                        {detail}
                      </p>
                    ))}
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}