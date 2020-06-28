import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Lobby from './Lobby/lobby_index';
import { GameLobbyContext } from './Providers/GameLobbyContext';
import useGameLobby from './Lobby/Hooks/useGameLobby';

const Navigation = () => {
  return (
    <>
      <Router>
        <ul>
          <li>
            <Link to='/lobby'>Lobby</Link>
          </li>
        </ul>
        <Switch>
          <GameLobbyContext.Provider value={useGameLobby()}>
            <Route path='/lobby'>
              <Lobby />
            </Route>
          </GameLobbyContext.Provider>
        </Switch>
      </Router>
    </>
  );
};

export default Navigation;
