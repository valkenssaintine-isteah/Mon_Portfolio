import React from 'react';

export default function ProjectCard({ title, description, tags, link }) {
  return (
    <article className="project-card fade-in">
      <div className="project-header">
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
      <div className="tags">
        {tags && tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      {link && (
        <a href={link} className="btn-link" target="_blank" rel="noopener noreferrer">
          Voir le projet →
        </a>
      )}
    </article>
  );
}