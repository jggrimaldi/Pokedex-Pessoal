import type { Pokemon } from "../Types/pokemon"

interface PokemonCardProps {
  pokemon: Pokemon
  isFavorite: boolean
  onAddFavorite: (pokemon: Pokemon) => void
  onRemoveFavorite: (id: number) => void
}

const typeColors: Record<string, string> = {
  fire: 'bg-orange-400',
  water: 'bg-blue-400',
  grass: 'bg-green-400',
  electric: 'bg-yellow-300',
  psychic: 'bg-pink-400',
  ice: 'bg-cyan-300',
  dragon: 'bg-indigo-500',
  dark: 'bg-gray-700',
  fairy: 'bg-pink-300',
  normal: 'bg-gray-400',
  fighting: 'bg-red-700',
  flying: 'bg-sky-300',
  poison: 'bg-purple-400',
  ground: 'bg-yellow-600',
  rock: 'bg-yellow-800',
  bug: 'bg-lime-400',
  ghost: 'bg-purple-700',
  steel: 'bg-slate-400',
}

function PokemonCard({ pokemon, isFavorite, onAddFavorite, onRemoveFavorite }: PokemonCardProps) {
  const image = pokemon.sprites.other['official-artwork'].front_default

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm mx-auto mt-8">

      <p className="text-gray-400 text-sm font-mono">
        #{String(pokemon.id).padStart(3, '0')}
      </p>
      <h2 className="text-2xl font-bold capitalize text-gray-800 mb-2">
        {pokemon.name}
      </h2>

      <img
        src={image}
        alt={pokemon.name}
        className="w-48 h-48 mx-auto"
      />

      <div className="flex gap-2 justify-center mt-4">
        {pokemon.types.map((t) => (
          <span
            key={t.slot}
            className={`${typeColors[t.type.name] ?? 'bg-gray-400'} text-white text-xs font-semibold px-3 py-1 rounded-full capitalize`}
          >
            {t.type.name}
          </span>
        ))}
      </div>

      <div className="flex justify-around mt-6 text-center">
        <div>
          <p className="text-gray-400 text-xs">Height</p>
          <p className="font-semibold text-gray-700">{pokemon.height / 10}m</p>
        </div>
        <div>
          <p className="text-gray-400 text-xs">Weight</p>
          <p className="font-semibold text-gray-700">{pokemon.weight / 10}kg</p>
        </div>
      </div>

      <div className="mt-6">
        {pokemon.stats.map((s) => (
          <div key={s.stat.name} className="mb-2">
            <div className="flex justify-between text-xs text-gray-500 mb-1 capitalize">
              <span>{s.stat.name}</span>
              <span>{s.base_stat}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-red-500 h-2 rounded-full"
                style={{ width: `${Math.min((s.base_stat / 150) * 100, 100)}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Botão de favoritar */}
      <button
        onClick={() => isFavorite ? onRemoveFavorite(pokemon.id) : onAddFavorite(pokemon)}
        className={`w-full mt-6 py-2 rounded-lg font-semibold transition-colors ${
          isFavorite
            ? 'bg-yellow-400 hover:bg-yellow-500 text-white'
            : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
        }`}
      >
        {isFavorite ? '⭐ Favorited' : '☆ Add to Favorites'}
      </button>

    </div>
  )
}

export default PokemonCard