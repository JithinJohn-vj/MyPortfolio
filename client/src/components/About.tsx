import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaDownload } from "react-icons/fa";
import { education, certifications } from "@/utils/constants.tsx";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-2"></div>
        </motion.div>
        
        <motion.div 
          className="bg-surface rounded-xl p-6 sm:p-8 md:p-10 shadow-lg max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-white/80 mb-6 leading-relaxed">
            Passionate and detail-oriented Software Developer with hands-on experience in building scalable web applications using Python (Django, FastAPI), React.js, and Next.js. Proficient in cloud technologies such as Google Cloud Platform (GCP) and experienced in both frontend and backend development.
          </p>
          <p className="text-white/80 mb-6 leading-relaxed">
            Enthusiastic about expanding knowledge in DevOps practices, including Docker, Kubernetes, and Terraform. Strong problem-solving skills and a keen ability to design, develop, and optimize applications.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Education</h3>
              <ul className="space-y-4">
                {education.map((edu, index) => (
                  <li key={index} className="border-l-2 border-primary/30 pl-4 py-1">
                    <h4 className="font-medium">{edu.degree}</h4>
                    <p className="text-white/60 text-sm">{edu.institution}</p>
                    <p className="text-white/60 text-sm">{edu.period}</p>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Certifications</h3>
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="bg-surface border border-white/10 hover:border-primary/30 transition-colors">
                    <CardContent className="p-4">
                      <h4 className="font-medium">{cert.name}</h4>
                      <p className="text-white/60 text-sm">{cert.issuer}</p>
                      <p className="text-white/70 text-sm mt-2">{cert.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a href="/public/Jithin_John_CV.pdf" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline" 
                className="bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20"
              >
                <FaDownload className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
