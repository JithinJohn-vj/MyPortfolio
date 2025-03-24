import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FaExternalLinkAlt, FaCode, FaArrowRight } from "react-icons/fa";
import { projects } from "@/utils/constants.tsx";

export default function Projects() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 -left-32 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent inline-block">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-400 mx-auto mt-2"></div>
          <p className="text-white/60 max-w-2xl mx-auto mt-4">
            Here are some of the projects I've worked on. Each project demonstrates my skills and experience in different areas of software development.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Card className="bg-gradient-to-b from-gray-800/50 to-gray-900/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-primary/20 hover:translate-y-[-5px] transition-all duration-500 h-full border border-white/5 hover:border-primary/30">
                <div className="h-48 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="w-full h-full flex items-center justify-center text-primary/40 group-hover:text-primary/60 transition-colors duration-500">
                    {project.icon}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-white/70 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-full bg-gray-800 border border-primary/20 text-primary/80 text-xs font-medium">{tech}</span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors flex items-center group/link">
                        <FaExternalLinkAlt className="h-4 w-4 mr-1" />
                        <span>Demo</span>
                        <FaArrowRight className="h-3 w-0 overflow-hidden group-hover/link:w-3 group-hover/link:ml-1 transition-all duration-300" />
                      </a>
                    </div>
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors flex items-center group/code">
                      <FaCode className="h-4 w-4 mr-1" />
                      <span>Code</span>
                      <FaArrowRight className="h-3 w-0 overflow-hidden group-hover/code:w-3 group-hover/code:ml-1 transition-all duration-300" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
