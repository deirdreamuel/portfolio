import React from 'react';
import resume from './images/resume.jpg'

const resumeStyle={
    marginLeft: '5%'
};

const resume2 = () => {
    return (
        
        <img src={resume} width='80%' style={resumeStyle} alt='not found'></img>
    );
}
 
export default resume2;