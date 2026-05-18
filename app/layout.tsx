import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})



export const metadata: Metadata = {
  metadataBase: new URL("https://hotelchandan.com"),
  title: "Hotel Chandan | Best Business Hotel in Gandhidham, Kutch",

  description:
    "Hotel Chandan is a premium 3-star business hotel in Gandhidham, Kutch offering elegant rooms, warm hospitality, family dining, and modern comfort for business and leisure travelers.",

  alternates: {
    canonical: "/",
  },

  keywords: [
    "Hotel Chandan",
    "Hotel in Gandhidham",
    "3 star hotel Gandhidham",
    "business hotel Gandhidham",
    "best hotel in Kutch",
    "hotel near Gandhidham railway station",
    "luxury stay Gandhidham",
    "Salt and Pepper Restaurant",
    "family hotel Gandhidham",
    "premium hotel Kutch",
    "hotel accommodation Gandhidham",
    "pure veg restaurant Gandhidham",
  ],

  authors: [
    {
      name: "Hotel Chandan",
    },
  ],

  creator: "Hotel Chandan",

  openGraph: {
    title:
      "Hotel Chandan | Premium 3-Star Business Hotel in Gandhidham",

    description:
      "Experience premium comfort, elegant stays, and warm hospitality at Hotel Chandan in Gandhidham, Kutch. Featuring luxury rooms and Salt & Pepper Restaurant.",

    type: "website",

    locale: "en_IN",

    siteName: "Hotel Chandan",

    images: [
      {
        url: "/images/outboard1.jpeg",
        width: 1200,
        height: 630,
        alt: "Hotel Chandan Gandhidham",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Hotel Chandan | Best Hotel Stay in Gandhidham",

    description:
      "Premium 3-star business hotel in Gandhidham with elegant rooms, fine dining, and modern hospitality.",

    images: ["/images/outboard1.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "Hotel & Hospitality",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} bg-background`}
    >
      <body className="font-sans antialiased">

        {/* SEO Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",

              name: "Hotel Chandan",

              description:
                "Premium 3-star business hotel in Gandhidham, Kutch offering elegant rooms, restaurant dining, and modern hospitality.",

              image: "/images/outboard1.jpeg",

              address: {
                "@type": "PostalAddress",
                addressLocality: "Gandhidham",
                addressRegion: "Gujarat",
                addressCountry: "India",
              },

              starRating: {
                "@type": "Rating",
                ratingValue: "3",
              },

              amenityFeature: [
                {
                  "@type":
                    "LocationFeatureSpecification",
                  name: "Restaurant",
                },

                {
                  "@type":
                    "LocationFeatureSpecification",
                  name: "Free WiFi",
                },

                {
                  "@type":
                    "LocationFeatureSpecification",
                  name: "Room Service",
                },

                {
                  "@type":
                    "LocationFeatureSpecification",
                  name: "Air Conditioning",
                },

                {
                  "@type":
                    "LocationFeatureSpecification",
                  name: "Family Rooms",
                },
              ],
            }),
          }}
        />

        {children}

        {process.env.NODE_ENV === "production" && (
          <Analytics />
        )}
      </body>
    </html>
  )
}
