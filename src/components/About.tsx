import { motion } from 'framer-motion';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.sectionTitle}>
          <span className={styles.sectionNumber}>01.</span> About Me
        </h2>
        <div className={styles.content}>
          {/* EDIT YOUR ABOUT TEXT HERE */}
          <p>
            I'm a passionate front-end developer with a deep appreciation for clean code
            and thoughtful design. My journey in web development began with a curiosity
            about how beautiful interfaces come to life, and it has evolved into a
            commitment to building <strong>accessible, performant, and user-friendly</strong>{' '}
            digital experiences.
          </p>
          <p>
            Currently, I'm pursuing my Master of Information Technology at the{' '}
            <a href="#" className={styles.accentLink}>
              University of Waikato
            </a>{' '}
            in Hamilton, New Zealand, where I'm expanding my knowledge of modern web
            technologies, software engineering principles, and data systems. My academic
            background in economics has given me a unique perspective on problem-solving
            and data analysis, which I bring to every project I work on.
          </p>
          <p>
            I specialize in <strong>React, TypeScript, and modern CSS</strong>, and I'm
            always exploring new frameworks and tools that can help me build better
            products. I've worked on various projects ranging from internal tools and
            dashboards to full-stack web applications, always focusing on creating
            intuitive user experiences.
          </p>
          <p>
            When I'm not coding, I enjoy exploring new technologies, contributing to
            open-source projects, and working on personal side projects. I'm particularly
            interested in data visualization and cloud technologies, and I love learning
            about the latest trends in UI/UX design. I also enjoy playing basketball and
            reading about technology and design in my spare time.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
