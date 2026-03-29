"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {  Menu, X, Sparkles} from "lucide-react";
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

  // ✅ يقفل المينيو تلقائي عند تغيير الصفحة
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="relative sticky top-0 z-50 shadow-lg border overflow-hidden">
      
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-400 animate-gradient-x" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-4 sm:py-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link
  href="/"
  className="relative group flex items-center gap-3"
>
  {/* Animated Glow Background */}
  <span className="absolute inset-0 blur-3xl opacity-40 group-hover:opacity-80 transition bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 rounded-full animate-pulse"></span>

  {/* Floating Logo */}
  <motion.div
    animate={{ y: [0, -6, 0] }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    whileHover={{ scale: 1.15, rotate: 8 }}
    className="relative"
  >
    <Image
      src="/logo.png"
      alt="Logo"
      width={48}
      height={48}
      className="rounded-full shadow-xl border border-white/20"
    />
  </motion.div>

  {/* Brand Name */}
  <span className="hidden sm:block relative text-white font-bold text-xl tracking-wide group-hover:tracking-wider transition-all duration-300">
    M Abd Elfatah
  </span>

  {/* Hover underline glow */}
  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-500"></span>
</Link>
        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-8 font-medium text-base"
          aria-label="Main navigation"
        >
          {links.map((link) => {
            const active = pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-3 py-2 rounded-md transition-all duration-300 ${
                  active
                    ? "bg-white/30 text-white font-semibold shadow-lg"
                    : "text-white hover:bg-white/20"
                }`}
              >
                {link.name}

                {active && (
                  <motion.span
                    layoutId="activeLink"
                    className="absolute left-0 right-0 -bottom-1 h-[2px] bg-white rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-white/20 transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <X size={28} className="text-white" />
          ) : (
            <Menu size={28} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur border-t overflow-hidden"
          >
            <div className="flex flex-col p-5 gap-3">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 font-medium px-3 py-2 rounded-md hover:bg-purple-200 transition text-center"
                >
                  {link.name}
                </Link>
              ))}

              <div className="border-t pt-4 flex flex-col gap-3">
                <Link
                  href="/login"
                  className="text-gray-700 font-medium px-3 py-2 rounded-md hover:bg-purple-200 transition text-center"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="bg-purple-700 text-white py-2 rounded-xl shadow-lg hover:bg-purple-600 transition font-semibold text-center"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gradient animation */}
      <style jsx>{`
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </header>
  );
}