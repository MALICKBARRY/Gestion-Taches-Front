function About() {
  return (
    <section className="space-y-6">
      <header className="text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
          À propos
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
          Découvrez notre application et sa mission
        </p>
      </header>

      <div className="rounded-2xl p-6 sm:p-8 ring-1 ring-gray-200/70 dark:ring-gray-800/70 bg-white/70 dark:bg-white/5 backdrop-blur space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        <p>
          Bienvenue sur notre application de gestion des tâches, conçue pour vous aider à organiser, planifier et atteindre vos objectifs au quotidien. Notre plateforme moderne offre une interface intuitive et réactive, adaptée à tous les appareils (mobile, tablette, desktop), afin de faciliter la gestion de vos activités personnelles ou professionnelles.
        </p>
        <p>
          Grâce à des fonctionnalités avancées telles que la planification, la priorisation, le suivi des tâches, la gestion des échéances et la collaboration, vous pouvez optimiser votre productivité et garder le contrôle sur vos projets. L’application propose également un mode sombre, une expérience fluide et des animations agréables pour rendre votre utilisation encore plus confortable.
        </p>
        <p>
          Notre mission est de vous accompagner dans la réalisation de vos ambitions, en simplifiant l’organisation de votre journée et en vous permettant de vous concentrer sur l’essentiel. Que vous soyez étudiant, professionnel ou entrepreneur, notre outil s’adapte à vos besoins et évolue avec vous.
        </p>
        <p>
          Rejoignez-nous et découvrez une nouvelle façon de gérer vos tâches avec efficacité et style !
        </p>
      </div>
    </section>
  );
}

export default About;
