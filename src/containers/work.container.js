import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Work from '../components/work/work.component';

//* Data for <Work /> components
import WorkData from '../data/work.js';

class WorkContainer extends Component {
    render() {
        // console.log('projectsData', projectsData);
        return (
            <Work data={ WorkData } theme={this.props.theme} />
        );
    }
}

// NavContainer.propTypes = {

// };

export default WorkContainer;