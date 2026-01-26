import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/alikh2001', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ali-harkuni/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:gmail : aliharkuni7@gmail.com', label: 'Email' },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 relative border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <motion.a
              href="#"
              className="text-2xl font-bold gradient-text inline-block mb-2"
              whileHover={{ scale: 1.05 }}
            >
              DH
            </motion.a>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Divansab Harkuni. All rights reserved.
            </p>
          </div>

          {/* Credit */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Designed & Developed</span>
            <span>by Divansab Harkuni</span>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                whileHover={{ y: -2 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
            
            <motion.button
              onClick={scrollToTop}
              className="p-3 ml-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
