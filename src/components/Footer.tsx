import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm text-muted-foreground">
            © {year} Yasaswini Tatikonda
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
