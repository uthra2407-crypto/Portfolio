import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import Uthra from "@/assets/Uthra.jpeg";

const ParticleSphere = lazy(() => import("./ParticleSphere"));

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Gradient blurs */}
      <div className="gradient-blur w-[500px] h-[500px] bg-primary/20 -top-40 -left-40" />
      <div className="gradient-blur w-[400px] h-[400px] bg-accent/20 bottom-20 right-10" />

      <div className="section-container w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-mono text-sm mb-4"
            >
              Hello, I'm
            </motion.p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              <span className="gradient-text">Sri Thiripura Sundari Uthra K</span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-medium text-secondary-foreground mb-6">
              Associate Software Developer
            </h2>
            <p className="text-muted-foreground max-w-md mb-8 leading-relaxed">
             Computer Science graduate and aspiring Software Developer passionate about building impactful applications.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover-scale"
              >
                View Projects <ArrowDown size={16} />
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:border-primary/50 transition-colors hover-scale"
              >
                Download Resume <Download size={16} />
              </a>
            </div>
          </motion.div>

          {/* Right column: profile image + 3D sphere */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[350px] sm:h-[420px] lg:h-[480px] flex items-center justify-center"
          >

            {/* Round profile image */}
            <div className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-primary/30 glow-border">
              <img
                src={Uthra}
                alt="Uthra"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
