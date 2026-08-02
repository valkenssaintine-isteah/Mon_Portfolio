import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Button from './components/Button';
import TeamCard from './components/TeamCard';
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Done pou teste manm ekip yo
  const teamMembers = [
    { name: 'Manm 1', role: 'Développeur Frontend', bio: 'Responsable des composants UI.', photoUrl: '', githubUrl: 'https://github.com' },
    { name: 'Manm 2', role: 'Développeur Backend', bio: 'Responsable des APIs.', photoUrl: '', githubUrl: 'https://github.com' },
  ];

  // Done pou teste pwojè yo
  const projects = [
    { title: 'Tâche 1 - Configuration', description: 'Mise en place de l’environnement de travail et Git.', tags: ['Git', 'React', 'Vite'] },
    { title: 'Tâche 2 - Composants UI', description: 'Développement des composants graphiques de l’interface.', tags: ['React', 'CSS3', 'JSX'] },
  ];

  return (
    <div className={`app ${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main className="container" style={{ padding: '2rem 1rem' }}>
        {/* Section Présentation / Hero */}
        <section id="accueil" style={{ marginBottom: '3rem' }}>
          <h1>Bienvenue sur notre Portfolio Équipe</h1>
          <p>Projet collaboratif réalisé avec React.</p>
          <Button onClick={() => alert('Bouton marche bien!')}>Découvrir l'équipe</Button>
        </section>

        {/* Section Équipe */}
        <section id="equipe" style={{ marginBottom: '3rem' }}>
          <h2>Notre Équipe</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
            {teamMembers.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </section>

        {/* Section Projets */}
        <section id="projets" style={{ marginBottom: '3rem' }}>
          <h2>Nos Projets</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        {/* Section Contact */}
        <section id="contact" style={{ marginBottom: '3rem' }}>
          <h2>Contactez-nous</h2>
          <ContactForm onSubmitMessage={(data) => console.log('Données du formulaire:', data)} />
        </section>
      </main>
    </div>
  );
}

export default App;