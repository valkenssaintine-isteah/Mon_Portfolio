import { Link } from "react-router-dom";
import Button from "./Button";
import heroImage from "../assets/images/team4-logo.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center bg-transparent transition-colors duration-500"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.16),_transparent_26%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.22),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.16),_transparent_26%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-100/80 px-4 py-2 text-sm font-semibold text-blue-800 shadow-sm backdrop-blur-sm dark:border-blue-500/30 dark:bg-blue-900/30 dark:text-blue-200">
              🚀 Projet Universitaire • React + Vite
            </span>

            <h1 className="hero-text mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-black">
              <span className="block text-black">Bonjour,</span>
              <span className="mt-2 block text-black">Nous sommes</span>
              <span className="mt-2 block text-black">
                <span className="text-black">Équipe</span>{" "}
                <span className="text-blue-700">4</span>
              </span>
            </h1>

            <p className="hero-text mt-6 rounded-2xl border border-blue-200 bg-blue-100/80 px-5 py-4 text-base sm:text-lg leading-8 text-black shadow-sm">
              Nous sommes une équipe d&apos;étudiants passionnés par le développement web moderne.
              Nous concevons des applications performantes, accessibles et responsives avec React,
              Vite et des interfaces premium qui mettent en valeur votre projet.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/projets">
                <Button text="Voir nos projets" />
              </Link>

              <Link to="/contact">
                <Button
                  text="Nous contacter"
                  className="bg-slate-900 text-white hover:bg-slate-700 dark:bg-blue-600 dark:hover:bg-blue-500"
                />
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[560px] rounded-[2rem] border border-white/50 bg-white/60 p-4 sm:p-6 shadow-[0_25px_80px_rgba(37,99,235,0.18)] backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-900/60 dark:shadow-[0_25px_80px_rgba(15,23,42,0.75)]">
              <div className="absolute -inset-4 rounded-[2.2rem] bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-transparent blur-2xl" />

              <img
                src={heroImage}
                alt="Team 4 Logo"
                className="relative w-full max-w-[500px] rounded-[1.5rem] shadow-2xl transition duration-500 hover:scale-[1.02] hover:rotate-1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;