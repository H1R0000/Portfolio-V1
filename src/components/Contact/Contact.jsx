import { useEffect, useRef, useState } from "react";
export default function Contact() {
  const [status, setStatus] = useState("");
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);
  async function copy(text, label) {
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(text);
      setStatus(`${label} copied.`);
    } catch {
      setStatus("Could not copy. Select the text to copy it manually.");
    }
    timer.current = setTimeout(() => setStatus(""), 5000);
  }
  return (
    <footer id="contact" className="contact" aria-labelledby="contact-title">
      <div className="site-container">
        <div className="contact-top">
          <div>
            <p className="eyebrow">04 / Let’s connect</p>
            <h2 id="contact-title">
              Have an idea?
              <br />
              <span className="muted">Let’s bring it to life.</span>
            </h2>
            <p className="contact-intro">
              Open to new projects, collaborations, and conversations.
            </p>
          </div>
          <div className="contact-details">
            <div>
              <a className="email-link" href="mailto:hdpark09@gmail.com">
                hdpark09@gmail.com
              </a>
              <button
                className="copy-button"
                onClick={() => copy("hdpark09@gmail.com", "Email")}
                aria-label="Copy email address"
              >
                Copy
              </button>
            </div>
            <div>
              <a href="tel:+639455261300">+63 945 526 1300</a>
              <button
                className="copy-button"
                onClick={() => copy("+639455261300", "Phone number")}
                aria-label="Copy phone number"
              >
                Copy
              </button>
            </div>
            <p className="copy-status" role="status" aria-live="polite">
              {status}
            </p>
            <div className="social-links">
              <a
                href="https://github.com/H1R0000"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a
                href="https://www.figma.com/@heropark"
                target="_blank"
                rel="noreferrer"
              >
                Figma ↗<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a
                href="https://www.facebook.com/H1ROO09"
                target="_blank"
                rel="noreferrer"
              >
                Facebook ↗<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Hero Park</span>
          <span>AI-Driven Developer</span>
          <a href="#hero">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
