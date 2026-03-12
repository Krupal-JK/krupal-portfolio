'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Server, Database, Blocks, Wrench, Code as Code2, Container, GitBranch, DollarSign, Network } from 'lucide-react';
import { Card } from '@/components/ui/card';

const techCategories = [
  {
    category: 'Backend',
    icon: Server,
    gradient: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Node.js', level: 95 },
      { name: 'NestJS', level: 90 },
      { name: 'Express.js', level: 90 },
      { name: 'Socket.io', level: 85 },
    ],
  },
  {
    category: 'Databases',
    icon: Database,
    gradient: 'from-cyan-500 to-purple-500',
    skills: [
      { name: 'MongoDB', level: 95 },
      { name: 'PostgreSQL', level: 85 },
    ],
  },
  {
    category: 'Architecture',
    icon: Network,
    gradient: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Microservices', level: 85 },
      { name: 'REST APIs', level: 95 },
      { name: 'System Design', level: 80 },
    ],
  },
  {
    category: 'Integrations',
    icon: DollarSign,
    gradient: 'from-pink-500 to-blue-500',
    skills: [
      { name: 'Stripe', level: 90 },
      { name: 'PayPal', level: 85 },
      { name: 'Payment Gateways', level: 90 },
      { name: 'Blockchain APIs', level: 80 },
    ],
  },
  {
    category: 'Tools',
    icon: Wrench,
    gradient: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Docker', level: 80 },
      { name: 'Git', level: 90 },
      { name: 'AI Development Tools', level: 85 },
    ],
  },
];

export function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-slate-900" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-xl text-slate-400">
            Technologies I use to build scalable backend systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.1, duration: 0.8 }}
            >
              <Card className="bg-white/5 backdrop-blur-md border-white/10 p-8 hover:bg-white/10 transition-all duration-300 group hover:scale-105 h-full">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.gradient} p-0.5 mb-6`}>
                  <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center group-hover:bg-slate-800 transition-colors">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-6">{category.category}</h3>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.1, duration: 0.5 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300 font-medium">{skill.name}</span>
                        <span className="text-cyan-400 text-sm font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                          className={`h-full bg-gradient-to-r ${category.gradient} rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
