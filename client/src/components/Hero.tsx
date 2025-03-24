import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaArrowDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen relative bg-gradient-to-br from-background via-background/95 to-primary/10 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary">
              Full Stack Developer
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-purple-500">
              Jithin John
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-lg">
              Crafting innovative web solutions with modern technologies and best practices
            </p>
            <div className="flex gap-4">
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                size="lg"
              >
                View Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 bg-primary/10 text-primary hover:bg-primary/20"
              >
                Contact Me
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/20 to-blue-500/20 rounded-full blur-3xl" />
              <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full border-2 border-primary/30 overflow-hidden relative z-10">
                <img 
                  src="/profile.jpg" 
                  alt="Jithin John" 
                  className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <FaArrowDown className="animate-bounce text-primary" size={24} />
      </motion.div>
    </section>
  );
}