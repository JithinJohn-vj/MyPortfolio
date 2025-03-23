import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { projects } from "@/utils/constants.tsx";

export default function Projects() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-2"></div>
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
              <Card className="bg-surface rounded-xl overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-500 h-full">
                <div className="h-48 bg-surface/80 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 group-hover:opacity-75 transition-opacity"></div>
                  <div className="w-full h-full bg-surface flex items-center justify-center text-primary/30">
                    {project.icon}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-white/70 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium">{tech}</span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors flex items-center">
                      <FaExternalLinkAlt className="h-4 w-4 mr-1" />
                      Demo
                    </a>
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors flex items-center">
                      <FaCode className="h-4 w-4 mr-1" />
                      Code
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
