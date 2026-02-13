"use client";

import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  FileText,
  Github,
  Linkedin,
} from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden 
                 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900"
    >
      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),
                   linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
                   bg-[size:40px_40px] pointer-events-none"
      />

      <div className="relative mx-auto max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* IMAGE SECTION */}
        <motion.div
          className="flex items-center justify-center order-first lg:order-last"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative group mt-10 lg:mt-0">

            {/* Animated Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r 
                            from-indigo-500 via-purple-500 to-cyan-500 
                            blur-2xl opacity-40 group-hover:opacity-70 
                            transition duration-500 animate-pulse" />

            <div
              className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 
                         rounded-full overflow-hidden 
                         border-4 border-indigo-400/30 shadow-2xl 
                         transition-transform duration-500 group-hover:scale-105"
            >
              <Image
                src="/Bharath.jpeg"
                alt="Bharath M"
                fill
                priority
                sizes="(max-width: 768px) 220px, 320px"
                className="object-cover rounded-full"
              />
            </div>
          </div>
        </motion.div>

        {/* TEXT SECTION */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1 
            bg-emerald-500/10 text-emerald-400 text-xs font-semibold 
            rounded-full border border-emerald-400/30 animate-pulse">
            ● Available for Internship / Full-Time
          </div>

          <div className="space-y-4">
            <p className="text-indigo-400 font-mono text-sm tracking-widest uppercase">
              Hello, I’m
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 
                               bg-clip-text text-transparent">
                Bharath M
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-indigo-400 font-semibold">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "AI Enthusiast",
                  "React & Next.js Developer",
                  "Problem Solver",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </p>
          </div>

          {/* Professional Summary */}
          <p className="text-slate-400 leading-relaxed max-w-lg">
            I design and develop scalable, high-performance applications 
            using modern web technologies. Passionate about clean architecture, 
            automation, and building impactful digital solutions.
          </p>

          {/* Quick Highlights */}
          <div className="flex flex-wrap gap-4 text-xs text-indigo-300">
            <span className="px-3 py-1 bg-indigo-500/10 rounded-full">
              8+ Projects Delivered
            </span>
            <span className="px-3 py-1 bg-indigo-500/10 rounded-full">
              15+ Technologies
            </span>
            <span className="px-3 py-1 bg-indigo-500/10 rounded-full">
              DevOps & Cloud Ready
            </span>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-6 text-sm text-slate-400">
            <span className="flex items-center gap-2 hover:text-indigo-400 transition">
              <MapPin size={16} />
              Salem, Tamil Nadu
            </span>
            <span className="flex items-center gap-2 hover:text-indigo-400 transition">
              <Phone size={16} />
              +91-9789459437
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="pt-6 flex flex-wrap gap-4">

            <Link
              href="mailto:bharathmay2005@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-3 rounded-full 
                         bg-gradient-to-r from-indigo-500 to-purple-600
                         text-white font-semibold shadow-lg
                         hover:scale-105 hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]
                         transition-all duration-300"
            >
              <Mail size={18} />
              Hire Me
            </Link>

            <Link
              href="/Bharath_Resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-3 px-8 py-3 rounded-full 
                         border border-indigo-400/40 text-indigo-300 font-semibold
                         hover:bg-indigo-500 hover:text-white
                         hover:scale-105
                         transition-all duration-300"
            >
              <FileText size={18} />
              Download Resume
            </Link>

          </div>

          {/* Social Icons */}
          <div className="flex gap-5 pt-4 text-slate-400">
            <Link href="https://github.com/bharathmurugan" target="_blank">
              <Github size={20} className="hover:text-white transition" />
            </Link>
            <Link href="https://linkedin.com/in/bharathm12" target="_blank">
              <Linkedin size={20} className="hover:text-white transition" />
            </Link>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
