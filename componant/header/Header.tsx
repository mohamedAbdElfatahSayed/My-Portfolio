"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
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

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="relative sticky top-0 z-50 overflow-hidden
      bg-white/5 backdrop-blur-2xl
      border-b border-white/10
      shadow-[0_8px_40px_rgba(0,0,0,0.6)]">

      {/* Glass Highlight Line */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#050816]" />
        <div className="absolute top-[-140px] left-1/2 w-[500px] h-[500px] bg-cyan-500/20 blur-[160px] opacity-30 rounded-full" />
        <div className="absolute bottom-[-140px] right-1/3 w-[400px] h-[400px] bg-blue-600/20 blur-[160px] opacity-30 rounded-full" />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-4 sm:py-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="relative group flex items-center gap-3">

          <span className="absolute inset-0 blur-2xl opacity-40 group-hover:opacity-80 transition bg-white/10 rounded-full" />

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1, rotate: 6 }}
            className="relative"
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={48}
              height={48}
              className="rounded-full border border-white/10 shadow-lg"
            />
          </motion.div>

          <span className="hidden sm:block text-white font-bold text-xl tracking-wide">
            M Abd El fatah
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-medium">

          {links.map((link) => {
            const active = pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-3 py-2 rounded-md transition-all duration-300 ${
                  active
                    ? "text-cyan-300 bg-cyan-500/10 shadow-[0_0_15px_rgba(34,211,238,0.25)]"
                    : "text-gray-300 hover:text-cyan-200 hover:bg-white/5"
                }`}
              >
                {link.name}

                {active && (
                  <motion.span
                    layoutId="activeLink"
                    className="absolute left-0 right-0 -bottom-1 h-[2px] bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-white/10 transition text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
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
            className="md:hidden bg-white/5 backdrop-blur-2xl border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-5 gap-3">

              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 px-3 py-2 rounded-md hover:bg-white/10 hover:text-cyan-200 transition text-center"
                >
                  {link.name}
                </Link>
              ))}

              <div className="border-t border-white/10 pt-4 flex flex-col gap-3">

                <Link
                  href="/login"
                  className="text-gray-300 px-3 py-2 rounded-md hover:bg-white/10 hover:text-cyan-200 transition text-center"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="bg-white/10 text-cyan-200 border border-white/10 py-2 rounded-xl shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:bg-white/15 transition font-semibold text-center"
                >
                  Sign Up
                </Link>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}