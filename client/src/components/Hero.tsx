
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                Welcome to my portfolio
              </h2>
            </motion.div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Jithin John</span>
            </h1>
            <div className="text-2xl text-gray-700 dark:text-gray-300 mb-8 h-12">
              <Typewriter
                options={{
                  strings: [
                    'Full Stack Developer',
                    'UI/UX Designer',
                    'Problem Solver'
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Crafting exceptional digital experiences through clean, efficient, and scalable solutions. 
              Passionate about building innovative web applications that make a difference.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full">
                View Projects
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 rounded-full">
                <FaDownload className="mr-2" /> Download CV
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex gap-6 mt-8 justify-center lg:justify-start"
            >
              {[
                { icon: FaGithub, link: "https://github.com" },
                { icon: FaLinkedin, link: "https://linkedin.com" },
                { icon: FaEnvelope, link: "mailto:contact@example.com" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.link}
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-2xl transition-colors"
                >
                  <social.icon />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-72 h-72 mx-auto">
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-blue-400 opacity-20"
              ></motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="absolute inset-4 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-500 p-1"
              >
                <img
                  src="/profile.jpg"
                  alt="Jithin John"
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
