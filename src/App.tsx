import { Routes, Route, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import  "./App.css"
import Home from "./pages/Home";
import Taches from "./pages/Taches";
import About from "./pages/About";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const viewportH = window.innerHeight;
      const docH = document.documentElement.scrollHeight;
      const nearBottom = scrollY + viewportH >= docH - 200; // proche du bas
      setVisible(scrollY > 240 || nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollTop}
      aria-label="Revenir en haut"
      title="Revenir en haut"
      className={`fixed bottom-6 right-6 z-50 rounded-full p-3 sm:p-3.5 bg-blue-600 text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700 active:bg-blue-800 ring-1 ring-blue-700/30 dark:bg-blue-500 dark:hover:bg-blue-600 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400 dark:focus-visible:ring-offset-gray-900 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}

function App() {
  const [theme, setTheme] = useState<"light" | "dark">(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-950 dark:to-black transition-colors">
      {/* Navbar */}
      <nav className="backdrop-blur bg-white/70 dark:bg-gray-900/60 border-b border-gray-100/60 dark:border-gray-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-blue-400 tracking-wide texte-align-center">
            Gestionnaire de Tâches
          </h1>
          <div className="flex items-center gap-2">
            {/* Liens desktop */}
            <div className="hidden md:flex items-center gap-6 text-gray-700 dark:text-gray-300 font-medium">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-base sm:text-lg px-1 pb-2 border-b-2 transition-colors ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400'
                      : 'text-gray-700 dark:text-gray-300 border-transparent hover:text-blue-600 dark:hover:text-blue-400'
                  }`
                }
                end
              >
                Accueil
              </NavLink>
              <NavLink
                to="/tache"
                className={({ isActive }) =>
                  `text-base sm:text-lg px-1 pb-2 border-b-2 transition-colors ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400'
                      : 'text-gray-700 dark:text-gray-300 border-transparent hover:text-blue-600 dark:hover:text-blue-400'
                  }`
                }
              >
                Tâches
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-base sm:text-lg px-1 pb-2 border-b-2 transition-colors ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400'
                      : 'text-gray-700 dark:text-gray-300 border-transparent hover:text-blue-600 dark:hover:text-blue-400'
                  }`
                }
              >
                À propos
              </NavLink>
              <button
                onClick={toggleTheme}
                aria-label="Basculer le thème"
                className="ml-2 p-2 rounded-full bg-gray-100/70 dark:bg-gray-800/70 hover:bg-gray-200/80 dark:hover:bg-gray-700/70 transition-colors ring-1 ring-gray-200/70 dark:ring-gray-700/60 shadow-sm"
                title={theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
              >
                <span className="text-lg">{theme === 'dark' ? '🌙' : '☀️'}</span>
              </button>
            </div>

            {/* Actions mobile: thème + burger */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleTheme}
                aria-label="Basculer le thème"
                className="p-2 rounded-full bg-gray-100/70 dark:bg-gray-800/70 hover:bg-gray-200/80 dark:hover:bg-gray-700/70 transition-colors ring-1 ring-gray-200/70 dark:ring-gray-700/60 shadow-sm"
                title={theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
              >
                <span className="text-base">{theme === 'dark' ? '🌙' : '☀️'}</span>
              </button>

              <button
                onClick={() => setMenuOpen((v) => !v)}
                aria-label="Ouvrir/fermer le menu"
                aria-expanded={menuOpen}
                className="p-2 rounded-xl ring-1 ring-gray-200/70 dark:ring-gray-700/60 bg-white/70 dark:bg-gray-800/70 hover:bg-white/90 dark:hover:bg-gray-700/70 transition"
              >
                {menuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100/60 dark:border-gray-800">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3 text-gray-700 dark:text-gray-300 font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-1 py-1 transition-colors ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'hover:text-blue-600 dark:hover:text-blue-400'
                }`
              }
              onClick={() => setMenuOpen(false)}
              end
            >
              Accueil
            </NavLink>
            <NavLink
              to="/tache"
              className={({ isActive }) =>
                `px-1 py-1 transition-colors ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'hover:text-blue-600 dark:hover:text-blue-400'
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              Tâches
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-1 py-1 transition-colors ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'hover:text-blue-600 dark:hover:text-blue-400'
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              À propos
            </NavLink>
          </div>
        </div>
      )}
      </nav>

      {/* Main content */}
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tache" element={<Taches />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <BackToTop />

      {/* Footer */}
      <footer className="bg-white/70 dark:bg-gray-900/60 border-t border-gray-100/60 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 text-center text-base text-gray-500">
          © {new Date().getFullYear()} Gestionnaire de Tâches – Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}

export default App;
