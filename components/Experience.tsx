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
      link: "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/cb271de5-5f5b-4e4d-9eed-00942f37ee15-bharath-m-1359cabc-49fd-44f6-b917-13150393b4dc-certificate.pdf",
    },
    {
      title: "Python Programming",
      issuer: "GUVI",
      year: "2023",
      description: "Strong foundation in Python and DSA.",
      link: "https://media.licdn.com/dms/image/v2/D5622AQHjtTheoB1Q_g/feedshare-shrink_1280/feedshare-shrink_1280/0/1705740765538?e=1772668800&v=beta&t=40qv_7VJmnFK7a2j7ZimnJlWNo9JpFYUjTG-yYvWuqw",
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-36 px-6 
                 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 
                 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-600/10 blur-[140px] rounded-full -z-10" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-purple-600/10 blur-[140px] rounded-full -z-10" />

      <div className="mx-auto max-w-6xl">

        {/* HEADER */}
        <div className="text-center mb-20">
          <p className="text-sm font-mono tracking-widest uppercase text-indigo-400 mb-4">
            Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Professional Journey & Achievements
          </h2>
        </div>

       

        <div className="grid lg:grid-cols-3 gap-14 mt-24">

          {/* EXPERIENCE TIMELINE */}
          <div className="lg:col-span-2 space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative p-10 rounded-3xl 
                           backdrop-blur-xl bg-white/5
                           border border-white/10
                           hover:border-indigo-400/30
                           hover:shadow-[0_25px_70px_rgba(99,102,241,0.25)]
                           transition-all duration-500"
              >
                {/* Badge */}
                <span className="inline-block text-xs font-semibold 
                                 bg-indigo-500/10 text-indigo-400 
                                 px-4 py-1 rounded-full">
                  {exp.type}
                </span>

                {/* Title + Duration */}
                <div className="flex justify-between mt-6 flex-wrap gap-4">
                  <div>
                    <h4 className="text-2xl font-semibold text-white">
                      {exp.title}
                    </h4>
                    <p className="flex items-center gap-2 text-indigo-400 text-sm mt-1">
                      <Building size={14} />
                      {exp.company}
                    </p>
                  </div>

                  <span className="flex items-center gap-2 text-sm text-slate-400">
                    <Calendar size={14} />
                    {exp.duration}
                  </span>
                </div>

                {/* Highlights */}
                <ul className="mt-8 space-y-3">
                  {exp.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm text-slate-400 leading-relaxed"
                    >
                      <span className="text-indigo-400">▹</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* CERTIFICATIONS */}
          <div className="space-y-10">
            {certifications.map((cert) => (
              <motion.div
                key={cert.title}
                whileHover={{ y: -8 }}
                className="p-8 rounded-3xl 
                           backdrop-blur-xl bg-white/5
                           border border-white/10
                           hover:border-indigo-400/30
                           hover:shadow-[0_20px_60px_rgba(99,102,241,0.25)]
                           transition-all duration-500"
              >
                <h4 className="font-semibold text-white">
                  {cert.title}
                </h4>

                <p className="text-sm text-indigo-400 mt-2">
                  {cert.issuer} • {cert.year}
                </p>

                <p className="text-sm text-slate-400 mt-4 leading-relaxed">
                  {cert.description}
                </p>

                <button
                  onClick={() => setActiveCert(cert)}
                  className="inline-flex items-center gap-2 mt-6 text-sm text-indigo-400 hover:underline"
                >
                  View Certificate
                  <ExternalLink size={14} />
                </button>
              </motion.div>
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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm 
                       flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative bg-slate-950 
                         w-[92%] max-w-5xl h-[85%] 
                         rounded-3xl overflow-hidden 
                         border border-white/10 
                         shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
            >
              <button
                onClick={() => setActiveCert(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-white"
              >
                <X size={22} />
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
