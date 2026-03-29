import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Mohamed Abdelfatah - Full Stack Developer",
  description:
    "Learn more about Mohamed Abdelfatah, a Full Stack Developer specialized in Next.js, React, Prisma, PostgreSQL, and building scalable SEO-friendly applications.",
  keywords: [
    "Mohamed Abdelfatah",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Prisma",
    "PostgreSQL",
    "Portfolio Egypt",
    "Web Developer",
  ],
  authors: [{ name: "Mohamed Abdelfatah" }],
  creator: "Mohamed Abdelfatah",

  openGraph: {
    title: "About Mohamed Abdelfatah",
    description:
      "Full Stack Developer building modern, scalable, and SEO-optimized web applications.",
    url: "https://your-domain.com/about",
    siteName: "Mohamed Portfolio",
    type: "profile",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Mohamed Abdelfatah",
    description:
      "Full Stack Developer specialized in Next.js, React, Prisma & PostgreSQL",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      
      {/* Header Spacer (لو عندك Navbar fixed) */}
      <div className="pt-20" />

      {/* Main Content */}
      <main className="relative">{children}</main>

      {/* Optional Footer SEO Boost */}
      <footer className="text-center text-gray-500 text-sm py-10 border-t border-white/10 mt-20">
        © {new Date().getFullYear()} Mohamed Abdelfatah. All rights reserved.
      </footer>
    </div>
  );
}