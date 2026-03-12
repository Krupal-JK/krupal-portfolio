'use client';

import { motion } from 'framer-motion';
import { Database, Container, Code as Code2, Server, Blocks, GitBranch } from 'lucide-react';
import { Button } from '@/components/ui/button';

const techIcons = [
  { Icon: Server, label: 'Node.js', x: -100, y: -50, delay: 0 },
  { Icon: Code2, label: 'NestJS', x: 100, y: -80, delay: 0.2 },
  { Icon: Database, label: 'MongoDB', x: -80, y: 80, delay: 0.4 },
  { Icon: Database, label: 'PostgreSQL', x: 120, y: 60, delay: 0.6 },
  { Icon: Container, label: 'Docker', x: -120, y: 20, delay: 0.8 },
  { Icon: Blocks, label: 'Blockchain', x: 90, y: -20, delay: 1 },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {techIcons.map(({ Icon, label, x, y, delay }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 0.6,
                  scale: 1,
                  x: [x, x + 10, x],
                  y: [y, y - 10, y]
                }}
                transition={{
                  opacity: { delay: delay, duration: 0.5 },
                  scale: { delay: delay, duration: 0.5 },
                  x: { delay: delay + 0.5, duration: 3, repeat: Infinity, ease: "easeInOut" },
                  y: { delay: delay + 0.5, duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute left-1/2 top-0 transform -translate-x-1/2"
                style={{ marginLeft: `${x}px`, marginTop: `${y}px` }}
              >
                <div className="p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
              </motion.div>
            ))}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent"
            >
              Krupal Jada
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-2xl md:text-4xl font-semibold text-slate-300 mb-6"
            >
              Backend Developer & Team Lead
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-cyan-400 mb-6 font-light"
            >
              Building scalable backend systems, real-time applications, and payment infrastructures.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Results-driven backend developer with 3.5+ years of experience building scalable full-stack systems,
              microservices architectures, blockchain integrations, and payment platforms.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-cyan-500/20 transition-all hover:shadow-cyan-500/40"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg rounded-xl backdrop-blur-sm"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 px-8 py-6 text-lg rounded-xl backdrop-blur-sm"
                asChild
              >
                <a href="/Krupal_Resume.pdf" download>
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
