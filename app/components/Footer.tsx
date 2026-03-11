"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
];

const navLinks = [
  { name: "首页", href: "#hero" },
  { name: "项目", href: "#projects" },
  { name: "技能", href: "#skills" },
  { name: "经历", href: "#experience" },
  { name: "联系", href: "#contact" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-[rgba(255,255,255,0.1)] bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <motion.a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#hero");
              }}
              className="text-xl font-bold text-white tracking-tight"
              whileHover={{ scale: 1.05 }}
            >
              Portfolio
            </motion.a>
            <p className="text-sm text-[#a1a1a6]">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm text-[#a1a1a6] hover:text-white transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#a1a1a6] hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.name}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
