import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const IMAGES: string[] = [
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?w=800&q=80&auto=format&fit=crop",
];

// Slogans défilants
const SLOGANS: string[] = [
  "« Organisez votre journée, accomplissez vos rêves. »",
  "« Gérez vos tâches, libérez votre potentiel. »",
  "« Chaque tâche compte, chaque succès commence ici. »",
  "« Simplifiez votre quotidien, maîtrisez vos priorités. »",
  "« Votre productivité, notre mission. »",
];

function SloganCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SLOGANS.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl mx-auto" role="status" aria-live="polite">
      <div className="min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[3.5rem] flex items-center justify-center overflow-hidden rounded-lg sm:rounded-xl bg-white/70 dark:bg-white/10 ring-1 ring-gray-200/70 dark:ring-gray-800/70 px-3 sm:px-4 md:px-6">
        {SLOGANS.map((s, i) => (
          <span
            key={i}
            className={`absolute text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-200 transition-all duration-500 text-center leading-tight px-2 ${i === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
            aria-hidden={i !== index}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function ImageCard({ src, title }: { src: string; title: string }) {
  return (
    <div className="group relative w-40 sm:w-48 md:w-56 lg:w-64 h-28 sm:h-32 md:h-36 lg:h-40 shrink-0 overflow-hidden rounded-xl sm:rounded-2xl ring-1 ring-gray-200/70 dark:ring-gray-800/70 bg-white/60 dark:bg-white/5 backdrop-blur">
      <img
        src={src}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-70" />
      <div className="absolute bottom-1 sm:bottom-2 left-2 sm:left-3 right-2 sm:right-3 text-white text-xs sm:text-sm font-medium drop-shadow-md">
        {title}
      </div>
    </div>
  );
}

function MarqueeStrip({ reverse = false, slow = false }: { reverse?: boolean; slow?: boolean }) {
  const titles = [
    "Planifier",
    "Prioriser",
    "Suivi",
    "Échéances",
    "Collaboration",
    "Focus",
  ];

  return (
    <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl p-2 sm:p-3 md:p-4 ring-1 ring-gray-200/70 dark:ring-gray-800/70 bg-white/50 dark:bg-white/5 mx-1 sm:mx-0">
      <div
        className={`flex w-[200%] gap-2 sm:gap-4 md:gap-6 ${slow ? "animate-marqueeSlow" : "animate-marquee"}`}
        style={{ animationDirection: reverse ? 'reverse' : 'normal' }}
      >
        <ul className="flex min-w-[50%] gap-2 sm:gap-4 md:gap-6">
          {IMAGES.map((src, i) => (
            <li key={`a-${i}`}>
              <ImageCard src={src} title={titles[i % titles.length]} />
            </li>
          ))}
        </ul>
        <ul className="flex min-w-[50%] gap-2 sm:gap-4 md:gap-6">
          {IMAGES.map((src, i) => (
            <li key={`b-${i}`}>
              <ImageCard src={src} title={titles[i % titles.length]} />
            </li>
          ))}
        </ul>
      </div>
      {/* Fades sur les bords */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 md:w-24 bg-gradient-to-r from-white dark:from-gray-950" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 md:w-24 bg-gradient-to-l from-white dark:from-gray-950" />
    </div>
  );
}

function Home() {
  return (
    <div className="relative overflow-hidden w-full">
      {/* Décor de fond */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-16 -right-10 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 w-full">
        <div className="w-full max-w-4xl mx-auto px-2 sm:px-4">
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent leading-tight">
              Gerez vos tâches avec style
            </span>
            <span className="block text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-1 sm:mt-2 md:mt-3 text-gray-700 dark:text-gray-300 font-medium">
              Rapide-Élégant-Responsive
            </span>
          </h2>
        </div>
        <div className="w-full max-w-2xl mx-auto px-2 sm:px-4">
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 text-center">
            Application moderne pour gérer vos tâches quotidiennes.
          </p>
        </div>
        <div className="w-full flex justify-center">
          <SloganCarousel />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 w-full max-w-sm mx-auto px-2">
          <Link
            to="/tache"
            className="w-full px-4 sm:px-5 md:px-6 lg:px-7 py-2 sm:py-2.5 md:py-3 lg:py-3.5 rounded-lg sm:rounded-xl bg-blue-600 text-white font-semibold shadow-md hover:shadow-lg hover:bg-blue-700 active:bg-blue-800 transition-all duration-300 shadow-blue-600/30 hover:shadow-blue-600/40 ring-1 ring-blue-700/30 animate-float text-xs sm:text-sm md:text-base text-center"
          >
            Commencer 🚀
          </Link>
          <a
            href="#marquee"
            className="w-full px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-lg sm:rounded-xl bg-white/70 dark:bg-white/10 text-gray-800 dark:text-gray-200 ring-1 ring-gray-200/70 dark:ring-gray-800/70 hover:bg-white/90 dark:hover:bg-white/15 transition text-xs sm:text-sm md:text-base text-center"
          >
            Voir la démo ↓
          </a>
        </div>
      </section>

      {/* Marquee Demo */}
      <section id="marquee" className="mt-6 sm:mt-10 md:mt-14 flex flex-col gap-3 sm:gap-5 md:gap-6 overflow-hidden w-full">
        <MarqueeStrip />
        <MarqueeStrip reverse slow />
      </section>

      {/* Features */}
      <section className="mt-6 sm:mt-8 md:mt-12 w-full max-w-6xl mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
          <div className="rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 ring-1 ring-gray-200/70 dark:ring-gray-800/70 bg-white/60 dark:bg-white/5 backdrop-blur hover:shadow-glow transition-shadow text-center">
            <div className="text-lg sm:text-xl md:text-2xl">⚡</div>
            <h3 className="mt-1 sm:mt-2 font-semibold text-sm sm:text-base md:text-lg">Rapide et fluide</h3>
            <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400">Interface réactive et fluide.</p>
          </div>
          <div className="rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 ring-1 ring-gray-200/70 dark:ring-gray-800/70 bg-white/60 dark:bg-white/5 backdrop-blur hover:shadow-glow transition-shadow text-center">
            <div className="text-lg sm:text-xl md:text-2xl">🌙</div>
            <h3 className="mt-1 sm:mt-2 font-semibold text-sm sm:text-base md:text-lg">Mode sombre</h3>
            <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400">Thème clair/sombre persistant.</p>
          </div>
          <div className="rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 ring-1 ring-gray-200/70 dark:ring-gray-800/70 bg-white/60 dark:bg-white/5 backdrop-blur hover:shadow-glow transition-shadow text-center">
            <div className="text-lg sm:text-xl md:text-2xl">📱</div>
            <h3 className="mt-1 sm:mt-2 font-semibold text-sm sm:text-base md:text-lg">Responsive</h3>
            <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400">Adapté à tous les écrans.</p>
          </div>
        </div>
      </section>

      {/* WhatsApp Contact */}
      <section className="mt-6 sm:mt-8 md:mt-10 w-full max-w-4xl mx-auto px-2 sm:px-4">
        <div className="rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-7 ring-1 ring-gray-200/70 dark:ring-gray-800/70 bg-white/60 dark:bg-white/5 backdrop-blur flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4 text-center">
          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold">Contact WhatsApp</h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Questions? Discutez avec moi.</p>
          </div>
          <a
            href="https://wa.me/621393819?text=Bonjour%20!%20Je%20viens%20du%20site%20Gestionnaire%20de%20T%C3%A2ches.%20"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl bg-green-600 text-white font-medium shadow-md hover:bg-green-700 active:bg-green-800 transition ring-1 ring-green-700/30 text-xs sm:text-sm md:text-base w-full max-w-xs mx-auto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-3 sm:h-4 md:h-5 w-3 sm:w-4 md:w-5" fill="currentColor" aria-hidden="true">
              <path d="M16 3a13 13 0 00-6.65 24.27l-1.38 4.09 4.22-1.35A13 13 0 1016 3zm0 23.35a10.35 10.35 0 1110.35-10.35A10.36 10.36 0 0116 26.35zm3.11-8.79c.84.09 1.58.11 2.36.25.23.04.38.16.38.4a3.66 3.66 0 01-1.6 2.89A8.09 8.09 0 0116 24.27 8.26 8.26 0 017.25 16a3.81 3.81 0 011.2-2.85 1.26 1.26 0 01.9-.42h.35c.27.06.41.19.41.46a3.92 3.92 0 00.56 2 .49.49 0 010 .51 6.53 6.53 0 01-.86 1.18c-.12.14-.26.29-.12.56a8.54 8.54 0 002.6 3.2c.15.16.31.17.5.1.3-.11 1.36-.87 1.82-1.13a.39.39 0 01.39 0 4.83 4.83 0 002.08.53z" />
            </svg>
            WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
