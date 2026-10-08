import { ThemeProvider } from './context/ThemeContext';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { TimelineSection } from './components/TimelineSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gallery-white text-ink selection:bg-[#0071e3]/20 selection:text-ink">
        <Navigation />
        <main>
          <Hero />
          <ProjectsSection />
          <TimelineSection />
          <ServicesSection />
          <ContactSection />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
