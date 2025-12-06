import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";
import MagneticButton from "./MagneticButton";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <motion.a
              href="#home"
              className="text-2xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
            >
              {"<Dev />"}
            </motion.a>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart className="h-3 w-3 text-destructive fill-destructive" /> by Alex Johnson
            </p>
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Back to top */}
          <MagneticButton>
            <button
              onClick={scrollToTop}
              className="p-3 glass-card rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </MagneticButton>
        </div>

        {/* Bottom text */}
        <div className="mt-8 pt-8 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved. Built with React, Tailwind CSS & Framer Motion.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
