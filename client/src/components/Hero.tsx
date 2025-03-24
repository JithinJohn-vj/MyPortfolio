
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-hero-pattern bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
      
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      </div>
      
      <div className="container mx-auto px-4 pt-32 pb-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h2 
                className="text-primary text-xl font-semibold tracking-wider"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Full Stack Developer
              </motion.h2>
              <motion.h1 
                className="text-6xl md:text-7xl font-bold text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Jithin <span className="bg-gradient-to-r from-primary via-blue-400 to-purple-500 text-transparent bg-clip-text">John</span>
              </motion.h1>
              <motion.p 
                className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Creating exceptional digital experiences through innovative solutions and modern technologies.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                View Projects
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
                Download CV
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <a href="#" className="text-white/70 hover:text-primary transition-colors">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/70 hover:text-primary transition-colors">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/70 hover:text-primary transition-colors">
                <FaEnvelope className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-blue-500 to-purple-600 rounded-full blur opacity-30 animate-pulse"></div>
              <div className="relative rounded-full overflow-hidden border-2 border-white/10 aspect-square">
                <img 
                  src="/profile.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <FaArrowDown className="w-6 h-6 text-primary animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
