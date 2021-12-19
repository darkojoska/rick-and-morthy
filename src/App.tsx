import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import CharactersGrid from './components/CharactersGrid';
import CharacterDetails from './components/CharacterDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="content container px-4 mx-auto max-w-screen-xl">
          <Switch>
            <Route exact path="/">
              <Redirect to="/characters?page=1" />
            </Route>
            <Route path="/characters" exact component={CharactersGrid} />
            <Route path="/characters/:id" exact component={CharacterDetails} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
