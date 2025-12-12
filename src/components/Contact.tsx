import { motion } from 'framer-motion';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className={styles.container}
      >
        <h2 className={styles.title}>Get In Touch</h2>
        <p className={styles.text}>
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best to
          get back to you!
        </p>
        <a href="mailto:wangli@example.com" className={styles.button}>
          Say Hello
        </a>
      </motion.div>
    </section>
  );
}
