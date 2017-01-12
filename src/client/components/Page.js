import Constants from '../utils/constants';
import Docs from './docs/Docs';
import HUD from './HUD';
import React, {Component} from 'react';
import Radium, {StyleRoot} from 'radium';
import World from './World';
import raf from 'raf';
import GameLoop from '../utils/gameloop';

const styles = {
  base: {
    color: '#ff0000',
    fontFamily: Constants.font.family,
    background: 'white',
  },
};

/**
 * The page type.
 * @type {{DOCS: Symbol, GAME: Symbol}}
 */
export const Type = {
  DOCS: Symbol('docs'),
  GAME: Symbol('game'),
};

/**
 * The root page for the site.
 */
@Radium
export default class Page extends Component {
  /**
   * Gets the reset styles for all pages.
   */
  static getResetStyles() {
    return (
      <Radium.Style
        rules={{
          'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video': {
            margin: 0,
            padding: 0,
            border: 0,
            fontSize: 0,

            font: 'inherit',
            verticalAlign: 'baseline',
          },
          'article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section': {
            display: 'block',
          },
          body: {
            lineHeight: 1,
          },
          a: {
            textDecoration: 'none',
          },
          'ol, ul': {
            listStyle: 'none',
          },
          'blockquote, q': {
            quotes: 'none',
          },
          'blockquote:before, blockquote:after, q:before, q:after': {
            content: '',
          },
          table: {
            borderCollapse: 'collapse',
            borderSpacing: 0,
          },
          'a:visited': {
            color: 'inherit',
          }
        }}
      />
    );
  }

  constructor() {
    super();
    // Sets up the animation loop
    GameLoop.gameTime = +new Date();
    raf(function tick() {
      let newTime = +new Date();
      GameLoop.delta = newTime - GameLoop.gameTime;
      GameLoop.gameTime = newTime;
      GameLoop.tick();
      raf(tick);
    });
  }

  render() {
    const TOP_PAGE_GRADIENT = (
      <div style={{
        position: 'absolute',
        zIndex: 100,
        width: '100%',
        background: 'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0))',
        height: '10px',
      }}></div>
    );

    let pageBody = null;
    switch (this.props.type) {
      case Type.DOCS:
        pageBody = [
          <Docs />
        ];
        break;
      case Type.GAME:
        pageBody = [
          TOP_PAGE_GRADIENT,
          <World />,
          <HUD />,
        ];
        break;
      default:
        pageBody = 'Unknown page body';
    }
    return (
      <StyleRoot>
        <div
          className={'Page'}
          style={[styles.base]}
        >
          {pageBody}
          {/* Order of styles matter! */}
          {Page.getResetStyles()}
          {this.props.type === Type.GAME ? Page.getDefaultStyles() : ''}
          {this.props.type === Type.DOCS ? Docs.getDefaultStyles() : ''}
        </div>
      </StyleRoot>
    );
  }

  /**
   * TODO(grant) Move to Game.jsx
   * @returns {XML}
   */
  static getDefaultStyles() {
    return <Radium.Style rules={{
      html: {
        overflow: 'hidden',
      }
    }}/>
  }
}

Page.propTypes = {
  type: React.PropTypes.any // Type
};