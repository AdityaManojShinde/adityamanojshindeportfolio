"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Code, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FadeIn } from "@/components/animations/fade-in";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/stagger-children";
import { ProjectCategory, Project } from "@/types";
import { projects } from "@/lib/data";
import Image from "next/image";

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory | "All">("All");
  const [openProject, setOpenProject] = useState<Project | null>(null);

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  const handleOpenProject = (project: Project) => {
    setOpenProject(project);
  };

  const handleCloseProject = () => {
    setOpenProject(null);
  };

  const categories: Array<ProjectCategory | "All"> = [
    "All",
    "Web Development",
    "Mobile App",
    "UI/UX Design",
    "Data Visualization",
  ];

  return (
    <section id="projects" className="bg-muted/50 py-20">
      <div className="container px-4 md:px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
            My Projects
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
            Explore a selection of my recent work across different domains. Each
            project represents unique challenges and creative solutions.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <Tabs defaultValue="All" className="mb-12">
            <TabsList className="w-full flex-wrap justify-start mb-6">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onClick={() => setFilter(category)}
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </FadeIn>

        <StaggerChildren
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          delay={0.3}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <StaggerItem key={project.id}>
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="group overflow-hidden h-full flex flex-col">
                    <div className="relative overflow-hidden">
                      <div className="aspect-video overflow-hidden relative">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                          priority={project.featured}
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => handleOpenProject(project)}
                        >
                          <Eye className="mr-2 h-4 w-4" /> View Details
                        </Button>
                      </div>
                    </div>
                    <CardHeader className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <Badge variant="outline">{project.category}</Badge>
                        {project.featured && (
                          <Badge variant="secondary">Featured</Badge>
                        )}
                      </div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription className="line-clamp-2">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0 pb-2">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech.name}
                            className={`${tech.color} text-white`}
                          >
                            {tech.name}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between pt-2">
                      {project.demoUrl && (
                        <Button variant="ghost" size="sm" asChild>
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" /> Demo
                          </a>
                        </Button>
                      )}
                      {project.codeUrl && (
                        <Button variant="ghost" size="sm" asChild>
                          <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Code className="mr-2 h-4 w-4" /> Code
                          </a>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </AnimatePresence>
        </StaggerChildren>

        <Dialog open={!!openProject} onOpenChange={handleCloseProject}>
          <DialogContent className="max-w-3xl bg-white dark:bg-slate-900">
            {openProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl">
                    {openProject.title}
                  </DialogTitle>
                  <DialogDescription>
                    <Badge className="mt-2">{openProject.category}</Badge>
                  </DialogDescription>
                </DialogHeader>

                <div className="aspect-video w-full overflow-hidden rounded-md relative">
                  <Image
                    src={openProject.image}
                    alt={openProject.title}
                    fill
                    className="object-cover w-full h-full"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={openProject.featured}
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Description</h4>
                    <p className="text-muted-foreground">
                      {openProject.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {openProject.technologies.map((tech) => (
                        <Badge
                          key={tech.name}
                          className={`${tech.color} text-white`}
                        >
                          {tech.name}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    {openProject.demoUrl && (
                      <Button asChild>
                        <a
                          href={openProject.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" /> View Demo
                        </a>
                      </Button>
                    )}
                    {openProject.codeUrl && (
                      <Button variant="outline" asChild>
                        <a
                          href={openProject.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Code className="mr-2 h-4 w-4" /> View Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
