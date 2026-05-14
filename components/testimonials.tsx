"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    text: "Very comfortable stay with clean rooms and helpful staff. The food was good and the service was quick. Great value for money for families visiting Bhuj.",
  },

  {
    name: "Priya Mehta",
    location: "Mumbai, Maharashtra",
    rating: 5,
    text: "Hotel Chandan exceeded our expectations. The rooms were neat, Wi-Fi worked properly, and the staff was very polite throughout our stay. Would definitely recommend it.",
  },

  {
    name: "Amit Patel",
    location: "Rajkot, Gujarat",
    rating: 5,
    text: "Excellent experience overall. The location is convenient, rooms are well maintained, and the restaurant food was delicious. One of the best budget-friendly stays in the area.",
  },
]
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-foreground text-background">
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
            Guest Experiences
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-4 text-balance">
            What Our Guests Say
          </h2>
          <p className="text-background/70 mt-4 max-w-2xl mx-auto text-pretty">
            Discover why discerning travelers choose Hotel Chandan for their
            most memorable escapes.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative p-8 bg-background/5 backdrop-blur-sm rounded-lg border border-background/10"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/30" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-background/80 leading-relaxed mb-6 text-pretty">
                {`"${testimonial.text}"`}
              </p>

              {/* Author */}
              <div>
                <p className="font-serif text-lg">{testimonial.name}</p>
                <p className="text-background/50 text-sm">
                  {testimonial.location}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
