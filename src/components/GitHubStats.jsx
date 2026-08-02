import React, { useState, useEffect } from 'react';

export default function GitHubStats({ username }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Apèl asynchrone sou API REST piblik GitHub la
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur lors du chargement des données GitHub:", err);
        setLoading(false);
      });
  }, [username]);

  if (loading) return <p className="loading">Chargement des données GitHub...</p>;
  if (!userData || userData.message) return <p>Impossible de charger les données GitHub.</p>;

  return (
    <div className="github-card fade-in">
      <h3>Statistiques GitHub ({userData.login})</h3>
      <div className="github-info">
        <p>📦 Repos publics : <strong>{userData.public_repos}</strong></p>
        <p>👥 Abonnés : <strong>{userData.followers}</strong></p>
      </div>
      <a 
        href={userData.html_url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn-link"
      >
        Voir le profil GitHub →
      </a>
    </div>
  );
}