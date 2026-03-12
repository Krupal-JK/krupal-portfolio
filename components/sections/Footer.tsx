'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Mail, href: 'mailto:krupaljada9857@gmail.com', label: 'Email' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
];

export function Footer() {
  return (
    <footer className="relative py-12 overflow-hidden bg-slate-900 border-t border-white/10">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex gap-6 mb-8"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-cyan-500/50 transition-all group"
              >
                <link.icon className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center"
          >
            <p className="text-slate-400 mb-2 flex items-center justify-center gap-2">
              Built with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> using Next.js & Framer Motion
            </p>
            <p className="text-sm text-slate-500">
              © 2026 Krupal Jada. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
