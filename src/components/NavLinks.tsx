import { useEffect, useRef } from 'react';
import styles from './NavLinks.module.css';

interface NavLinksProps {
  activeSection: string;
}

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export default function NavLinks({ activeSection }: NavLinksProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className={styles.nav}>
      <ol className={styles.navList}>
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <li key={item.id} className={styles.navItem}>
              <a
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                <span className={styles.navNumber}>0{navItems.indexOf(item) + 1}.</span>
                {item.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

