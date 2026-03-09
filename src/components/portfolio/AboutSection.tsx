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
                I'm a full-stack software developer with 5+ years of experience building robust web applications. My journey started with tinkering on small scripts and evolved into architecting scalable systems used by thousands.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I thrive on turning complex problems into elegant, user-friendly solutions. Whether it's optimizing a database query or fine-tuning a pixel-perfect UI, I bring the same attention to detail.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="glass-card p-8 space-y-4">
              <h3 className="text-lg font-semibold text-foreground">My Approach</h3>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  "Write clean, maintainable code that teams love",
                  "Prioritize performance and accessibility from day one",
                  "Communicate clearly and collaborate effectively",
                  "Continuously learn and adopt modern best practices",
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
