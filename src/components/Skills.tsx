import { skills } from "../data";
import "./Skills.css";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills__inner">
        <p className="section-label">What I Work With</p>
        <h2 className="section-title">Tech Stack</h2>
        <div className="skills__grid">
          {skills.map((cat) => (
            <div className="skill-card" key={cat.label}>
              <p className="skill-card__label">{cat.label}</p>
              <div className="skill-card__items">
                {cat.items.map((item) => (
                  <span className="skill-tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
