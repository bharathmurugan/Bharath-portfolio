"use client";

import Link from "next/link";
import { ExternalLink, Github, Folder, Star } from "lucide-react";
import { motion } from "framer-motion";

export function Projects() {
  const projects = [
    {
      title: "Inventory Management System",
      description:
        "Enterprise-grade mobile solution designed to optimize stock tracking, automate inventory workflows, and deliver real-time operational insights.",
      technologies: ["Flutter", "Dart"],
      github: "https://github.com/bharathmurugan/NirmalaAgenciesConsultancy",
      category: "Mobile Application",
      featured: true,
    },
    {
      title: "News Aggregator Platform",
      description:
        "Scalable full-stack platform delivering real-time news aggregation with advanced filtering, search optimization, and responsive UI architecture.",
      technologies: ["React.js", "Node.js", "MongoDB"],
      github: "https://github.com/bharathmurugan/FullStackProject",
      category: "Full Stack Engineering",
    },
    {
      title: "CI/CD Pipeline Automation",
      description:
        "Production-ready DevOps automation pipeline enabling seamless build, test, and deployment workflows using containerized infrastructure.",
      technologies: ["Jenkins", "Docker", "Kubernetes"],
      github: "https://github.com/bharathmurugan/DevopsProject",
      category: "DevOps Engineering",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-36 px-6 
                 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 
                 overflow-hidden"
    >
      {/* Ambient Background Glow */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full -z-10" />

      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-sm font-mono tracking-widest uppercase text-indigo-400 mb-4">
            Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Engineering Impact Through Scalable Solutions
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A curated portfolio demonstrating expertise in scalable system
            architecture, DevOps automation, and full-stack engineering.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className={`group relative p-8 rounded-3xl 
              backdrop-blur-xl border border-white/10
              bg-white/5
              transition-all duration-500 flex flex-col
              ${
                project.featured
                  ? "ring-1 ring-indigo-400/30 border-indigo-400/30"
                  : "hover:border-indigo-400/30"
              }`}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-6 right-6 flex items-center gap-1 text-xs font-semibold 
                                text-indigo-400 bg-indigo-400/10 px-3 py-1 rounded-full">
                  <Star size={12} />
                  Featured
                </div>
              )}

              {/* Header Row */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-4 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition">
                  <Folder size={22} />
                </div>

                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-indigo-400 transition"
                >
                  <Github size={20} />
                </Link>
              </div>

              {/* Category */}
              <span className="text-xs font-semibold text-indigo-400 bg-indigo-400/10 px-3 py-1 rounded-full w-fit mb-4">
                {project.category}
              </span>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-indigo-400 transition">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-400 leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Divider */}
              <div className="my-6 h-px bg-white/10" />

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-indigo-300 
                               bg-indigo-500/10 px-3 py-1 rounded-md 
                               hover:bg-indigo-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-28"
        >
          <Link
            href="https://github.com/bharathmurugan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-4 rounded-2xl 
                       bg-gradient-to-r from-indigo-500 to-purple-600
                       text-white font-semibold text-lg
                       shadow-lg
                       hover:-translate-y-1 
                       hover:shadow-[0_15px_40px_rgba(99,102,241,0.5)]
                       transition-all duration-300"
          >
            View Full GitHub Projects
            <ExternalLink size={18} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
