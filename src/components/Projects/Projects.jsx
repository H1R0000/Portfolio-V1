import { useState } from "react";
import Dialog from "../Dialog";
const imageSource = (image) =>
  image.startsWith("/") || image.startsWith("data:")
    ? image
    : `/images/${image}.webp`;
const projects = [
  {
    title: "CNN Facial Recognition & GPS Attendance App",
    category: "Thesis · August 2026",
    summary: "Verifying attendance through facial recognition and location.",
    description:
      "A dual-factor biometric attendance system combining CNN-based facial recognition and GPS authentication for logistics applications.",
    role: "Functional testing, bug tracking, beta-test coordination, and thesis co-authorship.",
    approachLabel: "Testing approach",
    approach:
      "Conducted comprehensive functional testing and coordinated beta-testing phases to verify system features and evaluate real-world performance.",
    delivery:
      "Co-authored the thesis, leading the literature review, system methodology, and technical documentation of test results.",
    tech: ["CNN", "Facial recognition", "GPS", "Functional testing"],
    images: [
      "/images/Agila-1.webp",
      "/images/Agila-2.webp",
      "/images/Agila-3.webp",
      "/images/Agila-4.webp",
      "/images/Agila-5.webp",
      "/images/Agila-6.webp",
    ],
    coverIndex: 0,
    featured: true,
  },
  {
    title: "District Wheels",
    category: "Web development",
    summary: "A digital storefront for a small-scale world.",
    description:
      "A responsive storefront designed to showcase and market custom 1/64 scale diecast cars.",
    role: "Web application development",
    approach:
      "A product-led interface that gives the cars and their details room to stand out.",
    delivery: "A responsive storefront built with HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    images: ["district-wheels-1", "district-wheels-2", "district-wheels-3"],
  },
  {
    title: "Piksie Photobooth",
    category: "App development & integration",
    summary: "A playful photobooth experience built for live events.",
    description:
      "A production-ready photobooth app that guides guests from camera capture through photo customization and QR-code delivery.",
    role:
      "Sole developer responsible for coding and integrating the complete application.",
    approachLabel: "Design approach",
    approach:
      "Translated a supplied set of UI reference images into a cohesive, functional interface and connected every part of the experience.",
    delivery:
      "A fully working photobooth application currently used at flea markets.",
    tech: ["App development", "UI implementation", "System integration"],
    images: [
      "/images/Piksie-1.webp",
      "/images/Piksie-2.webp",
      "/images/Piksie-3.webp",
      "/images/Piksie-4.webp",
      "/images/Piksie-5.webp",
      "/images/Piksie-6.webp",
    ],
    coverIndex: 0,
  },
  {
    title: "Personal Portfolio V1",
    category: "Design & development",
    summary: "A home for the things I’m building.",
    description:
      "A personal website bringing my development projects, design work, and technical learning together.",
    role: "Personal website design and development",
    approach:
      "A project-first layout with light and dark themes and focused navigation.",
    delivery:
      "A responsive React website with project galleries, certificates, and a downloadable CV.",
    tech: ["React", "Tailwind CSS", "Figma"],
    images: ["portfolio-1", "portfolio-2", "portfolio-3"],
  },
];
export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  function open(project) {
    setImageIndex(0);
    setSelected(project);
  }
  function step(amount) {
    setImageIndex(
      (index) =>
        (index + amount + selected.images.length) % selected.images.length,
    );
  }
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 / Selected work</p>
          <h2 id="projects-title">Built with purpose.</h2>
        </div>
        <p>
          From biometric attendance to web and app experiences.
          <br />A closer look at my work.
        </p>
      </div>
      <div className="projects-list">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            {project.images.length > 0 ? (
              <button
                className="project-image"
                onClick={() => open(project)}
                aria-label={`Open ${project.title} gallery`}
              >
                <img
                  src={imageSource(
                    project.images[project.coverIndex ?? 1] ??
                      project.images[0],
                  )}
                  width="1000"
                  height="700"
                  loading="lazy"
                  decoding="async"
                  alt={`${project.title} interface preview`}
                />
                <span className="image-label">View gallery ↗</span>
              </button>
            ) : (
              <div className="project-image thesis-placeholder">
                <p className="eyebrow">Research & testing</p>
                <span className="thesis-mark" aria-hidden="true">
                  CNN + GPS
                </span>
                <p>
                  Facial recognition.
                  <br />
                  Location verification.
                </p>
                <span className="thesis-image-note">
                  Screenshots coming soon
                </span>
              </div>
            )}
            <div className="project-copy">
              <p className="eyebrow">
                0{index + 1} / {project.category}
              </p>
              <h3>{project.title}</h3>
              <p className="project-summary">{project.summary}</p>
              <p className="muted">{project.description}</p>
              <ul className="tags" aria-label="Tools and skills">
                {project.tech.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
              <details className="project-story" open={project.featured}>
                <summary>My contribution & approach</summary>
                <dl>
                  <dt>My role</dt>
                  <dd>{project.role}</dd>
                  <dt>{project.approachLabel ?? "Design approach"}</dt>
                  <dd>{project.approach}</dd>
                  <dt>What I delivered</dt>
                  <dd>{project.delivery}</dd>
                </dl>
              </details>
              {project.images.length > 0 && (
                <button className="text-button" onClick={() => open(project)}>
                  Explore screenshots ↗
                </button>
              )}
            </div>
          </article>
        ))}
      </div>
      {selected && (
        <Dialog
          onClose={() => setSelected(null)}
          labelId="gallery-title"
          className="gallery-dialog"
        >
          <h2 id="gallery-title">{selected.title}</h2>
          <p className="muted">Project screenshots</p>
          <div className="gallery-image">
            <img
              src={imageSource(selected.images[imageIndex])}
              alt={`${selected.title}, screenshot ${imageIndex + 1} of ${selected.images.length}`}
              width="1400"
              height="1000"
            />
          </div>
          <div className="gallery-controls">
            <button
              className="button"
              onClick={() => step(-1)}
              aria-label="Previous screenshot"
            >
              ← Previous
            </button>
            <p role="status" aria-live="polite">
              {imageIndex + 1} / {selected.images.length}
            </p>
            <button
              className="button"
              onClick={() => step(1)}
              aria-label="Next screenshot"
            >
              Next →
            </button>
          </div>
        </Dialog>
      )}
    </section>
  );
}
