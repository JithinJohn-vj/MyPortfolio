import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { skillCategories } from "@/utils/constants.tsx";

export default function Skills() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 bg-surface/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-2"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={category.name === "DevOps & Cloud" ? "md:col-span-2" : ""}
            >
              <Card className="bg-background rounded-xl shadow-lg h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 flex items-center text-primary">
                    {category.icon}
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="skill-badge inline-flex px-3 py-1.5 rounded-md bg-primary/10 text-primary border border-primary/30 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                      >
                        {skill}
                      </span>
                    ))}
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
