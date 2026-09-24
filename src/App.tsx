import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Ventures from './components/Ventures';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Ventures />
        <About />
        <Contact />
      </main>
    </div>
  );
}
