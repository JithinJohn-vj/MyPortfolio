import { motion } from "framer-motion";
import { experiences } from "@/utils/constants.tsx";

export default function Experience() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="experience" className="py-20 bg-surface/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-2"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary/30 transform md:translate-x-px"></div>
          
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company + experience.period}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col md:flex-row mb-16 last:mb-0"
            >
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                  {experience.period}
                </span>
                <h3 className="text-xl font-semibold">{experience.title}</h3>
                <h4 className="text-lg text-white/70 font-medium mb-2">{experience.company}</h4>
                <span className="inline-block px-3 py-1 rounded-md bg-surface text-white/60 text-xs font-medium">{experience.location}</span>
              </div>
              <div className="md:w-1/2 md:pl-12 relative">
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-0 top-0 w-4 h-4 rounded-full bg-primary -translate-x-1/2 md:-translate-x-2"></div>
                <ul className="space-y-3 text-white/80 list-disc list-outside pl-6">
                  {experience.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
