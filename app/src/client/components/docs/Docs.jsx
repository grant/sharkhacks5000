import docStyles from './docStyles';
import React, {Component} from 'react';
import Radium from 'radium';

@Radium
export default class Docs extends Component {
  // Mocking https://stripe.com/docs
  render() {
    return (
      <div className='Docs'>
        <header>
          <nav className="navigation" style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
            <h1>
              <a><img src='logo'/>SharkHacks API</a>
            </h1>
            <ul className="buttons">
              <li><a href='/docs'>Docs</a></li>
              <li><a href='https://medium.com/@sharkhacks5000'>Blog</a></li>
              <li><a href='https://twitter.com/sharkhacks5000'>Contact</a></li>
            </ul>
          </nav>
        </header>
        <article style={{
          color: '#333',
          maxWidth: '800px',
          margin: '30px auto',
        }}>
          <h1 style={{

          }}>Documentation</h1>
          <section style={{
            padding: '0 0 20px 0',
          }}>
            <p>
              <strong>Welcome to SharkHacks!</strong> Get familiar with SharkHacks's API
            </p>
            <section className='features'>
              <ul className="featureList" style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingTop: '20px',
              }}>
                {[{
                  name: 'Shark Tank',
                  description: 'Manage your personal aquarium.',
                }, {
                  name: 'Shark Hacks',
                  description: 'Find out how others are using SharkHacks',

                }].map(feature => {
                  return <li className="feature" style={{
                    display: 'inline-block',
                    width: '40%',
                    padding: '20px',
                    boxShadow: '0 1px 5px 0 rgba(0,0,0,.07), 0 7px 17px 0 rgba(0,0,0,.1)'
                  }}>
                    <h3>{feature.name}</h3>
                    <p>{feature.description}</p>
                  </li>;
                })}
              </ul>
            </section>
          </section>
          <section>
            <h2>Try Now</h2>
            <p>Try the SharkHacks5000 API in seconds. Query the number of sharks discovered.</p>
            <section className="codeSnippet">
              <pre><code>{`
                SharkHacks.animals.get({
                  type: 'shark'
                }
              `}</code></pre>
            </section>
            <strong>Usage:</strong> Click "Submit" to send an event to SharkHacks.
          </section>
          <section>
            <h2>Getting Started</h2>
            <p>SharkHacks allows you to create sharks on the fly, right from your computer.</p>
            <h2>Hunt Sharks</h2>
            <p>SharkHacks enables you to hunt sharks in minutes. Find sharks easily and securely on web or mobile.</p>
            <ul className='platform'>
              <li className="website">
                <img src="desktop_browser.png" alt="Desktop Browser"/>
                <h4>On your website</h4>
                <h5>Start tracking sharks on your website with our JavaScript libraries.</h5>
              </li>
              <li className="mobile">
                <img src="mobile_browser.png" alt="Mobile Browser"/>
                <h4>On your phone</h4>
                <h5>Integrate our SDKs on your mobile phone.</h5>
              </li>
            </ul>
            <br/>
            <h2>{"We're here to help!"}</h2>
            <ul className="helpLinks">
              <li>
                <h3><a href="twitter.com/sharkhacks5000">Support &gt;</a></h3>
                <p>{"We're always happy to help another shark hacker!"}</p>
              </li>
              <li>
                <h3><a href="/docs">Docs &gt;</a></h3>
                <p>Explore some examples for the Shark community, by the Shark community.</p>
              </li>
            </ul>
          </section>
        </article>
      </div>
    );
  }

  /**
   * Gets the default styles for the docs page.
   */
  static getDefaultStyles() {
    return <Radium.Style rules={docStyles}/>

  }
}
