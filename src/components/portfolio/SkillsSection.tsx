import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const categories = [
  {
    title: "Languages",
    skills: [ "Python", "Java(Basic)","JavaScript", "SQL"],
  },
  {
    title: "Web Development",
    skills: ["React","HTML5","CSS", "Django"],
  },
  {
    title: "Tools",
    skills: ["PowerBI","Docker"],
  },
  {
    title: "Library",
    skills: ["Numpy", "Pandas", "Matplotlib"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative">
      <div className="gradient-blur w-[350px] h-[350px] bg-primary/10 bottom-0 left-10" />
      <div className="section-container">
        <AnimatedSection>
          <p className="text-primary font-mono text-sm mb-2">02. Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">My Toolkit</h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, ci) => (
            <AnimatedSection key={cat.title} delay={ci * 0.1}>
              <div className="glass-card p-6 h-full group hover:border-primary/40 transition-colors duration-300">
                <h3 className="text-sm font-semibold text-primary mb-4 font-mono">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-xs font-medium cursor-default transition-colors group-hover:bg-secondary/80"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
