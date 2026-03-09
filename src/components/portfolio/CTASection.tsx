import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function CTASection() {
  return (
    <section id="contact" className="relative">
      <div className="gradient-blur w-[500px] h-[500px] bg-accent/10 top-0 left-1/2 -translate-x-1/2" />
      
      <div className="section-container text-center">
        <AnimatedSection>
          <p className="text-primary font-mono text-sm mb-2">05. Contact</p>

          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let's Work Together
          </h2>

          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            I am currently open to software development opportunities and would
            love to contribute to meaningful projects. If you are looking for a
            motivated developer with a passion for problem-solving and building
            efficient applications, feel free to reach out.
          </p>

          <motion.a
            href="mailto:uthra2407@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg shadow-lg"
          >
            Contact Me <Mail size={20} />
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
}