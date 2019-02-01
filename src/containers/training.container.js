import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Training from '../components/training/training.component';


//* Data for <Work /> components
import Data from '../data/training.json';
const trainingData = Data.training;

class TrainingContainer extends Component {
    render() {
        return (
            <Training data={ trainingData } />
        );
    }
}

// NavContainer.propTypes = {

// };

export default TrainingContainer;