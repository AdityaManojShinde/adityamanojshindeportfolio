"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-20">
      {/* Animated circles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -top-[30%] right-[10%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl"
          animate={{
            x: [50, -50, 50],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-[10%] left-[30%] h-[400px] w-[400px] rounded-full bg-secondary/10 blur-3xl"
          animate={{
            x: [-50, 50, -50],
            y: [100, 0, 100],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <FadeIn direction="up">
            <h1 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl lg:text-6xl">
              Hi, I&apos;m Aditya Shinde
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h2 className="text-xl font-medium text-muted-foreground sm:text-2xl md:text-3xl">
              Full Stack Developer & UI/UX Designer
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.4} className="max-w-[40rem]">
            <p className="text-muted-foreground">
              I craft beautiful, intuitive digital experiences that solve real
              problems. Specializing in modern web applications with a focus on
              performance and accessibility.
            </p>
          </FadeIn>

          <FadeIn
            direction="up"
            delay={0.6}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Button variant={"outline"} asChild>
              <a href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </FadeIn>

          <FadeIn direction="up" delay={0.8} className="absolute bottom-16">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <a href="#about" aria-label="Scroll down">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-muted-foreground"
                >
                  <path d="M12 5v14" />
                  <path d="m19 12-7 7-7-7" />
                </svg>
              </a>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
