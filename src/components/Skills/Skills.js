import React from 'react';
import Marquee from "react-fast-marquee";

import './Skills.css';

import { skillsData } from './skillsData';
import { skillsImage } from './skillsImage';

function Skills() {

    // Define static theme styles
    const skillBoxStyle = {
        backgroundColor: '#f0f0f0', // Light gray background
        boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.1)', // Shadow for effect
    };

    const headerStyle = {
        color: '#ffffff', // White text color
    };

    const textStyle = {
        color: '#ffffff', // White text color for skills
    };

    return (
        <div id="skills" className="skills">
            <div className="skillsHeader">
                <h2 style={headerStyle}>Skills</h2>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 style={textStyle}>{skill}</h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    );
}

export default Skills;
