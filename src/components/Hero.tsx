import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 sm:px-8 pt-16">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-brand-accent text-sm sm:text-base mb-4 font-mono">
            Hi, my name is
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brand-text-primary mb-4">
            Wangli Zhang.
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-text-secondary mb-6">
            Software Developer & MInfoTech Student
          </h2>
          <p className="text-lg sm:text-xl text-brand-text-secondary max-w-2xl mx-auto mb-8">
            I build web applications and internal tools that connect clean interfaces with robust backends and data.
          </p>
          <p className="text-sm sm:text-base text-brand-muted max-w-2xl mx-auto mb-12">
            I'm interested in web development, databases, data visualization, and cloud technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('#projects')}
              className="px-6 py-3 border-2 border-brand-accent text-brand-accent rounded hover:bg-brand-accent/10 transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-bg"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-6 py-3 bg-brand-accent text-brand-bg rounded hover:bg-brand-accent/90 transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-bg font-medium"
            >
              Contact Me
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

