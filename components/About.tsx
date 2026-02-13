"use client";

import {
  Code2,
  Database,
  Server,
  Briefcase,
  GraduationCap,
  Award,
  Sparkles,
} from "lucide-react";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export function About() {
  const expertise = [
    {
      icon: Code2,
      title: "Full Stack Engineering",
      description:
        "Architecting scalable web platforms using modern frontend frameworks and robust backend systems with clean, maintainable code standards.",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      icon: Database,
      title: "Database & System Design",
      description:
        "Designing optimized relational and NoSQL architectures focused on performance, scalability, and long-term maintainability.",
      gradient: "from-emerald-500 to-cyan-500",
    },
    {
      icon: Server,
      title: "DevOps & Infrastructure",
      description:
        "Automating CI/CD pipelines, container orchestration, and cloud deployments to ensure reliable production delivery.",
      gradient: "from-pink-500 to-orange-500",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-36 px-6 
                 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 
                 overflow-hidden"
    >
      {/* Subtle Ambient Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full -z-10" />

      <div className="mx-auto max-w-6xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-28"
        >
          <p className="text-sm font-mono tracking-widest uppercase text-primary mb-4">
            About
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            Engineering Reliable & Scalable
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Software Systems
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Role Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 
              bg-white/5 backdrop-blur-lg 
              border border-white/10 
              rounded-full text-xs font-semibold tracking-wide text-indigo-300">
              <Briefcase size={14} />
              Software Developer • IT Undergraduate
            </div>

            {/* Professional Summary */}
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                Final-year Information Technology student with strong
                foundations in Data Structures, Object-Oriented Programming,
                and scalable system architecture.
              </p>

              <p>
                Proven experience in developing full stack applications,
                implementing DevOps workflows, and optimizing database-driven systems.
              </p>

              <p>
                Focused on performance optimization, code quality,
                and building production-ready solutions that deliver measurable impact.
              </p>
            </div>

            {/* Academic Info */}
            <div className="flex items-center gap-3 text-sm text-slate-400 pt-4">
              <GraduationCap size={18} className="text-indigo-400" />
              Kongu Engineering College • 2022 – 2026
            </div>

            {/* Achievements */}
            <div className="flex flex-wrap gap-5 pt-6">
              <div className="flex items-center gap-2 px-4 py-2 
                bg-indigo-500/10 border border-indigo-500/20
                rounded-xl text-indigo-300 text-xs font-semibold">
                <Award size={14} />
                3+ Certifications
              </div>

              <div className="flex items-center gap-2 px-4 py-2 
                bg-indigo-500/10 border border-indigo-500/20
                rounded-xl text-indigo-300 text-xs font-semibold">
                <Sparkles size={14} />
                Internship Experience
              </div>
            </div>
          </motion.div>

          {/* RIGHT EXPERTISE */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {expertise.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="group relative p-10 rounded-3xl 
                bg-white/5 backdrop-blur-xl
                border border-white/10 
                hover:border-indigo-400/30
                transition-all duration-500"
              >
                <div className="flex gap-6 items-start">

                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-r ${item.gradient} text-white shadow-lg`}
                  >
                    <item.icon size={24} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-xl text-white mb-3">
                      {item.title}
                    </h4>

                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* METRICS SECTION */}
        <StatsSection />

      </div>
    </section>
  );
}

/* ---------- COUNTER ---------- */

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500;
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [isInView, value]);

  return <span ref={ref}>{count}</span>;
}

/* ---------- STATS ---------- */

function StatsSection() {
  const stats = [
    { label: "Projects Delivered", value: 4 },
    { label: "Technologies Mastered", value: 15 },
    { label: "Professional Certifications", value: 3 },
    { label: "Years of Engineering Practice", value: 3 },
  ];

  return (
    <div className="mt-36 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-10 rounded-2xl 
                     bg-white/5 backdrop-blur-xl
                     border border-white/10
                     hover:border-indigo-400/30
                     transition-all duration-300"
        >
          <h3 className="text-4xl font-bold text-indigo-400 mb-3">
            <Counter value={stat.value} />+
          </h3>
          <p className="text-sm text-slate-400 tracking-wide">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
