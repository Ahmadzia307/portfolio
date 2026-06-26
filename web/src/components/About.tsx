import { useScrollReveal } from '../hooks/useScrollReveal';

const TECH = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 'C# / .NET', 'SQL Server'];

export default function About() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container">
        <h2 className="section__title"><span className="section__num">01.</span> About Me</h2>
        <div className="about">
          <div className="about__text">
            <p>
              Hello! I'm Muhammad, a developer who enjoys turning complex problems
              into clean, intuitive software. My work spans the full stack — from
              crafting responsive interfaces to designing the data models and
              services that power them.
            </p>
            <p>
              I currently work on enterprise CRM systems, where I've built features
              like configurable pricing engines (CPQ), OAuth integrations, and
              data-driven dashboards. I care deeply about code quality, performance,
              and building things that are a pleasure to use.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <ul className="about__list">
              {TECH.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
          <div className="about__photo">
            <div className="about__photo-frame">
              {/* Replace with your photo: <img src="/me.jpg" alt="Muhammad Ahmad" /> */}
              <div className="about__photo-placeholder">MA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
