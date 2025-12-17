import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Twitter,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import MagneticButton from "../MagneticButton";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "abdullahkatha196@gmail.com",
    href: "mailto:abdullahkatha196@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 324 5789291",
    href: "tel:+923245789291 ",
  },
  { icon: MapPin, label: "Location", value: "Pakistan", href: "#" },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-wider">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Have a project in mind? I'd love to hear about it. Drop me a message
            and let's create something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 glass-card rounded-xl group hover:bg-secondary/50 transition-colors"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      {item.label}
                    </div>
                    <div className="font-medium group-hover:text-primary transition-colors">
                      {item.value}
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <MagneticButton key={social.label}>
                    <a
                      href={social.href}
                      aria-label={social.label}
                      className="p-3 glass-card rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  </MagneticButton>
                ))}
              </div>
            </motion.div>

            {/* Decorative element */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.1 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              className="hidden lg:block font-mono text-sm text-muted-foreground"
            >
              <pre>
                {`// Let's build something
// amazing together

const collaboration = {
  ideas: "unlimited",
  coffee: "optional",
  success: "guaranteed"
};`}
              </pre>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 rounded-2xl space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="relative">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formState.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`bg-secondary/50 border-border focus:border-primary transition-colors ${
                      focusedField === "name" ? "ring-2 ring-primary/20" : ""
                    }`}
                  />
                  <motion.div
                    initial={false}
                    animate={{ scaleX: focusedField === "name" ? 1 : 0 }}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent origin-left"
                  />
                </div>
                <div className="relative">
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formState.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`bg-secondary/50 border-border focus:border-primary transition-colors ${
                      focusedField === "email" ? "ring-2 ring-primary/20" : ""
                    }`}
                  />
                  <motion.div
                    initial={false}
                    animate={{ scaleX: focusedField === "email" ? 1 : 0 }}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent origin-left"
                  />
                </div>
              </div>

              <div className="relative">
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formState.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`bg-secondary/50 border-border focus:border-primary transition-colors ${
                    focusedField === "subject" ? "ring-2 ring-primary/20" : ""
                  }`}
                />
                <motion.div
                  initial={false}
                  animate={{ scaleX: focusedField === "subject" ? 1 : 0 }}
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent origin-left"
                />
              </div>

              <div className="relative">
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`bg-secondary/50 border-border focus:border-primary transition-colors resize-none ${
                    focusedField === "message" ? "ring-2 ring-primary/20" : ""
                  }`}
                />
                <motion.div
                  initial={false}
                  animate={{ scaleX: focusedField === "message" ? 1 : 0 }}
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent origin-left"
                />
              </div>

              <MagneticButton className="w-full">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 group"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </MagneticButton>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
