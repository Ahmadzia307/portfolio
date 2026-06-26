import { useScrollReveal } from '../hooks/useScrollReveal';

const ROLES = [
  {
    date: '2023 — Present',
    title: 'Software Developer',
    company: '@ Constellation Dealer',
    body: "Build and maintain enterprise CRM features including a CPQ pricing engine, OAuth integrations, and reporting dashboards. Collaborate across teams to ship reliable, well-tested software.",
  },
  {
    date: '20XX — 20XX',
    title: 'Previous Role',
    company: '@ Company',
    body: 'Describe what you worked on, the impact you had, and the technologies you used. Keep it concise and outcome-focused.',
  },
];

export default function Experience() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section className="section" id="experience" ref={ref}>
      <div className="container">
        <h2 className="section__title"><span className="section__num">05.</span> Experience</h2>
        <div className="timeline">
          {ROLES.map((r) => (
            <div className="timeline__item" key={r.title}>
              <div className="timeline__dot" />
              <div className="timeline__content">
                <span className="timeline__date">{r.date}</span>
                <h3>{r.title} <span>{r.company}</span></h3>
                <p>{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
