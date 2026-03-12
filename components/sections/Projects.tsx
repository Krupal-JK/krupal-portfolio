'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Trippica',
    subtitle: 'Travel Booking Platform',
    role: 'Team Lead',
    description: 'Global flight and hotel booking system with wallet functionality, crypto token rewards, and membership discounts.',
    tech: ['NestJS', 'MongoDB', 'Blockchain APIs', 'Payment Gateways'],
    features: [
      'Crypto token payment system',
      'Membership rewards',
      'Travel credits',
      'Flight & hotel booking APIs',
    ],
    link: 'https://trippica.com',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'GTP',
    subtitle: 'Real Estate Tokenization Platform',
    role: 'Backend Developer',
    description: 'Real-time property investment and tokenized asset trading platform.',
    tech: ['Node.js', 'NestJS', 'MongoDB'],
    features: [
      'Property investment system',
      'Role Based Authentication',
      'Admin dashboard',
      'Payment gateway integration',
    ],
    link: 'https://gtp.es',
    gradient: 'from-cyan-500 to-purple-500',
  },
  {
    title: 'Property Management',
    subtitle: 'Real-Time Platform',
    role: 'Backend Developer',
    description: 'Real-time property platform with chat, notifications, and payment integration.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Socket.io', 'Stripe'],
    features: [
      'Real-time chat',
      'Property management',
      'Notifications system',
    ],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Sports Analytics',
    subtitle: 'Performance Tracking System',
    role: 'Backend Developer',
    description: 'Athlete performance tracking system generating dynamic PDF reports and analytics.',
    tech: ['Node.js', 'PostgreSQL', 'EJS'],
    features: [
      'Authentication system',
      'Dynamic PDF reports',
      'Data analytics',
    ],
    gradient: 'from-pink-500 to-blue-500',
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-400">
            Building production-grade applications that scale
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.8 }}
            >
              <Card className="bg-white/5 backdrop-blur-md border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 group hover:scale-[1.02] h-full flex flex-col">
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-lg text-cyan-400 mb-2">{project.subtitle}</p>
                      <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                        {project.role}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-slate-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-400 mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-cyan-500/30 text-cyan-300 bg-cyan-500/5">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 mt-auto pt-4">
                    {project.link && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 flex-1"
                        asChild
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
