import Radium from 'radium';

function styleLogger({componentName, style}) {
  // Useful for debugging
  //console.log('Name: ' + componentName, style);
}

export default function ConfiguredRadium(component) {
  return Radium({
    plugins: [
      Radium.Plugins.mergeStyleArray,
      Radium.Plugins.checkProps,
      Radium.Plugins.resolveMediaQueries,
      Radium.Plugins.resolveInteractionStyles,
      Radium.Plugins.keyframes,
      Radium.Plugins.visited,
      Radium.Plugins.removeNestedStyles,
      Radium.Plugins.prefix,
      styleLogger,
      Radium.Plugins.checkProps,
    ],
  })(component);
}
