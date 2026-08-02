import React from 'react';

export default function Navbar({ theme, toggleTheme }) {
  return (
    <header className="navbar-header">
      <div className="container navbar">
        <div className="logo">
          <h2>Portfolio<span>.dev</span></h2>
        </div>
        <nav aria-label="Navigation principale">
          <ul className="nav-links">
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="#equipe">Équipe</a></li>
            <li><a href="#projets">Projets</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <button 
          className="btn-theme" 
          onClick={toggleTheme}
          aria-label="Changer le thème"
        >
          {theme === 'dark' ? '☀️ Mode Clair' : '🌙 Mode Sombre'}
        </button>
      </div>
    </header>
  );
}