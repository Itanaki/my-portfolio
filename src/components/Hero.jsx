import { profile } from '../data/resume';
import '../styles/Hero.css';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-main">
          <h1 className="hero-title">Enzo Daren B. Padual</h1>
          <p className="hero-role">{profile.role} at {profile.company}</p>
        </div>

        <div className="status-strip">
          <span className="status-indicator">● {profile.status}</span>
          <div className="stack-chips">
            <span className="chip">React</span>
            <span className="chip">TypeScript</span>
            <span className="chip">Node.js</span>
            <span className="chip">Azure</span>
          </div>
        </div>

        <div className="hero-cta">
          <a href="#work" className="cta-button primary">View My Work</a>
          <a href="#contact" className="cta-button secondary">Get in Touch</a>
        </div>
      </div>
    </section>
  );
}
