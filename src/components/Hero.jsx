import Button from "./Button";
import heroImage from "../assets/images/hero.png";

function Hero() {
  return (
    <section className="bg-gray-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div>
          <p className="text-blue-600 font-semibold mb-4">
            Bienvenue sur notre Portfolio
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Nous créons des applications Web modernes
          </h1>

          <p className="text-gray-600 text-lg mb-8">
            Portfolio professionnel de l'Équipe 4.
            Découvrez nos compétences, nos projets
            et notre savoir-faire en développement Web.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button text="Voir nos projets" />
            <Button
              text="Nous contacter"
              className="bg-gray-800 hover:bg-black"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={heroImage}
            alt="Illustration du portfolio de l'Equipe"
            className="w-full max-w-md mx-auto"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;