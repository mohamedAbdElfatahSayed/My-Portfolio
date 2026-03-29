import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Mohamed Abdelfatah - Full Stack Developer",
  description:
    "Get in touch with Mohamed Abdelfatah, Full Stack Developer specialized in Next.js, React, Prisma, and PostgreSQL. Available for freelance work and collaborations.",
  keywords: [
    "Contact Mohamed Abdelfatah",
    "Hire Full Stack Developer",
    "Next.js Developer Egypt",
    "Freelancer Developer",
    "React Developer Contact",
    "Web Developer Egypt",
  ],
  authors: [{ name: "Mohamed Abdelfatah" }],
  creator: "Mohamed Abdelfatah",

  openGraph: {
    title: "Contact Mohamed Abdelfatah",
    description:
      "Hire or contact Mohamed Abdelfatah for freelance or full-time opportunities.",
    url: "https://your-domain.com/contact",
    siteName: "Mohamed Portfolio",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Mohamed Abdelfatah",
    description:
      "Available for freelance work, collaborations, and job opportunities.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col">

      {/* Top spacing for navbar if fixed */}
      <div className="pt-20" />

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer (SEO trust signal) */}
      <footer className="border-t border-white/10 py-10 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Mohamed Abdelfatah. All rights reserved.
        </p>
        <p className="mt-2 text-gray-600">
          Available for freelance and remote opportunities.
        </p>
      </footer>

    </div>
  );
}