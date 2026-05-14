"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react"

const footerLinks = {
  explore: [
    { name: "Rooms & Suites", href: "#rooms" },
    { name: "Dining", href: "#restaurant" },
    { name: "Gallery", href: "#gallery" },
    { name: "About Us", href: "#about" },
  ],

  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
}

const foodPartners = [
  {
    name: "Zomato",
    href: "https://www.zomato.com/gandhidham/salt-n-pepper-restaurant-3-gandhidham-locality/order",
    image: "/images/zomato.png",
  },
  {
    name: "Swiggy",
    href: "https://www.swiggy.com/city/gandhidham/salt-n-pepper-restaurant-ward-12a-gopalpuri-rest567594",
    image: "/images/swiggy.png",
  },
]

export function Footer() {
  return (
    <footer className="bg-[#efe7dc] text-[#3c3328] pt-20 lg:pt-24 pb-8 border-t border-[#d8c7ae]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            {/* Logo */}
            <Link
              href="#home"
              className="inline-block mb-6"
            >
              <div className="inline-flex items-center px-5 py-4 rounded-2xl bg-[#f7f1e8] border border-[#d8c7ae] shadow-sm hover:shadow-md transition-all duration-300">
                <Image
                  src="/images/2logo3d.jpeg"
                  alt="Hotel Chandan"
                  width={240}
                  height={90}
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Description */}
            <p className="text-[#5f5548] leading-relaxed max-w-md text-sm">
              Experience premium comfort, warm hospitality,
              and elegant stays at Hotel Chandan —
              one of the finest business hotels in
              Gandhidham, Kutch.
            </p>

            {/* Contact */}
            <div className="mt-8 space-y-4 text-sm text-[#5f5548]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#f7f1e8] border border-[#d8c7ae] flex items-center justify-center">
                  <MapPin
                    size={16}
                    className="text-[#b38b59]"
                  />
                </div>

                <span>Gandhidham, Kutch, Gujarat</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#f7f1e8] border border-[#d8c7ae] flex items-center justify-center">
                  <Phone
                    size={16}
                    className="text-[#b38b59]"
                  />
                </div>

                <span>+91 9687690623</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#f7f1e8] border border-[#d8c7ae] flex items-center justify-center">
                  <Mail
                    size={16}
                    className="text-[#b38b59]"
                  />
                </div>

                <span>contact@hotelchandan.com</span>
              </div>
            </div>

            {/* Divider */}
            <div className="mt-10 flex items-center gap-4">
              <div className="h-px w-16 bg-[#b38b59]" />

              <span className="text-xs tracking-[0.35em] uppercase text-[#b38b59] font-medium">
                Hotel Chandan
              </span>

              <div className="h-px flex-1 bg-[#d8c7ae]" />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-serif mb-6 text-[#1f3b63]">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#5f5548] hover:text-[#1f3b63] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Food Delivery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-serif mb-6 text-[#1f3b63]">
              Order Online
            </h3>

            <p className="text-sm text-[#5f5548] leading-relaxed mb-6">
              Enjoy Salt & Pepper restaurant meals at home
              through our delivery partners.
            </p>

            <div className="flex flex-col gap-4">
              {foodPartners.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-4 py-3 rounded-2xl border border-[#d8c7ae] bg-[#f7f1e8] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-sm">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#1f3b63]">
                      {partner.name}
                    </p>

                    <p className="text-xs text-[#7a6d5d]">
                      Order Food Online
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-[#d8c7ae] pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <p className="text-sm text-[#7a6d5d] text-center md:text-left">
              © {new Date().getFullYear()} Hotel Chandan.
              All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs text-[#7a6d5d] hover:text-[#1f3b63] transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}