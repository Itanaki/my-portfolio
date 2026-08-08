import { projects } from "../data/resume";
import { useInView } from "../hooks/useInView";
import { useTypewriter } from "../hooks/useTypewriter";
import "../styles/Projects.css";

export function Projects() {
  const [ref, isInView] = useInView();
  const headingRef = useTypewriter({ speed: 40 });

  return (
    <section className="projects" id="work" ref={ref}>
      <div className={`projects-content ${isInView ? 'animate' : ''}`}>
        <h2 ref={headingRef}>Featured Projects</h2>

        <div className="projects-list">
          {projects.map((project, idx) => {
            const hasDemo = Boolean(project.demo);
            const hasRepo = Boolean(project.link);
            return (
              <div
                key={idx}
                className={`project-entry ${idx % 2 === 0 ? "left" : "right"}`}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} className="project-thumb"/>
                </div>

                <div className="project-info">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <span className="project-year">{project.year}</span>
                  </div>

                  <div className="project-tech">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-chip">
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-actions">
                    {hasDemo && (
                      <a
                        href={project.demo}
                        className="project-button"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project →
                      </a>
                    )}

                    {hasRepo && (
                      <a
                        href={project.link}
                        className="project-button secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Repo →
                      </a>
                    )}
                  </div>

                  {!hasDemo && !hasRepo && (
                    <span className="project-link-missing">
                      No public link available
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
