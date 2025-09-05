import { useState, useEffect } from "react";
import FormTaches from "../components/FormTaches";
import ListTaches from "../components/ListTaches";
import type { Tache } from "../types/Tache";

function Taches() {
  // Récupération des tâches depuis localStorage ou tableau vide
  const [taches, setTaches] = useState<Tache[]>(() => {
    const stored = localStorage.getItem("taches");
    return stored ? JSON.parse(stored) : [];
  });

  // Sauvegarde automatique dans localStorage à chaque modification
  useEffect(() => {
    localStorage.setItem("taches", JSON.stringify(taches));
  }, [taches]);

  // Ajouter une tâche
  const ajouterTache = (text: string) => {
    const nouvelleTache: Tache = {
      id: Date.now(),
      text,
      done: false,
    };
    setTaches([nouvelleTache, ...taches]);
  };

  // Supprimer une tâche
  const supprimerTache = (id: number) => {
    setTaches(taches.filter((t) => t.id !== id));
  };

  // Marquer une tâche fait/non fait
  const toggleTache = (id: number) => {
    setTaches(
      taches.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  return (
    <div>
       <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent text-center px-1 sm:px-2">
          Mes Tâches 📝
       </h2>

       {/* Compteur des tâches */}
      <div className="mt-2 sm:mt-3 md:mt-4 text-center px-1 sm:px-2">
        <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
          <span className="inline-block">Total: {taches.length}</span>
          <span className="mx-1 sm:mx-2">|</span>
          <span className="inline-block">Fait: {taches.filter((t) => t.done).length}</span>
          <span className="mx-1 sm:mx-2">|</span>
          <span className="inline-block">À faire: {taches.filter((t) => !t.done).length}</span>
        </p>
      </div><br />


      {/* Formulaire avec callback pour ajouter */}
      <FormTaches ajouterTache={ajouterTache} />

      {/* Liste des tâches avec callbacks pour supprimer et toggle */}
      <ListTaches
        taches={taches}
        supprimerTache={supprimerTache}
        toggleTache={toggleTache}
      />

     
    </div>
  );
}

export default Taches;
