import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo"><span>Charlesrohan Diluja</span></h1>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

     
      <section className="hero" id="home">
        <div className="hero-left">
          <div className="image-glow">
            <img src="src/1000156225.jpg" alt="Charlesrohan" />
          </div>
        </div>
        <div className="hero-right">
          <h2>Hey I'm <span className="green">Charlesrohan Diluja</span></h2>
          <h3>I'm a <span className="green">Front-End Developer |</span></h3>
          <p>
            Passionate Front-End Developer skilled in HTML, CSS, JavaScript, React, and Bootstrap.<br />
            Completed Full Stack Development at IAT Technologies. Always ready for new challenges.
          </p>
          <div className="social-icons">
            <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:charlesdilu18@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section" id="about">
        <h2>About Me</h2>
        <p>
          I'm Charlesrohan Diluja, a self-motivated Front-End Developer from Kilinochchi, Sri Lanka.
          I specialize in building responsive and user-friendly interfaces using modern web technologies.
          I completed Full Stack Development at IAT Technologies and enjoy learning new tools and frameworks.
        </p>
      </section>

     
      <section className="section" id="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div>
            <h4>Technical Skills</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li>MySQL</li>
            </ul>
          </div>
          <div>
            <h4>Soft Skills</h4>
            <ul>
              <li>Teamwork</li>
              <li>Time Management</li>
              <li>Leadership</li>
              <li>Communication</li>
            </ul>
          </div>
        </div>
      </section>

     
      <section className="section" id="projects">
        <h2>Projects</h2>
        <ul>
          <li>💻 Developed a responsive personal portfolio using HTML, CSS, and Bootstrap.</li>
          <li>🧮 Built a fully functional calculator web application using HTML, CSS, and JavaScript.</li>
          <li>⚙️ Implemented arithmetic operations with input validation for the calculator.</li>
          <li>🎯 Practiced DOM manipulation and JavaScript event handling for real-time updates.</li>
        </ul>
      </section>

      {/* Footer / Contact */}
      <footer className="footer" id="contact">
        <p>📞 +94 074 2122456 | 📧 charlesdilu18@gmail.com | 📍 434 Krishnapuram, Kilinochchi</p>
        
      </footer>
    </div>
  );
}

export default Portfolio;
