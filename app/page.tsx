import profileImg from "@/public/mohamed1.png";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section
      aria-label="Hero section introducing Mohamed Abdelfatah Full Stack Developer portfolio"
      className="min-h-screen bg-[#0f172a] text-white flex items-center px-6 relative overflow-hidden"
    >
      
      {/* Background Glow */}
      <div aria-hidden="true" className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] top-[-100px] left-[-100px]" />
      <div aria-hidden="true" className="absolute w-[400px] h-[400px] bg-cyan-400/20 rounded-full blur-[120px] bottom-[-100px] right-[-100px]" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center z-10">
        
        {/* Left Content */}
        <div>

          {/* 🔥 SEO H1 */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Full Stack Developer
            <span className="block uppercase text-4xl text-blue-400 mt-2">
              Mohamed Abd El fattah
            </span>

            <span className="block text-xl md:text-2xl mt-4 text-gray-300 leading-relaxed">
              Building scalable, high-performance, and SEO-optimized web applications
              
              <span className="block mt-2 text-gray-400 text-lg">
                Next.js • React • TypeScript • Prisma • PostgreSQL • Clean Architecture • Performance Optimization
              </span>
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-gray-300 max-w-lg">
            I'm a Full Stack Developer based in Egypt, specializing in building fast,
            scalable, and SEO-friendly web applications using modern technologies.
            I focus on performance, clean architecture, and delivering exceptional user experiences.
          </p>

          {/* CTA */}
          <div className="mt-8 flex gap-4">
            <Link
              href="/projects"
              aria-label="Explore Mohamed Abdelfatah projects"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-medium"
            >
              Explore My Work
            </Link>

            <Link
              href="/contact"
              aria-label="Contact Mohamed Abdelfatah"
              className="px-6 py-3 rounded-xl border border-gray-600 hover:border-blue-500 hover:text-blue-400 transition font-medium"
            >
              Contact Me
            </Link>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex gap-6 text-gray-400">
            <a
              href="https://github.com/mohamedAbdElfatahSayed"
              target="_blank"
              rel="me noopener noreferrer"
              aria-label="Visit Mohamed Abdelfatah GitHub profile"
              className="hover:text-blue-400 transition"
            >
              <Github size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/mohamed-abd-elfatah-20985528b/"
              target="_blank"
              rel="me noopener noreferrer"
              aria-label="Visit Mohamed Abdelfatah LinkedIn profile"
              className="hover:text-blue-400 transition"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96">

            {/* Glow Border */}
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 blur-2xl opacity-30"
            />

            {/* Image */}
            <Image
              src={profileImg}
              alt="Mohamed Abdelfatah - Full Stack Developer portrait"
              fill
              priority
              quality={90}
              sizes="(max-width: 768px) 100vw, 400px"
              placeholder="blur"
              className="rounded-full object-cover border-4 border-gray-800"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;