import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:alex@example.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Alex Chen. All rights reserved.
        </p>
        <div className="flex gap-5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <s.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
