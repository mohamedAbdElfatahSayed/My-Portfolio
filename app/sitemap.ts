import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://mohamedabdelfatah.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://mohamedabdelfatah.vercel.app/projects",
      lastModified: new Date(),
    },
    {
      url: "https://mohamedabdelfatah.vercel.app/sitemap.xml",
      lastModified: new Date(),
    },
    {
      url: "https://mohamedabdelfatah.vercel.app/about",
      lastModified: new Date(),
    },
    {
      url: "https://mohamedabdelfatah.vercel.app/contact",
      lastModified: new Date(),
    },
  ];
}