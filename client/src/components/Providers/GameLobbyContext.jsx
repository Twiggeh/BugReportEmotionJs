import React from 'react';

export const GAMELOBBY_DEFAULT = {
  gameLobby: undefined,
  setGameLobby: () => {},
};

export const GameLobbyContext = React.createContext(GAMELOBBY_DEFAULT);
