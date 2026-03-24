"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Projects", href: "/projects" },
  { name: "Knowledge", href: "/knowledge" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-lg border-b overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-400 animate-gradient-x"></div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-4 sm:py-6 md:py-8 flex items-center justify-between relative">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white hover:text-gray-100 transition-colors duration-300"
        >
          DevPro
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10 font-medium text-base sm:text-lg">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative px-2 sm:px-3 py-1 sm:py-2 rounded-md transition-all duration-300
                ${
                  pathname === link.href
                    ? "bg-white/30 text-white font-semibold shadow-lg"
                    : "text-white hover:bg-white/20 hover:text-white"
                }
              `}
            >
              {link.name}
              {pathname === link.href && (
                <motion.span
                  layoutId="activeLink"
                  className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-[2px] sm:h-[3px] bg-white rounded-full"
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop Auth */}
      

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 sm:p-3 rounded-full hover:bg-white/20 transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur border-t shadow-lg"
          >
            <div className="flex flex-col p-4 sm:p-6 gap-3 sm:gap-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-700 font-medium px-3 py-2 rounded-md hover:bg-purple-200 transition-all duration-300 text-center"
                >
                  {link.name}
                </Link>
              ))}

              <div className="flex flex-col gap-3 sm:gap-4 pt-4 border-t">
                <Link
                  href="/login"
                  className="text-gray-700 font-medium px-3 py-2 rounded-md hover:bg-purple-200 transition-all duration-300 text-center"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="bg-purple-700 text-white py-2 rounded-xl shadow-lg hover:bg-purple-600 transition-all duration-300 font-semibold text-center"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tailwind CSS Gradient Animation */}
      <style jsx>{`
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </header>
  );
}
