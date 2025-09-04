import type { Tache } from "../types/Tache";

interface Props {
  tache: Tache;
  supprimerTache: (id: number) => void;
  toggleTache: (id: number) => void;
}

function ItemTaches({ tache, supprimerTache, toggleTache }: Props) {
  return (
    <li
      className={`flex justify-between items-center gap-3 px-4 py-2 rounded-xl shadow-sm border transition ${
        tache.done ? "bg-green-50 border-green-300" : "bg-white border-gray-200"
      }`}
    >
      <span
        title={tache.text}
        className={`flex-1 min-w-0 mr-1 whitespace-pre-wrap break-words ${
          tache.done
            ? "line-through text-gray-400"
            : "text-gray-700 font-medium"
        }`}
      >
        {tache.text}
      </span>

      <div className="flex gap-2 shrink-0">
        <button
          onClick={() => toggleTache(tache.id)}
          className={`text-sm px-3 py-1 rounded-lg transition ${
            tache.done
              ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
              : "bg-green-100 text-green-700 hover:bg-green-200"
          }`}
        >
          {tache.done ? "Annuler ✅" : "Terminer ✔"}
        </button>

        <button
          onClick={() => supprimerTache(tache.id)}
          className="text-sm px-3 py-1 rounded-lg bg-red-100 text-red-700 hover:bg-red-200 transition"
        >
          Supprimer ❌
        </button>
      </div>
    </li>
  );
}

export default ItemTaches;
