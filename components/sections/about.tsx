"use client";

import { Code2, PenTool, Database, LineChart, MoveRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/stagger-children";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  description: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: <Code2 className="h-6 w-6" />,
    description: "Building responsive and accessible user interfaces",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind", level: 90 },
    ],
  },
  {
    title: "Design",
    icon: <PenTool className="h-6 w-6" />,
    description: "Crafting beautiful and intuitive user experiences",
    skills: [
      { name: "UI Design", level: 85 },
      { name: "UX Research", level: 80 },
      { name: "Figma", level: 90 },
      { name: "Design Systems", level: 85 },
      { name: "Animation", level: 75 },
    ],
  },
  {
    title: "Backend",
    icon: <Database className="h-6 w-6" />,
    description: "Building scalable and secure backend systems",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 80 },
      { name: "REST API", level: 90 },
    ],
  },
  {
    title: "Analytics",
    icon: <LineChart className="h-6 w-6" />,
    description: "Data analysis and visualization for informed decisions",
    skills: [
      { name: "Data Visualization", level: 80 },
      { name: "A/B Testing", level: 75 },
      { name: "User Research", level: 85 },
      { name: "Performance Metrics", level: 80 },
      { name: "SEO", level: 70 },
    ],
  },
];

export default function About() {
  return (
    <section id="about" className="bg-background py-20">
      <div className="container px-4 md:px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
            About Me
          </h2>
        </FadeIn>

        <div className="grid gap-10 lg:grid-cols-2">
          <FadeIn direction="right" delay={0.2}>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                I&apos;m a passionate web developer and tech enthusiast
                currently pursuing my B.Tech in Information Technology at MIT
                ADT University.
              </p>
              <p className="text-lg text-muted-foreground">
                I specialize in building modern, responsive, and accessible web
                applications that not only look great but also solve real-world
                problems. My core strengths lie in performance optimization,
                clean UI/UX, and writing scalable, maintainable code.
              </p>
              <p className="text-lg text-muted-foreground">
                Beyond web development, I&apos;m deeply fascinated by Quantum
                Computing and AI/ML technologies. I constantly explore how these
                cutting-edge fields can be applied to build smarter, more
                efficient digital solutions. Whether it&apos;s developing
                intuitive user interfaces or experimenting with the latest in
                artificial intelligence, I&apos;m always eager to learn, build,
                and contribute to meaningful projects.
              </p>
              <div>
                <Button variant="outline" asChild>
                  <a
                    href="https://drive.google.com/file/d/14_ogSKML3ZLBXMQQt9AnnIO2Qhw6CMwc/view?usp=sharing"
                    target="_blank"
                    className="inline-flex items-center"
                  >
                    View Full Resume
                    <MoveRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.4}>
            <Tabs defaultValue="Frontend" className="w-full">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4  gap-1">
                {skillCategories.map((category) => (
                  <TabsTrigger
                    key={category.title}
                    value={category.title}
                    className="text-xs sm:text-sm"
                  >
                    <span className="hidden sm:inline-flex sm:items-center sm:gap-2">
                      {category.icon}
                      <span className="hidden md:inline">{category.title}</span>
                    </span>
                    <span className="sm:hidden flex items-center gap-1">
                      {category.icon}
                      <span className="text-xs">{category.title}</span>
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {skillCategories.map((category) => (
                <TabsContent
                  key={category.title}
                  value={category.title}
                  className="mt-20 md:mt-10"
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        {category.icon}
                        {category.title} Skills
                      </CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <StaggerChildren className="space-y-4">
                        {category.skills.map((skill, index) => {
                          // Ensure skill level is valid
                          const validLevel = Math.min(
                            Math.max(skill.level || 0, 0),
                            100
                          );

                          return (
                            <StaggerItem key={`${skill.name}-${index}`}>
                              <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                  <span className="text-sm font-medium">
                                    {skill.name}
                                  </span>
                                  <span className="text-xs text-muted-foreground">
                                    {validLevel}%
                                  </span>
                                </div>
                                <div className="w-full bg-secondary rounded-full h-2">
                                  <div
                                    className="bg-primary h-2 rounded-full transition-all duration-300 ease-out"
                                    style={{ width: `${validLevel}%` }}
                                  />
                                </div>
                              </div>
                            </StaggerItem>
                          );
                        })}
                      </StaggerChildren>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
