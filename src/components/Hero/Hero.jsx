export default function Hero() {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">Hero Park · AI-Driven Developer</p>
        <h1 id="hero-title">
          Ideas into interfaces.
          <br />
          <span className="muted">Curiosity into code.</span>
        </h1>
        <p className="hero-intro">
          I’m Hero, a Computer Science student building web applications and
          designing user experiences, with an AI-driven approach to development.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#projects">
            View projects ↗
          </a>
          <a className="button" href="#contact">
            Contact me
          </a>
        </div>
        <div className="hero-details">
          <span>Angeles City, Philippines</span>
          <span>Open to new projects</span>
        </div>
      </div>
      <figure className="portrait">
        <img
          src="/images/profile.webp"
          width="640"
          height="640"
          alt="Hero Park"
          fetchPriority="high"
        />
        <figcaption>Learning. Designing. Building.</figcaption>
      </figure>
      <div className="hero-bottom">
        <span>BS Computer Science · Holy Angel University</span>
        <a href="/resume.pdf" target="_blank" rel="noreferrer">
          View my CV ↗
          <span className="sr-only"> (PDF, opens in a new tab)</span>
        </a>
      </div>
    </section>
  );
}
