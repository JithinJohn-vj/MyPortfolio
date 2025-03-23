import { useState } from "react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", values);
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-2"></div>
          <p className="text-white/70 mt-4 max-w-xl mx-auto">Feel free to reach out for collaboration opportunities or just to say hi!</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="bg-surface rounded-xl shadow-lg h-full">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-primary">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <FaEnvelope className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-white/70">Email</h4>
                      <a href="mailto:jithinjohnptr@gmail.com" className="text-white hover:text-primary transition-colors">jithinjohnptr@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <FaPhone className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-white/70">Phone</h4>
                      <a href="tel:+46731545578" className="text-white hover:text-primary transition-colors">+46 731 545 578</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <FaMapMarkerAlt className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-white/70">Location</h4>
                      <p className="text-white">Gothenburg, Sweden</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-sm font-medium text-white/70 mb-4">Connect with me</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://linkedin.com/in/jithin-john-8a6a3421a" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://github.com/JithinJohn-vj" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                      aria-label="GitHub"
                    >
                      <FaGithub className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-surface rounded-xl shadow-lg h-full">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-primary">Send Me a Message</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/70">Name</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="bg-background border border-white/10 text-white focus:ring-primary/50"
                              placeholder="Your name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/70">Email</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              type="email"
                              className="bg-background border border-white/10 text-white focus:ring-primary/50"
                              placeholder="Your email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/70">Subject</FormLabel>
                          <FormControl>
                            <Input 
                              {...field}
                              className="bg-background border border-white/10 text-white focus:ring-primary/50"
                              placeholder="Subject"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/70">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              {...field}
                              rows={4}
                              className="bg-background border border-white/10 text-white focus:ring-primary/50"
                              placeholder="Your message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-primary text-white hover:bg-primary/90" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
