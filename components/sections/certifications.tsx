"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animations/fade-in";
import { certifications } from "@/lib/data";

export default function Certifications() {
  interface GetBadgeText {
    (issueDate: string): string;
  }

  const getBadgeText: GetBadgeText = (issueDate) => {
    try {
      const issueYear: number = new Date(issueDate).getFullYear();
      const currentYear: number = new Date().getFullYear();

      if (isNaN(issueYear)) {
        return "Verified";
      }

      return issueYear >= currentYear - 1 ? "Recently Obtained" : "Verified";
    } catch (error) {
      return "Verified";
    }
  };

  return (
    <section id="certifications" className="bg-muted/50 py-20">
      <div className="container px-4 md:px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
            Certifications
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-lg text-muted-foreground mb-16 max-w-3xl">
            I&apos;m committed to continuous learning and staying current with
            the latest technologies and methodologies. These certifications
            represent my dedication to professional growth.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {certifications.map((cert) => (
                  <CarouselItem
                    key={cert.id}
                    className="pl-2 md:pl-4 sm:basis-1/2 lg:basis-1/3"
                  >
                    <div className="h-full">
                      <Card className="h-full flex flex-col">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-xl">
                              {cert.title}
                            </CardTitle>
                          </div>
                          <CardDescription>
                            Issued by {cert.issuer}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                          <div className="flex flex-col space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Issued</span>
                              <span className="text-sm font-medium">
                                {cert.issueDate}
                              </span>
                            </div>
                            {cert.expirationDate && (
                              <div className="flex items-center justify-between">
                                <span className="text-sm">Expires</span>
                                <span className="text-sm font-medium">
                                  {cert.expirationDate}
                                </span>
                              </div>
                            )}
                            <div className="pt-3">
                              <Badge variant="outline" className="rounded-full">
                                {getBadgeText(cert.issueDate)}
                              </Badge>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter>
                          {cert.credentialUrl ? (
                            <Button
                              variant="outline"
                              className="w-full"
                              asChild
                            >
                              <a
                                href={cert.credentialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center"
                              >
                                View Credential
                                <ExternalLink className="ml-2 h-4 w-4" />
                              </a>
                            </Button>
                          ) : (
                            <Button
                              variant="outline"
                              className="w-full"
                              disabled
                            >
                              Certificate Available
                            </Button>
                          )}
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Navigation Buttons */}
              <div className="hidden md:block">
                <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2" />
              </div>

              {/* Mobile Navigation - MOVED INSIDE the Carousel */}
              <div className="flex justify-center mt-8 gap-2 md:hidden">
                <CarouselPrevious className="relative inset-auto translate-x-0 translate-y-0" />
                <CarouselNext className="relative inset-auto translate-x-0 translate-y-0" />
              </div>
            </Carousel>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
