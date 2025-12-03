"use client";

import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  const links = {
    github: "https://github.com/AdityaManojShinde",
    linkedin: "https://www.linkedin.com/in/aditya-manoj-shinde",
    email: "aditya.manoj.shinde@gmail.com",
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: "India, Maharashtra, Pune",
      link: null,
    },
    {
      icon: Mail,
      title: "Email",
      details: links.email,
      link: `mailto:${links.email}`,
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 8767376654",
      link: "tel:+918767376654",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-background py-20 relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
            Get In Touch
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-lg text-muted-foreground mb-16 max-w-3xl mx-auto text-center">
            Have a project in mind or just want to connect? Feel free to reach
            out. I&apos;m always open to discussing new opportunities and ideas.
          </p>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3 mb-16">
          {contactInfo.map((item, index) => (
            <FadeIn key={index} delay={0.3 + index * 0.1}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-primary/10 hover:border-primary/30 bg-card/50 backdrop-blur-sm group">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                  <div className="p-4 bg-primary/10 rounded-full mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.details}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{item.details}</p>
                  )}
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.6}>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-8">Connect on Socials</h3>
            <div className="flex gap-6">
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-card hover:bg-primary/10 rounded-full border border-border hover:border-primary/50 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="h-8 w-8 text-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-card hover:bg-primary/10 rounded-full border border-border hover:border-primary/50 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-8 w-8 text-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href={`mailto:${links.email}`}
                className="group relative p-4 bg-card hover:bg-primary/10 rounded-full border border-border hover:border-primary/50 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="h-8 w-8 text-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

