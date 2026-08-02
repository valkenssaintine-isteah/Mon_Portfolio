function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <h2 className="text-2xl font-bold text-blue-400">
              Équipe 4
            </h2>

            <p className="text-gray-400 mt-2">
              Portfolio Professionnel React + Vite
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Email</a>
          </div>

        </div>

        <hr className="my-6 border-gray-700" />

        <p className="text-center text-gray-400">
          © 2026 Équipe 4 - Tous droits réservés.
        </p>

      </div>
    </footer>
  );
}

export default Footer;