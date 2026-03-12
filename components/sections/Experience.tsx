'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';

const experiences = [
  {
    company: 'Elaunch Infotech',
    role: 'Backend Developer & Team Lead',
    period: '2024 - Present',
    current: true,
    responsibilities: [
      'Leading backend and web development teams',
      'Architecting scalable backend systems',
      'Building blockchain-based reward systems',
      'Designing REST APIs for travel platforms',
    ],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    company: 'Daydreamsoft LLP',
    role: 'Backend Developer',
    period: '2022 - 2024',
    current: false,
    responsibilities: [
      'Developed real-time applications',
      'Payment gateway integrations',
      'Property management backend',
      'Sports analytics systems',
    ],
    gradient: 'from-cyan-500 to-purple-500',
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-slate-900" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-slate-400">
            My professional journey in backend development
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-purple-500" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`relative mb-16 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:ml-0' : 'md:ml-auto'}`}>
                  <div className="absolute left-8 md:left-1/2 w-6 h-6 -ml-3 bg-slate-900 border-4 border-cyan-500 rounded-full z-10 flex items-center justify-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  </div>

                  <Card className="bg-white/5 backdrop-blur-md border-white/10 p-8 ml-20 md:ml-0 hover:bg-white/10 transition-all duration-300 group hover:scale-105">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-cyan-400 mb-2">{exp.company}</p>
                      </div>
                      <Briefcase className="w-8 h-8 text-cyan-400 flex-shrink-0" />
                    </div>

                    <div className="flex items-center gap-2 mb-6">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <p className="text-slate-400">
                        {exp.period}
                        {exp.current && (
                          <span className="ml-2 px-2 py-0.5 text-xs bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                            Current
                          </span>
                        )}
                      </p>
                    </div>

                    <div className={`w-full h-1 bg-gradient-to-r ${exp.gradient} rounded-full mb-6 opacity-50`} />

                    <div>
                      <h4 className="text-sm font-semibold text-slate-400 mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="flex items-start gap-2 text-slate-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                            <span className="text-sm leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
