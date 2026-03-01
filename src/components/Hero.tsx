import "./Hero.css";

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="hero">
      <div className="hero__bg" />
      <div className="hero__content">
        <p className="hero__greeting">Hello, I'm</p>
        <h1 className="hero__name">
          <span>Marcin</span>
        </h1>
        <p className="hero__role">
          AI Engineer with a wide range of skills spanning ML, NLP, Computer
          Vision, and AI systems — building RAG pipelines, ASR solutions, AI
          agents, and explainable AI with modern fine-tuning and MLOps practices.
        </p>

        <div className="hero__cta">
          <button
            className="hero__btn hero__btn--primary"
            onClick={() => scrollTo("projects")}
          >
            View Projects
          </button>
          <a
            className="hero__btn hero__btn--secondary"
            href="https://github.com/mryt66"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>

        <div className="hero__socials">
          <a
            className="hero__social-link"
            href="https://github.com/mryt66"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
            </svg>
          </a>
          <a
            className="hero__social-link"
            href="https://www.linkedin.com/in/mryt/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
            </svg>
          </a>
          <a
            className="hero__social-link"
            href="https://huggingface.co/marcsixtysix"
            target="_blank"
            rel="noreferrer"
            aria-label="Hugging Face"
          >
            <svg width="24" height="24" viewBox="0 0 95 88" fill="none">
              <path d="M47.2 0C26.6 0 9.4 13.7 4.3 32.5c-1.2 4.4.5 9.1 4.2 11.8 2.3 1.7 3.9 4.3 4 7.2.2 4.8-3.5 8.8-8.3 9C1.9 60.6 0 62.6 0 64.9v5.6c0 2.4 2 4.4 4.4 4.3 8.2-.3 15-6.1 16.6-13.8.3-1.4 1.9-2.1 3.1-1.3 3.9 2.6 8.5 4.3 13.5 4.8 1.3.1 2.3 1.2 2.3 2.5v20.6c0 2.5 2 4.4 4.4 4.4h5.6c2.5 0 4.5-2 4.4-4.4V67c0-1.3 1-2.4 2.3-2.5 5-.5 9.6-2.2 13.5-4.8 1.2-.8 2.8-.1 3.1 1.3 1.6 7.7 8.4 13.5 16.6 13.8 2.4.1 4.4-1.9 4.4-4.3v-5.6c0-2.3-1.9-4.3-4.2-4.4-4.8-.2-8.5-4.2-8.3-9 .1-2.9 1.7-5.5 4-7.2 3.7-2.7 5.4-7.4 4.2-11.8C84.9 13.7 67.8 0 47.2 0Zm-13 47.5c-4.6 0-8.3-4.5-8.3-10s3.7-10 8.3-10 8.3 4.5 8.3 10-3.7 10-8.3 10Zm26.1 0c-4.6 0-8.3-4.5-8.3-10s3.7-10 8.3-10 8.3 4.5 8.3 10-3.7 10-8.3 10Z" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <span>scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
