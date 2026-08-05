import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-20 bg-white text-slate-900 dark:bg-slate-950 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Équipe 4</h2>
            <p className="mt-4 leading-7 text-slate-700 dark:text-slate-200">
              Portfolio Premium 2026 réalisé par l&apos;Équipe 4 avec React, Vite et des bonnes pratiques de développement moderne.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">Navigation</h3>
            <ul className="space-y-3 text-slate-700 dark:text-slate-200">
              <li><Link to="/" className="hover:text-blue-600 transition text-slate-700 dark:text-slate-200">Accueil</Link></li>
              <li><Link to="/equipe" className="hover:text-blue-600 transition text-slate-700 dark:text-slate-200">Équipe</Link></li>
              <li><Link to="/projets" className="hover:text-blue-600 transition text-slate-700 dark:text-slate-200">Projets</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600 transition text-slate-700 dark:text-slate-200">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">Contact : Équipe 4</h3>
            <ul className="space-y-3 text-slate-700 dark:text-slate-200">
              <li>
                • <strong className="text-slate-900 dark:text-white">Valkens SAINTINÉ</strong><br />
                <span className="text-sm text-slate-700 dark:text-slate-200">Maquettage • Sémantique • Accessibilité</span>
              </li>
              <li>
                • <strong className="text-slate-900 dark:text-white">Fritzson SAINTINÉ</strong><br />
                <span className="text-sm text-slate-700 dark:text-slate-200">Développement des composants graphiques</span>
              </li>
              <li>
                • <strong className="text-slate-900 dark:text-white">Marie Mancinie TREJUSTE</strong><br />
                <span className="text-sm text-slate-700 dark:text-slate-200">Gestion des États Globaux et API Publiques</span>
              </li>
              <li>
                • <strong className="text-slate-900 dark:text-white">Pharah PIERRE-JULES</strong><br />
                <span className="text-sm text-slate-700 dark:text-slate-200">Ingénierie Serveur • Qualité • DevOps</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-slate-300 dark:border-slate-700" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-slate-700 dark:text-slate-200">© 2026 Équipe 4 — Tous droits réservés.</p>
          <Link to="/" className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
            ↑ Retour en haut
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;