import { Navigation } from '@/components/navigation/Navigation';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { TechStack } from '@/components/sections/TechStack';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { BackgroundEffects } from '@/components/effects/BackgroundEffects';

export default function Home() {
  return (
    <main className="relative bg-slate-900 text-white overflow-x-hidden">
      <BackgroundEffects />
      <Navigation />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
