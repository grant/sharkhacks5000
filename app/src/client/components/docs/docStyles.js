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
  h2: {
    fontSize: H2
  },
  h3: {
    fontSize: H3
  },
  h4: {
    fontSize: H4
  },
  h5: {
    fontSize: H5
  },
  h6: {
    fontSize: H6
  },
  header: {
    backgroundColor: 'blue',
    color: 'white',
  },
  '.navigation li': {
    display: 'inline-block',
    margin: '0 10px',
  },
  '.navigation': {
    padding: '40px',
  },
  'section': {
    padding: '20px 0',
  },
  'section > p': {
    paddingTop: '15px'
  },
  strong: {
    fontWeight: 600,
  }
};