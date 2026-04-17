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
  context?: string;
  techStack: { name: string; icon: string }[];
  bullets: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: "cds",
    company: "CDS Global",
    logo: cdsLogo,
    role: "Software Engineer (AI Ops)",
    location: "Des Moines, Iowa",
    timeline: "May 2025 – Present",
    context: "Replaced manual document processing workflows with intelligent AI systems, improving speed, accuracy, and operational scale.",
    techStack: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg" },
    ],
    bullets: [
      "Designed and trained a LayoutLM transformer model fine-tuned on domain-specific document layouts, achieving 88% layout prediction accuracy across 500+ document variants.",
      "Built an NLP-based field extraction pipeline using HuggingFace tokenizers and custom post-processing logic to parse structured data from unstructured document images, achieving 96% extraction accuracy.",
      "Developed and deployed FastAPI microservices to serve ML model inference in production, processing 15,000+ documents per day with sub-second response latency under concurrent load.",
      "Trained a supervised ML classifier to detect duplicate processing patterns from feature-engineered request metadata, reducing redundant pipeline executions by 35%.",
      "Implemented a data augmentation strategy for low-frequency document layouts to address class imbalance and improve model generalization on edge cases.",
      "Containerized all ML services using Docker and orchestrated deployments via Kubernetes, enabling horizontal scaling and zero-downtime rollouts.",
      "Built automated retraining pipelines triggered by accuracy degradation thresholds, reducing manual model maintenance overhead.",
      "Integrated structured logging using Python logging libraries with centralized log aggregation, enabling rapid debugging of extraction failures across 15K+ daily documents.",
      "Conducted error analysis on misclassified documents using confusion matrices and confidence score distributions to prioritize retraining efforts.",
      "Maintained Git-based version control with feature branching, pull request reviews, and CI/CD pipeline integration for model and service deployments.",
    ],
  },
  {
    id: "isu-research",
    company: "Iowa State University",
    logo: iowaStateLogo,
    role: "Software Developer & Research Assistant",
    location: "Ames, Iowa",
    timeline: "Feb 2024 – May 2025",
    context: "Built AI-powered applications to make course knowledge instantly accessible to students and simplify academic planning.",
    techStack: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    ],
    bullets: [
      "Architected a RAG pipeline using LangChain, ChromaDB vector store, and OpenAI-compatible LLM endpoints, achieving 99% retrieval accuracy and 97% citation accuracy on course-grounded Q&A.",
      "Implemented retrieval-gated generation to filter LLM responses through a relevance threshold before delivery, significantly reducing hallucinated or unsupported answers.",
      "Chunked and embedded course documents using sentence-transformers, storing dense vector representations in ChromaDB with metadata filters for instructor and course-level scoping.",
      "Built a collaborative filtering recommendation engine combining user interaction history with sentence-transformer embeddings to generate ranked course suggestions, reducing student planning time by 60%.",
      "Developed a FastAPI backend exposing LLM inference and RAG retrieval as REST endpoints, handling 1,000+ daily requests at ~200ms average latency with async request handling.",
      "Built a React/TypeScript frontend with real-time streaming chat, inline citation rendering, and an interactive course recommendation UI connected to the FastAPI backend.",
      "Designed the PostgreSQL schema for storing user sessions, query history, and retrieved document metadata to support evaluation and analytics.",
      "Evaluated system performance using precision, recall, and MRR metrics across retrieval and generation stages, iterating on chunk size, overlap, and embedding models to improve results.",
      "Debugged cross-stack issues including ChromaDB retrieval mismatches, FastAPI async bottlenecks, and React state management bugs in the streaming chat component.",
      "Maintained full codebase on Git with documented architecture diagrams, API specs, and research evaluation reports for faculty review.",
    ],
  },
  {
    id: "accenture",
    company: "Accenture",
    logo: accentureLogo,
    role: "Software Engineer",
    location: "Remote",
    timeline: "Oct 2022 – Dec 2023",
    context: "Developed and maintained enterprise backend services for high-traffic production systems, balancing feature delivery with performance and reliability.",
    techStack: [
      { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
      { name: ".NET Core", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    ],
    bullets: [
      "Designed and built RESTful APIs in ASP.NET Core handling 50K–100K+ daily requests, implementing request validation, middleware pipelines, and service layer abstractions for clean separation of concerns.",
      "Optimized PostgreSQL query performance by rewriting N+1 query patterns, adding composite indexes, and introducing query result caching, reducing endpoint latency by 32%.",
      "Implemented centralized error handling middleware, structured JSON logging, and distributed request tracing using correlation IDs, reducing mean time to resolution for production incidents by 48%.",
      "Refactored tightly coupled monolithic service logic into independently deployable microservices, improving fault isolation and enabling targeted scaling of high-load components.",
      "Maintained 99.9% uptime across microservices by implementing health check endpoints, graceful shutdown handling, and automated alerting on error rate thresholds.",
      "Integrated third-party REST APIs and internal services using HttpClient factories with retry policies and circuit breakers via Polly, improving inter-service reliability.",
      "Wrote unit and integration tests using xUnit and Moq, maintaining test coverage across critical API endpoints and service layer logic.",
      "Triaged production bugs by analyzing structured logs, reproducing failures in staging environments, and deploying hotfixes through the CI/CD pipeline with minimal service disruption.",
      "Participated in code reviews on GitHub, enforcing .NET coding standards, SOLID principles, and REST API design consistency across the team.",
      "Collaborated in two-week agile sprints using Jira for task tracking, consistently delivering committed features and documenting technical decisions in Confluence.",
    ],
  },
];

const ExperienceCard = ({ experience, index }: { experience: ExperienceItem; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="glass-card overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
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
              {experience.context && (
                <p className="text-sm italic text-muted-foreground mt-3 mb-4">{experience.context}</p>
              )}
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
            My journey so far
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
