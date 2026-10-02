import { useState } from "react";

const skills = [
  { title: "Frontend", items: [["HTML", "#e44d26", "▣"], ["CSS", "#1572b6", "▥"], ["JavaScript", "#d5b300", "JS"], ["Dart", "#1599cb", "◆"]] },
  { title: "Backend", items: [["Node.js", "#43853d", "⬢"], ["Python", "#3776ab", "Py"], ["Java", "#d77c2f", "Jv"]] },
  { title: "Databases", items: [["MySQL", "#3e6e91", "◉"], ["Supabase", "#3ecf8e", "◆"], ["PostgreSQL", "#336791", "Pg"]] },
  { title: "UI/UX Design", items: [["Figma", "#a259ff", "●"]] },
];

const certificates = [
  ["CCNA: Introduction to Networks", "CCNA.pdf"],
  ["Data Analytics Essentials", "DataAnalytics.pdf"],
  ["AI Fundamentals with IBM SkillsBuild", "AIFundamentals.pdf"],
  ["Cyber Threat Management", "CyberThreatManagement.pdf"],
  ["Endpoint Security", "EndpointSecurity.pdf"],
  ["JavaScript Essentials 1", "JavaScriptEssentials.pdf"],
  ["CompTIA IT Fundamentals (ITF+)", "CompTIA_ITF.pdf"],
];

function SectionLabel({ children }) {
  return <span className="section-label">{children}</span>;
}

function SkillCard({ title, items }) {
  return (
    <div className="skill-card">
      <span className="card-label">{title}</span>
      <ul>
        {items.map(([name, color, symbol]) => (
          <li key={name}>
            <span className="skill-symbol" style={{ color }} aria-hidden="true">{symbol}</span>
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ title, description, tags, image, href }) {
  return (
    <article className="project-card">
      <div className="project-visual">
        {image ? <img src={image} alt={`${title} website preview`} loading="lazy" /> : (
          <div className="internhub-art" aria-label="InternHub concept">
            <span className="internhub-mark" aria-hidden="true">◈</span>
            <span>INTERNHUB</span>
          </div>
        )}
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className="project-tags" aria-label="Project tools">
          {tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        {href && <a className="project-link" href={href} target="_blank" rel="noreferrer" aria-label={`View ${title} repository`}>↗</a>}
      </div>
    </article>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem("portfolio-v1-theme") ?? "light"; } catch { return "light"; }
  });
  const [copyStatus, setCopyStatus] = useState("");
  const dark = theme === "dark";

  function toggleTheme() {
    const next = dark ? "light" : "dark";
    setTheme(next);
    try { localStorage.setItem("portfolio-v1-theme", next); } catch { /* Storage is optional. */ }
  }

  async function copy(value, label) {
    try {
      await navigator.clipboard.writeText(value);
      setCopyStatus(`${label} copied`);
    } catch {
      setCopyStatus(`Could not copy ${label.toLowerCase()}.`);
    }
  }

  return (
    <div className={`site ${dark ? "dark" : "light"}`}>
      <a className="skip-link" href="#about">Skip to content</a>
      <header className="site-header">
        <nav className="container nav" aria-label="Main navigation">
          <a className="logo" href="#about" aria-label="Hero Park home">HDP</a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
            <button className="theme-button" type="button" onClick={toggleTheme} aria-label={`Switch to ${dark ? "light" : "dark"} mode`} title={`Switch to ${dark ? "light" : "dark"} mode`}>
              {dark ? "☀" : "☾"}
            </button>
            <a className="cv-button" href="/resume.pdf" target="_blank" rel="noreferrer">Download CV</a>
          </div>
        </nav>
      </header>

      <main id="about">
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">Hi, I’m Hero</h1>
            <p>I’m currently studying at Holy Angel University, taking up a Bachelor of Science in Computer Science and now in my 4th year. I’m passionate about communicating with people who want to bring their ideas to life, and I enjoy designing and building web and app projects that help make those ideas real.</p>
            <p>I love solving problems, helping people understand what they need, and guiding them on where they can improve. While I’m still strengthening my coding skills, I continue to build projects on my own, explore new tools, and grow both creatively and technically as a future developer.</p>
            <ul className="hero-facts">
              <li><span aria-hidden="true">◇</span> BS Computer Science – Holy Angel University</li>
              <li><span aria-hidden="true">◎</span> Angeles City, Pampanga</li>
              <li><span className="available-dot" aria-hidden="true" /> Open to new projects</li>
            </ul>
          </div>
          <img className="portrait" src="/images/profile1.jpg" width="440" height="440" alt="Hero Park" />
        </section>

        <section id="skills" className="skills-section section-tint" aria-labelledby="skills-title">
          <div className="container section-inner">
            <h2 id="skills-title"><SectionLabel>Skills</SectionLabel></h2>
            <div className="skills-grid">
              {skills.map((group) => <SkillCard key={group.title} {...group} />)}
            </div>
          </div>
        </section>

        <section id="work" className="work-section container section-inner" aria-labelledby="work-title">
          <h2 id="work-title"><SectionLabel>Projects</SectionLabel></h2>
          <div className="projects-grid">
            <ProjectCard
              title="District Wheels"
              description="A responsive web application built with HTML, CSS, and JavaScript, designed as a digital storefront for District Wheels to market and sell custom 1/64 scale diecast cars."
              tags={["Figma", "HTML", "CSS", "JavaScript"]}
              image="/images/district-wheels-1.webp"
              href="https://github.com/H1R0000/District-Wheels-Website"
            />
            <ProjectCard
              title="InternHub"
              description="A platform conceptualized to connect students with valuable internship opportunities. I focused on the visual and structural design, creating an intuitive UI/UX to streamline the application process for emerging professionals."
              tags={["Figma"]}
            />
          </div>
        </section>

        <section id="certificates" className="certificates-section section-tint" aria-labelledby="certificates-title">
          <div className="container section-inner">
            <h2 id="certificates-title"><SectionLabel>Certificates</SectionLabel></h2>
            <div className="certificates-grid">
              {certificates.map(([title, file]) => (
                <article className="certificate-card" key={file}>
                  <h3>{title}</h3>
                  <a href={`/certificates/${file}`} target="_blank" rel="noreferrer">View Certificate</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section container section-inner" aria-labelledby="contact-title">
          <h2 id="contact-title"><SectionLabel>Work With Me</SectionLabel></h2>
          <p>If you’re looking for someone to help bring your ideas to life or simply want to connect, I’m always open for a message.</p>
          <div className="contact-methods">
            <div><span aria-hidden="true">✉</span><a href="mailto:hdpark09@gmail.com">hdpark09@gmail.com</a><button type="button" onClick={() => copy("hdpark09@gmail.com", "Email")} aria-label="Copy email">▣</button></div>
            <div><span aria-hidden="true">☎</span><a href="tel:+639455261300">+63 945 526 1300</a><button type="button" onClick={() => copy("+639455261300", "Phone number")} aria-label="Copy phone number">▣</button></div>
          </div>
          <p className="copy-status" role="status" aria-live="polite">{copyStatus}</p>
          <p className="social-intro">You can also connect with me on these platforms.</p>
          <div className="social-links">
            <a href="https://github.com/H1R0000" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.figma.com/@heropark" target="_blank" rel="noreferrer">Figma</a>
            <a href="https://www.facebook.com/H1ROO09" target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </section>
      </main>
      <footer className="site-footer">© {new Date().getFullYear()} Hero Park. All Rights Reserved.</footer>
    </div>
  );
}
