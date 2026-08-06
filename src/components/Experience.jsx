import { experience } from '../data/resume';
import '../styles/Experience.css';

export function Experience() {
  return (
    <section className="experience">
      <div className="experience-content">
        <h2>Experience</h2>

        <div className="timeline">
          {experience.map((entry, idx) => (
            <div key={idx} className="timeline-entry">
              <div className="timeline-marker"></div>
              <div className="timeline-item">
                <div className="entry-header">
                  <h3>{entry.role}</h3>
                  <span className="entry-company">{entry.company}</span>
                  <span className="entry-period">{entry.period}</span>
                </div>
                <p className="entry-description">{entry.description}</p>
                <div className="entry-highlights">
                  {entry.highlights.map((h) => (
                    <span key={h} className="highlight-tag">{h}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
