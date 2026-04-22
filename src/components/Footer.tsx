import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <nav aria-label="Social links">
        <ul className="footer-links">
          <li>
            <a
              href="https://linkedin.com/in/minh-nguyen-seattle"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/MinhNg1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub aria-hidden="true" />
              <span>GitHub</span>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}