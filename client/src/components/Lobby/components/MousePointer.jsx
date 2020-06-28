import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { GameLobbyContext } from '../../Providers/GameLobbyContext';

const MousePointer = () => {
  const {
    gameLobby: { current: GameLobby },
  } = useContext(GameLobbyContext);
  const [, setUpdate] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => setUpdate(c => !c), 16);
    return () => clearInterval(interval);
  }, []);

  if (GameLobby === undefined) return null;
  return Object.values(GameLobby).map((data, i) => {
    const pos = data.currentMousePosition ? data.currentMousePosition : [0, 0];
    const backgroundColor = 'red';
    return (
      <div
        key={i}
        css={css({
          backgroundColor,
          height: '100px',
          width: '100px',
          boxSizing: 'border-box',
          position: 'absolute',
          left: pos[0] - 50,
          top: pos[1] - 50,
        })}
      />
    );
  });
};

MousePointer.propTypes = {
  GameLobby: PropTypes.object,
};

export default MousePointer;
