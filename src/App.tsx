import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import PokemonCard from './components/PokemonCard'
import usePokemon from './hooks/usePokemon'

function App() {
const { pokemon, isLoading, error, searchPokemon } = usePokemon()
  return (
    <div className="min-h-screen bg-gray-100">
      <Header
        title="Minha Pokedex"
        subtitle="Encontre e salve seu pokemon favorito"
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <SearchBar onSearch={searchPokemon} />

        {/* Renderização condicional — só mostra o que for relevante */}
        {isLoading && (
          <p className="text-center text-gray-500 mt-8">Loading...</p>
        )}

        {error && (
          <p className="text-center text-red-500 mt-8">{error}</p>
        )}

        {pokemon && !isLoading && (
          <PokemonCard pokemon={pokemon} />
        )}
      </main>
    </div>
  );
}

export default App;
