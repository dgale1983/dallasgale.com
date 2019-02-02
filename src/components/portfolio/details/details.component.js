import React from 'react'
import TextBlock from '../../typography/textBlock.component'
import './details.scss'
// import PropTypes from 'prop-types';

const Details = ({ data }) => {
  return (
    <div className="details">
      <div className="details__toplevel">
        <TextBlock>
          <h3 className="typography__heading--h3  typography__color--splash">
            Employer
          </h3>
          <div className="details__employer">
            <img src={data.employerLogo} alt={data.employer} />
          </div>
        </TextBlock>
        <TextBlock>
          <h3 className="typography__heading--h3  typography__color--splash">
            Date
          </h3>
          <p className="typography__paragraph">{data.date}</p>
        </TextBlock>
        <TextBlock>
          <h3 className="typography__heading--h3  typography__color--splash">
            Project
          </h3>
          <p className="typography__paragraph">{data.project}</p>
        </TextBlock>
        {
          data.url ? (
            <TextBlock>
              <h3 className="typography__heading--h3  typography__color--splash">
                URL
              </h3>
              <p className="typography__paragraph">
                <a className="typography__color--light  typography__weight--bold" href={`https://${data.url}`}>{data.url}</a></p>
            </TextBlock>
          ) : null
          }
      </div>
      <TextBlock>
        <h3 className="typography__heading--h3  typography__color--splash">
          Details
        </h3>
        <p className="typography__paragraph">{data.details}</p>
      </TextBlock>
    </div>
  )
}

// Details.propTypes = {

// };

export default Details
