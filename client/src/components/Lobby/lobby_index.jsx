/* eslint-disable indent */
import React, { useContext, useState, useRef } from 'react';
import useEventListener from './Hooks/useEventListener';
import MousePointer from './components/MousePointer';
import { GameLobbyContext } from '../Providers/GameLobbyContext';

const Lobby = () => {
  const { setGameLobby } = useContext(GameLobbyContext);

  const mousePositionRef = useRef([0, 0]);
  const setMousePosition = cb =>
    typeof cb === 'function'
      ? (mousePositionRef.current = cb(mousePositionRef.current))
      : (mousePositionRef.current = cb);

  const reqGameLobbyState = useRef('');
  const [mouseEnabled, setMouseEnabled] = useState(false);

  useEventListener(
    'mousemove',
    e => {
      setGameLobby({ '123455': { currentMousePosition: [e.x, e.y] } });
      setMousePosition([e.x, e.y]);
    },
    {
      enabled: mouseEnabled,
    }
  );

  return (
    <>
      <button
        onClick={() => {
          setMouseEnabled(c => !c);
          reqGameLobbyState.current = 'playing';
        }}>
        Start Game
      </button>
      <MousePointer />
    </>
  );
};

export default Lobby;
