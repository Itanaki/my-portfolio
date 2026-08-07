import { useState } from 'react';
import { curatedCertifications, allCertifications } from '../data/resume';
import { useInView } from '../hooks/useInView';
import '../styles/Certifications.css';

export function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const [ref, isInView] = useInView();

  const extraCerts = allCertifications.filter(
    (cert) => !curatedCertifications.some((c) => c.name === cert.name)
  );

  return (
    <section className="certifications" ref={ref}>
      <div className={`certs-content ${isInView ? 'animate' : ''}`}>
        <h2>Certifications & Learning</h2>

        <div className="cert-group">
          <h3 className="cert-group-title">Highlighted Certifications</h3>
          <div className="cert-chips">
            {curatedCertifications.map((cert) => (
              <div key={cert.name} className="cert-chip">
                <span className="cert-name">{cert.name}</span>
                <span className="cert-date">{cert.date}</span>
              </div>
            ))}
          </div>
        </div>

        {!showAll && extraCerts.length > 0 && (
          <button
            className="expand-btn"
            onClick={() => setShowAll(true)}
          >
            Show all {allCertifications.length} certifications
          </button>
        )}

        {showAll && (
          <div className="cert-group">
            <h3 className="cert-group-title">All Certifications</h3>
            <div className="cert-list">
              {allCertifications.map((cert) => (
                <div key={cert.name} className="cert-row">
                  <span className="cert-name-row">{cert.name}</span>
                  <span className="cert-date-row">{cert.date}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
