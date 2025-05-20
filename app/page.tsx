import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Education from "@/components/sections/education";
import Certifications from "@/components/sections/certifications";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}