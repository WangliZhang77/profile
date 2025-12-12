import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';
import styles from './Sidebar.module.css';

interface SidebarProps {
  activeSection: string;
}

export default function Sidebar({ activeSection }: SidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        {/* EDIT YOUR NAME HERE */}
        <h1 className={styles.name}>
          <span className={styles.nameHighlight}>Wangli</span>
          <span className={styles.nameRest}> Zhang</span>
        </h1>

        {/* EDIT YOUR JOB TITLE HERE */}
        <p className={styles.jobTitle}>Front End Engineer</p>

        {/* EDIT YOUR TAGLINE HERE */}
        <p className={styles.tagline}>
          I build accessible, detail-oriented digital experiences for the web.
        </p>

        <NavLinks activeSection={activeSection} />
        <SocialLinks />
      </div>
    </aside>
  );
}
