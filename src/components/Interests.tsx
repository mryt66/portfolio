import { interests } from "../data";
import "./Interests.css";

const iconMap: Record<string, string> = {
  run: "\u{1F3C3}",
  boulder: "\u{1F9D7}",
  board: "\u{1F3B2}",
  cook: "\u{1F373}",
};

export default function Interests() {
  return (
    <section className="interests" id="interests">
      <div className="interests__inner">
        <p className="section-label">Beyond Code</p>
        <h2 className="section-title">Interests</h2>
        <div className="interests__grid">
          {interests.map((i) => (
            <div className="interest-card" key={i.name}>
              <div className="interest-card__icon">
                {iconMap[i.icon] ?? "?"}
              </div>
              <p className="interest-card__name">{i.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
