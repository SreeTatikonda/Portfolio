import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sentences = [
  "I automate the boring stuff.",
  "Building AI that doesn't hallucinate (too much).",
  "Debugging is just detective work with snacks.",
  "Open to new opportunities.",
  "Still learning. Always will be.",
  "Looking for a team that appreciates good commit messages.",
];

const Terminal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSentence = sentences[currentIndex];
    const typeSpeed = isDeleting ? 30 : 50;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentSentence.length) {
          setDisplayText(currentSentence.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % sentences.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex]);

  return (
    <motion.div
      className="max-w-2xl mx-auto"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/50">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-4 text-gray-400 text-sm font-mono">terminal</span>
        </div>

        {/* Terminal content */}
        <div className="p-6 font-mono text-sm md:text-base">
          <div className="flex items-start gap-2">
            <span className="text-green-400">$</span>
            <span className="text-gray-300">
              {displayText}
              <motion.span
                className="inline-block w-2 h-5 bg-green-400 ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Terminal;