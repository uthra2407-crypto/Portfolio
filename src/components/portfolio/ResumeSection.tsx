import { motion } from "framer-motion";
import { Download, Briefcase } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function ResumeSection() {
  return (
    <section id="resume" className="relative">
      <div className="gradient-blur w-[300px] h-[300px] bg-primary/10 bottom-10 left-20" />
      <div className="section-container">
        <AnimatedSection>
          <p className="text-primary font-mono text-sm mb-2">04. Resume</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Career Overview</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="glass-card p-8 max-w-2xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <Briefcase size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg">5+ Years of Experience</h3>
                <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                  From early-stage startups to enterprise teams, I've shipped production code across the stack — building APIs, designing databases, and crafting polished UIs.
                </p>
              </div>
            </div>

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium"
            >
              Download Resume <Download size={16} />
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
