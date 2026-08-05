import SectionTitle from "../components/SectionTitle";
import TeamCard from "../components/TeamCard";
import valkens from "../assets/images/team/valkens.png";
import fritzson from "../assets/images/team/fritzson.png";
import marie from "../assets/images/team/marie.png";
import pharah from "../assets/images/team/pharah.png";

const teamMembers = [
  {
    name: "Valkens SAINTINÉ",
    role: "Maquettage • Sémantique • Accessibilité",
    image: valkens,
    bio: "Étudiant en DUT Technologies de l’Information et de la Communication (TIC) à l’ISTEAH. Formateur et enseignant passionné, je possède également des compétences en musique, plomberie, secourisme, scoutisme et sérigraphie. Polyvalent, rigoureux et orienté vers le travail d’équipe."
  },
  {
    name: "Fritzson SAINTINÉ",
    role: "Développement des composants graphiques",
    image: fritzson,
    bio: "Étudiant passionné par le développement web moderne. Sérieux, serviable et engagé, j’apprécie le travail en équipe et je réalise chaque projet avec rigueur et professionnalisme."
  },
  {
    name: "Marie Mancinie TREJUSTE",
    role: "Gestion des États Globaux et API Publiques",
    image: marie,
    bio: "Étudiante passionnée par le développement web moderne. Responsable de la gestion des états globaux et de l’intégration des API publiques du projet."
  },
  {
    name: "Pharah PIERRE-JULES",
    role: "Ingénierie Serveur • Qualité • DevOps",
    image: pharah,
    bio: "Étudiante passionnée par l’ingénierie logicielle. Responsable de l’ingénierie serveur, de la qualité logicielle et des pratiques DevOps."
  },
];

function Team() {
  return (
    <section className="container section py-20">
      <SectionTitle title="Notre Équipe" />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {teamMembers.map((member) => (
          <TeamCard
            key={member.name}
            name={member.name}
            role={member.role}
            image={member.image}
            bio={member.bio}
          />
        ))}
      </div>
    </section>
  );
}

export default Team;