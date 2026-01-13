import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import tammyImage from "@/assets/tammy.png";
import kojoImage from "@/assets/kojo.png";
import abiramiImage from "@/assets/abirami.png";

const testimonials = [
  {
    name: "Tammy Griggs",
    role: "IT Developer and Manager, CDS Global",
    content: "It's been a real pleasure having Yasaswini on our development team. From day one, she brought a rare combination of curiosity, technical depth, and genuine enthusiasm. She's playing a key role in integrating AI into our systems, turning complex ideas into practical solutions.",
    photo: tammyImage,
  },
  {
    name: "Dr. Kojo Adu-Gyamfi",
    role: "Research Supervisor, Iowa State University",
    content: "Yasaswini played a key role in the success of the project, and I would confidently recommend her for work involving applied AI, RAG systems, and production-ready LLM applications. She was also a great collaborator throughout the project. Communication was clear, code reviews were thoughtful, and she was always willing to dig into complex problems with the rest of the team. Her attention to detail helped us ship a more stable and polished product.",
    photo: kojoImage,
  },
  {
    name: "Abirami Sowrirajan",
    role: "Scrum Master, Accenture",
    content: "Yasaswini consistently delivered her tasks on time and exceeded expectations with her problem-solving mindset. She approached challenges methodically and delivered quality results that moved our projects forward.",
    photo: abiramiImage,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What People <span className="gradient-text">Say</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Feedback from colleagues, mentors, and collaborators
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-8 md:p-12"
            >
              <Quote className="w-12 h-12 text-primary/30 mb-6" />
              
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8">
                "{testimonials[currentIndex].content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden">
                  <img 
                    src={testimonials[currentIndex].photo} 
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={prev}
              className="w-12 h-12 rounded-full glass-button flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-6" : "bg-primary/30"
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              className="w-12 h-12 rounded-full glass-button flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;