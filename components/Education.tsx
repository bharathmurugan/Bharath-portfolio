"use client";

import { GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Education() {
  const education = [
    {
      institution: "Kongu Engineering College",
      degree: "B.Tech in Information Technology",
      duration: "Nov 2022 – Mar 2026",
      grade: "CGPA: 6.95",
      image: "/kongu.png",
      current: true,
    },
    {
      institution: "GV Higher Secondary School",
      degree: "Senior Secondary (Class XII)",
      duration: "Jun 2021 – May 2022",
      grade: "Percentage: 80.3%",
      image: "/gv-school.png",
    },
    {
      institution: "GV Higher Secondary School",
      degree: "Secondary (Class X)",
      duration: "May 2020",
      grade: "Percentage: 89.6%",
      image: "/gv-school.png",
    },
  ];

  return (
    <section
      id="education"
      className="relative py-36 px-6 
                 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 
                 overflow-hidden"
    >
      {/* Subtle Ambient Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full -z-10" />

      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-28"
        >
          <p className="text-sm font-mono tracking-widest uppercase text-primary mb-4">
            Education
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Academic Background
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            A structured academic foundation built on technical rigor,
            analytical thinking, and consistent performance.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-12">

          {education.map((edu, index) => (
            <motion.div
              key={edu.institution + edu.degree}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative bg-white/5 backdrop-blur-xl
                         border border-white/10
                         rounded-3xl overflow-hidden
                         transition-all duration-300"
            >
              {/* Institution Image */}
              <div className="relative w-full h-52">
                <Image
                  src={edu.image}
                  alt={edu.institution}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col space-y-4">

                {/* Top Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <GraduationCap size={18} className="text-indigo-400" />
                    {edu.institution}
                  </div>

                  {edu.current && (
                    <span className="text-xs bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full border border-indigo-400/20">
                      Current
                    </span>
                  )}
                </div>

                {/* Degree */}
                <p className="text-indigo-300 font-medium text-sm">
                  {edu.degree}
                </p>

                {/* Duration */}
                <p className="text-xs text-slate-400 font-mono tracking-wide">
                  {edu.duration}
                </p>

                {/* Divider */}
                <div className="h-px bg-white/10 my-2" />

                {/* Grade */}
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <Award size={14} className="text-indigo-400" />
                  <span className="font-semibold text-white">
                    {edu.grade}
                  </span>
                </div>

              </div>

              {/* Subtle Hover Border Highlight */}
              <div className="absolute inset-0 rounded-3xl border border-transparent 
                              group-hover:border-indigo-400/30 
                              transition duration-300 pointer-events-none" />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
