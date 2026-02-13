"use client";

import { JSX, useState, useRef, useEffect } from "react";
import {
  Briefcase,
  Award,
  Calendar,
  Building,
  ExternalLink,
  X,
} from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";

/* ---------- Types ---------- */

interface ExperienceItem {
  type: string;
  title: string;
  company: string;
  duration: string;
  highlights: string[];
}

interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  description: string;
  link: string;
}

export function Experience(): JSX.Element {
  const [activeCert, setActiveCert] = useState<CertificationItem | null>(null);

  const experiences: ExperienceItem[] = [
    {
      type: "Internship",
      title: "Java Developer Intern",
      company: "InternPe",
      duration: "Aug 2024 – Sep 2024",
      highlights: [
        "Developed Java-based applications using OOP principles",
        "Implemented structured console projects",
        "Designed optimized algorithm logic",
      ],
    },
    {
      type: "Internship",
      title: "Full Stack Developer Intern",
      company: "Academic Project",
      duration: "Jan 2024 – Mar 2024",
      highlights: [
        "Built REST APIs using Node.js & Express",
        "Integrated MongoDB with schema validation",
        "Developed responsive UI using React.js",
      ],
    },
  ];

  const certifications: CertificationItem[] = [
    {
      title: "MongoDB – Associate Node.js Developer",
      issuer: "MongoDB University",
      year: "2024",
      description: "Backend development using Node.js & MongoDB.",
      link: "#",
    },
    {
      title: "Python Programming",
      issuer: "GUVI",
      year: "2023",
      description: "Strong foundation in Python and DSA.",
      link: "#",
    },
  ];

  return (
    <section id="experience" className="py-32 px-6 relative">
      <div className="mx-auto max-w-6xl">

        {/* HEADER */}
        <div className="flex items-center gap-4 mb-16">
          <span className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-mono text-primary tracking-widest uppercase">
            Experience
          </h2>
          <span className="h-px flex-1 bg-border" />
        </div>

        {/* 🔥 Animated Stats Section */}
        <ExperienceStats
          internships={2}
          projects={5}
          certifications={2}
          technologies={15}
        />

        <div className="grid lg:grid-cols-3 gap-12 mt-20">

          {/* EXPERIENCE LIST */}
          <div className="lg:col-span-2 space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-8 bg-card border border-border rounded-2xl
                           hover:shadow-2xl hover:-translate-y-2
                           transition-all duration-300"
              >
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                  {exp.type}
                </span>

                <div className="flex justify-between mt-4 flex-wrap gap-2">
                  <div>
                    <h4 className="text-xl font-semibold">{exp.title}</h4>
                    <p className="flex items-center gap-2 text-primary text-sm">
                      <Building size={14} />
                      {exp.company}
                    </p>
                  </div>

                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={14} />
                    {exp.duration}
                  </span>
                </div>

                <ul className="mt-6 space-y-2">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-primary">▹</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* CERTIFICATIONS */}
          <div className="space-y-8">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="p-6 bg-card border border-border rounded-2xl
                           hover:shadow-xl hover:-translate-y-2
                           transition-all duration-300"
              >
                <h4 className="font-semibold text-sm">{cert.title}</h4>

                <p className="text-xs text-primary mt-1">
                  {cert.issuer} • {cert.year}
                </p>

                <p className="text-xs text-muted-foreground mt-3">
                  {cert.description}
                </p>

                <button
                  onClick={() => setActiveCert(cert)}
                  className="inline-flex items-center gap-2 mt-4 text-xs text-primary hover:underline"
                >
                  View Certificate
                  <ExternalLink size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-background w-[90%] max-w-4xl h-[85%] rounded-2xl overflow-hidden relative shadow-2xl"
            >
              <button
                onClick={() => setActiveCert(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-primary"
              >
                <X size={20} />
              </button>

              <iframe
                src={activeCert.link}
                title={activeCert.title}
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ---------- Animated Counter ---------- */

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1200;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref}>{count}</span>;
}

/* ---------- Stats Section ---------- */

function ExperienceStats({
  internships,
  projects,
  certifications,
  technologies,
}: {
  internships: number;
  projects: number;
  certifications: number;
  technologies: number;
}) {
  const stats = [
    { label: "Internships", value: internships },
    { label: "Projects", value: projects },
    { label: "Certifications", value: certifications },
    { label: "Technologies", value: technologies },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl border border-border bg-card
                     hover:shadow-2xl hover:-translate-y-2
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
