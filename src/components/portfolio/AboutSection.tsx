import AnimatedSection from "./AnimatedSection";

export default function AboutSection() {
  return (
    <section id="about" className="relative">
      <div className="gradient-blur w-[300px] h-[300px] bg-accent/15 top-20 right-0" />
      <div className="section-container">
        <AnimatedSection>
          <p className="text-primary font-mono text-sm mb-2">01. About</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Who I Am</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection delay={0.1}>
            <div className="glass-card p-8 space-y-4">
              <p className="text-secondary-foreground leading-relaxed">
                Enthusiastic Computer Science graduate with hands-on experience as an Associate Software Developer. Passionate about problem-solving and building impactful software solutions. Skilled in Python, SQL, and ReactJS, with a strong interest in developing scalable applications and continuously learning modern technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I enjoy solving problems and building applications that are simple, efficient, and user-friendly. I focus on writing clean code and creating good user experiences.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="glass-card p-8 space-y-4">
              <h3 className="text-lg font-semibold text-foreground">My Approach</h3>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  "Write clean, maintainable code that user expects",
                  "Prioritize performance and accessibility from day one",
                  "Communicate clearly and collaborate effectively",
                  "Continuously learn and adopt modern best technologies",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
