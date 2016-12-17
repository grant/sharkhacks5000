import React, {Component} from 'react';
import Radium from 'radium';

@Radium
export default class Docs extends Component {
  // Mocking https://stripe.com/docs
  render() {
    return (
      <div className='Docs'>
        <header>
          <nav className="navigation">
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
        <section>
          <h1 style={{

          }}>Documentation</h1>
          <article>
            <p>
              <em>Welcome to SharkHacks!</em> Get familiar with SharkHacks's API
            </p>
            <section className='features'>
              <ul className="featureList">
                <li className="feature sharktank">
                  <h3>Shark Tank</h3>
                  <p>Manage your personal aquarium.</p>
                </li>
                <li className='feature sharkhacks'>
                  <h3>Shark Hacks</h3>
                  <p>Find out how others are using SharkHacks</p>
                </li>
              </ul>
            </section>
          </article>
          <article>
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
          </article>
          <article>
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
          </article>
        </section>
      </div>
    );
  }

  /**
   * Gets the default styles for the docs page.
   */
  static getDefaultStyles() {
    return <Radium.Style
      rules={{
        'h1': {
          fontSize: '72px'
        },
        'h2': {
          fontSize: '60px'
        }
      }}
    />
  }
}
