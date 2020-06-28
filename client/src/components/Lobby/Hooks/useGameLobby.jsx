import { useRef } from 'react';

const useGameLobby = () => {
  const gameLobbyRef = useRef({ '123455': { currentMousePosition: [0, 0] } });
  const setGameLobby = cb => {
    return typeof cb === 'function'
      ? (gameLobbyRef.current = cb(gameLobbyRef.current))
      : (gameLobbyRef.current = cb);
  };

  return { gameLobby: gameLobbyRef, setGameLobby };
};
export default useGameLobby;
