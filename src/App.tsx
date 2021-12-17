import './App.css';
import CharactersGrid from './components/CharactersGrid';

function App() {
  return (
    <div className="App">
      <div className="content container px-4 mx-auto max-w-screen-xl">
        <h2 className='my-16'>Rick and Marthy</h2>
        <CharactersGrid />
      </div>
    </div>
  );
}

export default App;
