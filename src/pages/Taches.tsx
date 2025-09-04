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
       <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent text-center">
          Mes Taches 📝
       </h2>

       {/* Compteur des tâches */}
      <p className="mt-4 text-gray-600 font-medium text-center">
        Total : {taches.length} | Fait : {taches.filter((t) => t.done).length} | À faire : {taches.filter((t) => !t.done).length}
      </p><br />


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
