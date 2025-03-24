
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="container mx-auto px-4 pt-32 pb-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-primary font-semibold mb-2">Full Stack Developer</h2>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Jithin <span className="text-primary">John</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl">
                Transforming ideas into exceptional digital experiences through modern web technologies and innovative solutions.
              </p>
            </motion.div>

            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                View Projects
              </Button>
              <a href="/Jithin_John_CV.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10">
                  Download CV
                </Button>
              </a>
            </motion.div>

            <motion.div 
              className="flex gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaEnvelope size={24} />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-blue-500 to-purple-500 rounded-full blur opacity-75 animate-pulse"/>
              <div className="relative rounded-full overflow-hidden border-2 border-primary/30 aspect-square">
                <img 
                  src="/profile.jpg" 
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
