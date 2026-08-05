import { useEffect, useRef, useState } from 'react';
import { skills } from '../data/resume';
import './Skills.css';

function SkillBar({ skill, inView }) {
  const barRef = useRef(null);

  useEffect(() => {
    if (inView && barRef.current) {
      barRef.current.style.width = `${(skill.level / 5) * 100}%`;
    }
  }, [inView, skill.level]);

  return (
    <div className="skill-item">
      <div className="skill-header">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-meta">{skill.level}/5 · {skill.yearsExp}y · {skill.lastUsed}</span>
      </div>
      <div className="skill-bar-bg">
        <div className="skill-bar" ref={barRef}></div>
      </div>
    </div>
  );
}

export function Skills() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const current = sectionRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <section className="skills" id="skills" ref={sectionRef}>
      <div className="skills-content">
        <h2>Technical Stack</h2>

        {skills.map((category) => (
          <div key={category.category} className="skill-category">
            <h3 className="category-title">{category.category}</h3>
            <div className="skill-list">
              {category.items.map((item) => (
                <SkillBar key={item.name} skill={item} inView={inView} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
