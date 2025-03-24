import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-purple-100/30 backdrop-blur-[1px]" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Hi, I'm <span className="text-blue-600">Jithin John</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Full Stack Developer specializing in building exceptional digital experiences. 
              I craft clean, professional, and scalable web applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                View Projects
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600">
                Download CV
              </Button>
            </div>
            <div className="flex gap-4 mt-8">
              <a href="https://github.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:contact@example.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                <FaEnvelope size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-72 h-72 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 blur-2xl opacity-20" />
              <img
                src="/profile.jpg"
                alt="Profile"
                className="relative rounded-full w-full h-full object-cover border-8 border-white shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}