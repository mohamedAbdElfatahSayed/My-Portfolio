import React from "react";
import { Mail, Phone, Linkedin, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      aria-label="Contact section for Mohamed Abdelfatah"
      className="bg-[#0f172a] text-white py-24 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">

        {/* SEO Heading */}
        <h1 className="text-4xl font-bold mb-4">
          Get In <span className="text-blue-500">Touch</span>
        </h1>

        <p className="text-gray-400 mb-12 text-lg">
          Feel free to contact me for freelance work, collaborations, or job opportunities.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">

          {/* Email */}
          <a
            href="mailto:mohamedabdelfatah707@gmail.com"
            aria-label="Send email to Mohamed Abdelfatah"
            className="bg-[#1e293b] p-6 rounded-2xl hover:scale-105 hover:bg-[#273449] transition shadow-lg flex items-center gap-4"
          >
            <Mail className="text-blue-500" />
            <span>Send Email</span>
          </a>

          {/* Phone */}
          <a
            href="tel:+201158487539"
            aria-label="Call Mohamed Abdelfatah"
            className="bg-[#1e293b] p-6 rounded-2xl hover:scale-105 hover:bg-[#273449] transition shadow-lg flex items-center gap-4"
          >
            <Phone className="text-green-500" />
            <span>Call Me</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/201158487539"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Mohamed Abdelfatah on WhatsApp"
            className="bg-[#1e293b] p-6 rounded-2xl hover:scale-105 hover:bg-[#273449] transition shadow-lg flex items-center gap-4"
          >
            <Phone className="text-emerald-500" />
            <span>WhatsApp Chat</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mohamed-abd-elfatah-20985528b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Mohamed Abdelfatah LinkedIn profile"
            className="bg-[#1e293b] p-6 rounded-2xl hover:scale-105 hover:bg-[#273449] transition shadow-lg flex items-center gap-4"
          >
            <Linkedin className="text-blue-400" />
            <span>LinkedIn Profile</span>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/mohammed.abdelfatah.31/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Mohamed Abdelfatah Facebook profile"
            className="bg-[#1e293b] p-6 rounded-2xl hover:scale-105 hover:bg-[#273449] transition shadow-lg flex items-center gap-4 sm:col-span-2"
          >
            <Facebook className="text-blue-600" />
            <span>Facebook Profile</span>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Contact;