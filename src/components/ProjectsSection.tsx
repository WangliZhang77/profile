interface Project {
  name: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

// EDIT YOUR PROJECTS DATA HERE
const projects: Project[] = [
  {
    name: 'Reference Data Editor',
    description:
      'An internal web tool for managing invoicing targets, status mappings, refresh schedules, and staff information for an accountancy performance system.',
    technologies: ['C#', '.NET', 'Razor Pages', 'PostgreSQL', 'Entity Framework'],
    github: '#',
    demo: '#',
  },
  {
    name: 'FreshFruit Online Store',
    description:
      'A full-stack demo e-commerce site for a virtual fruit shop, featuring product listings, shopping cart, coupon system, and order management dashboard.',
    technologies: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/wanglizhang/freshfruit',
    demo: '#',
  },
  {
    name: 'Audiobookshelf Volume Control Enhancement',
    description:
      'A contribution to an open-source audiobook platform to improve the volume control UI with smooth fade-in/fade-out, mute/unmute behavior, and mode labels.',
    technologies: ['Vue', 'TypeScript', 'UX'],
    github: '#',
    demo: '#',
  },
  {
    name: 'Data Visualisation Dashboards',
    description:
      'Several academic dashboards using Power BI and web charts to visualise economic and technical data with interactive filters and drill-down capabilities.',
    technologies: ['Power BI', 'SQL', 'Data Visualisation', 'JavaScript'],
    github: '#',
    demo: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="content-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-links">
              {project.github && (
                <a
                  href={project.github}
                  className="project-link"
                  target={project.github !== '#' ? '_blank' : undefined}
                  rel={project.github !== '#' ? 'noopener noreferrer' : undefined}
                >
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  className="project-link"
                  target={project.demo !== '#' ? '_blank' : undefined}
                  rel={project.demo !== '#' ? 'noopener noreferrer' : undefined}
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

