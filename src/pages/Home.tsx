import Hero from '@/sections/Hero';
import Metrics from '@/sections/Metrics';
import FeaturedProjects from '@/sections/FeaturedProjects';
import About from '@/sections/About';
import Experience from '@/sections/Experience';
import Technologies from '@/sections/Technologies';
import Education from '@/sections/Education';
import CallToAction from '@/sections/CallToAction';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Metrics />
      <FeaturedProjects />
      <About />
      <Experience />
      <Technologies />
      <Education />
      <CallToAction />
      <Footer />
    </main>
  );
}
