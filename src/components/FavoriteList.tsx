import type { Pokemon } from "../Types/pokemon"

interface FavoriteListProps {
  favorites: Pokemon[]
  onRemove: (id: number) => void
}

function FavoriteList({ favorites, onRemove }: FavoriteListProps) {
  return (
    <section className="mt-12">
      <h2 className="text-xl font-bold text-gray-700 mb-4">
        ⭐ Favorites ({favorites.length})
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {favorites.map((pokemon) => {
          const image = pokemon.sprites.other['official-artwork'].front_default

          return (
            <div
              key={pokemon.id}
              className="bg-white rounded-xl shadow p-4 flex flex-col items-center"
            >
              <img
                src={image}
                alt={pokemon.name}
                className="w-20 h-20"
              />
              <p className="capitalize font-semibold text-gray-800 mt-2">
                {pokemon.name}
              </p>
              <p className="text-gray-400 text-xs font-mono">
                #{String(pokemon.id).padStart(3, '0')}
              </p>
              <button
                onClick={() => onRemove(pokemon.id)}
                className="mt-3 text-xs text-red-400 hover:text-red-600 transition-colors"
              >
                Remove
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FavoriteList