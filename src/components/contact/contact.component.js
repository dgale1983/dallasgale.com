import React from 'react'
import SectionTitle from '../typography/sectionTitle.component'
import './contact.scss'
import LinkedInLogo from '../../images/logos/in-wh.png'
import LinkedInLogo_day from '../../images/logos/in.png'
import GitHubLogo from '../../images/logos/gh-wh.png'
import GitHubLogo_day from '../../images/logos/gh.png'
// import PropTypes from 'prop-types';

const Contact = props => {
  const { children, mode } = props

  return (
    <section className="section  contact">
      <div className="content  contact__wrapper">
        <div className="contact__content">
          <div className="contact__content-details">
            <SectionTitle title="Get In Touch" color="positive" position="center" />
            <h3>
              If you would like to discuss any future opportunities please
              contact me.
            </h3>
            <div className="contact__form">
              <form name="contact" method="POST" data-netlify="true" action="thanks/" data-netlify-honeypot="bot-field">
                  <div className="contact__form-fields">
                    <h4 className="contact__form-fields--top  typography__h4  ">
                      <label>Your Name <input type="text" name="name" /></label>   
                    </h4>
                    <h4 className="typography__h4  ">
                      <label>Your Email <input type="email" name="email" /></label>
                    </h4>
                  </div>
                    <h4 className="contact__form-fields--top">
                      <label className="typography__h4  ">Message <textarea name="message"></textarea></label>
                    </h4>
                    <h4 className="typography__h4">
                      <button className="contact__button" type="submit">Send</button>
                    </h4>
                </form>
            </div>

            <ul className="contact__list">
              <li className="contact__list-items--connect">
                <a
                  className="typography__weight--bold  typography__color--splash"
                  href="http://www.linkedin.com/in/dallas-gale"
                >
                  <img src={mode === 'night' ? (LinkedInLogo) : (LinkedInLogo_day)} alt="My LinkedIn profile" />
                </a>
              </li>
              <li className="contact__list-items--connect">
                <a
                  className="typography__weight--bold  typography__color--splash"
                  href="http://github.com/dgale1983"
                >
                  <img src={mode === 'night' ? (GitHubLogo) : (GitHubLogo_day)} alt="My GitHub repository" />
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
