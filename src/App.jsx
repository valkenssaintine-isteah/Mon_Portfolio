import { Routes, Route } from "react-router-dom";

import "./styles/globals.css";
import "./styles/colors.css";
import "./styles/typography.css";
import "./App.css";

import ThemeToggle from "./components/ThemeToggle";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Team from "./pages/Team";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import GitHubStats from "./components/GitHubStats";

function App() {
  return (
    <>
      <Navbar />
      <ThemeToggle />

      <main className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/equipe" element={<Team />} />
          <Route path="/projets" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/github"
            element={
              <section className="container section py-20">
                <h2 className="mb-8 text-center text-4xl font-bold text-slate-900 dark:text-white">
                  GitHub Statistics
                </h2>
                <GitHubStats username="valkenssaintine-isteah" />
              </section>
            }
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;