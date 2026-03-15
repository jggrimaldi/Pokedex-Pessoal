import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  function handleSearch(termo: string) {
    console.log("Buscando por:", termo);
  }
  return (
    <div className="min-h-screen bg-gray-100">
      <Header
        title="Minha Pokedex"
        subtitle="Encontre e salve seu pokemon favorito"
      />
      <main className="max-w-3xl mx-auto px-4 py-8">
        <SearchBar onSearch={handleSearch} />
      </main>
    </div>
  );
}

export default App;
