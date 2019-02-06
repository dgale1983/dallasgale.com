import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Skills from '../components/skills/skills.component';

//* Data for <Work /> components
import Data from '../data/skills.json';
const skillsData = Data.skills[0].category;

class SkillsContainer extends Component {
    render() {
        return (
            <Skills data={skillsData} />
        );
    }
}

// NavContainer.propTypes = {

// };

export default SkillsContainer;