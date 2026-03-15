import { useState } from 'react'

// Hook genérico — o "T" significa que funciona com qualquer tipo
function useLocalStorage<T>(key: string, initialValue: T) {

  // Inicializa o estado lendo do localStorage
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key)
      // Se já tem algo salvo, usa — senão usa o valor inicial
      return item ? (JSON.parse(item) as T) : initialValue
    } catch {
      return initialValue
    }
  })

  // Função que atualiza o estado E salva no localStorage
  function setValue(value: T): void {
    try {
      setStoredValue(value)
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      console.error('Error saving to localStorage')
    }
  }

  return [storedValue, setValue] as const
}

export default useLocalStorage