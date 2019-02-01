import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Work from '../components/work/work.component';

//* Data for <Work /> components
import Data from '../data/work.json';
const workData = Data.work;

class WorkContainer extends Component {
    render() {
        // console.log('projectsData', projectsData);
        return (
            <Work data={ workData } />
        );
    }
}

// NavContainer.propTypes = {

// };

export default WorkContainer;