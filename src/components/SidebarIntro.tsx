import NavTabs from './NavTabs';
import SocialLinks from './SocialLinks';

export default function SidebarIntro() {
  return (
    <aside className="sidebar">
      <div className="name-section">
        <h1 className="name-highlight">
          <span className="name-first">Wangli</span>
          <span className="name-last"> Zhang</span>
        </h1>
        <p className="job-title">Front End Engineer</p>
        <p className="tagline">
          I build accessible, pixel-perfect digital experiences for the web.
        </p>
      </div>
      <NavTabs />
      <SocialLinks />
    </aside>
  );
}

