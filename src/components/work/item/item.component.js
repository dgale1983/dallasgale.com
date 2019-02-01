import React from 'react'
import TextBlock from '../../typography/textBlock.component'
import './item.scss'
// import PropTypes from 'prop-types';

const Item = props => {
  const { data } = props

  return (
    <>
      <div className="work__item-content">
        <div className="work__item-content-logo">
          <img src={data.logo} alt={data.who} />
        </div>
        <div className="work__item-content-info">
          <TextBlock>
            <h3 className="typography__heading--h3  typography__color--splash">
              Who
            </h3>
            <p className="typography__paragraph  typography__weight--bold">
              {data.who}
            </p>
          </TextBlock>
          <TextBlock>
            <h3 className="typography__heading--h3  typography__color--splash">
              Where
            </h3>
            <p className="typography__paragraph">{data.where}</p>
          </TextBlock>
          <TextBlock>
            <h3 className="typography__heading--h3  typography__color--splash">
              When
            </h3>
            <p className="typography__paragraph">{data.when}</p>
          </TextBlock>
          <TextBlock>
            <h3 className="typography__heading--h3  typography__color--splash">
              Position
            </h3>
            <p className="typography__paragraph">{data.position}</p>
          </TextBlock>
          <TextBlock>
            <h3 className="typography__heading--h3  typography__color--splash">
              Contact
            </h3>
            <a
              href={`http://${data.contact}`}
              className="typography__paragraph  typography__color--light  typography__weight--bold"
              target="_blank"
              rel="noopener norefferer"
            >
              {data.contact}
            </a>
          </TextBlock>
        </div>
        <div className="work__item-content-details">
          <TextBlock>
            <h3 className="typography__heading--h3  typography__color--splash">
              Details
            </h3>
            <p className="typography__paragraph">{data.details}</p>
          </TextBlock>
          <TextBlock>
            <h3 className="typography__heading--h3  typography__color--splash">
              Projects
            </h3>
            <ul className="typography__paragraph  work__item-ul">
              {data.projects.map(p =>
                p.url ? (
                  <li
                    key={`${p.id}+link`}
                    className="work__item-li  work__item-projects"
                  >
                    <a
                      className="typography__color--light  typography__style--italic"
                      href={p.url}
                      alt={p.title}
                    >
                      {p.title}
                    </a>
                  </li>
                ) : (
                  <li
                    key={`${p.id}+nolink`}
                    className="work__item-li  work__item-projects typography__color--light  typography__style--italic"
                  >
                    {p.title}
                  </li>
                )
              )}
            </ul>
          </TextBlock>
        </div>
      </div>
    </>
  )
}

// Item.propTypes = {

// };

export default Item
