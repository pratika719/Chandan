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
    UtensilsCrossed,
    ChevronLeft,
    ChevronRight,
} from "lucide-react"

const menuImages = [
    "/images/menu-salt-pepper/0.jpg",
    "/images/menu-salt-pepper/1.jpg",
    "/images/menu-salt-pepper/2.jpg",
    "/images/menu-salt-pepper/3.jpg",
    "/images/menu-salt-pepper/4.jpg",
    "/images/menu-salt-pepper/5.jpg",
    "/images/menu-salt-pepper/6.jpg",
    "/images/menu-salt-pepper/7.jpg",
    "/images/menu-salt-pepper/8.jpg",
    "/images/menu-salt-pepper/9.jpg",
]

export function Restaurant() {
    const [activeImage, setActiveImage] =
        useState(0)

    const nextImage = () => {
        setActiveImage((prev) =>
            prev === menuImages.length - 1
                ? 0
                : prev + 1
        )
    }

    const prevImage = () => {
        setActiveImage((prev) =>
            prev === 0
                ? menuImages.length - 1
                : prev - 1
        )
    }

    return (
        <section
            id="restaurant"
            className="py-24 lg:py-32 bg-card"
        >
            <div className="container mx-auto px-6 lg:px-12">
                {/* Header */}

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
                        Dining Experience
                    </span>

                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-4">
                        Salt & Pepper Restaurant
                    </h2>

                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
                        Experience delicious pure vegetarian homely dining
                        with authentic Punjabi, Chinese, and North
                        Indian cuisine served in a warm and elegant
                        family-friendly atmosphere.
                    </p>

                    {/* Tags */}

                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        {[
                            "Pure Veg",
                            "Homely Food",
                            "Family Dining",
                            "Multi Cuisine",
                        ].map((tag) => (
                            <div
                                key={tag}
                                className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm border border-primary/10"
                            >
                                {tag}
                            </div>
                        ))}
                    </div>

                    {/* Online Ordering Buttons */}

                    <div className="flex flex-wrap justify-center gap-3 mt-8">
                        <a
                            href="https://www.swiggy.com/city/gandhidham/salt-n-pepper-restaurant-ward-12a-gopalpuri-rest567594"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                px-5 py-2
                rounded-full
                bg-primary/10
                text-primary
                text-sm
                border border-primary/20
                hover:bg-primary
                hover:text-primary-foreground
                transition-all duration-300
              "
                        >
                            Order on Swiggy
                        </a>

                        <a
                            href="https://www.zomato.com/gandhidham/salt-n-pepper-restaurant-3-gandhidham-locality/order"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                px-5 py-2
                rounded-full
                bg-primary/10
                text-primary
                text-sm
                border border-primary/20
                hover:bg-primary
                hover:text-primary-foreground
                transition-all duration-300
              "
                        >
                            View on Zomato
                        </a>
                    </div>
                </motion.div>

                {/* Menu Card */}

                <Dialog>
                    <DialogTrigger asChild>
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="
                group
                cursor-pointer
                max-w-5xl
                mx-auto
                bg-background
                rounded-3xl
                overflow-hidden
                border border-border
                hover:shadow-2xl
                transition-all duration-500
              "
                        >
                            {/* Cover Image */}

                            <div className="relative h-[500px] overflow-hidden">
                                <Image
                                    src={menuImages[0]}
                                    alt="Salt & Pepper Restaurant Menu"
                                    fill
                                    priority
                                    className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                {/* Content Overlay */}

                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                                    <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6">
                                        <UtensilsCrossed
                                            size={36}
                                            className="text-white"
                                        />
                                    </div>

                                    <h3 className="font-serif text-4xl md:text-5xl text-white mb-4">
                                        Explore Our Menu
                                    </h3>

                                    <p className="text-white/80 max-w-2xl leading-relaxed text-lg">
                                        Discover a wide selection of flavorful
                                        Punjabi, Chinese, and North Indian dishes
                                        crafted with authentic taste and fresh
                                        ingredients.
                                    </p>

                                    <div className="mt-8 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm tracking-[0.2em] uppercase">
                                        View Menu
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </DialogTrigger>

                    {/* Modal */}

                    <DialogContent
                        aria-describedby="restaurant-menu-description"
                        className="
              max-w-[98vw]
              w-full
              h-[95vh]
              p-0
              border-none
              bg-black/95
              overflow-hidden
              flex
              flex-col
            "
                    >
                        {/* Accessibility Fix */}

                        <DialogTitle className="sr-only">
                            Salt & Pepper Restaurant Menu
                        </DialogTitle>

                        <DialogDescription
                            id="restaurant-menu-description"
                            className="sr-only"
                        >
                            Browse restaurant menu images with navigation controls.
                        </DialogDescription>

                        <div className="relative flex flex-col h-full w-full">
                            {/* Main Image Viewer */}

                            <div className="relative flex-1 flex items-center justify-center bg-black overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeImage}
                                        initial={{
                                            opacity: 0,
                                            scale: 0.98,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            scale: 0.98,
                                        }}
                                        transition={{
                                            duration: 0.25,
                                        }}
                                        className="
                      relative
                      w-full
                      h-full
                      flex
                      items-center
                      justify-center
                      p-4 md:p-10
                    "
                                    >
                                        <Image
                                            src={menuImages[activeImage]}
                                            alt={`Restaurant menu page ${activeImage + 1
                                                }`}
                                            fill
                                            unoptimized
                                            className="object-contain"
                                        />
                                    </motion.div>
                                </AnimatePresence>

                                {/* Counter */}

                                <div
                                    className="
                    absolute
                    top-5
                    left-5
                    text-white
                    bg-black/50
                    backdrop-blur-md
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    z-20
                    border border-white/10
                  "
                                >
                                    {activeImage + 1} /{" "}
                                    {menuImages.length}
                                </div>

                                {/* Left Arrow */}

                                <button
                                    onClick={prevImage}
                                    aria-label="Previous menu image"
                                    className="
                    absolute
                    left-4 md:left-6
                    top-1/2
                    -translate-y-1/2
                    z-50
                    flex
                    items-center
                    justify-center
                    w-12
                    h-12
                    rounded-full
                    bg-black/50
                    hover:bg-black/70
                    backdrop-blur-md
                    border border-white/20
                    text-white
                    transition-all
                    duration-300
                    hover:scale-110
                  "
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>

                                {/* Right Arrow */}

                                <button
                                    onClick={nextImage}
                                    aria-label="Next menu image"
                                    className="
                    absolute
                    right-4 md:right-6
                    top-1/2
                    -translate-y-1/2
                    z-50
                    flex
                    items-center
                    justify-center
                    w-12
                    h-12
                    rounded-full
                    bg-black/50
                    hover:bg-black/70
                    backdrop-blur-md
                    border border-white/20
                    text-white
                    transition-all
                    duration-300
                    hover:scale-110
                  "
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Thumbnails */}

                            <div
                                className="
                  flex
                  gap-3
                  overflow-x-auto
                  px-5
                  py-4
                  bg-[#050505]
                  border-t border-white/10
                "
                            >
                                {menuImages.map(
                                    (
                                        image: string,
                                        index: number
                                    ) => (
                                        <button
                                            key={index}
                                            onClick={() =>
                                                setActiveImage(index)
                                            }
                                            aria-label={`Open menu image ${index + 1
                                                }`}
                                            className={`
                        relative
                        flex-shrink-0
                        w-28
                        h-20
                        rounded-xl
                        overflow-hidden
                        border-2
                        transition-all
                        duration-300
                        ${activeImage === index
                                                    ? "border-primary scale-105 opacity-100"
                                                    : "border-transparent opacity-50 hover:opacity-100"
                                                }
                      `}
                                        >
                                            <Image
                                                src={image}
                                                alt={`Thumbnail ${index + 1
                                                    }`}
                                                fill
                                                unoptimized
                                                className="object-cover"
                                            />
                                        </button>
                                    )
                                )}
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    )
}