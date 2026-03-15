import { useState } from "react";
import type { Pokemon } from "../Types/pokemon";

interface UsePokemonReturn {
  pokemon: Pokemon | null;
  isLoading: boolean;
  error: string | null;
  searchPokemon: (query: string) => Promise<void>;
}

function usePokemon(): UsePokemonReturn {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);


    async function searchPokemon(query:string) {
        try {
            //Inicia as variaveis com valor vazio
           setPokemon(null);
           setError(null);
           setIsLoading(true);
           
           //Tenta pegar o pokemon pela query na API
           const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${query}`
            )

            //Se n tiver OK, erro
           if (!response.ok) {
                throw new Error(`Pokémon "${query}" not found.`)
            }

            //Pega o dado e converte para json
            const data : Pokemon = await response.json()
            setPokemon(data)

        } catch (err) {
            // err é "unknown" no TypeScript — precisamos verificar o tipo
            if (err instanceof Error) {
                setError(err.message)
            } else {
                setError('An unexpected error occurred.')
            }
        } finally {
        // finally sempre executa — loading para independente do resultado
            setIsLoading(false)
    }
  }
  return { pokemon, isLoading, error, searchPokemon }
}

export default usePokemon