import ItemTaches from "./ItemTaches";
import type { Tache } from "../types/Tache";

interface ListTachesProps {
  taches: Tache[];
  supprimerTache: (id: number) => void;
  toggleTache: (id: number) => void;
}

function ListTaches({ taches, supprimerTache, toggleTache }: ListTachesProps) {
  if (taches.length === 0) {
    return <p className="text-gray-500 text-center py-4 italic">Aucune tâche pour le moment ✨</p>;
  }

  return (
    <ul className="space-y-3">
      {taches.map((tache) => (
        <ItemTaches
          key={tache.id}
          tache={tache}
          supprimerTache={supprimerTache}
          toggleTache={toggleTache}
        />
      ))}
    </ul>
  );
}

export default ListTaches;
