const GameLoop = {
  gameTime: null,
  delta: 0,
  tickListeners: [],
  tick: () => {
    GameLoop.tickListeners.map(listener => listener({
      delta: GameLoop.delta,
      gameTime: GameLoop.gameTime,
    }));
  }
};

export default GameLoop;