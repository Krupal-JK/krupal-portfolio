'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'krupaljada9857@gmail.com',
    href: 'mailto:krupaljada9857@gmail.com',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: 'https://linkedin.com',
    gradient: 'from-cyan-500 to-purple-500',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'View my repositories',
    href: 'https://github.com',
    gradient: 'from-purple-500 to-pink-500',
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:krupaljada9857@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
  };

  return (
    <section id="contact" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-2xl text-slate-300 font-light mb-2">
            Let&apos;s build scalable systems together.
          </p>
          <p className="text-lg text-slate-400">
            Open to new opportunities and collaborations
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6"
          >
            {contactLinks.map((contact, index) => (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="bg-white/5 backdrop-blur-md border-white/10 p-6 hover:bg-white/10 transition-all duration-300 group hover:scale-105">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${contact.gradient} p-0.5 flex-shrink-0`}>
                        <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center group-hover:bg-slate-800 transition-colors">
                          <contact.icon className="w-7 h-7 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-1">{contact.label}</h3>
                        <p className="text-sm text-slate-400">{contact.value}</p>
                      </div>
                    </div>
                  </Card>
                </a>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Card className="bg-white/5 backdrop-blur-md border-white/10 p-8 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500 min-h-[150px] resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-xl shadow-lg shadow-cyan-500/20 transition-all hover:shadow-cyan-500/40"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
