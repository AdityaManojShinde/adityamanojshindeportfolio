"use client";

import { useState } from "react";

// Helper function to convert YouTube URL to embed URL
const getYouTubeEmbedUrl = (url: string): string => {
  // Handle different YouTube URL formats
  const patterns = [
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&\n?#]+)/,
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([^&\n?#]+)/,
    /(?:https?:\/\/)?youtu\.be\/([^&\n?#]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
  }

  // If it's already an embed URL, return as is
  if (url.includes("youtube.com/embed/")) {
    return url;
  }

  // Fallback - return the original URL
  return url;
};
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
    "Python",
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
                          <div className="text-white flex items-center">
                            <Eye color="white" className="mr-2 h-4 w-4 " /> View
                            Details
                          </div>
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
                      <CardTitle className="text-xl line-clamp-1">
                        {project.title}
                      </CardTitle>
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
          <DialogContent className="max-w-4xl w-[95vw] h-[90vh] max-h-[90vh] bg-white dark:bg-slate-900 p-0 overflow-hidden flex flex-col rounded-lg sm:rounded-xl">
            {openProject && (
              <>
                {/* Fixed Header */}
                <DialogHeader className="px-4 sm:px-6 pt-4 sm:pt-6 pb-4 border-b bg-white dark:bg-slate-900 shrink-0">
                  <DialogTitle className="text-xl sm:text-2xl pr-8">
                    {openProject.title}
                  </DialogTitle>
                  <DialogDescription className="mt-2">
                    <Badge>{openProject.category}</Badge>
                  </DialogDescription>
                </DialogHeader>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto overscroll-contain">
                  <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-6">
                    {/* Project Video or Image - Now with smaller, more appropriate size */}
                    <div className="w-full max-w-2xl mx-auto">
                      <div className="aspect-video w-full overflow-hidden rounded-lg relative bg-gray-100 dark:bg-gray-800">
                        {openProject.videoUrl ? (
                          <div className="relative w-full h-full">
                            {/* Thumbnail shown during loading */}
                            <Image
                              src={openProject.image}
                              alt={openProject.title}
                              fill
                              className="object-cover w-full h-full"
                              sizes="(max-width: 768px) 95vw, 672px"
                              priority={openProject.featured}
                            />
                            {/* YouTube embed with autoplay */}
                            <iframe
                              src={`${getYouTubeEmbedUrl(
                                openProject.videoUrl
                              )}?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1&enablejsapi=1`}
                              title={openProject.title}
                              className="absolute inset-0 w-full h-full rounded-lg"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                              referrerPolicy="strict-origin-when-cross-origin"
                              loading="lazy"
                            />
                          </div>
                        ) : (
                          <Image
                            src={openProject.image}
                            alt={openProject.title}
                            fill
                            className="object-cover w-full h-full"
                            sizes="(max-width: 768px) 95vw, 672px"
                            priority={openProject.featured}
                          />
                        )}
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="space-y-6 w-full max-w-2xl mx-auto">
                      <div>
                        <h4 className="font-semibold text-base sm:text-lg mb-3">
                          Description
                        </h4>
                        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                          {openProject.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-base sm:text-lg mb-3">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {openProject.technologies.map((tech) => (
                            <Badge
                              key={tech.name}
                              className={`bg-slate-900 dark:bg-black text-white text-xs sm:text-sm p-2 rounded-sm shadow-sm hover:bg-blue-500`}
                            >
                              {tech.name}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 pt-4 pb-6">
                        {openProject.demoUrl && (
                          <Button asChild className="w-full sm:w-auto">
                            <a
                              href={openProject.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="mr-2 h-4 w-4" />
                              View Demo
                            </a>
                          </Button>
                        )}
                        {openProject.codeUrl && (
                          <Button
                            variant="outline"
                            asChild
                            className="w-full sm:w-auto"
                          >
                            <a
                              href={openProject.codeUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Code className="mr-2 h-4 w-4" />
                              View Code
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
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
