import type { Tache } from "../types/Tache";

interface Props {
  tache: Tache;
  supprimerTache: (id: number) => void;
  toggleTache: (id: number) => void;
}

function ItemTaches({ tache, supprimerTache, toggleTache }: Props) {
  return (
    <li
      className={`flex flex-col gap-2 px-2 sm:px-3 md:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl shadow-sm border transition ${
        tache.done ? "bg-green-50 border-green-300 dark:bg-green-900/20 dark:border-green-700" : "bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700"
      }`}
    >
      <span
        title={tache.text}
        className={`whitespace-pre-wrap break-words text-xs sm:text-sm md:text-base leading-relaxed ${
          tache.done
            ? "line-through text-gray-400 dark:text-gray-500"
            : "text-gray-700 dark:text-gray-200 font-medium"
        }`}
      >
        {tache.text}
      </span>

      <div className="flex gap-1 sm:gap-2">
        <button
          onClick={() => toggleTache(tache.id)}
          className={`flex-1 text-xs px-2 py-1 rounded-md sm:rounded-lg transition font-medium ${
            tache.done
              ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400"
              : "bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400"
          }`}
        >
          {tache.done ? "Annuler" : "Fait"}
        </button>

        <button
          onClick={() => supprimerTache(tache.id)}
          className="flex-1 text-xs px-2 py-1 rounded-md sm:rounded-lg bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400 transition font-medium"
        >
          Supprimer
        </button>
      </div>
    </li>
  );
}

export default ItemTaches;
