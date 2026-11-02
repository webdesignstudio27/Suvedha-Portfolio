import React, { useState } from 'react'
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone, Code2, Layers3, Database, BriefcaseBusiness, GraduationCap, Menu, X, Download, ExternalLink } from 'lucide-react'

const skills = [
  { title: 'Languages', items: ['JavaScript', 'C#', 'PHP', 'Go', 'Java', 'C / C++'] },
  { title: 'Frontend', items: ['React', 'HTML5', 'CSS3', 'Bootstrap', 'jQuery', 'AngularJS'] },
  { title: 'Backend & Database', items: ['.NET', 'REST APIs', 'MySQL', 'AJAX', 'Postman'] },
  { title: 'Tools', items: ['Git & GitHub', 'Visual Studio', 'XAMPP', 'Blazor'] }
]
const projects = [
  { n: '01', name: 'Cash Counter Web App', type: 'Web Application', year: '2025', desc: 'A browser-based cash counter interface designed to make cash calculations simple and quick.', stack: ['HTML', 'CSS', 'JavaScript'] },
  { n: '02', name: 'Real Estate Business Management System', type: 'Full Stack', year: '2025', desc: 'A management system supporting real-estate business workflows with a PHP and MySQL backend.', stack: ['PHP', 'MySQL', 'JavaScript', 'AJAX', 'Bootstrap'] },
  { n: '03', name: 'Online Food Ordering', type: 'Full Stack', year: '2024', desc: 'An online ordering application with interactive frontend screens and database-backed functionality.', stack: ['PHP', 'MySQL', 'jQuery', 'AJAX'] },
  { n: '04', name: 'Stationery Shop Management System', type: 'Desktop Application', year: '2023', desc: 'A desktop management application built to organize stationery shop operations.', stack: ['C#', '.NET', 'MySQL'] }
]
const experience = [
  { role: 'Software Developer – .NET', company: 'Tender Software India Pvt. Ltd.', date: '2026 — Present', place: 'Puducherry', points: ['Developing and maintaining applications using C# and .NET.', 'Working with Blazor and AngularJS for application interfaces.', 'Testing and integrating APIs using Postman; debugging and supporting Go-based services.'] },
  { role: 'Team Lead / Developer Intern', company: 'CENTAC, Government of Puducherry', date: '2023', place: 'Puducherry', points: ['Contributed to the Undergraduate Selection Application System.', 'Worked on eligibility verification backend logic, MySQL schemas and validation.', 'Coordinated frontend integration and helped automate application processes.'] }
]
function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const nav = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact']
  const close = () => setMenuOpen(false)
  const submit = (e) => { e.preventDefault(); const d = new FormData(e.currentTarget); const subject = encodeURIComponent(`Portfolio enquiry from ${d.get('name')}`); const body = encodeURIComponent(`${d.get('message')}\n\nReply to: ${d.get('email')}`); window.location.href = `mailto:sivasuvedha@gmail.com?subject=${subject}&body=${body}`; setSent(true) }
  return <div className="site-shell">
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <header className="topbar"><a className="brand" href="#home">S<span>.</span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>{nav.map(x=><a key={x} href={`#${x.toLowerCase()}`} onClick={close}>{x}</a>)}<a className="nav-cta" href="#contact" onClick={close}>Let's talk <ArrowUpRight size={15}/></a></nav>
    </header>
    <main>
      <section className="hero section" id="home">
        <div className="hero-copy"><div className="eyebrow"><span className="status-dot"/> AVAILABLE FOR OPPORTUNITIES</div>
          <p className="hello">Hello, I'm</p><h1>Suvedha<span>.</span></h1>
          <h2>Software Developer <span className="gradient-text">crafting digital experiences.</span></h2>
          <p className="hero-description">I build thoughtful web applications and reliable software solutions — bringing ideas to life through clean code, useful interfaces, and continuous learning.</p>
          <div className="hero-actions"><a className="button primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a><a className="button secondary" href="#contact">Get in touch</a></div>
          <div className="social-row"><a href="https://github.com/webdesignstudio27" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a><a href="https://www.linkedin.com/in/suvedha-s-285611279/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a><a href="mailto:sivasuvedha@gmail.com"><Mail size={17}/> Email</a></div>
        </div>
        <div className="hero-visual"><div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="portrait-frame"><img src="/images/profile.jpg" alt="Suvedha" /></div><div className="float-card code-card"><Code2 size={17}/><span>Building with purpose</span></div><div className="float-card location-card"><MapPin size={16}/><span>Puducherry, India</span></div><div className="visual-caption">DESIGN MINDED <i/> CODE FOCUSED</div></div>
        <a className="scroll-hint" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
      </section>
      <section className="section about-section" id="about"><div className="section-kicker">01 / ABOUT ME</div><div className="section-heading"><h2>Curious by nature.<br/><span className="muted">Developer by craft.</span></h2><p>I enjoy turning complex problems into simple, useful experiences.</p></div>
        <div className="about-grid"><div className="about-main"><p className="large-copy">I'm a software developer with a passion for building practical applications, exploring new technologies, and creating interfaces that feel intuitive.</p><p>My experience spans full-stack web development and .NET application development. I enjoy collaborating with teams, learning from challenges, and writing maintainable code that solves real problems.</p><a className="text-link" href="mailto:sivasuvedha@gmail.com">Let's create something meaningful <ArrowUpRight size={16}/></a></div><div className="stats-grid"><div className="stat"><strong>4<span>+</span></strong><small>PROJECTS</small></div><div className="stat"><strong>3<span>+</span></strong><small>YEARS LEARNING & BUILDING</small></div><div className="stat"><strong>8.10</strong><small>MCA CGPA</small></div><div className="stat"><strong>∞</strong><small>CURIOSITY</small></div></div></div>
      </section>
      <section className="section skills-section" id="skills"><div className="section-kicker">02 / TOOLKIT</div><div className="section-heading"><h2>Tools of my <span className="muted">trade.</span></h2><p>A growing toolkit for building across the stack.</p></div><div className="skills-grid">{skills.map((s,i)=><article className="skill-card" key={s.title}><div className="skill-top"><span>0{i+1}</span>{i===0?<Code2/>:i===1?<Layers3/>:i===2?<Database/>:<BriefcaseBusiness/>}</div><h3>{s.title}</h3><div className="tag-list">{s.items.map(t=><span key={t}>{t}</span>)}</div></article>)}</div></section>
      <section className="section projects-section" id="projects"><div className="section-kicker">03 / SELECTED WORK</div><div className="section-heading"><h2>Things I've <span className="muted">built.</span></h2><p>A selection of academic and practical projects.</p></div><div className="project-list">{projects.map(p=><article className="project-row" key={p.n}><div className="project-number">{p.n}</div><div className="project-info"><div className="project-meta">{p.type} <i/> {p.year}</div><h3>{p.name}</h3><p>{p.desc}</p><div className="tag-list">{p.stack.map(t=><span key={t}>{t}</span>)}</div></div><div className="project-arrow"><ArrowUpRight/></div></article>)}</div></section>
      <section className="section experience-section" id="experience"><div className="section-kicker">04 / EXPERIENCE</div><div className="section-heading"><h2>Where I've <span className="muted">grown.</span></h2><p>Learning, contributing, and building with teams.</p></div><div className="timeline">{experience.map((e,i)=><article className="timeline-item" key={e.company}><div className="timeline-marker"/><div className="timeline-content"><div className="timeline-meta">{e.date} <span>{e.place}</span></div><h3>{e.role}</h3><h4>{e.company}</h4><ul>{e.points.map(p=><li key={p}>{p}</li>)}</ul></div></article>)}</div></section>
      <section className="section education-section" id="education"><div className="section-kicker">05 / EDUCATION</div><div className="section-heading"><h2>Always <span className="muted">learning.</span></h2></div><div className="education-grid"><article><GraduationCap/><span>2023 — 2025</span><h3>Master of Computer Applications</h3><p>Puducherry Technological University</p><strong>CGPA 8.10</strong></article><article><GraduationCap/><span>2020 — 2023</span><h3>Bachelor of Computer Applications</h3><p>Indira Gandhi College of Arts and Science</p><strong>CGPA 7.26</strong></article></div><div className="extras"><div><h4>CERTIFICATIONS</h4><p>Full Stack Web Development — Udemy (2022)</p><p>UI/UX Designing — Google (2022)</p></div><div><h4>LANGUAGES</h4><p>English · Intermediate</p><p>Tamil · Fluent</p></div></div></section>
      <section className="section contact-section" id="contact"><div className="section-kicker">06 / GET IN TOUCH</div><div className="contact-grid"><div><h2>Have a project<br/>in <span className="gradient-text">mind?</span></h2><p>I'm always open to discussing new opportunities, interesting projects, and ways to work together.</p><div className="contact-details"><a href="mailto:sivasuvedha@gmail.com"><Mail/> sivasuvedha@gmail.com</a><a href="tel:+919790969480"><Phone/> +91 97909 69480</a><span><MapPin/> Karaikal, Puducherry, India</span></div></div><form className="contact-form" onSubmit={submit}><label>Your name<input name="name" placeholder="Name" required/></label><label>Email address<input name="email" type="email" placeholder="you@example.com" required/></label><label>Message<textarea name="message" rows="4" placeholder="Tell me a little about your project..." required/></label><button className="button primary" type="submit">Send message <ArrowUpRight size={17}/></button>{sent&&<small className="form-note">Your email app should open with the message ready to send.</small>}</form></div></section>
    </main>
    <footer><a className="brand" href="#home">S<span>.</span></a><p>Designed & built by Suvedha · © {new Date().getFullYear()}</p><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
  </div>
}
export default App