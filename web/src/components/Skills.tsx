import { useScrollReveal } from '../hooks/useScrollReveal';

const GROUPS = [
  { title: 'Frontend', items: ['HTML5 & CSS3', 'JavaScript / TypeScript', 'React', 'Responsive Design'] },
  { title: 'Backend', items: ['Node.js', 'C# / .NET', 'REST APIs', 'Authentication / OAuth'] },
  { title: 'Data', items: ['SQL Server', 'Data Modeling', 'Entity Framework', 'Query Optimization'] },
  { title: 'Tools', items: ['Git & Azure DevOps', 'CI/CD', 'Docker', 'Agile / Scrum'] },
];

export default function Skills() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section className="section section--alt" id="skills" ref={ref}>
      <div className="container">
        <h2 className="section__title"><span className="section__num">02.</span> Skills</h2>
        <div className="skills">
          {GROUPS.map((g) => (
            <div className="skill-card" key={g.title}>
              <h3>{g.title}</h3>
              <ul>{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
