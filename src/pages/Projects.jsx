import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

import portfolio from "../assets/images/projects/portfolio.png";
import students from "../assets/images/projects/students.png";
import githubApi from "../assets/images/projects/github.png";
import ecommerce from "../assets/images/projects/ecommerce.png";
import dashboard from "../assets/images/projects/dashboard.png";
import institution from "../assets/images/projects/institution.png";

const imageMap = {
  1: portfolio,
  2: students,
  3: githubApi,
  4: ecommerce,
  5: dashboard,
  6: institution,
};

function Projects() {
  const [filter, setFilter] = useState("Tous");

  const filteredProjects =
    filter === "Tous"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section className="container py-20">
      <SectionTitle title="Nos Projets" />

      <p className="mb-10 text-center text-slate-600 dark:text-slate-300">
        Découvrez quelques réalisations de notre équipe.
      </p>

      <div className="mb-12 flex flex-wrap justify-center gap-4">
        {[
          "Tous",
          "React",
          "JavaScript",
          "API",
          "Dashboard",
          "UI/UX",
        ].map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setFilter(category)}
            className={`rounded-full px-5 py-2 font-medium transition ${
              filter === category
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-blue-100 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={imageMap[project.id]}
            technologies={project.technologies}
            github={project.github}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;