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
    context: "Automated enterprise document processing by building fine-tuned transformer pipelines and NLP systems that replaced manual workflows, now processing 20K+ documents daily in production.",
    techStack: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg" },
    ],
    bullets: [
      "Fine-tuned LayoutLMv3 on 500+ domain-specific document templates for layout extraction, achieving 96% field accuracy, integrated with Tesseract OCR into a production pipeline processing 20K+ documents/day.",
      "Trained NER model on domain-specific annotated corpus using spaCy and transformer backbone, achieving 91% F1 on entity extraction across document fields.",
      "Engineered chain-of-thought prompt templates for multi-class document classification, improving accuracy by 28% vs zero-shot baseline on internal benchmark.",
      "Built production feedback loop routing misclassified documents into retraining dataset, improving model accuracy by 12% over 3 automated retraining cycles.",
      "Implemented data drift detector comparing live request distribution against training baseline, triggering automated retraining pipeline before accuracy SLA breach.",
      "Containerized 6 ML microservices using Docker multi-stage builds, reducing production image size from 8GB to 1.2GB and cutting cold start time by 68%.",
      "Deployed ML services on Kubernetes with blue-green rollouts, enabling zero-downtime model updates and automated rollback on performance regression.",
    ],
  },
  {
    id: "isu-research",
    company: "Iowa State University",
    logo: iowaStateLogo,
    role: "Software Developer & Research Assistant",
    location: "Ames, Iowa",
    timeline: "Feb 2024 – May 2025",
    context: "Built production GenAI systems including multimodal RAG pipelines, fine-tuned LLMs, and multi-agent frameworks serving 1,000+ daily users in a university research environment.",
    techStack: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    ],
    bullets: [
      "Architected multimodal RAG pipeline ingesting PDFs, Office docs, and images with hybrid text and visual retrieval, MinerU-based parsing, and cross-modal knowledge graph, achieving 99% retrieval accuracy on 1,000+ daily queries.",
      "Implemented dual evaluation strategy using RAGAS (faithfulness, answer relevancy, context precision, recall) achieving 0.91 average score on 200-query test set, and LLM-as-judge with GPT-4 achieving 0.84 correlation with human preference scores.",
      "Built multi-step LLM agent with 8 custom tools including web search, SQL, and code execution, reducing analyst research time by 70% on structured tasks.",
      "Implemented multi-hop RAG with citation verification requiring every factual claim to be grounded in retrieved context, reducing unsupported LLM responses by 78%.",
      "Built CLIP-based multimodal retrieval enabling semantic text-to-image search across document corpus, reducing manual visual search time by 80%.",
      "Fine-tuned GPT-4 for automated XML document conversion, achieving 83% schema compliance accuracy vs rule-based baseline.",
      "Deployed async FastAPI inference service handling 2,000+ concurrent requests at sub-200ms P99 latency with LLM token streaming, reducing perceived response latency by 70%.",
    ],
  },
  {
    id: "accenture",
    company: "Accenture",
    logo: accentureLogo,
    role: "Software Engineer",
    location: "Remote",
    timeline: "Oct 2022 – Dec 2023",
    context: "Designed and scaled enterprise backend APIs handling 100K+ daily requests, cutting endpoint latency by 32% and reducing production incident resolution time by 48%.",
    techStack: [
      { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
      { name: ".NET Core", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    ],
    bullets: [
      "Cut mean time to resolution for production incidents by 48% via centralized error handling, structured JSON logging, and distributed request tracing with correlation IDs.",
      "Reduced PostgreSQL endpoint latency by 32% by eliminating N+1 query patterns, adding composite indexes, and introducing query result caching on high-traffic endpoints.",
      "Maintained 99.9% uptime across microservices through health check endpoints, graceful shutdown handling, and automated alerting on error rate thresholds.",
      "Built RESTful APIs in ASP.NET Core processing 50K-100K+ daily requests with request validation, middleware pipelines, and layered service architecture for clean separation of concerns.",
      "Decomposed monolithic service logic into independently deployable microservices, enabling targeted scaling and reducing blast radius of service failures.",
      "Hardened inter-service communication with Polly-based retry policies and circuit breakers, eliminating cascading failures from transient downstream outages.",
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

      {experience.context && (
        <div className="px-6 pb-4">
          <p className="text-sm text-muted-foreground border-l-2 border-primary/40 pl-3 italic">{experience.context}</p>
        </div>
      )}

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
