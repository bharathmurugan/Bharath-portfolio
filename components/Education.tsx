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
    <section id="education" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-mono text-primary tracking-widest uppercase">
            Education
          </h2>
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-16">

            {education.map((edu, index) => (
              <motion.div
                key={edu.institution + edu.degree}
                className="relative flex gap-6 group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.3 }}
              >

                {/* Icon */}
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 
                                  flex items-center justify-center 
                                  border border-primary/30 z-10
                                  group-hover:scale-110 
                                  group-hover:bg-primary/20
                                  transition-all duration-300">
                    <GraduationCap size={20} className="text-primary" />
                  </div>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -6 }}
                  className="flex-1 p-6 bg-card border border-border rounded-xl 
                             hover:border-primary/50 
                             hover:shadow-2xl 
                             transition-all duration-300"
                >

                  {/* High Quality Image */}
                  <div className="relative w-full h-64 md:h-72 mb-6 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={edu.image}
                      alt={edu.institution}
                      fill
                      quality={100}
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover scale-105 transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">

                    <h3 className="text-lg md:text-xl font-semibold text-foreground flex items-center gap-2">
                      {edu.institution}

                      {edu.current && (
                        <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                          Current
                        </span>
                      )}
                    </h3>

                    <span className="text-sm text-muted-foreground font-mono">
                      {edu.duration}
                    </span>

                  </div>

                  <p className="text-primary font-medium mb-3">
                    {edu.degree}
                  </p>

                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Award size={14} />
                    {edu.grade}
                  </p>

                </motion.div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
