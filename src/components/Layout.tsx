import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import styles from './Layout.module.css';

export default function Layout() {
  const [activeSection, setActiveSection] = useState('about');

  // Scrollspy implementation
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = ['about', 'experience', 'projects', 'contact'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <div className={styles.layout}>
      <Sidebar activeSection={activeSection} />
      <main className={styles.content}>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
