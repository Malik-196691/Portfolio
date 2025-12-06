import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "./MagneticButton";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("light");
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card py-3" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          className="text-2xl font-bold gradient-text"
          whileHover={{ scale: 1.05 }}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#home");
          }}
        >
          {"<Dev />"}
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item, index) => (
            <MagneticButton key={item.name}>
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
              </motion.button>
            </MagneticButton>
          ))}
        </div>

        {/* Right side buttons */}
        <div className="flex items-center gap-4">
          <MagneticButton>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </MagneticButton>

          <MagneticButton>
            <Button
              onClick={() => scrollToSection("#contact")}
              className="hidden sm:flex bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Let's Talk
            </Button>
          </MagneticButton>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-card mt-4 mx-6 rounded-xl overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left py-2 text-lg text-muted-foreground hover:text-foreground hover:pl-4 transition-all"
                >
                  {item.name}
                </motion.button>
              ))}
              <Button
                onClick={() => scrollToSection("#contact")}
                className="mt-4 bg-gradient-to-r from-primary to-accent text-primary-foreground"
              >
                Let's Talk
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
