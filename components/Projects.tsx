import Link from "next/link";
import { ExternalLink, Github, Folder, Star } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Inventory Management System",
      description:
        "A scalable mobile application designed to streamline inventory tracking, automate stock monitoring, and provide real-time low-stock alerts for improved operational efficiency.",
      technologies: ["Flutter", "Dart"],
      github: "https://github.com/bharathmurugan/NirmalaAgenciesConsultancy",
      category: "Mobile Application",
      featured: true,
    },
    {
      title: "News Aggregator Platform",
      description:
        "A full-stack web platform that aggregates live news feeds with advanced search, category filtering, and responsive UI for seamless user experience.",
      technologies: ["React.js", "Node.js", "MongoDB"],
      github: "https://github.com/bharathmurugan/FullStackProject",
      category: "Full Stack Development",
    },
    {
      title: "CI/CD Pipeline Automation",
      description:
        "Automated build, test, and deployment pipeline using Jenkins, Docker, and Kubernetes to ensure reliable, scalable, and production-ready application delivery.",
      technologies: ["Jenkins", "Docker", "Kubernetes"],
      github: "https://github.com/bharathmurugan/DevopsProject",
      category: "DevOps Engineering",
    },
  ];

  return (
    <section id="projects" className="py-28 px-6 bg-background">
      <div className="mx-auto max-w-6xl">

        {/* Centered Premium Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-mono tracking-widest uppercase text-primary mb-4">
            Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Selected Work & Technical Implementations
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A collection of projects demonstrating expertise in full stack development,
            DevOps automation, and scalable application architecture.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <article
              key={project.title}
              className={`group relative p-7 bg-card rounded-2xl border transition-all duration-300 flex flex-col
                hover:-translate-y-3 hover:shadow-2xl
                ${
                  project.featured
                    ? "border-primary/50 ring-1 ring-primary/30"
                    : "border-border hover:border-primary/40"
                }`}
            >

              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 flex items-center gap-1 text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                  <Star size={12} />
                  Featured
                </div>
              )}

              {/* Top Section */}
              <div className="flex items-start justify-between mb-5">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <Folder size={24} />
                </div>

                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={20} />
                </Link>
              </div>

              {/* Category */}
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mb-3">
                {project.category}
              </span>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-primary bg-primary/5 px-3 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link
            href="https://github.com/bharathmurugan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 rounded-2xl 
            bg-primary text-primary-foreground font-semibold
            hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
          >
            Explore More on GitHub
            <ExternalLink size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}
