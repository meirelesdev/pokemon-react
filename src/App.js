import './App.css';
import Card from './components/Card';
import data from './data/pokemon'

function App() {
  return (
    <div className="App">
      {data.map((pokemon, index) => (
        <div key={index}>
          <Card pokemon={pokemon} image={pokemon.image}/>
        </div>
      ))}
    </div>
  );
}

export default App;
