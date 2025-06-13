"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FadeIn } from "@/components/animations/fade-in";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/stagger-children";
import { education } from "@/lib/data";

export default function Education() {
  // Debug: Check if education data exists
  if (!education || !Array.isArray(education)) {
    console.error(
      "Education data is not available or not an array:",
      education
    );
    return (
      <section id="education" className="bg-background py-20">
        <div className="container px-4 md:px-6">
          <p>Education data is not available.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="education" className="bg-background py-20">
      <div className="container px-4 md:px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
            Education & Qualifications
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-lg text-muted-foreground mb-16 max-w-3xl">
            My educational journey has equipped me with a strong foundation in
            computer science, design thinking, and problem-solving
            methodologies.
          </p>
        </FadeIn>

        <div className="relative">
          {/* Step lines connector */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-border -ml-0.5 md:transform md:-translate-x-1/2">
            {/* Step line segments */}
            {education.map((_, index) => (
              <motion.div
                key={`step-${index}`}
                className="absolute w-1 bg-primary"
                style={{
                  top: `${(index / education.length) * 100}%`,
                  height: `${100 / education.length}%`,
                }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.1 * index,
                  duration: 0.6,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>

          <StaggerChildren className="space-y-12" delay={0.3}>
            {education.map((item, index) => {
              const isEven = index % 2 === 0;

              // Ensure required fields exist
              if (!item.id && !item.institution) {
                console.warn(
                  `Education item at index ${index} is missing required fields:`,
                  item
                );
                return null;
              }

              return (
                <StaggerItem key={item.id || `education-${index}`}>
                  <div
                    className={`relative pl-10 md:pl-0 md:w-1/2 ${
                      isEven
                        ? "md:pr-12 md:text-right md:ml-auto"
                        : "md:pl-12 md:mr-auto"
                    }`}
                  >
                    {/* Step timeline dot */}
                    <motion.div
                      className={`absolute top-0 h-6 w-6 rounded-full bg-background border-4 border-primary z-10 ${
                        isEven
                          ? "left-[-0.75rem] md:left-auto md:right-[-0.75rem]"
                          : "left-[-0.75rem] md:left-[-0.75rem]"
                      }`}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.1 * index + 0.3,
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      }}
                    >
                      {/* Step number */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.span
                          className="text-xs font-bold text-primary"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * index + 0.5 }}
                        >
                          {index + 1}
                        </motion.span>
                      </div>
                    </motion.div>

                    <motion.div
                      className="overflow-hidden relative z-0 h-full"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.1 * index + 0.2,
                        duration: 0.6,
                        ease: "easeOut",
                      }}
                    >
                      <Card className="h-full border-2 hover:border-primary/50 transition-colors duration-300">
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between flex-wrap gap-2">
                            <CardTitle className="text-lg md:text-xl">
                              {item.institution || "Unknown Institution"}
                            </CardTitle>
                            <span className="text-sm text-muted-foreground whitespace-nowrap">
                              {item.startDate || "Start"} -{" "}
                              {item.endDate || "End"}
                            </span>
                          </div>
                          <CardDescription className="text-base font-medium text-primary">
                            {item.degree ? `${item.degree} in ` : ""}
                            {item.field || "Field of Study"}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">
                            {item.description || "No description available."}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
