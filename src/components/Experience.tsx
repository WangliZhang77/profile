import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Experience.module.css';

interface Job {
  company: string;
  title: string;
  period: string;
  responsibilities: string[];
}

// EDIT YOUR EXPERIENCE DATA HERE
const jobs: Job[] = [
  {
    company: 'Resolution8',
    title: 'Intern Software Developer',
    period: '2025 – Present',
    responsibilities: [
      'Designed and implemented a Reference Data Editor web application to manage invoicing targets, status mappings, and staff information.',
      'Built front-end pages using ASP.NET Razor Pages and C#, integrating with a PostgreSQL database.',
      'Collaborated with the client to refine requirements and iteratively improve UX and data workflows.',
      'Developed reusable components and improved application performance by optimizing database queries.',
    ],
  },
  {
    company: 'University of Waikato',
    title: 'Master of Information Technology Student',
    period: '2024 – Present',
    responsibilities: [
      'Coursework in web development, databases, cloud technologies, and software engineering.',
      'Built multiple course projects including full-stack web apps and data visualisation dashboards.',
      'Developed skills in React, TypeScript, PostgreSQL, and Power BI.',
      'Completed projects focusing on accessibility, performance optimization, and modern web standards.',
    ],
  },
  {
    company: 'Freelance',
    title: 'Front End Developer',
    period: '2023 – 2024',
    responsibilities: [
      'Created responsive web interfaces using React and modern CSS frameworks.',
      'Improved website performance and accessibility for small business clients.',
      'Collaborated with designers to implement pixel-perfect UI designs.',
      'Delivered projects on time while maintaining high code quality standards.',
    ],
  },
];

export default function Experience() {
  const [activeJob, setActiveJob] = useState(0);

  return (
    <section id="experience" className={styles.experience}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.sectionTitle}>
          <span className={styles.sectionNumber}>02.</span> Where I've Worked
        </h2>
        <div className={styles.container}>
          <div className={styles.tabs}>
            {jobs.map((job, index) => (
              <button
                key={job.company}
                className={`${styles.tab} ${activeJob === index ? styles.active : ''}`}
                onClick={() => setActiveJob(index)}
                aria-selected={activeJob === index}
              >
                {job.company}
              </button>
            ))}
          </div>
          <div className={styles.content}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeJob}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className={styles.jobTitle}>
                  {jobs[activeJob].title}{' '}
                  <span className={styles.company}>@ {jobs[activeJob].company}</span>
                </h3>
                <p className={styles.period}>{jobs[activeJob].period}</p>
                <ul className={styles.responsibilities}>
                  {jobs[activeJob].responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
