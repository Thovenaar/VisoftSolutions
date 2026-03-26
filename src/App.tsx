import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen relative noise">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="relative py-10 px-6 border-t border-gray-200/50 dark:border-white/[0.04]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400 dark:text-gray-600">
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} ViSoft Solutions</span>
            <span className="hidden md:inline">·</span>
            <span>KVK 94481784</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
