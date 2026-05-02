export default function About() {
  return (
    <>
      <div className="main-content">
        <h1 className="about-me-title">About Me</h1>
        <hr />
        <p className="lead-text">Hey, I’m Mohiuddin.</p>
        <p className="sub-text">
          I’m an ICT professional with over 6 years of experience in Banking IT,
          working with Core Banking Systems, UAT processes, and digital banking
          operations.
        </p>

        <p className="sub-text">
          Before that, I worked as a Software Engineer, building and improving
          web applications and ERP systems using technologies like PHP, ASP.NET,
          and SQL.
        </p>

        <p className="sub-text">
          Currently, I’m focused on transitioning into modern full-stack
          development. I’ve been completing The Odin Project and building
          projects using JavaScript, React, and Node.js, while strengthening my
          backend and database skills.
        </p>

        <p className="sub-text">
          Although my recent projects are based on structured learning paths, my
          professional experience gives me a strong understanding of real-world
          systems, especially in financial and data-sensitive environments.
        </p>

        <p className="sub-text">
          I’m particularly interested in growing as a full-stack developer and
          eventually working on fintech-oriented applications where I can
          combine my banking and development experience.
        </p>

        <p className="sub-text">
          Outside of work, I enjoy learning new technologies and continuously
          improving my problem-solving skills.
        </p>

        <p className="sub-text">
          Feel free to connect with me:{" "}
          <a href="mailto:mohiuddin4296@gmail.com" className="mail-link">
            mohiuddin4296@gmail.com
          </a>
        </p>

        <div className="skill">
          <h2 className="skill-title">Technical Knowledge</h2>
          <h3 className="skill-sub-title">Front-End</h3>
          <ul className="skill-list">
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
          </ul>
          <h3 className="skill-sub-title">Back-End</h3>
          <ul className="skill-list">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>REST API Development</li>
            <li>Authentication (JWT)</li>
          </ul>

          <h3 className="skill-sub-title">Databases</h3>
          <ul className="skill-list">
            <li>PostgreSQL</li>
            <li>Oracle Database</li>
          </ul>

          <h3 className="skill-sub-title">Tools & Technologies</h3>
          <ul className="skill-list">
            <li>Git & GitHub</li>
            <li>Prisma ORM</li>
            <li>Webpack</li>
            <li>Netlify</li>
            <li>Vercel</li>
            <li>Postman</li>
          </ul>

          <h3 className="skill-sub-title">Currently Learning</h3>
          <ul className="skill-list">
            <li>TypeScript</li>
            <li>Next.js</li>
          </ul>
        </div>
      </div>
    </>
  );
}
