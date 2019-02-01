import React from 'react'
import SectionTitle from '../typography/sectionTitle.component'
import './contact.scss'
import LinkedInLogo from '../../images/logos/in-wh.png'
import GitHubLogo from '../../images/logos/gh-wh.png'
// import PropTypes from 'prop-types';

const Contact = props => {
  const { children } = props

  return (
    <section className="section  contact">
      <div className="content  contact__wrapper">
        <SectionTitle title="Get In Touch" color="positive" position="center" />
        {children}
        <div className="contact__content">
          <div className="contact__content-details">
            <h3 className="typography__color--light">
              If you would like to discuss any future opportunities please
              contact me.
            </h3>
            <ul className="contact__list">
              <li className="contact__list-items">
                <a
                  className="typography__weight--bold  typography__color--splash"
                  href="mailto:dallasgale@hotmail.com?subject=Hey, I would like to have a chat..."
                >
                  dallasgale@hotmail.com
                </a>
              </li>
            </ul>
            <ul className="contact__list">
              <li className="contact__list-items--connect">
                <a
                  className="typography__weight--bold  typography__color--splash"
                  href="http://www.linkedin.com/in/dallas-gale"
                >
                  <img src={LinkedInLogo} alt="My LinkedIn profile" />
                </a>
              </li>
              <li className="contact__list-items--connect">
                <a
                  className="typography__weight--bold  typography__color--splash"
                  href="http://github.com/dgale1983"
                >
                  <img src={GitHubLogo} alt="My GitHub repository" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

// Contact.propTypes = {

// };

export default Contact
