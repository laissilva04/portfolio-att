import { Github, Mail, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="text-center">
          <p className="text-sm leading-5 text-muted-foreground mb-6">Lais Barbosa. Alguns direitos reservados.</p>

         
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/laissilva04"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="mailto:lais2209la@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/lais-barbosa-871678266"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
