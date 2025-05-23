"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import Typewriter from "typewriter-effect";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex h-screen flex-col items-center justify-center overflow-hidden pt-20">
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

      <div className="container px-4 md:px-6 flex flex-col h-full">
        <div className="flex flex-col items-center justify-center space-y-6 text-center flex-1">
          {/* Profile Image */}
          <FadeIn direction="up">
            <motion.div
              className="relative mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36 rounded-full overflow-hidden border-4 border-primary/20  bg-gradient-to-br from-primary/10 to-secondary/10 relative z-10">
                <Image
                  src="/profile3.png"
                  alt="Aditya Shinde - Profile"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, (max-width: 1024px) 128px, 144px"
                />
              </div>
              {/* Animated ring around image */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary/30 z-10"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <h1 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl lg:text-6xl">
              Hi, I&apos;m Aditya Shinde
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h2 className="text-xl font-medium text-muted-foreground sm:text-2xl md:text-3xl">
              <Typewriter
                options={{
                  strings: [
                    "Open Source Contributor.",
                    "AI/ML Enthusiast.",
                    "Researching Quantum Computing.",
                    "Persuing Entrepreneurship.",
                    "Web Developer.",
                    "Flutter Developer.",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 80,
                }}
              />
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.3} className="max-w-[40rem]">
            <p className="text-muted-foreground">
              Developer by craft, innovator by passion. I build fast, accessible
              digital experiences while diving deep into AI, Machine Learning,
              and the quantum future.
            </p>
          </FadeIn>

          <FadeIn
            direction="up"
            delay={0.4}
            className="flex flex-wrap gap-4 pt-2"
          >
            <Button variant={"outline"} asChild>
              <a
                href="https://drive.google.com/file/d/14_ogSKML3ZLBXMQQt9AnnIO2Qhw6CMwc/view?usp=sharing"
                target="_blank"
              >
                Download Resume
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </FadeIn>
        </div>

        {/* Scroll indicator positioned at the bottom with proper spacing */}
        <FadeIn direction="up" delay={0.6} className="pb-8">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex justify-center"
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
    </section>
  );
}
