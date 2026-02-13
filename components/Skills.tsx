"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiPython,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiDocker,
  SiJenkins,
  SiKubernetes,
  SiGithub,
  SiGit,
  SiJavascript,
  SiMysql,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";

import { DiJava } from "react-icons/di";
import { FaDatabase } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Frontend", "Backend", "DevOps", "Tools"];

  const skills = [
    { name: "HTML", icon: SiHtml5, color: "text-orange-500", category: "Frontend", level: 90 },
    { name: "CSS", icon: SiCss3, color: "text-blue-500", category: "Frontend", level: 85 },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", category: "Frontend", level: 88 },
    { name: "ReactJS", icon: SiReact, color: "text-cyan-400", category: "Frontend", level: 85 },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "text-sky-400", category: "Frontend", level: 90 },
    { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-500", category: "Frontend", level: 80 },

    { name: "Java", icon: DiJava, color: "text-orange-400", category: "Backend", level: 85 },
    { name: "Python", icon: SiPython, color: "text-yellow-400", category: "Backend", level: 80 },
    { name: "NodeJS", icon: SiNodedotjs, color: "text-green-500", category: "Backend", level: 82 },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-400", category: "Backend", level: 78 },
    { name: "MySQL", icon: SiMysql, color: "text-blue-400", category: "Backend", level: 80 },
    { name: "SQL", icon: FaDatabase, color: "text-indigo-400", category: "Backend", level: 85 },

    { name: "Docker", icon: SiDocker, color: "text-blue-400", category: "DevOps", level: 75 },
    { name: "Jenkins", icon: SiJenkins, color: "text-red-500", category: "DevOps", level: 70 },
    { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-500", category: "DevOps", level: 65 },
    { name: "Vercel", icon: SiVercel, color: "text-white", category: "DevOps", level: 85 },
    { name: "Netlify", icon: SiNetlify, color: "text-teal-400", category: "DevOps", level: 80 },

    { name: "Git", icon: SiGit, color: "text-orange-500", category: "Tools", level: 90 },
    { name: "GitHub", icon: SiGithub, color: "text-gray-300", category: "Tools", level: 88 },
    { name: "VS Code", icon: VscCode, color: "text-blue-500", category: "Tools", level: 95 },
    { name: "Postman", icon: SiPostman, color: "text-orange-500", category: "Tools", level: 85 },
  ];

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="relative py-36 px-6 
                 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 
                 overflow-hidden"
    >
      {/* Ambient Background Glow */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full -z-10" />

      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm font-mono tracking-widest uppercase text-indigo-400 mb-4">
            Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Technical Expertise & Engineering Stack
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border
              ${
                activeCategory === cat
                  ? "bg-indigo-500 text-white border-indigo-500 shadow-lg scale-105"
                  : "border-white/20 text-slate-400 hover:border-indigo-400 hover:text-indigo-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10"
          >
            {filteredSkills.map((skill) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -12 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="group relative p-8 rounded-3xl 
                             backdrop-blur-xl bg-white/5 
                             border border-white/10
                             hover:border-indigo-400/30
                             hover:shadow-[0_20px_60px_rgba(99,102,241,0.25)]
                             transition-all duration-500 text-center"
                >
                  {/* Soft Glow */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 bg-indigo-500 transition duration-500" />

                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <Icon
                      size={48}
                      className={`${skill.color} transition-transform duration-300 group-hover:scale-110`}
                    />
                  </div>

                  {/* Skill Name */}
                  <p className="text-white font-medium text-sm tracking-wide mb-4">
                    {skill.name}
                  </p>

                  {/* Skill Bar */}
                  <div className="w-full bg-white/10 rounded-full h-1 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
