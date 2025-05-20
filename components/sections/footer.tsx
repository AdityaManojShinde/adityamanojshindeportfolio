"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card text-card-foreground py-12 border-t">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Aditya Shinde</h3>
            <p className="text-sm text-muted-foreground">
              Full Stack Developer & UI/UX Designer building elegant, functional
              digital experiences.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#education"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  href="#certifications"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Certifications
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/aditya-manoj-shinde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:aditya.manoj.shinde@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Back to Top</h3>
            <Button variant="outline" size="icon" onClick={scrollToTop}>
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aditya Shinde. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-4 sm:mt-0">
            Built with Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
