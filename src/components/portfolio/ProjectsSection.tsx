import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "Web Hosting Through Custom Docker Container",
    description: "This project demonstrates a complete web hosting solution using custom Docker containers. It includes autoscaling, monitoring, and efficient resource management for hosting web applications with a backend and frontend.",
    tech: ["Django", "Docker", "Python"],
    github: "https://github.com/uthra2407-crypto/Web-Hosting-Through-Custom-Docker-Container",
    demo: "https://example.com",
  },
  {
    title: "Sentiment Analysis on Feedback of Education Institution",
    description: "This project analyzes student feedback and classifies it as Positive, Negative, or Neutral using Machine Learning. It helps educational institutions understand student opinions and gain insights to make better academic and administrative decisions.",
    tech: ["Python", "Django", "SVM", "Matplotlib"],
    github: "https://github.com/uthra2407-crypto/Sentiment-Analysis-on-Feedback-of-Education-Institution",
  },
   {
    title: "Weather Application",
    description: "A user-friendly weather application that fetches real-time weather data using a public API and displays it in a clean and interactive UI. The application shows temperature, humidity, and wind speed, along with dynamic weather images that change based on current weather conditions.",
    tech: ["HTML", "CSS", "JavaScript","OpenWeatherMap API"],
    github: "https://github.com/uthra2407-crypto/Weather-Application",
  },
  {
    title: "Todo List",
    description: "A simple one-page To-Do List web application built using Django.Users can add, view, update, edit and delete tasks.",
    tech: ["HTML","CSS","JavaScript"],
    github: "https://github.com/uthra2407-crypto/ToDoList",
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
                  
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
