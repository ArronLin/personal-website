import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import MouseGlow from "./components/MouseGlow";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      {/* Mouse glow effect */}
      <MouseGlow />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
