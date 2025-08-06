// src/App.jsx
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <h1>Charlesrohan Diluja</h1>
        <h2>Front-End Developer</h2>
        <p>
          Passionate Front-End Developer with hands-on experience in building responsive and user-friendly websites using HTML, CSS, JavaScript, React, and Bootstrap. Eager to grow within a collaborative team environment and contribute to real-world web development projects.
        </p>
      </section>

      {/* Contact */}
      <section className="section contact">
        <h3>Contact</h3>
        <ul>
          <li>📞 +94 074 2122456</li>
          <li>📧 charlesdilu18@gmail.com</li>
          <li>📍 434 Krishnapuram, Kilinochchi</li>
        </ul>
      </section>

      {/* Education */}
      <section className="section education">
        <h3>Education</h3>
        <ul>
          <li>2020 - 2022: KN/Barathi Vithyalayam (Advanced Level A/I)</li>
          <li>IAT Technologies in Don Bosco – Basic Computer, Full Stack Development</li>
        </ul>
      </section>

      {/* Technical Skills */}
      <section className="section technical-skills">
        <h3>Technical Skills</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>MySQL</li>
        </ul>
      </section>

      {/* Soft Skills */}
      <section className="section soft-skills">
        <h3>Soft Skills</h3>
        <ul>
          <li>Project Management</li>
          <li>Teamwork</li>
          <li>Time Management</li>
          <li>Leadership</li>
          <li>Effective Communication</li>
        </ul>
      </section>

      {/* Projects */}
      <section className="section projects">
        <h3>Projects</h3>
        <ul>
          <li>Implemented arithmetic operations (Add, Subtract, Multiply, Divide) with input validation.</li>
          <li>Built a fully functional calculator web app using HTML, CSS, and JavaScript.</li>
          <li>Practiced DOM manipulation and JavaScript event handling for real-time updates.</li>
        </ul>
      </section>

      {/* Languages */}
      <section className="section languages">
        <h3>Languages</h3>
        <ul>
          <li>Native Tamil</li>
          <li>Advanced English</li>
        </ul>
      </section>

      {/* Declaration */}
      <section className="section declaration">
        <h3>Declaration</h3>
        <p>
          I hereby declare that all the information provided above is true and correct to the best of my knowledge and belief.
        </p>
        <div className="footer">
          <p>Date: 11.07.2025</p>
          <p>Signature: C.Diluja</p>
        </div>
      </section>
    </div>
  );
}

export default App;
