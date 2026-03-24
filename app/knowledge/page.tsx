"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { Code, Code2, Database, Server, Layers, Braces } from "lucide-react";

const skills = [
  {
    title: "C++",
    icon: <Braces size={28} />,
    colorFrom: "from-blue-500",
    colorTo: "to-blue-700",
    progress: 90,
    items: [
      "Syntax & Fundamentals",
      "OOP (Classes / Inheritance / Polymorphism)",
      "Data Structures",
      "Problem Solving",
    ],
  },
  {
    title: "JavaScript",
    icon: <Code2 size={28} />,
    colorFrom: "from-yellow-400",
    colorTo: "to-yellow-600",
    progress: 95,
    items: [
      "ES6+ Features",
      "DOM Manipulation",
      "Async / Await",
      "Fetch API",
      "OOP in JS",
    ],
  },
  {
    title: "Frontend",
    icon: <Braces size={28} />,
    colorFrom: "from-pink-500",
    colorTo: "to-purple-500",
    progress: 92,
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: <Server size={28} />,
    colorFrom: "from-green-500",
    colorTo: "to-teal-500",
    progress: 88,
    items: ["Node.js", "Prisma", "MongoDB"],
  },
  {
    title: "Database",
    icon: <Database size={28} />,
    colorFrom: "from-purple-500",
    colorTo: "to-pink-500",
    progress: 85,
    items: ["PostgreSQL", "MongoDB"],
  },
  {
    title: "Architecture",
    icon: <Layers size={28} />,
    colorFrom: "from-cyan-500",
    colorTo: "to-blue-500",
    progress: 80,
    items: ["REST APIs", "MVC Pattern"],
  },
];

const floatingTechIcons = [
  { icon: <Braces size={32} />, top: "10%", left: "5%", rotateSpeed: 20 },
  { icon: <Code2 size={32} />, top: "20%", left: "80%", rotateSpeed: -25 },
  { icon: <Braces size={32} />, top: "70%", left: "15%", rotateSpeed: 30 },
  { icon: <Database size={32} />, top: "50%", left: "60%", rotateSpeed: -15 },
  { icon: <Server size={32} />, top: "80%", left: "75%", rotateSpeed: 40 },
];

const Knowledge = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative py-28 px-6 text-white overflow-hidden perspective-1000">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a]" />

      {/* Animated Gradient Circles */}
      {floatingTechIcons.map((iconObj, i) => (
        <motion.div
          key={i}
          style={{
            top: iconObj.top,
            left: iconObj.left,
            rotate: scrollY * (iconObj.rotateSpeed / 100),
          }}
          className="absolute text-yellow-400"
        >
          {iconObj.icon}
        </motion.div>
      ))}

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-16 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 bg-clip-text text-transparent"
        >
          Knowledge & Skills
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, type: "spring", stiffness: 80 }}
              whileHover={{ scale: 1.06, rotate: 1 }}
              style={{
                transform: `rotateY(${scrollY / 50}deg) rotateX(${scrollY / 100}deg)`,
              }}
              className={`relative bg-gradient-to-tr ${skill.colorFrom} ${skill.colorTo} p-8 rounded-3xl shadow-2xl text-white hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] border border-white/20 backdrop-blur-md`}
            >
              {/* Progress Ring */}
              <div className="w-20 h-20 mx-auto mb-4">
                <CircularProgressbar
                  value={skill.progress}
                  text={`${skill.progress}%`}
                  styles={buildStyles({
                    pathColor: `#ffffff`,
                    textColor: "#ffffff",
                    trailColor: "rgba(255,255,255,0.1)",
                  })}
                />
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-4 text-yellow-300 drop-shadow-[0_0_8px_rgba(255,255,100,0.7)]">
                {skill.icon}
              </div>

              <h3 className="text-xl font-bold mb-4">{skill.title}</h3>

              <ul className="text-gray-200 text-sm space-y-2 text-left">
                {skill.items.map((item, i) => (
                  <li key={i} className="hover:text-yellow-300 transition-colors duration-300">
                    • {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Knowledge;