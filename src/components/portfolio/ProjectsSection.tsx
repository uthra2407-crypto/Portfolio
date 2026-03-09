import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "CloudSync Dashboard",
    description: "Real-time analytics dashboard with live data streaming, role-based access, and interactive visualizations.",
    tech: ["React", "TypeScript", "D3.js", "Node.js", "WebSockets"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "DevFlow CLI",
    description: "A developer productivity CLI tool that automates project scaffolding, testing pipelines, and deployments.",
    tech: ["Go", "Docker", "GitHub Actions", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "PixelMarket",
    description: "E-commerce platform for digital assets featuring secure payments, asset previews, and creator dashboards.",
    tech: ["Next.js", "Stripe", "Prisma", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "NoteGraph",
    description: "Knowledge management app with graph-based note linking, markdown support, and real-time collaboration.",
    tech: ["React", "GraphQL", "Redis", "AWS"],
    github: "https://github.com",
    demo: "https://example.com",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative">
      <div className="gradient-blur w-[400px] h-[400px] bg-accent/15 top-40 right-0" />
      <div className="section-container">
        <AnimatedSection>
          <p className="text-primary font-mono text-sm mb-2">03. Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Featured Work</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-6 h-full flex flex-col group hover:border-primary/40 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Github size={18} />
                  </a>
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
