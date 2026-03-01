import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <p className="section-label">Who I Am</p>
        <h2 className="section-title">About Me</h2>
        <p className="about__text">
          I'm an AI Engineer focused on Automatic Speech Recognition, AI
          Agents, and AI solutions such as RAG pipelines. I also work across
          Machine Learning, NLP, Computer Vision, and explainable AI — with
          hands-on experience in model fine-tuning and deploying end-to-end
          systems using modern MLOps practices. I keep up with the latest AI
          technologies and research; currently in my free time I'm contributing
          to an open-source ASR model for the Polish language.
        </p>
        <p className="about__text" style={{ marginTop: "1rem" }}>
          Computer Science graduate from the Silesian University of Technology.
          Hackathon veteran (BIT 2024, HackYeah 2025) and an active Data
          Science Club member, where I lead two projects — a RAG-based
          chatbot and an explainable AI research initiative.
        </p>
      </div>
    </section>
  );
}
