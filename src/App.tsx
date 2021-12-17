import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import CharactersGrid from './components/CharactersGrid';
import CharacterDetails from './components/CharacterDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="content container px-4 mx-auto max-w-screen-xl">
          <Routes>
            <Route path="/" element={<CharactersGrid />} />
            <Route path="characters/:id" element={<CharacterDetails />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
