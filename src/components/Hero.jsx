import { profile } from '../data/resume';
import portraitImage from '../assets/me.png';
import { GeometricBackground } from './GeometricBackground';
import '../styles/Hero.css';
import '../styles/GeometricBackground.css';

export function Hero() {
  return (
    <section className="hero">
      <GeometricBackground />
      <div className="hero-content">
        <div className="hero-grid">
          <div className="hero-main">
            <h1 className="hero-title">Enzo Daren B. Padual</h1>
            <p className="hero-role">{profile.role} at {profile.company}</p>

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

          <div className="hero-portrait-container">
            <div className="portrait-frame">
              <img src={portraitImage} alt="Enzo Daren B. Padual" className="portrait-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
