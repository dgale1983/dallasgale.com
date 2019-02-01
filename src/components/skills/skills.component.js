import React from 'react'
import SectionTitle from '../typography/sectionTitle.component'
import './skills.scss'
// import PropTypes from 'prop-types';

const Skills = props => {
  const { children, data } = props
  return (
    <section className="section  skills">
      <div className="content  skills__wrapper">
        <SectionTitle title="Skills & Tools" color="positive" />
        {children}
        <div className="skills__content">
          <div className="skills__content-table">
            <div className="skills__content-table-grid">
              <div className="skills__content-table-grid--col">
                {data.slice(0, 4).map(d => (
                  <div key={d.name} className="category">
                    <h3 className="typography__heading--h3  typography__color--splash">
                      {d.name}
                    </h3>
                    <ul className="skills__ul">
                      <li className="skills__li">
                        {
                          <ul className="skills__ul">
                            {d.items.map(i => (
                              <li key={i.item} className="skills__li">
                                {i.item}
                              </li>
                            ))}
                          </ul>
                        }
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
              <div className="skills__content--col">
                {data.slice(4, 7).map(d => (
                  <div key={d.name} className="category">
                    <h3 className="typography__heading--h3  typography__color--splash">
                      {d.name}
                    </h3>
                    <ul className="skills__ul">
                      <li className="skills__li">
                        {
                          <ul className="skills__ul">
                            {d.items.map(i => (
                              <li key={i.item} className="skills__li">
                                {i.item}
                              </li>
                            ))}
                          </ul>
                        }
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
              <div className="skills__content--col">
                {data.slice(7).map(d => (
                  <div key={d.name} className="category">
                    <h3 className="typography__heading--h3  typography__color--splash">
                      {d.name}
                    </h3>
                    <ul className="skills__ul">
                      <li className="skills__li">
                        {
                          <ul className="skills__ul">
                            {d.items.map(i => (
                              <li key={i.item} className="skills__li">
                                {i.item}
                              </li>
                            ))}
                          </ul>
                        }
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Skills.propTypes = {

// };

export default Skills
