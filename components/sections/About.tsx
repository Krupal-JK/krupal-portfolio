'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Code, DollarSign, Users, GitBranch } from 'lucide-react';
import { Card } from '@/components/ui/card';

const stats = [
  { icon: Briefcase, value: '3.5+', label: 'Years Experience', gradient: 'from-blue-500 to-cyan-500' },
  { icon: Code, value: '10+', label: 'Backend Systems Built', gradient: 'from-cyan-500 to-purple-500' },
  { icon: DollarSign, value: 'Multiple', label: 'Payment Gateway Integrations', gradient: 'from-purple-500 to-pink-500' },
  { icon: Users, value: 'Led', label: 'Production Team', gradient: 'from-pink-500 to-blue-500' },
];

const highlights = [
  '3.5+ years backend development experience',
  'Team Lead experience managing cross-functional teams',
  'Microservices architecture expertise',
  'Real-time applications with WebSocket',
  'Payment gateway integrations (Stripe, PayPal)',
  'Blockchain systems and crypto integrations',
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Passionate about building robust, scalable backend systems that power modern applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <Card className="bg-white/5 backdrop-blur-md border-white/10 p-8 hover:bg-white/10 transition-all duration-300 group hover:scale-105 hover:shadow-2xl">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.gradient} p-0.5 mb-6 mx-auto`}>
                  <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-white/5 backdrop-blur-md border-white/10 p-12 hover:bg-white/10 transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full" />
                  Expertise
                </h3>
                <ul className="space-y-4">
                  {highlights.map((highlight, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                      className="flex items-start gap-3 text-slate-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="relative"
                >
                  <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                    <div className="text-center">
                      <GitBranch className="w-20 h-20 text-cyan-400 mx-auto mb-4" />
                      <p className="text-lg font-semibold text-white">Building the Future</p>
                      <p className="text-sm text-slate-400">One API at a time</p>
                    </div>
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl -z-10" />
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
