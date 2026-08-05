import { profile } from '../data/resume';
import './About.css';

export function About() {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2>About</h2>
        <p className="about-text">{profile.bio}</p>
        <div className="about-highlights">
          <div className="highlight">
            <strong>Education</strong>
            <p>B.S. Computer Engineering · Technological Institute of the Philippines</p>
          </div>
          <div className="highlight">
            <strong>Current</strong>
            <p>{profile.role} in Cognizant's GenC program</p>
          </div>
          <div className="highlight">
            <strong>Specialization</strong>
            <p>Full-stack web development, cloud infrastructure, embedded systems</p>
          </div>
        </div>
      </div>
    </section>
  );
}
