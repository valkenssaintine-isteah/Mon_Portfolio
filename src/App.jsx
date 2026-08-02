import React, { useContext } from 'react';
import './styles/globals.css';
import './styles/colors.css';
import './styles/typography.css';
import './App.css';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import Navbar from './components/Navbar';
import TeamCard from './components/TeamCard';
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';
import GitHubStats from './components/GitHubStats';

function MainApp() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="app-container">
      {/* Bara navigasyon ak bouton Theme */}
      <header className="navbar-header">
        <div className="container navbar">
          <h2>Portfolio<span>.dev</span></h2>
          <button className="btn-theme" onClick={toggleTheme}>
            {theme === 'dark' ? '☀️ Mode Clair' : '🌙 Mode Sombre'}
          </button>
        </div>
      </header>

      <main className="container">
        {/* Section Équipe */}
        <section id="equipe" className="section">
          <h2>Notre Équipe</h2>
          <div className="projects-grid">
            <TeamCard 
              name="Nom Membre 1" 
              role="Chef de Projet / Task 1 & 2" 
              bio="Spécialiste Intégration HTML/CSS et Accessibilité." 
            />
          </div>
        </section>

        {/* Section API GitHub */}
        <section className="section">
          <h2>Données GitHub de l'Équipe</h2>
          {/* Mande moun Tâche 3 a mete non itilizatè GitHub pa l la la a */}
          <GitHubStats username="octocat" /> 
        </section>

        {/* Section Contact */}
        <section id="contact" className="section">
          <h2>Contactez-nous</h2>
          <ContactForm />
        </section>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}