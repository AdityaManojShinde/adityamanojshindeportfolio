"use client";

import { 
  Code2, 
  PenTool, 
  Database, 
  LineChart, 
  MoveRight 
} from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children";

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
                I'm a passionate full-stack developer and UI/UX designer with over 5 years of experience creating 
                elegant digital solutions. My journey began with a curiosity about how things work, which evolved 
                into a deep understanding of both the technical and human aspects of software development.
              </p>
              <p className="text-lg text-muted-foreground">
                I believe in writing clean, maintainable code and designing intuitive interfaces that 
                prioritize the user's needs. My approach combines technical excellence with aesthetic sensibility 
                to create products that are both functional and beautiful.
              </p>
              <p className="text-lg text-muted-foreground">
                When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, 
                or experimenting with new technologies to stay at the cutting edge of web development.
              </p>
              <div>
                <Button variant="outline" asChild>
                  <a 
                    href="/resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
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
              <TabsList className="grid w-full grid-cols-4">
                {skillCategories.map((category) => (
                  <TabsTrigger key={category.title} value={category.title}>
                    <span className="hidden sm:inline-flex sm:items-center sm:gap-2">
                      {category.icon}
                      {category.title}
                    </span>
                    <span className="sm:hidden">{category.icon}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {skillCategories.map((category) => (
                <TabsContent key={category.title} value={category.title}>
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
                        {category.skills.map((skill) => (
                          <StaggerItem key={skill.name}>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span>{skill.name}</span>
                                <span className="text-muted-foreground">{skill.level}%</span>
                              </div>
                              <Progress value={skill.level} className="h-2" />
                            </div>
                          </StaggerItem>
                        ))}
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