import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <motion.div 
            className="lg:col-span-3 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary font-mono tracking-wider">Hello, my name is</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              Jithin John
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white/80">
              Software Developer
            </h2>
            <p className="text-white/70 text-lg max-w-xl leading-relaxed">
              I build scalable web applications using Python, React.js, and Next.js. Passionate about cloud technologies and DevOps practices.
            </p>
            
            <div className="flex flex-wrap items-center gap-3 text-white/60 text-sm">
              <div className="flex items-center gap-1">
                <FaMapMarkerAlt className="text-primary" />
                <span>Gothenburg, Sweden</span>
              </div>
              <div className="flex items-center gap-1">
                <FaEnvelope className="text-primary" />
                <span>jithinjohnptr@gmail.com</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                onClick={() => {
                  const element = document.getElementById("contact");
                  element?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-full"
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
                className="border-primary text-primary hover:bg-primary/10 rounded-full"
              >
                View my work
              </Button>
            </div>
            <div className="flex space-x-5 pt-4">
              <a 
                href="https://www.linkedin.com/in/jithinjohn-dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary transition-colors transform hover:scale-110 duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://github.com/JithinJohn-vj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary transition-colors transform hover:scale-110 duration-200"
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
              <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-primary via-blue-500 to-purple-500 opacity-20 blur-2xl absolute top-4 left-4"></div>
              <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full border-2 border-primary/30 overflow-hidden relative z-10 group bg-gradient-to-br from-gray-900/50 to-black/80 p-1">
                <div className="w-full h-full bg-surface rounded-full flex items-center justify-center text-primary relative overflow-hidden shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 opacity-60"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-28 w-28 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
