import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

function App() {
  const activeSection = useScrollSpy([
    "hero",
    "about",
    "skills",
    "projects",
    "experience",
    "contact",
  ], {
    rootMargin: "-100px 0px -100px 0px"
  });

  return (
    <div className="bg-background text-foreground font-sans">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
