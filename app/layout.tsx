import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/componant/header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ SEO Metadata قوي
export const metadata: Metadata = {
  metadataBase: new URL("https://fatah.vercel.app/"),
  verification: {
    google: "i0xfk_rTZqQxE52uYk9fxA_debXq4Nh5IhZcz3V11HY",
  },

  title: {
    default: "Mohamed Abdelfatah | Full Stack Developer | Frontend Developer backend Developer",
    template: "%s | Mohamed Abdelfatah",
  },


  description:    "Mohamed Abdelfatah is a Full Stack Developer in Egypt specializing in Next.js, React,Frontend Developer متخصص في React و Next.js، ببني مواقع سريعة وحديثة.     Prisma, and PostgreSQL. Building fast and scalable web applications Showcase of web development projects built with modern technologies.",

 keywords: [

  "Mohamed Abdelfatah",
  "Frontend Developer", "React Developer", "Next.js", "Portfolio",
  "Full Stack Web Developer Egypt",
  "MERN Stack Developer Egypt",
  "React Developer Portfolio",
  "Next.js Developer Portfolio",
  "Prisma Node.js Developer",
  "Freelance Web Developer Egypt",
  "Hire Full Stack Developer",
  "JavaScript Developer Egypt",
  "Frontend and Backend Developer",
],

  authors: [{ name: "Mohamed Abdelfatah" }],
  creator: "Mohamed Abdelfatah",

 openGraph: {
  title: "Mohamed Abdelfatah | Full Stack Developer",
  description:
    "Full Stack Developer specializing in Next.js, React, Prisma, and scalable web applications.",
  url: "https://fatah.vercel.app/",
  siteName: "Mohamed Abdelfatah Portfolio",
  images: [
    {
      url: "https://fatah.vercel.app/preview.png",
      width: 1200,
      height: 630,
      alt: "Mohamed Abdelfatah Portfolio Preview",
    },
  ],
  locale: "en_US",
  type: "website",
},

  twitter: {
    card: "summary_large_image",
    title: "Mohamed Abdelfatah",
    description: "Full Stack Developer Portfolio",
    images: ["/preview.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0f172a]`}
      >
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Mohamed Abdelfatah",
      url: "https://mohamedabdelfatah.vercel.app",
      jobTitle: "Full Stack Developer",
      image: "https://fatah.vercel.app/preview.png",
      address: {
        "@type": "Country",
        name: "Egypt",
      },
      sameAs: [
        "https://github.com/mohamedAbdElfatahSayed",
        "https://www.linkedin.com/in/mohamed-abd-elfatah-20985528b/",
      ],
    }),
  }}
/>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}