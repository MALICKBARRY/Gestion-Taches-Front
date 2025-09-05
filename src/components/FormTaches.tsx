import { useState } from "react";

interface FormTachesProps {
  ajouterTache: (text: string) => void;
}

function FormTaches({ ajouterTache }: FormTachesProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    ajouterTache(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:gap-3 mb-4 sm:mb-6">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nouvelle tâche..."
        rows={2}
        className="w-full px-2 sm:px-3 md:px-4 py-2 border rounded-lg sm:rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-y max-h-32 sm:max-h-48 text-xs sm:text-sm md:text-base"
        onKeyDown={(e) => {
          if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
            e.preventDefault();
            if (!text.trim()) return;
            ajouterTache(text);
            setText('');
          }
        }}
      />
      <button
        type="submit"
        className="w-full px-3 sm:px-4 md:px-5 py-2 bg-blue-600 text-white rounded-lg sm:rounded-xl shadow-md hover:bg-blue-700 transition text-xs sm:text-sm md:text-base font-medium"
      >
        Ajouter
      </button>
    </form>
  );
}

export default FormTaches;
