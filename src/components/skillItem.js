import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SkillItem = ({ icon, text}) => {
    return (
        <>
            <div className="skills-item">
                <FontAwesomeIcon icon={icon} size="4x"/>
                <p>{ text}</p>
            </div>
        </>
     );
}
 
export default SkillItem;