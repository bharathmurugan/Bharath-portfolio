"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Code,
  Send,
  Copy,
  Check,
  X,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("bharathmay2005@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setShowPopup(true);
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setShowPopup(false);
        }, 3500);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }

    setLoading(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bharathmay2005@gmail.com",
      href: "mailto:bharathmay2005@gmail.com",
      highlight: true,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9789459437",
      href: "tel:+919789459437",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Salem, Tamil Nadu",
      href: "https://www.google.com/maps/place/Salem,+Tamil+Nadu",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/bharathmurugan",
      username: "@bharathmurugan",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/bharathm12",
      username: "@bharathm12",
    },
    {
      icon: Code,
      label: "LeetCode",
      href: "https://leetcode.com/u/Bharath_22ITR012/",
      username: "@Bharath22ITR012",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-36 px-6 
                 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 
                 overflow-hidden"
    >
      {/* Ambient Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full -z-10" />

      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="text-center mb-24">
          <p className="text-sm font-mono tracking-widest uppercase text-indigo-400 mb-4">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let’s Build Something Exceptional
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Open to collaboration, internships, and impactful engineering
            opportunities. Feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">

          {/* LEFT SECTION */}
          <div className="space-y-8">

            {/* Contact Cards */}
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className={`flex items-center justify-between p-6 rounded-2xl
                bg-white/5 backdrop-blur-xl
                border border-white/10
                hover:border-indigo-400/30
                transition-all duration-300 ${
                  info.highlight ? "ring-1 ring-indigo-400/20" : ""
                }`}
              >
                <div className="flex items-center gap-5">
                  <div className="p-4 bg-indigo-500/10 rounded-xl text-indigo-400">
                    <info.icon size={20} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wide">
                      {info.label}
                    </p>
                    <Link
                      href={info.href}
                      target="_blank"
                      className="text-white font-medium hover:text-indigo-400 transition"
                    >
                      {info.value}
                    </Link>
                  </div>
                </div>

                {info.label === "Email" && (
                  <button
                    onClick={handleCopy}
                    className="text-slate-400 hover:text-indigo-400 transition"
                  >
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                  </button>
                )}
              </div>
            ))}

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="space-y-5 bg-white/5 backdrop-blur-xl 
                         border border-white/10 
                         p-8 rounded-3xl"
            >
              {["name", "email"].map((field) => (
                <input
                  key={field}
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  placeholder={
                    field === "name" ? "Your Name" : "Your Email"
                  }
                  required
                  value={(formData as any)[field]}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl 
                             bg-black/30 border border-white/10 
                             text-white placeholder-slate-400
                             focus:border-indigo-400 
                             focus:outline-none transition"
                />
              ))}

              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 rounded-xl 
                           bg-black/30 border border-white/10 
                           text-white placeholder-slate-400
                           focus:border-indigo-400 
                           focus:outline-none transition"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl font-semibold 
                           bg-gradient-to-r from-indigo-500 to-purple-600 
                           text-white
                           flex items-center justify-center gap-3
                           hover:opacity-90 transition
                           disabled:opacity-60"
              >
                {loading ? "Sending..." : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* RIGHT SECTION */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white">
              Additional Profiles
            </h3>

            <div className="grid gap-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-6 p-6 rounded-2xl
                  bg-white/5 backdrop-blur-xl
                  border border-white/10
                  hover:border-indigo-400/30
                  hover:-translate-y-2
                  transition-all duration-300"
                >
                  <div className="p-4 bg-indigo-500/10 rounded-xl text-indigo-400">
                    <social.icon size={22} />
                  </div>

                  <div>
                    <p className="font-semibold text-white group-hover:text-indigo-400 transition">
                      {social.label}
                    </p>
                    <p className="text-sm text-slate-400">
                      {social.username}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SUCCESS POPUP */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-8 right-8 
                       bg-gradient-to-r from-green-500 to-emerald-600
                       text-white px-6 py-4 rounded-xl shadow-2xl 
                       flex items-center gap-4 z-50"
          >
            <Check size={20} />
            <span>Message sent successfully!</span>
            <button onClick={() => setShowPopup(false)}>
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
