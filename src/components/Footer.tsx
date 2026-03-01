import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__links">
        <a
          className="footer__link"
          href="https://github.com/mryt66"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="footer__link"
          href="https://www.linkedin.com/in/mryt/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="footer__link"
          href="https://huggingface.co/marcsixtysix"
          target="_blank"
          rel="noreferrer"
        >
          Hugging Face
        </a>
      </div>
    </footer>
  );
}
