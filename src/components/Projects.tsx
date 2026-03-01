import { useState } from "react";
import { projectsData } from "../data";
import "./Projects.css";

export default function Projects() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section className="projects" id="projects">
      <div className="projects__inner">
        <p className="section-label">What I've Built</p>
        <h2 className="section-title">Projects</h2>
        <div className="projects__list">
          {projectsData.map((p) => {
            const isOpen = expanded === p.title;
            return (
              <div
                className={`project-card${p.expandable ? " project-card--expandable" : ""}${isOpen ? " project-card--open" : ""}`}
                key={p.title}
                onClick={p.expandable ? () => setExpanded(isOpen ? null : p.title) : undefined}
              >
                <div className="project-card__header">
                  <h3 className="project-card__title">{p.title}</h3>
                  <div className="project-card__actions">
                    {p.expandable && (
                      <span className="project-card__expand-hint">
                        {isOpen ? "collapse" : "click to expand"}
                        <svg
                          className={`project-card__chevron${isOpen ? " open" : ""}`}
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </span>
                    )}
                    {p.repo && (
                      <a
                        className="project-card__link"
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
                        </svg>
                        Source
                      </a>
                    )}
                    {"demo" in p && p.demo && (
                      <a
                        className="project-card__link project-card__link--demo"
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
                        </svg>
                        Demo
                      </a>
                    )}
                  </div>
                </div>
                <p className="project-card__desc">{p.description}</p>
                <div className="project-card__tags">
                  {p.tags.map((t) => (
                    <span className="project-tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>

                {p.expandable && isOpen && (
                  <div className="project-card__details">
                    {p.images && p.images.length > 0 && (
                      <div className="project-card__gallery">
                        {p.images.map((img, i) => (
                          <img
                            className={`project-card__image${img.includes('Flappy_bird') || img.includes('assembler_rag') ? ' project-card__image--small' : ''}`}
                            key={i}
                            src={`${import.meta.env.BASE_URL}${img}`}
                            alt={`${p.title} screenshot ${i + 1}`}
                          />
                        ))}
                      </div>
                    )}
                    {p.xaiMethods && (
                      <div className="xai-methods">
                        <p className="xai-methods__title">Explainability Methods</p>
                        <div className="xai-methods__grid">
                          {p.xaiMethods.map((m) => (
                            <div className="xai-method" key={m.name}>
                              <h4 className="xai-method__name">{m.name}</h4>
                              <p className="xai-method__desc">{m.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
