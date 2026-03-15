import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import PokemonCard from './components/PokemonCard'
import usePokemon from './hooks/usePokemon'
import type { Pokemon } from "./Types/pokemon";
import FavoriteList from "./components/FavoriteList";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const { pokemon, isLoading, error, searchPokemon } = usePokemon()

  // Só trocamos useState por useLocalStorage — o resto é idêntico!
  const [favorites, setFavorites] = useLocalStorage<Pokemon[]>('favorites', [])

  const isFavorite = favorites.some((f) => f.id === pokemon?.id)

  function handleAddFavorite(pokemon: Pokemon): void {
    if (favorites.some((f) => f.id === pokemon.id)) return
    setFavorites([...favorites, pokemon])
  }

  function handleRemoveFavorite(id: number): void {
    setFavorites(favorites.filter((f) => f.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header
        title="My Pokédex"
        subtitle="Find and save your favorite Pokémons"
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <SearchBar onSearch={searchPokemon} />

        {isLoading && (
          <p className="text-center text-gray-500 mt-8">Loading...</p>
        )}

        {error && (
          <p className="text-center text-red-500 mt-8">{error}</p>
        )}

        {pokemon && !isLoading && (
          <PokemonCard
            pokemon={pokemon}
            isFavorite={isFavorite}
            onAddFavorite={handleAddFavorite}
            onRemoveFavorite={handleRemoveFavorite}
          />
        )}

        {favorites.length > 0 && (
          <FavoriteList
            favorites={favorites}
            onRemove={handleRemoveFavorite}
          />
        )}
      </main>
    </div>
  )
}

export default App