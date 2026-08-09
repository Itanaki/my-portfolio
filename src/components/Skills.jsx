import { useEffect, useRef, useState } from 'react';
import { skills } from '../data/resume';
import { useTypewriter } from '../hooks/useTypewriter';
import { getSkillIcon } from '../utils/skillIcons';
import '../styles/Skills.css';

function SkillPill({ skill }) {
  const { icon: IconComponent, color } = getSkillIcon(skill.name);

  return (
    <div className="skill-pill" style={{ '--skill-color': color }}>
      <IconComponent className="skill-icon" />
      <span className="skill-pill-name">{skill.name}</span>
    </div>
  );
}

export function Skills() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const headingRef = useTypewriter({ speed: 40 });

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
        <h2 ref={headingRef}>Technical Skills</h2>

        {skills.map((category) => (
          <div key={category.category} className="skill-category">
            <h3 className="category-title">{category.category}</h3>
            <div className="skill-grid">
              {category.items.map((item) => (
                <SkillPill key={item.name} skill={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
