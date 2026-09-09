import { useState } from "react";
import Dialog from "../Dialog";
const projects = [
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
    title: "InternHub",
    category: "UI/UX design",
    summary: "A clearer path from student to intern.",
    description:
      "A platform concept connecting students with internship opportunities, inspired by professional networking platforms.",
    role: "Sole visual and structural designer",
    approach:
      "Wireframes and an interface focused on simplifying the internship application journey.",
    delivery:
      "A Figma design concept; my contribution focused on UI/UX rather than application development.",
    tech: ["Figma", "Wireframing", "UI/UX"],
    images: [
      "internhub-1",
      "internhub-2",
      "internhub-3",
      "internhub-4",
      "internhub-5",
    ],
  },
  {
    title: "Personal Portfolio",
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
          From storefronts to student experiences.
          <br />A closer look at my work.
        </p>
      </div>
      <div className="projects-list">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <button
              className="project-image"
              onClick={() => open(project)}
              aria-label={`Open ${project.title} gallery`}
            >
              <img
                src={`/images/${project.images[1]}.webp`}
                width="1000"
                height="700"
                loading="lazy"
                decoding="async"
                alt={`${project.title} interface preview`}
              />
              <span className="image-label">View gallery ↗</span>
            </button>
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
              <details className="project-story">
                <summary>My contribution & approach</summary>
                <dl>
                  <dt>My role</dt>
                  <dd>{project.role}</dd>
                  <dt>Design approach</dt>
                  <dd>{project.approach}</dd>
                  <dt>What I delivered</dt>
                  <dd>{project.delivery}</dd>
                </dl>
              </details>
              <button className="text-button" onClick={() => open(project)}>
                Explore screenshots ↗
              </button>
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
              src={`/images/${selected.images[imageIndex]}.webp`}
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
