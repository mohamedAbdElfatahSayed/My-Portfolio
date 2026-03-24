import Image from "next/image";
import { Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-[#0f172a] text-white flex items-center px-6 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-cyan-400/20 rounded-full blur-[120px] bottom-[-100px] right-[-100px]" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center z-10">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">
              Mohamed Abdelfatah
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-lg">
            Full Stack Developer specializing in building scalable web
            applications using Next.js, Prisma & PostgreSQL.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/projects"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-medium"
            >
              View Projects
            </a>

            <a
              href="/contact"
              className="px-6 py-3 rounded-xl border border-gray-600 hover:border-blue-500 hover:text-blue-400 transition font-medium"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex gap-6 text-gray-400">
            <a href="https://github.com/mohamedAbdElfatahSayed" className="hover:text-blue-400 transition">
              <Github size={22} />
            </a>
            <a href="https://www.linkedin.com/in/mohamed-abd-elfatah-20985528b/" className="hover:text-blue-400 transition">
              <Linkedin size={22} />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            
            {/* Glow Border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 blur-2xl opacity-30"></div>

            {/* Profile Image */}
            <Image
              src="/mohamed1.png"
              alt="Profile"
              fill
              className="rounded-full object-cover border-4 border-gray-800"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;