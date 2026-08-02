import React from 'react';

export default function TeamCard({ name, role, bio, photoUrl, githubUrl }) {
  return (
    <article className="team-card fade-in">
      <div className="card-image">
        <img src={photoUrl || "https://via.placeholder.com/150"} alt={`Foto ${name}`} />
      </div>
      <div className="card-content">
        <h3>{name}</h3>
        <p className="role-badge">{role}</p>
        <p className="bio">{bio}</p>
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="github-link">
            Voir Profil GitHub
          </a>
        )}
      </div>
    </article>
  );
}