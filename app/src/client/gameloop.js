const GameLoop = {
  gameTime: null,
  delta: 0,
  tickListeners: [],
  tick: () => {
    GameLoop.tickListeners.map(listener => listener());
  }
};

export default GameLoop;