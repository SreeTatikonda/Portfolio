import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, Calendar } from "lucide-react";
import cdsLogo from "@/assets/cds-global-logo.png";
import iowaStateLogo from "@/assets/iowa-state-logo.png";
import accentureLogo from "@/assets/accenture-logo.png";

interface ExperienceItem {
  id: string;
  company: string;
  logo: string;
  role: string;
  location: string;
  timeline: string;
  techStack: { name: string; icon: string }[];
  bullets: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: "cds",
    company: "CDS Global",
    logo: cdsLogo,
    role: "AI Associate - Operations Automation (CO-OP)",
    location: "Des Moines, Iowa",
    timeline: "May 2025 – Present",
    techStack: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg" },
      { name: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
    ],
    bullets: [
      "Built an OCR-to-JSON extraction pipeline using Tesseract, BERT, LayoutLM and rule-based normalization, improving extraction accuracy to 88% across multiple document formats.",
      "Fine-tuned LayoutLM to handle structurally inconsistent documents, raising model accuracy to 79% and improving end-to-end extraction performance to 91%.",
      "Created evaluation datasets from 15,000+ production documents to benchmark model performance, establish accuracy baselines and validate extraction quality across document types.",
      "Designed an NLP parser that identifies and extracts required fields even when OCR output is partially recognized or incomplete, achieving 94% accuracy.",
      "Built FastAPI backend services, containerized with Docker, deployed on Kubernetes, and validated endpoints using Postman.",
      "Built a .NET executable to interface the AI pipeline with legacy production systems, enabling direct system integration.",
      "Performed GPU-based model training and evaluation across multiple architectures, establishing performance benchmarks and supporting iterative model improvement.",
      "Collaborated with cross-functional teams to interpret extraction requirements, validate output quality and align technical decisions with operational needs.",
      "Managed Git workflows for reproducible experiments, structured branching and clean release preparation.",
    ],
  },
  {
    id: "isu-research",
    company: "Iowa State University",
    logo: iowaStateLogo,
    role: "Graduate Research Assistant (AI Full-Stack)",
    location: "Ames, Iowa",
    timeline: "Nov 2024 – Present",
    techStack: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    ],
    bullets: [
      "Designed and implemented an evaluation framework for LLM behavior in educational contexts, establishing metrics to measure citation accuracy, grounding consistency and response reliability across 1,000+ test scenarios.",
      "Built a RAG pipeline using ChromaDB embeddings and custom ranking logic, achieving 94% citation accuracy and a 97% retrieval success rate across 500+ evaluation queries.",
      "Developed simulation workflows to test model behavior under varied retrieval conditions, measuring how the system responds when high-quality sources are unavailable or retrieval confidence is low.",
      "Integrated Llama 3 and Gemma 7B through Ollama and configured prompts using Hugging Face and LangChain tools, enabling streaming inference with a 5.1-second first-token latency and reducing hallucination rates across 1,000+ tests.",
      "Designed and implemented a FastAPI backend with authenticated endpoints, asynchronous inference routing and structured logging, supporting 120 concurrent requests with a 400 RPS design target.",
      "Implemented monitoring systems to track retrieval performance, LLM latency metrics and grounding accuracy in real-time, providing observability into model behavior and system health.",
      "Implemented retrieval-confidence scoring with a Tavily fallback path, improving grounded response consistency to 98%.",
      "Developed the React and TypeScript frontend with reusable components, state management and real-time token streaming.",
      "Optimized retrieval and prompt strategies using Hugging Face evaluation utilities, improving grounding accuracy and cutting unsupported LLM outputs by 40%.",
      "Conducted comprehensive benchmarking across multiple dimensions including retrieval precision, citation accuracy, hallucination rates and response latency, connecting technical metrics to real-world usability outcomes.",
    ],
  },
  {
    id: "isu-app",
    company: "Iowa State University",
    logo: iowaStateLogo,
    role: "Software Developer – App Development",
    location: "Ames, Iowa",
    timeline: "Feb 2024 – Sept 2024",
    techStack: [
      { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ],
    bullets: [
      "Built a React Native mobile app using JavaScript and Redux, achieving 95% feature parity on iOS and Android.",
      "Developed Flask REST APIs with JWT authentication for secure image upload and ML inference.",
      "Integrated TensorFlow CNN models with 92% inference accuracy and supported 1,000+ image-processing requests per day.",
      "Designed a dual-database architecture using PostgreSQL for structured data and MongoDB for unstructured metadata.",
      "Improved frontend performance using lazy loading and virtualization, reducing page load time by 30%.",
      "Performed load testing with pytest, validating backend reliability under 500 concurrent transactions.",
    ],
  },
  {
    id: "accenture",
    company: "Accenture",
    logo: accentureLogo,
    role: "App Development Associate",
    location: "Bengaluru, India",
    timeline: "Oct 2022 – Dec 2023",
    techStack: [
      { name: ".NET Core", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
      { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
      { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg" },
      { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    ],
    bullets: [
      "Built .NET Core and ASP.NET APIs in C#, improving request performance through optimized routing and middleware design.",
      "Implemented OAuth 2.0 authentication for secure access to high-traffic internal services.",
      "Improved SQL Server performance by tuning queries and indexes, reducing latency by up to 35%.",
      "Enhanced API throughput with distributed caching and optimized data-access patterns.",
      "Created Azure DevOps pipelines for automated builds, testing and deployments, increasing release reliability.",
      "Developed unit and integration tests with xUnit and MSTest to reduce regression issues in production.",
      "Supported feature development and production deployments for services handling 100,000+ daily transactions.",
    ],
  },
];

const ExperienceCard = ({ experience }: { experience: ExperienceItem }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="glass-card overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-2xl"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl glass-button flex items-center justify-center shrink-0">
              <img
                src={experience.logo}
                alt={experience.company}
                className="w-7 h-7 object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                {experience.role}
              </h3>
              <p className="text-primary font-medium">{experience.company}</p>
              <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {experience.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {experience.timeline}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 flex-wrap">
              {experience.techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="w-8 h-8 rounded-lg glass-button flex items-center justify-center"
                  title={tech.name}
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-5 h-5 object-contain"
                  />
                </div>
              ))}
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
              className="w-10 h-10 rounded-full glass-button flex items-center justify-center shrink-0"
            >
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            </motion.div>
          </div>
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 100, damping: 15 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 border-t border-border/30">
              <ul className="space-y-3 mt-4">
                {experience.bullets.map((bullet, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="flex items-start gap-3 text-foreground/80"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    <span className="leading-relaxed">{bullet}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Building scalable solutions across AI, full-stack, and enterprise systems
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
