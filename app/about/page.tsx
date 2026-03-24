"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  { name: "Next.js", level: 90 },
  { name: "Prisma", level: 85 },
  { name: "PostgreSQL", level: 80 },
  { name: "Tailwind CSS", level: 95 },
];

const AboutPage = () => {
  const [projectsCount, setProjectsCount] = useState(0);

  // عداد مشاريع (تقدر تربطه بـ API بتاعك)
  useEffect(() => {
    let start = 0;
    const end = 12; // غيره بعدين بالقيمة الحقيقية من DB
    const duration = 1500;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setProjectsCount(Math.floor(start));
    }, 16);
  }, []);

  return (
    <section className="relative py-28 px-6 text-white overflow-hidden">

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a]" />
      <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[140px] animate-pulse" />
      <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[140px] animate-pulse" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* صورة متحركة */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative w-72 h-72 rounded-3xl overflow-hidden border border-white/10 shadow-2xl hover:scale-105 transition duration-500">
            <Image
              src="/mohamed1.png"
              alt="Mohamed"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* النص */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            className="text-gray-300 leading-relaxed mb-8 text-lg"
          >
            I'm Mohamed Abdelfatah, a passionate Full Stack Developer 
            specialized in building scalable web apps using modern stack.
          </motion.p>

          {/* عداد مشاريع */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            className="mb-8"
          >
            <span className="text-4xl font-bold text-blue-400">
              {projectsCount}+
            </span>
            <span className="ml-2 text-gray-400">Projects Completed</span>
          </motion.div>

          {/* Progress Bars */}
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1 text-sm">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>

                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                    className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                  />
                </div>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;