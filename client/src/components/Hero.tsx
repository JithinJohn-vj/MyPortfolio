import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <motion.div 
            className="lg:col-span-3 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary font-mono">Hello, my name is</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              Jithin John
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white/70">
              Software Developer
            </h2>
            <p className="text-white/70 text-lg max-w-xl">
              I build scalable web applications using Python, React.js, and Next.js. Passionate about cloud technologies and DevOps practices.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                onClick={() => {
                  const element = document.getElementById("contact");
                  element?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Get in touch
              </Button>
              <Button 
                onClick={() => {
                  const element = document.getElementById("projects");
                  element?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10"
              >
                View my work
              </Button>
            </div>
            <div className="flex space-x-5 pt-4">
              <a 
                href="https://linkedin.com/in/jithin-john-8a6a3421a" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://github.com/JithinJohn-vj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
          <motion.div 
            className="lg:col-span-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20 blur-2xl absolute top-4 left-4"></div>
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full border-2 border-primary/30 overflow-hidden relative z-10">
                <div className="w-full h-full bg-surface flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
