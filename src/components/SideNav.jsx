import { profile } from '../data/resume';
import '../styles/SideNav.css';

export function SideNav() {
  return (
    <nav className="side-nav">
      <div className="side-nav-links">
        <a
          href={`mailto:${profile.email}`}
          className="side-nav-link"
          aria-label="Email"
          title="Email"
        >
          ✉
        </a>

        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="side-nav-link"
          aria-label="GitHub"
          title="GitHub"
        >
          ⚡
        </a>

        <a
          href="https://www.linkedin.com/in/enzo-padual/"
          target="_blank"
          rel="noopener noreferrer"
          className="side-nav-link"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          ◉
        </a>
      </div>
      <div className="side-nav-line"></div>
    </nav>
  );
}
