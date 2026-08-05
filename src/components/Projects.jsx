import { projects } from '../data/resume';
import './Projects.css';

export function Projects() {
  return (
    <section className="projects" id="work">
      <div className="projects-content">
        <h2>Featured Projects</h2>

        <div className="projects-list">
          {projects.map((project, idx) => (
            <div key={idx} className={`project-entry ${idx % 2 === 0 ? 'left' : 'right'}`}>
              <div className="project-image">
                <div className="placeholder"></div>
              </div>

              <div className="project-info">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className="project-year">{project.year}</span>
                </div>

                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-chip">{t}</span>
                  ))}
                </div>

                <p className="project-description">{project.description}</p>

                <a href="#" className="project-button">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
