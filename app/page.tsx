import {
  capabilities,
  education,
  experience,
  navigation,
  profile,
  projects,
  skillGroups,
} from "./profile";

function ArrowUpRight() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header shell">
        <a className="wordmark" href="#home" aria-label="Arfikriawan, home">
          <span className="wordmark-mark">A</span>
          <span>ARFIKRIAWAN<span className="wordmark-dot">.</span></span>
        </a>
        <nav className="nav-pill" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <a className="header-contact" href="#contact">Let’s talk <ArrowUpRight /></a>
      </header>

      <main id="main">
        <section className="hero shell" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> {profile.role} <span className="eyebrow-sep">/</span> Operations</div>
            <h1 id="hero-title">I build systems<br />that keep operations<br /><em>moving.</em></h1>
            <p className="hero-description">I work across IT operations, workflow automation, dashboards, and mobile tools that support field engineers.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">View Selected Work <ArrowUpRight /></a>
              <a className="button button-outline" href="#contact">Get in Touch</a>
            </div>
            <div className="hero-index"><span>01 / 07</span><span className="index-rule" /><span>Portfolio · 2026</span></div>
          </div>
          <div className="hero-art">
            <div className="art-grain" aria-hidden="true" />
            <div className="art-arc art-arc-one" aria-hidden="true" />
            <div className="art-arc art-arc-two" aria-hidden="true" />
            <div className="art-orb" aria-hidden="true" />
            <div className="art-crop art-crop-one" aria-hidden="true" />
            <div className="art-crop art-crop-two" aria-hidden="true" />
            <div className="art-caption" aria-hidden="true"><span>FIG. 01</span><span>Systems in motion</span></div>
            <div className="art-monogram" aria-hidden="true">A<span>.</span></div>
            <div className="contact-card">
              <div className="contact-card-label"><span className="card-dot" /> CONTACT</div>
              <a href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn profile<ArrowUpRight /></a>
            </div>
          </div>
        </section>

        <div className="capability-strip shell" aria-label="Areas of focus">
          <span className="strip-label">AREAS OF FOCUS</span>
          {capabilities.map((item) => <span className="capability" key={item}>{item}</span>)}
        </div>

        <section className="section about-section shell" id="about" aria-labelledby="about-title">
          <div className="section-kicker"><span>01</span><span className="kicker-line" /> ABOUT</div>
          <div className="about-grid">
            <h2 id="about-title">Reliable systems.<br /><em>Thoughtful tools.</em></h2>
            <div className="about-copy">
              <p className="lead-copy">I’m Arfikriawan, an IT Engineer focused on the systems and workflows that keep day-to-day operations moving.</p>
              <p>My work spans application and server operations, automation, operational dashboards, and mobile tools for field engineers. I enjoy turning complex processes into dependable tools that help people do their work.</p>
              <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">More on LinkedIn <ArrowUpRight /></a>
            </div>
          </div>
          <div className="about-note"><span className="note-mark" aria-hidden="true">↗</span><span>Operations <b>·</b> Automation <b>·</b> Dashboards <b>·</b> Field tools</span><i>Areas of focus</i></div>
        </section>

        <section className="section skills-section" id="skills" aria-labelledby="skills-title">
          <div className="shell">
            <div className="section-heading-row">
              <div><div className="section-kicker"><span>02</span><span className="kicker-line" /> CAPABILITIES</div><h2 id="skills-title">Skills &amp; <em>toolkit.</em></h2></div>
              <p className="section-aside">A practical mix of systems knowledge, analysis, and collaboration.</p>
            </div>
            <div className="skills-grid">
              {skillGroups.map((group) => (
                <article className="skill-card" key={group.number}>
                  <div className="card-meta"><span>{group.number}</span><span>—</span></div>
                  <h3>{group.title}</h3>
                  <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section experience-section shell" id="experience" aria-labelledby="experience-title">
          <div className="section-heading-row">
            <div><div className="section-kicker"><span>03</span><span className="kicker-line" /> EXPERIENCE</div><h2 id="experience-title">Work in <em>practice.</em></h2></div>
            <p className="section-aside">Operations, delivery, and support across systems used by real teams.</p>
          </div>
          <div className="timeline">
            {experience.map((job, index) => (
              <article className="timeline-item" key={job.title}>
                <div className="timeline-period">{job.period}</div>
                <div className="timeline-content">
                  <div className="timeline-heading"><div><h3>{job.title}</h3><p>{job.organization}</p></div><span className="timeline-number">0{index + 1}</span></div>
                  <ul>{job.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects" aria-labelledby="projects-title">
          <div className="shell">
            <div className="section-heading-row">
              <div><div className="section-kicker"><span>04</span><span className="kicker-line" /> SELECTED WORK</div><h2 id="projects-title">Built for the <em>field.</em></h2></div>
              <p className="section-aside">Selected work shaped around operations and the people who depend on them.</p>
            </div>
            <div className="projects-grid">
              {projects.map((project) => (
                <article className={`project-card project-${project.tone}`} key={project.number}>
                  <div className="project-top"><span className="project-number">{project.number}</span><span className="project-year">{project.year}</span></div>
                  <div className="project-illustration" aria-hidden="true"><div className="project-orbit orbit-a" /><div className="project-orbit orbit-b" /><div className="project-center">{project.number}</div><span className="project-cross cross-a">+</span><span className="project-cross cross-b">+</span></div>
                  <div className="project-content"><p className="project-category">{project.category}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section education-section shell" id="education" aria-labelledby="education-title">
          <div className="section-kicker"><span>05</span><span className="kicker-line" /> EDUCATION &amp; RECOGNITION</div>
          <div className="education-card">
            <div className="education-date">{education.period}<span>GUNADARMA UNIVERSITY</span></div>
            <div className="education-details"><h2 id="education-title">{education.degree}</h2><p>{education.school} <span>·</span> Major in {education.major}</p><div className="education-facts"><span>GPA <b>{education.gpa}</b></span><span>Appreciation Letter <b>Customer Automated Response System — Home</b></span></div></div>
            <div className="education-seal" aria-hidden="true">AG</div>
          </div>
        </section>

        <section className="contact-section shell" id="contact" aria-labelledby="contact-title">
          <div className="contact-topline"><span>06 / START A CONVERSATION</span><span>ARFIKRIAWAN · IT ENGINEER</span></div>
          <div className="contact-main"><div><p className="contact-overline">Have a project or a question?</p><h2 id="contact-title">Let’s make<br /><em>things work.</em></h2></div><a className="contact-cta" href={`mailto:${profile.email}`} aria-label={`Email ${profile.email}`}><span>Get in touch</span><ArrowUpRight /></a></div>
          <div className="contact-links"><a href={`mailto:${profile.email}`}><span>Email</span>{profile.email}<ArrowUpRight /></a><a href={`tel:${profile.phoneHref}`}><span>Phone</span>{profile.phone}<ArrowUpRight /></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span>Connect professionally<ArrowUpRight /></a></div>
        </section>
      </main>

      <footer className="site-footer shell"><a className="wordmark footer-wordmark" href="#home"><span className="wordmark-mark">A</span><span>ARFIKRIAWAN<span className="wordmark-dot">.</span></span></a><span>IT Engineer · Systems in motion</span><a href="#home">Back to top ↑</a><span>© {new Date().getFullYear()} Arfikriawan</span></footer>
    </>
  );
}
