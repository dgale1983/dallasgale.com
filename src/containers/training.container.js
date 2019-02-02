import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Training from '../components/training/training.component';


//* Data for <Work /> components
import TrainingData from '../data/training.js';
// const trainingData = Data.training;

class TrainingContainer extends Component {
    render() {
        return (
            <Training data={ TrainingData } />
        );
    }
}

// NavContainer.propTypes = {

// };

export default TrainingContainer;