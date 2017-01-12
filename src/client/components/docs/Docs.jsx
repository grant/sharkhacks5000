import docStyles from './docStyles';
import Button from '../Button';
import React, {Component} from 'react';
import Radium from 'radium';
// import {PrismCode} from 'react-prism';
import Constants from '../../utils/constants';

@Radium
export default class Docs extends Component {
  // Inspired by https://stripe.com/docs
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
              <a><img style={{
                height: '60px',
                verticalAlign: 'middle',
              }} src='images/sharkhacksIcon.png'/>SharkHacks API</a>
            </h1>
            <ul className="buttons" style={{
              display: 'flex',
              alignItems: 'center'
            }}>
              <li><a href='/docs'>Docs</a></li>
              <li><a href='https://medium.com/@sharkhacks5000'>Blog</a></li>
              <li><a href='https://twitter.com/sharkhacks5000'>Contact</a></li>
            </ul>
          </nav>
        </header>
        <article style={{
          color: '#333',
          maxWidth: '800px',
          margin: '20px auto',
        }}>
          <h1>Documentation</h1>
          <section style={{

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
                  return <li className="feature" key={feature.name} style={{
                    display: 'inline-block',
                    width: '40%',
                    padding: '20px',
                    cursor: 'pointer',
                    transition: '200ms ease-in-out box-shadow',
                    boxShadow: '0 1px 5px 0 rgba(0,0,0,.07), 0 7px 17px 0 rgba(0,0,0,.1)',
                    ':hover': {
                      boxShadow: '0 1px 7px 0 rgba(0,0,0,.17), 0 7px 17px 0 rgba(0,0,0,.2)',
                    },
                  }}>
                    <h3 style={{
                      paddingTop: '0',
                      paddingBottom: '10px',
                      color: Constants.color.green,
                    }}>{feature.name}</h3>
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
              {/* http://prismjs.com/download.html */}
              {/* See the prism.js comment to see what plugins are installed*/}
              {/* <pre><PrismCode className={'language-javascript line-numbers'}>
{`SharkHacks.animals.get({
  type: 'shark'
});`}
              </PrismCode></pre>*/}
            </section>
            <Button
              content='Submit'
              onClick={() => {
                console.log('hi');
              }}
             />
            <p><strong>Usage:</strong> Click "Submit" to send an event to SharkHacks.</p>
          </section>
          <section>
            <h2>Getting Started</h2>
            <p>SharkHacks allows you to create sharks on the fly, right from your computer.</p>
            <h3>Hunt Sharks</h3>
            <p>SharkHacks enables you to hunt sharks in minutes. Find sharks easily and securely on web or mobile.</p>
            <ul className='platform' style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingTop: '10px',
              textAlign: 'center',
            }}>{[{
              name: 'desktop',
              description: 'Start tracking sharks on your website with our JavaScript libraries.'
            }, {
              name: 'mobile',
              description: 'Integrate our SDKs on your mobile phone.'
            }].map(platform =>
              <li className={platform.name} key={platform.name} style={{
                width: '50%',
                padding: '10px 0',
                transition: '200ms ease-in-out color',
                cursor: 'pointer',
                ':hover': {
                  color: Constants.color.blue,
                },
              }}>
                <img src={`${platform.name}_browser.png"`} alt={platform.name} />
                <h3>{`On your ${platform.name}`}</h3>
                <h4 style={{
                  fontWeight: 100
                }}>{platform.description}</h4>
              </li>
            )}</ul>
          </section>
          <section>
            <h2>{"We're here to help!"}</h2>
            <ul className="helpLinks" style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>{[{
              href: 'https://www.twitter.com/sharkhacks5000',
              title: 'Support >',
              description: "We're always happy to help another shark hacker!",
            }, {
              href: '/docs',
              title: 'Docs >',
              description: "Explore some examples for the Shark community, by the Shark community.",
            }].map(helpLink =>
              <li style={{
                width: '50%',
                lineHeight: 1.5,
                padding: '10px',
              }}>
                <h3 style={{
                  color: Constants.color.green,
                }}><a href={helpLink.href}>{helpLink.title}</a></h3>
                <p>{helpLink.description}</p>
              </li>
            )}</ul>
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
