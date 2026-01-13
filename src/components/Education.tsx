import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Award, BookOpen } from "lucide-react";
import iowaStateLogo from "@/assets/iowa-state-logo.png";
import gmrLogo from "@/assets/gmr-logo.png";

const education = {
  masters: {
    degree: "Master of Science in Computer Science",
    school: "Iowa State University",
    location: "Ames, Iowa",
    graduation: "December 2025",
    logo: iowaStateLogo,
  },
  bachelors: {
    degree: "Bachelor of Technology in Electrical and Electronics Engineering",
    school: "GMR Institute of Technology",
    location: "Andhra Pradesh, India",
    graduation: "May 2022",
    logo: gmrLogo,
  },
};

const coursework = [
  "Data Structures & Algorithms",
  "Operating Systems",
  "Cloud Computing",
  "Machine Learning",
  "Advanced Principles of System Architecture",
  "Computer Networks",
  "Deep Learning",
  "Principles of System Design",
];

const certifications = [
  {
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
  },
  {
    title: "Microsoft Certified: Security, Compliance, and Identity Fundamentals (SC-900)",
    issuer: "Microsoft",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 bg-gradient-to-b from-transparent to-muted/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span> & Certifications
          </h2>
        </motion.div>

        {/* Degrees */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[education.masters, education.bachelors].map((edu, index) => (
            <motion.div
              key={edu.degree}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl glass-button flex items-center justify-center shrink-0 p-2 bg-white">
                  <img
                    src={edu.logo}
                    alt={edu.school}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    <span className="text-xs font-medium text-primary uppercase tracking-wide">
                      {index === 0 ? "Master's" : "Bachelor's"}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-primary font-medium mb-2">{edu.school}</p>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.graduation}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coursework & Certifications */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Coursework */}
          <motion.div
            className="glass-card p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-5">
              <BookOpen className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Relevant Coursework</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {coursework.map((course) => (
                <motion.span
                  key={course}
                  className="px-3 py-1.5 text-sm glass-button rounded-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  {course}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            className="glass-card p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-5">
              <Award className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div key={cert.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
                      alt="Microsoft"
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{cert.title}</p>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
