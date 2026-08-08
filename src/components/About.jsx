import { profile } from '../data/resume';
import { useInView } from '../hooks/useInView';
import { useTypewriter } from '../hooks/useTypewriter';
import '../styles/About.css';

export function About() {
  const [ref, isInView] = useInView();
  const headingRef = useTypewriter({ speed: 40 });
  const bioRef = useTypewriter({ speed: 30 });

  return (
    <section className="about" id="about" ref={ref}>
      <div className={`about-content ${isInView ? 'animate' : ''}`}>
        <h2 ref={headingRef}>About</h2>
        <p className="about-text" ref={bioRef}>{profile.bio}</p>
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
