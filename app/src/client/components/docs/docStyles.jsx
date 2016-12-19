import Constants from '../../utils/constants';
const H1 = '36px';
const H2 = '24px';
const H3 = '20px';
const H4 = '16px';
const H5 = '12px';
const H6 = '10px';

/**
 * We do a lot of element styling here. This is the general style sheet of our docs.
 */
export default {
  h1: {
    fontSize: H1
  },
  'article h1': {
    paddingTop: '30px',
  },
  h2: {
    paddingTop: '20px',
    fontSize: H2
  },
  h3: {
    paddingTop: '15px',
    fontSize: H3
  },
  h4: {
    paddingTop: '10px',
    fontSize: H4
  },
  h5: {
    paddingTop: '7px',
    fontSize: H5
  },
  h6: {
    paddingTop: '4px',
    fontSize: H6
  },
  header: {
    backgroundColor: Constants.color.green,
    color: 'white',
  },
  '.navigation li': {
    display: 'inline-block',
    margin: '0 10px',
  },
  '.navigation': {
    padding: '40px',
  },
  'article > section': {
    padding: '10px 0',
    borderBottom: '1px solid #eee',
  },
  'section > p': {
    paddingTop: '15px'
  },
  strong: {
    fontWeight: 600,
  }
};