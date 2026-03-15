// Representa o resultado da busca — dados básicos
export interface Pokemon {
  id: number
  name: string
  height: number
  weight: number
  sprites: {
    front_default: string
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
  types: PokemonType[]
  stats: PokemonStat[]
}

// Cada tipo do pokémon (ex: fire, water)
export interface PokemonType {
  slot: number
  type: {
    name: string
  }
}

// Cada status do pokémon (ex: hp, attack)
export interface PokemonStat {
  base_stat: number
  stat: {
    name: string
  }
}