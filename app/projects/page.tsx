"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [ 
 
  {
    title: "Blog App",
    description:
      "A full-stack blog application built using Next.js and React, allowing users to create and manage blog posts with a clean and scalable architecture.",
    github:
      "https://github.com/mohamedAbdElfatahSayed/blog",
    features: [
      "Create, read, update, and delete blog posts (CRUD)",
      "Responsive and clean user interface",
      "API integration using Next.js",
      "Database management with Prisma",
      "Scalable project structure",
    ],
    techStack: {
      frontend: ["React", "Next.js"],
      backend: ["Next.js API Routes"],
      database: ["PostgreSQL"],
      orm: ["Prisma"],
    },
    goal:
      "Practice building a full-stack application using modern technologies with focus on clean code and scalability.",
    futureImprovements: [
      "Authentication (Login/Register)",
      "Comments and likes system",
      "SEO optimization",
      "Admin dashboard",
    ],
  }, {
    title: "Book Store",
    description:
      "Book Store is a modern online bookstore web application built with React. It provides users with an intuitive interface to explore and interact with a collection of books. This project demonstrates React fundamentals such as component structure, state management, routing, and responsive UI design — making it a solid portfolio piece for beginner to intermediate frontend development.",
    features: [
      "Browse and view a variety of books",
      "Clean and responsive frontend layout",
      "Built with React components and modular code",
      "Easy to extend for future functionality (search, cart, filters)",
    ],
    techStack: {
      frontend: ["React", "JavaScript ES6+", "CSS"],
      backend: [],
      database: [],
      orm: [],
    },
    github:
      "https://github.com/mohamedAbdElfatahSayed/book-store",
    demo: "#",
    futureImprovements: [
      "Add book search & filter",
      "Implement book detail pages",
      "Connect to a backend API",
      "Add user authentication",
      "Add shopping cart & checkout flow",
    ],
    goal:
      "Showcase React frontend skills and modular project architecture, ready for future full-stack enhancements.",
  },{
  title: "Backend API Project",
  description:
    "A backend application built to handle server-side logic and API development. The project focuses on building scalable RESTful APIs, managing data flow, and applying clean architecture principles to ensure maintainability and performance.",

  features: [
    "RESTful API development",
    "CRUD operations (Create, Read, Update, Delete)",
    "Structured and scalable backend architecture",
    "Database integration and management",
    "Error handling and validation",
    "Secure API endpoints"
  ],

  techStack: {
    backend: ["Node.js", "Express.js"],
    database: ["PostgreSQL / MongoDB (depending on implementation)"],
    orm: ["Prisma / Mongoose"],
    tools: ["Git", "GitHub", "Postman"]
  },

  github: "https://github.com/mohamedAbdElfatahSayed/backend-",
  demo: "#",

  goal:
    "Build a strong backend foundation by implementing REST APIs and practicing real-world server-side development concepts.",

  futureImprovements: [
    "Add authentication (JWT Login/Register)",
    "Role-based access control (Admin/User)",
    "Improve logging and error monitoring",
    "Add Swagger API documentation",
    "Deploy backend on cloud (Render / Railway / VPS)"
  ]
},{
  title: "Safari App",
  description:
    "A modern Safari-inspired web application built to demonstrate frontend development skills using React/Next.js. The project focuses on building a clean UI, reusable components, and responsive design with a smooth user experience similar to modern browsing interfaces.",

  features: [
    "Clean and modern UI inspired by Safari browser",
    "Responsive design for all screen sizes",
    "Reusable React components",
    "Smooth navigation and transitions",
    "Structured and scalable frontend architecture",
    "Optimized layout for better user experience"
  ],

  techStack: {
    frontend: ["React / Next.js", "JavaScript", "Tailwind CSS (if used)"],
    backend: [],
    database: [],
    tools: ["Git", "GitHub"]
  },

  github: "https://github.com/mohamedAbdElfatahSayed/safari-app",
  demo: "#",

  goal:
    "Build a modern Safari-like UI application to strengthen frontend skills and practice building real-world interface designs.",

  futureImprovements: [
    "Add real browser functionality (tabs system)",
    "Add bookmarks system",
    "Add search engine integration",
    "Improve animations and transitions",
    "Add backend for saving user data"
  ]
},{
  title: "Cairo Shopping",
  description:
    "A modern e-commerce / shopping web application built to simulate an online shopping experience in Cairo. The project focuses on building a clean UI, product browsing system, and structured frontend architecture to practice real-world e-commerce concepts.",

  features: [
    "Product listing and browsing UI",
    "Clean and responsive design",
    "Reusable components structure",
    "Simple shopping experience simulation",
    "Organized project structure for scalability",
    "User-friendly interface inspired by real e-commerce apps"
  ],

  techStack: {
    frontend: ["React / Next.js", "JavaScript", "CSS / Tailwind (if used)"],
    backend: [],
    database: [],
    tools: ["Git", "GitHub"]
  },

  github: "https://github.com/mohamedAbdElfatahSayed/cairo-shopping",
  demo: "#",

  goal:
    "Practice building an e-commerce style frontend application and improve UI/UX and component-based architecture skills.",

  futureImprovements: [
    "Add product details page",
    "Add cart system (add/remove items)",
    "Add authentication system",
    "Connect to real backend API",
    "Add payment checkout flow",
    "Add search and filtering system"
  ]
}, {
  title: "Full‑Stack E‑Commerce App",
  description:
    "A complete full‑stack e‑commerce web application built with React, Node.js, Express, and MongoDB. Features include user authentication, product browsing, shopping cart functionality, and an admin dashboard for managing products and users.",

  features: [
    "User authentication with JWT (Register/Login/Logout)",
    "Product browsing with search and filter",
    "Product details pages",
    "Shopping cart with persistence",
    "Admin dashboard (CRUD products & manage users)",
    "Role‑based access control (User/Admin)",
    "Image upload handling and validation"
  ],

  techStack: {
    frontend: ["React", "React Router", "Context API", "Axios", "Tailwind CSS", "Vite"],
    backend: ["Node.js", "Express"],
    database: ["MongoDB", "Mongoose"],
    tools: ["JWT", "bcrypt", "Multer", "dotenv"]
  },

  github: "https://github.com/mohamedAbdElfatahSayed/shoping",
  demo: "#", // Add link if deployed

  goal:
    "Build a robust and scalable e‑commerce platform from scratch, practicing full‑stack development with authentication, cart management, and admin features.",

  futureImprovements: [
    "Add payment integration (Stripe / PayPal)",
    "Add order history & checkout flow",
    "Add product reviews & ratings",
    "Improve product filtering and sorting",
    "Deploy to production (Vercel/Heroku/Render)"
  ]
}
];


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0f1c] text-white px-6 md:px-16 py-16">

      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        My Projects
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            whileHover={{ scale: 1.02 }}
            className="relative group rounded-3xl p-[1px] bg-gradient-to-r from-blue-500/30 via-purple-500/20 to-pink-500/20"
          >
            {/* Card */}
            <div className="bg-[#0f172a]/80 backdrop-blur-xl rounded-3xl p-7 border border-white/10 shadow-xl transition-all duration-300 group-hover:shadow-purple-500/20">

              {/* Title */}
              <h2 className="text-3xl font-bold mb-3 group-hover:text-blue-400 transition">
                {project.title}
              </h2>

              {/* Description */}
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* GitHub */}
              <a
                href={project.github}
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition mb-6"
              >
                <Github size={18} />
                GitHub
              </a>

              <div className="space-y-6">

                {/* Features */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-blue-300">
                    🚀 Features
                  </h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    {project.features.map((f, i) => (
                      <li key={i} className="hover:text-white transition">
                        • {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-white/10 pt-5">

                  {/* Tech Stack */}
                  <h3 className="text-lg font-semibold mb-3 text-purple-300">
                    🛠 Tech Stack
                  </h3>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-white/5 p-3 rounded-xl">
                      <p className="text-blue-300 font-semibold mb-1">Frontend</p>
                      <p className="text-gray-300">
                        {project?.techStack?.frontend?.join(", ")}
                      </p>
                    </div>

                    <div className="bg-white/5 p-3 rounded-xl">
                      <p className="text-pink-300 font-semibold mb-1">Backend</p>
                      <p className="text-gray-300">
                        {project.techStack.backend.join(", ")}
                      </p>
                    </div>

                    <div className="bg-white/5 p-3 rounded-xl">
                      <p className="text-green-300 font-semibold mb-1">Database</p>
                      <p className="text-gray-300">
                        {project.techStack.database.join(", ")}
                      </p>
                    </div>

                    <div className="bg-white/5 p-3 rounded-xl">
                      <p className="text-yellow-300 font-semibold mb-1">ORM</p>
                      <p className="text-gray-300">
                        {project.techStack.orm?.join(", ")}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Goal */}
                <div className="border-t border-white/10 pt-5">
                  <h3 className="text-lg font-semibold mb-2 text-emerald-300">
                    🎯 Goal
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.goal}
                  </p>
                </div>

                {/* Future Improvements */}
                <div className="border-t border-white/10 pt-5">
                  <h3 className="text-lg font-semibold mb-3 text-orange-300">
                    💡 Future Improvements
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {project.futureImprovements.map((item, i) => (
                      <span
                        key={i}
                        className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs hover:bg-blue-500/20 transition"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        ))}

      </div>
    </main>
  );
}