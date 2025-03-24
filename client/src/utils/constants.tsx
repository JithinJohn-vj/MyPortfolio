import { ReactNode } from "react";
import { 
  FaCode, 
  FaLaptopCode, 
  FaServer, 
  FaDatabase, 
  FaTools,
  FaShoppingCart,
  FaHeart,
} from "react-icons/fa";

export const navLinks = [
  { id: "hero", name: "Home" },
  { id: "about", name: "About" },
  { id: "skills", name: "Skills" },
  { id: "projects", name: "Projects" },
  { id: "experience", name: "Experience" },
  { id: "contact", name: "Contact" },
];

export const education = [
  {
    degree: "Information Technology (Incomplete)",
    institution: "Halmstad University, Sweden",
    period: "Sep 2021 - 2023",
  },
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "University of Calicut, India",
    period: "Aug 2016 - Dec 2019",
  },
  {
    degree: "Bachelor of Computer Science (BSc)",
    institution: "University of Calicut, India",
    period: "Aug 2013 - Apr 2016",
  },
];

export const certifications = [
  {
    name: "Learning Python Generators",
    issuer: "LinkedIn Learning",
    description: "In-depth knowledge of yield statements, iterators, and generator expressions",
  },
  {
    name: "SQL Practice: Intermediate Queries",
    issuer: "LinkedIn Learning",
    description: "Complex SQL queries, joins, subqueries, and aggregate functions",
  },
];

export interface SkillCategory {
  name: string;
  icon: ReactNode;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: <FaCode className="h-5 w-5 mr-2" />,
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "C++", "C", "Java"],
  },
  {
    name: "Frontend Development",
    icon: <FaLaptopCode className="h-5 w-5 mr-2" />,
    skills: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
  },
  {
    name: "Backend Development",
    icon: <FaServer className="h-5 w-5 mr-2" />,
    skills: ["Django", "FastAPI", "Node.js", "Spring Boot"],
  },
  {
    name: "Databases",
    icon: <FaDatabase className="h-5 w-5 mr-2" />,
    skills: ["MongoDB", "MySQL", "SQLite", "PostgreSQL"],
  },
  {
    name: "DevOps & Cloud",
    icon: <FaTools className="h-5 w-5 mr-2" />,
    skills: ["Docker", "Kubernetes", "Terraform", "GCP", "GitHub", "VSCode", "PyCharm", "NPM", "Figma"],
  },
];

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  demoLink: string;
  codeLink: string;
  icon: ReactNode;
}

export const projects: Project[] = [
  {
    title: "Online Ordering System",
    description: "A full-stack food ordering platform with seamless order processing and administration.",
    technologies: ["React.js", "Next.js", "Django", "Docker", "Kubernetes"],
    demoLink: "#",
    codeLink: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 3h18v18H3V3z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.75 9.75L14.25 9.75" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.75 14.25L14.25 14.25" />
      </svg>
    ),
  },
  {
    title: "E-commerce Platform",
    description: "Full-fledged e-commerce system with product management, cart functionality, and order processing.",
    technologies: ["Django", "MongoDB", "GCP", "Docker"],
    demoLink: "#",
    codeLink: "#",
    icon: <FaShoppingCart className="h-20 w-20" />,
  },
  {
    title: "Matrimonial Website",
    description: "Feature-rich platform with user profiles, match recommendations, and secure messaging.",
    technologies: ["Django", "MongoDB", "Tailwind CSS", "JavaScript"],
    demoLink: "#",
    codeLink: "#",
    icon: <FaHeart className="h-20 w-20" />,
  },
];

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    title: "Frontend Developer",
    company: "LymData Labs Pvt. Ltd.",
    location: "Remote - Cochin, India",
    period: "April 2024 – March 2025",
    responsibilities: [
      "Designed and developed a youth skill development platform using Next.js, Tailwind CSS, Bootstrap, and MongoDB.",
      "Led the development of an online restaurant platform incorporating table booking and food delivery features using AWS and Next.js.",
      "Engineered a car rental platform with seamless booking functionality, ensuring a smooth user experience.",
      "Optimized company websites to improve performance, speed, and user engagement.",
    ],
  },
  {
    title: "Python Developer",
    company: "Softroniics Solutions",
    location: "Calicut, India",
    period: "July 2023 – March 2024",
    responsibilities: [
      "Developed a full-fledged e-commerce platform using Python Django and MongoDB, deployed on Google Cloud Platform (GCP) with Docker containers.",
      "Built a matrimonial website featuring user profiles, match recommendations, and secure messaging using Django, MongoDB, and Tailwind CSS.",
      "Implemented containerized applications with Docker & Kubernetes for seamless scalability and efficient deployment.",
      "Developed robust backend APIs and cloud-based deployments, enhancing system reliability and performance.",
    ],
  },
  {
    title: "Junior Python Developer",
    company: "Softroniics Solutions",
    location: "Palakkad, India",
    period: "Dec 2019 – Dec 2021",
    responsibilities: [
      "Designed and implemented an Inventory Management System using Python and Django, streamlining stock tracking and reporting.",
      "Developed a CRM tool to facilitate business operations, leveraging Python and MongoDB for efficient data management.",
      "Built an e-voting application with encrypted authentication and real-time vote tracking, ensuring security and transparency.",
      "Gained practical experience in deploying applications on cloud infrastructure, enhancing development efficiency.",
    ],
  },
];