interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

// EDIT YOUR EXPERIENCE DATA HERE
const experiences: Experience[] = [
  {
    title: 'Intern Software Developer',
    company: 'Resolution8 (Accountancy Performance Tools)',
    period: '2025 – Present',
    description: [
      'Designed and implemented a Reference Data Editor web application to manage invoicing targets, status mappings, and staff information.',
      'Built front-end pages using ASP.NET Razor Pages and C#, integrating with a PostgreSQL database.',
      'Collaborated with the client to refine requirements and iteratively improve UX and data workflows.',
    ],
  },
  {
    title: 'Master of Information Technology Student',
    company: 'University of Waikato',
    period: '2024 – Present',
    description: [
      'Coursework in web development, databases, cloud technologies, and software engineering.',
      'Built multiple course projects including full-stack web apps and data visualisation dashboards.',
      'Developed skills in React, TypeScript, PostgreSQL, and Power BI.',
    ],
  },
  {
    title: 'Front End Developer (Freelance)',
    company: 'Various Clients',
    period: '2023 – 2024',
    description: [
      'Created responsive web interfaces using React and modern CSS frameworks.',
      'Improved website performance and accessibility for small business clients.',
      'Collaborated with designers to implement pixel-perfect UI designs.',
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="content-section">
      <h2 className="section-title">Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="timeline-marker"></div>
            <div className="experience-card">
              <div className="experience-header">
                <h3 className="experience-title">
                  {exp.title} <span className="company">@ {exp.company}</span>
                </h3>
                <span className="experience-period">{exp.period}</span>
              </div>
              <ul className="experience-description">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

