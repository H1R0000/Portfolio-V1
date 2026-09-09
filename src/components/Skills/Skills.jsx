const groups = [
  [
    "Frontend & mobile",
    ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Dart"],
  ],
  ["Backend", ["Node.js", "Python", "Java"]],
  ["Databases", ["MySQL", "Supabase", "PostgreSQL"]],
  ["UI/UX design", ["Figma", "Wireframing", "Interface design"]],
];
export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">02 / Toolkit</p>
          <h2 id="skills-title">Tools I work with.</h2>
        </div>
        <p>
          Across coursework, personal projects,
          <br />
          and continued exploration.
        </p>
      </div>
      <div className="skills-grid">
        {groups.map(([title, skills]) => (
          <article className="skill-group" key={title}>
            <h3>{title}</h3>
            <ul className="tags">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
