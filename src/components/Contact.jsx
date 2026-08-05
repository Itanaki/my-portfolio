import { profile } from '../data/resume';
import './Contact.css';

export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <h2>Get in Touch</h2>

        <div className="contact-block">
          <p className="contact-prompt">→ Let's work together</p>

          <div className="contact-links">
            <a href={`mailto:${profile.email}`} className="contact-link">
              <span className="link-label">Email</span>
              <span className="link-value">{profile.email}</span>
            </a>

            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="link-label">GitHub</span>
              <span className="link-value">github.com/Itanaki</span>
            </a>
          </div>
        </div>

        <footer className="footer">
          <p>
            <span className="footer-status">● Online</span>
            · Built with React + Vite · © 2026 Enzo Padual
          </p>
        </footer>
      </div>
    </section>
  );
}
