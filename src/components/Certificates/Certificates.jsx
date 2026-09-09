const certificates = [
  ["CCNA: Introduction to Networks", "CCNA.pdf"],
  ["Data Analytics Essentials", "DataAnalytics.pdf"],
  ["AI Fundamentals with IBM SkillsBuild", "AIFundamentals.pdf"],
  ["Cyber Threat Management", "CyberThreatManagement.pdf"],
  ["Endpoint Security", "EndpointSecurity.pdf"],
  ["JavaScript Essentials 1", "JavaScriptEssentials.pdf"],
  ["CompTIA IT Fundamentals (ITF+)", "CompTIA_ITF.pdf"],
  ["Legacy Responsive Web Design V8", "ResponsiveWebDesign.png"],
  ["Relational Database V8", "RelationalDatabase.png"],
];
export default function Certificates() {
  return (
    <section
      id="certificates"
      className="section"
      aria-labelledby="certificates-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">03 / Continued learning</p>
          <h2 id="certificates-title">Always a student.</h2>
        </div>
        <p>
          Foundations in development, data,
          <br />
          networks, and security.
        </p>
      </div>
      <ul className="certificate-list">
        {certificates.map(([title, file]) => (
          <li key={file}>
            <a href={`/certificates/${file}`} target="_blank" rel="noreferrer">
              <span>{title}</span>
              <span className="certificate-type">
                {file.endsWith(".pdf") ? "PDF" : "PNG"} ↗
              </span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
