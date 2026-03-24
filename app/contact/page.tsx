import React from "react";
import { Mail, Phone, Linkedin, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#0f172a] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-12">
          Contact <span className="text-blue-500">Me</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">

        {/* Email */}
<a
  href="mailto:mohamedabdelfatah707@gmail.com"
  target="_blank"
  className="bg-[#1e293b] p-6 rounded-2xl hover:scale-105 hover:bg-[#273449] transition shadow-lg flex items-center gap-4"
>
  <Mail className="text-blue-500" />
  <span>Send Email</span>
</a>

          {/* Phone */}
          <a
            href="tel:+201158487539"
            className="bg-[#1e293b] p-6 rounded-2xl hover:scale-105 transition shadow-lg flex items-center gap-4"
          >
            <Phone className="text-green-500" />
            <span>+20 1158487539</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/201158487539"
            target="_blank"
            className="bg-[#1e293b] p-6 rounded-2xl hover:scale-105 transition shadow-lg flex items-center gap-4"
          >
            <Phone className="text-emerald-500" />
            <span>Chat on WhatsApp</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mohamed-abd-elfatah-20985528b/"
            target="_blank"
            className="bg-[#1e293b] p-6 rounded-2xl hover:scale-105 transition shadow-lg flex items-center gap-4"
          >
            <Linkedin className="text-blue-400" />
            <span>LinkedIn Profile</span>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/mohammed.abdelfatah.31/"
            target="_blank"
            className="bg-[#1e293b] p-6 rounded-2xl hover:scale-105 transition shadow-lg flex items-center gap-4 sm:col-span-2"
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