import logo from './logo.svg';
import './App.css';

import {Link, Route, Switch} from 'react-router-dom';

import WelcomePage from './components/welcomepage';
import CharacterClassMain from './components/characterClassMain';
import DiceRollMain from './components/diceRollMain';
import DungeonMasterMain from './components/dungeonMasterMain';

function App() {
  return (
    <div className="App">
      {/* <a href="google.com">GO to google</a>
      <Link to="/google.com">Go to google</Link> */}
      <h1>Dungeons & Dragons</h1>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/characterclasses">Class Info</Link>
          </li>
          <li>
            <Link to="/dicerolls">Dice Roller</Link>
          </li>
          <li>
            <Link to="/gameplanning">DM Secret Area</Link>
          </li>
        </ul>

      </nav>

      {/* <Route exact path="/">
        <WelcomePage />
      </Route> */}
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route path="/characterclasses">
          <CharacterClassMain />
        </Route>
        <Route path="/dicerolls">
          <DiceRollMain />
        </Route>
        <Route path="/gameplanning">
          <DungeonMasterMain />
        </Route>
        {/* Not exact path still shows at the end unless you use a Switch!*/}
        {/* <Route path="/">
          <WelcomePage />
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
