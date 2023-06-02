
import './App.css';
import PokemonList from './components/PokemonList';


function App() {

  return (
    <div className="App">
      <h1 style={{ color: 'white', fontSize: 56, marginTop: 24, marginBottom: 0 }}>Pokedex</h1>
      <h3 style={{ marginBottom: 48, color: '#EFB416' }}>Find your Pocket Monster !</h3>
      <PokemonList />
    </div >
  );
}

export default App;
