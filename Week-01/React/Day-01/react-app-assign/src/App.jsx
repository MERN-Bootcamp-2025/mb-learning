import React from 'react';
import './App.css';

function App() {
  const currentYear = new Date().getFullYear();
  const currentDate = new Date().toDateString();

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Arzoo Jain</h1>
        <p>Welcome to my React Profile Page</p>
      </header>

      <section className="profile-section">
        <h2>About Me</h2>
        <p>
          Hello! I'm Arzoo Jain, a passionate software engineer trainee. I love building full-stack
          web applications and exploring modern web technologies.
        </p>
        <p><strong>Today's Date:</strong> {currentDate}</p>
      </section>

      <section className="skills-section">
        <h2>My Skills & Interests</h2>
        <ul>
          <li>React.js & Frontend Development</li>
          <li>Node.js & Express.js</li>
          <li>MySQL & Database Design</li>
          <li>UI/UX Design</li>
          <li>Learning Cloud & DevOps</li>
        </ul>
      </section>

      <section className="quote-section" style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>
        <h2>Motivational Quote</h2>
        <p>"Success is the sum of small efforts, repeated day in and day out." — Robert Collier</p>
      </section>

      <footer className="app-footer">
        <p>&copy; {currentYear} Arzoo Jain</p>
      </footer>
    </div>
  );
}

export default App;
