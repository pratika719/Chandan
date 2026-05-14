"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Rooms", href: "#rooms" },
  { name: "Amenities", href: "#amenities" },
  { name: "Gallery", href: "#gallery" },
  { name: "About", href: "#about" },
  { name: "Restaurant", href: "#restaurant" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false)

  return (
    <>
      {/* Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#f8f5ef]/95 backdrop-blur-xl border-b border-[#e7dfd1] shadow-sm"
      >
        <nav className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-[88px] lg:h-[96px]">
            {/* Logo */}
            
              {/* Logo Image */}
              {/* Logo */}
              <Link
                href="#home"
                className="flex items-center gap-4 group"
              >
                {/* Logo + Location */}
                <div className="flex flex-col items-start justify-center">
                  <img
                    src="/images/logo3d.png"
                    alt="Hotel Chandan"
                    className="h-16 lg:h-20 w-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />

                  <span className="ml-2 mt-[-4px] text-[10px] lg:text-[11px] uppercase tracking-[0.38em] text-[#9c8662] font-medium">
                    Gandhidham • Kutch
                  </span>
                </div>
              </Link>

              {/* Divider */}
              <div className="hidden md:block w-px h-10 bg-[#cbbba0]" />

              {/* Brand Text */}





            

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-[13px] font-medium tracking-[0.18em] uppercase text-[#5f5343] transition-all duration-300 hover:text-[#b38b59]
                  after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0
                  after:bg-[#b38b59] after:transition-all after:duration-300
                  hover:after:w-full"
                >
                  {link.name}
                </Link>
              ))}

              {/* CTA Button */}
              <Button
                asChild
                className="bg-[#b38b59] hover:bg-[#9f7746] text-white px-7 py-2.5 rounded-full text-sm tracking-[0.15em] uppercase shadow-md transition-all duration-300"
              >
                <Link href="#contact">
                  Book Now
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() =>
                setIsMobileMenuOpen(
                  !isMobileMenuOpen
                )
              }
              className="lg:hidden text-[#4b4032]"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X size={28} />
              ) : (
                <Menu size={28} />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              onClick={() =>
                setIsMobileMenuOpen(false)
              }
            />

            {/* Sidebar */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
              className="absolute right-0 top-0 h-full w-80 bg-[#f8f5ef] border-l border-[#e7dfd1] shadow-2xl"
            >
              <div className="flex flex-col p-8 pt-28 gap-7">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() =>
                        setIsMobileMenuOpen(false)
                      }
                      className="text-base font-medium tracking-[0.15em] uppercase text-[#4b4032] hover:text-[#b38b59] transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile CTA */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.5,
                  }}
                >
                  <Button
                    asChild
                    className="w-full bg-[#b38b59] hover:bg-[#9f7746] text-white rounded-full py-6 tracking-[0.15em] uppercase"
                  >
                    <Link
                      href="#contact"
                      onClick={() =>
                        setIsMobileMenuOpen(false)
                      }
                    >
                      Book Now
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}