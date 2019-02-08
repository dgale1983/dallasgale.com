import React from 'react'
import SectionTitle from '../typography/sectionTitle.component'
import './contact.scss'
import LinkedInLogo from '../../images/logos/in-wh.png'
import LinkedInLogo_day from '../../images/logos/in.png'
import GitHubLogo from '../../images/logos/gh-wh.png'
import GitHubLogo_day from '../../images/logos/gh.png'
import PropTypes from 'prop-types';

const Contact = props => {
  const { mode, onFieldChange, onFormSubmit } = props

  return (
    <section className="section  contact">
      <div className="content  contact__wrapper">
        <div className="contact__content">
          <div className="contact__content-details">
            <SectionTitle
              title="Get In Touch"
              color="positive"
              position="center"
            />
            <h3>
              If you would like to discuss any future opportunities please
              contact me.
            </h3>

            {/* ADD TO A <Form /> component */}
            <div className="contact__form">
              <form
                name="contact"
                method="post"
                action="/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={onFormSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={onFieldChange} />
                  </label>
                </p>
                <div className="contact__form-fields">
                  <h4 className="contact__form-fields--top  typography__h4  ">
                    <label>
                      Your Name{' '}
                      <input type="text" name="name" onChange={onFieldChange} />
                    </label>
                  </h4>
                  <h4 className="typography__h4  ">
                    <label>
                      Your Email{' '}
                      <input
                        type="email"
                        name="email"
                        onChange={onFieldChange}
                      />
                    </label>
                  </h4>
                </div>
                <h4 className="contact__form-fields--top">
                  <label className="typography__h4  ">
                    Message <textarea name="message" onChange={onFieldChange} />
                  </label>
                </h4>
                <div data-netlify-recaptcha="true" />
                <h4 className="typography__h4">
                  <button className="contact__button" type="submit">
                    Send
                  </button>
                </h4>
              </form>
            </div>

            <ul className="contact__list">
              <li className="contact__list-items--connect">
                <a
                  className="typography__weight--bold  typography__color--splash"
                  href="http://www.linkedin.com/in/dallas-gale"
                >
                  <img
                    src={mode === 'night' ? LinkedInLogo : LinkedInLogo_day}
                    alt="My LinkedIn profile"
                  />
                </a>
              </li>
              <li className="contact__list-items--connect">
                <a
                  className="typography__weight--bold  typography__color--splash"
                  href="http://github.com/dgale1983"
                >
                  <img
                    src={mode === 'night' ? GitHubLogo : GitHubLogo_day}
                    alt="My GitHub repository"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

Contact.propTypes = {
  mode: PropTypes.string,
  onFieldChange: PropTypes.func,
  onFormSubmit: PropTypes.func,
};

export default Contact
