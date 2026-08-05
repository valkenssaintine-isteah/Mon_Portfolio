import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import useTheme from "../hooks/useTheme";

const navItems = [
  { label: "Accueil", to: "/" },
  { label: "Équipe", to: "/equipe" },
  { label: "Projets", to: "/projets" },
  { label: "GitHub", to: "/github" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-lg font-black text-white shadow-lg">
            T
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tight text-black dark:text-white">TEAM</h1>
            <p className="text-[10px] tracking-[0.25rem] text-blue-700 dark:text-blue-300">PORTFOLIO</p>
          </div>
        </NavLink>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-7 font-medium">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `transition font-semibold text-blue-700 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200 ${isActive ? "text-blue-600 dark:text-blue-200" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <NavLink
          to="/projets"
          className="hidden md:inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
        >
          Voir notre portfolio
        </NavLink>

        <div className="relative md:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-blue-600 dark:text-blue-400"
            aria-label="Ouvrir le menu"
          >
            ☰
          </button>

          {menuOpen && (
            <div className="absolute right-0 top-12 w-64 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl dark:border-slate-700 dark:bg-slate-900">
              <div className="mb-3 border-b border-slate-200 pb-3 dark:border-slate-700">
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-300">Menu</p>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between text-slate-700 dark:text-slate-200">
                  <span>Paramètres</span>
                  <span>⚙️</span>
                </div>

                <button
                  type="button"
                  onClick={toggleTheme}
                  className="flex w-full items-center justify-between rounded-lg bg-slate-100 px-3 py-2 text-left text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                >
                  <span>Mode</span>
                  <span>{theme === "light" ? "☀️" : "🌙"}</span>
                </button>

                <Link to="/equipe" onClick={() => setMenuOpen(false)} className="flex items-center justify-between rounded-lg bg-slate-100 px-3 py-2 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  <span>Infos de l&apos;équipe</span>
                  <span>👥</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;