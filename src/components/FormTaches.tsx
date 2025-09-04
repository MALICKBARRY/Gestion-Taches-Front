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
    <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ajouter une nouvelle note"
        rows={2}
        className="flex-1 min-w-0 px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-y max-h-48"
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
        className="px-5 py-2 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition shrink-0"
      >
        Ajouter
      </button>
    </form>
  );
}

export default FormTaches;
