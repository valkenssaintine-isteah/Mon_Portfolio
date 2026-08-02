import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4"
           aria-label="Navigation principale"
      >
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          Équipe 4
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-blue-600 transition">
              Accueil
            </Link>
          </li>

          <li>
            <Link to="/team" className="hover:text-blue-600 transition">
              Équipe
            </Link>
          </li>

          <li>
            <Link to="/projects" className="hover:text-blue-600 transition">
              Projets
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
          </li>
        </ul>

        <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition">
          Télécharger CV
        </button>

      </nav>
    </header>
  );
}

export default Navbar;