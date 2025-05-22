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
          {/* Timeline connector */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-border -ml-0.5 md:transform md:-translate-x-1/2" />

          <StaggerChildren className="space-y-12" delay={0.3}>
            {education.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <StaggerItem key={item.id}>
                  <div
                    className={`relative pl-10 md:pl-0 md:w-1/2 ${
                      isEven
                        ? "md:pr-12 md:text-right md:ml-auto"
                        : "md:pl-12 md:mr-auto"
                    }`}
                  >
                    {/* Timeline dot */}
                    <motion.div
                      className={`absolute top-0 h-6 w-6 rounded-full bg-primary ring-4 ring-background z-10
                        ${
                          isEven
                            ? "md:left-auto md:right-[-0.75rem] left-[-0.75rem] right-auto"
                            : "md:left-[-0.75rem] md:right-auto left-[-0.75rem] right-auto"
                        }`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, type: "spring" }}
                    />

                    <Card className="overflow-hidden relative z-0 h-full">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <CardTitle className="text-lg md:text-xl">
                            {item.institution}
                          </CardTitle>
                          <span className="text-sm text-muted-foreground whitespace-nowrap">
                            {item.startDate} - {item.endDate}
                          </span>
                        </div>
                        <CardDescription className="text-base font-medium text-primary">
                          {item.degree} in {item.field}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
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
