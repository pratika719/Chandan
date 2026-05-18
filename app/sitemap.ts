import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://www.hotelchandan.com",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },

        {
            url: "https://www.hotelchandan.com/#rooms",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },

        {
            url: "https://www.hotelchandan.com/#restaurant",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },

        {
            url: "https://www.hotelchandan.com/#gallery",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },

        {
            url: "https://www.hotelchandan.com/#contact",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
    ]
}