"use client";

import {
  Code2,
  Database,
  Server,
  Briefcase,
  GraduationCap,
} from "lucide-react";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export function About() {
  const expertise = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description:
        "Building scalable and responsive web applications with clean architecture.",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      icon: Database,
      title: "Database Engineering",
      description:
        "Designing optimized SQL & NoSQL systems for performance and reliability.",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: Server,
      title: "DevOps & Automation",
      description:
        "Automating CI/CD pipelines and containerized deployments.",
      gradient: "from-pink-500 to-orange-500",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-32 px-6 bg-background overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-500/20 blur-3xl rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/20 blur-3xl rounded-full -z-10 animate-pulse" />

      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-sm font-mono tracking-widest uppercase text-primary mb-4">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">
              Crafting Modern & Scalable
            </span>
            <br />
            Software Solutions
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 
              bg-gradient-to-r from-purple-500/20 to-blue-500/20 
              text-primary rounded-full text-xs font-semibold 
              tracking-wide border border-primary/20">
              <Briefcase size={14} />
              Software Developer
            </div>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Final-year Information Technology student passionate about
                developing scalable and efficient software systems.
              </p>

              <p>
                Experienced in full stack development, database design,
                and DevOps automation practices.
              </p>

              <p>
                Strong academic foundation in Data Structures, Object-Oriented
                Programming, and modern engineering workflows.
              </p>
            </div>

            <div className="flex items-center gap-3 text-sm text-muted-foreground pt-6">
              <GraduationCap size={18} className="text-primary" />
              Kongu Engineering College • 2022 – 2026
            </div>
          </motion.div>

          {/* RIGHT EXPERTISE CARDS */}
          <motion.div
            className="space-y-10 [perspective:1200px]"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {expertise.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ rotateX: 6, rotateY: -6, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="group relative p-8 rounded-3xl 
                border border-border 
                bg-white/5 backdrop-blur-xl
                shadow-xl hover:shadow-2xl
                transition-all duration-500"
              >
                <div className="flex gap-6 items-start">
                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-r ${item.gradient} text-white shadow-lg`}
                  >
                    <item.icon size={26} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-xl text-foreground mb-2">
                      {item.title}
                    </h4>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 transition duration-500`}
                />
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* Animated Stats Section */}
        <StatsSection />

      </div>
    </section>
  );
}

/* ---------- BOUNCING COUNTER ---------- */

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500;
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      start += increment;

      if (start >= value) {
        setCount(value);
        setFinished(true);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [isInView, value]);

  return (
    <motion.span
      ref={ref}
      animate={
        finished
          ? { scale: [1, 1.25, 0.95, 1] }
          : { scale: 1 }
      }
      transition={{ duration: 0.6 }}
      className="inline-block"
    >
      {count}
    </motion.span>
  );
}

/* ---------- STATS SECTION ---------- */

function StatsSection() {
  const stats = [
    { label: "Projects Completed", value: 8 },
    { label: "Technologies Used", value: 15 },
    { label: "Certifications", value: 3 },
    { label: "Years Learning", value: 3 },
  ];

  return (
    <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl border border-border 
                     bg-card hover:shadow-2xl 
                     hover:-translate-y-2 
                     transition-all duration-300"
        >
          <h3 className="text-4xl font-bold text-primary mb-2">
            <Counter value={stat.value} />+
          </h3>
          <p className="text-sm text-muted-foreground">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
