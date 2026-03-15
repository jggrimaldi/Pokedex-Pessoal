import { useState } from "react";

interface SearchBarProps {
    // Tipando as props 
  onSearch: (query: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
    // useState<string> — o estado é uma string
  const [query, setQuery] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // evita recarregar a página

    const cleanQuery = query.trim().toLowerCase();

    if (!cleanQuery) return; // não busca se estiver vazio
    onSearch(cleanQuery);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 w-full max-w-md mx-auto"
    >
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ex: pikachu, charizard..."
        className="flex-1 px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-red-400 focus:outline-none text-gray-800"
      />
      <button
        type="submit"
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
      >
        Buscar
      </button>
    </form>
  );
}

export default SearchBar;
