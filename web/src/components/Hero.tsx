export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero__inner">
        <p className="hero__eyebrow">Hi, my name is</p>
        <h1 className="hero__title">Muhammad Ahmad.</h1>
        <h2 className="hero__subtitle">I build things for the web.</h2>
        <p className="hero__text">
          I'm a software developer focused on building accessible, high-quality
          web applications. Currently crafting CRM solutions and pricing engines
          that real businesses rely on every day.
        </p>
        <div className="hero__cta">
          <a href="#projects" className="btn btn--primary">View My Work</a>
          <a href="#contact" className="btn btn--ghost">Get In Touch</a>
        </div>
        <div className="hero__socials">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:muhammad.ahmad@constellationdealer.com">Email</a>
        </div>
      </div>
    </section>
  );
}
