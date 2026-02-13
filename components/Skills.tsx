"use client";

import { useState } from "react";
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
    // Frontend
    { name: "HTML", icon: SiHtml5, color: "text-orange-600", category: "Frontend" },
    { name: "CSS", icon: SiCss3, color: "text-blue-500", category: "Frontend" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-300", category: "Frontend" },
    { name: "ReactJS", icon: SiReact, color: "text-cyan-400", category: "Frontend" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "text-sky-400", category: "Frontend" },
    { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-500", category: "Frontend" },

    // Backend
    { name: "Java", icon: DiJava, color: "text-orange-500", category: "Backend" },
    { name: "Python", icon: SiPython, color: "text-yellow-400", category: "Backend" },
    { name: "NodeJS", icon: SiNodedotjs, color: "text-green-500", category: "Backend" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-400", category: "Backend" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-400", category: "Backend" },
    { name: "SQL", icon: FaDatabase, color: "text-indigo-400", category: "Backend" },

    // DevOps
    { name: "Docker", icon: SiDocker, color: "text-blue-400", category: "DevOps" },
    { name: "Jenkins", icon: SiJenkins, color: "text-red-500", category: "DevOps" },
    { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-500", category: "DevOps" },
    { name: "Vercel", icon: SiVercel, color: "text-white", category: "DevOps" },
    { name: "Netlify", icon: SiNetlify, color: "text-teal-400", category: "DevOps" },

    // Tools
    { name: "Git", icon: SiGit, color: "text-orange-500", category: "Tools" },
    { name: "GitHub", icon: SiGithub, color: "text-gray-300", category: "Tools" },
    { name: "VS Code", icon: VscCode, color: "text-blue-500", category: "Tools" },
    { name: "Postman", icon: SiPostman, color: "text-orange-500", category: "Tools" },
  ];

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-28 px-6 bg-background">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-mono tracking-widest uppercase text-primary mb-4">
            Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            My Technology Stack
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border
                ${
                  activeCategory === cat
                    ? "bg-primary text-white border-primary shadow-lg"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="group relative p-8 rounded-2xl border border-border 
                           bg-card hover:border-primary/50 
                           hover:shadow-2xl hover:-translate-y-2
                           transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-5">
                  <Icon
                    size={48}
                    className={`${skill.color} transition-transform duration-300 group-hover:scale-110`}
                  />
                </div>

                <p className="text-foreground font-medium text-sm tracking-wide">
                  {skill.name}
                </p>

                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 bg-primary transition duration-300" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
