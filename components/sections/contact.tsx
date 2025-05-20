"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Github,
  Linkedin,
  Mail,
  Send,
  CheckCircle,
  MapPin,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FadeIn } from "@/components/animations/fade-in";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // This would normally send the form data to a server
    console.log(values);
    
    // Simulate a successful form submission
    setTimeout(() => {
      setSubmitted(true);
    }, 500);
  }

  return (
    <section id="contact" className="bg-background py-20">
      <div className="container px-4 md:px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
            Get In Touch
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <p className="text-lg text-muted-foreground mb-16 max-w-3xl">
            Have a project in mind or just want to connect? Feel free to reach out.
            I'm always open to discussing new opportunities and ideas.
          </p>
        </FadeIn>

        <div className="grid gap-10 lg:grid-cols-2">
          <FadeIn direction="right" delay={0.3}>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-muted-foreground">San Francisco, California</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a 
                    href="mailto:aditya.manoj.shinde@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    aditya.manoj.shinde@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="pt-6">
                <h3 className="font-medium mb-4">Connect with me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-card hover:bg-card/80 p-3 rounded-full transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/aditya-manoj-shinde" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-card hover:bg-card/80 p-3 rounded-full transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a 
                    href="mailto:aditya.manoj.shinde@gmail.com"
                    className="bg-card hover:bg-card/80 p-3 rounded-full transition-colors"
                  >
                    <Mail className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.4}>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center p-8 bg-card rounded-lg shadow-sm">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  <CheckCircle className="h-16 w-16 text-primary mb-4" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-center text-muted-foreground mb-6">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <Button onClick={() => setSubmitted(false)}>Send Another Message</Button>
              </div>
            ) : (
              <div className="bg-card p-8 rounded-lg shadow-sm">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Subject of your message" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Your message" 
                              className="min-h-[150px] resize-none" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </Form>
              </div>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}