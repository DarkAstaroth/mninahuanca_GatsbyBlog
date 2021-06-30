import React from 'react';
import SkillItem from './skillItem';
import {
    faReact,
    faJsSquare,
    faHtml5,
    faCss3Alt,
    faGitAlt,
    faNodeJs,
    faSass,
    faBootstrap
} from '@fortawesome/free-brands-svg-icons'

import { faServer } from '@fortawesome/free-solid-svg-icons'

const SkillSection = () => {
    return (
        <>
            <section className="is-text-align-center">
                <div className="content-wrap">
                    <div className="content">
                        <h2>My Skills</h2>
                        <p>I am inspired by creating great work with people who are as passionate as I am about building something awesome.</p>
                    </div>
                </div>


                <div className="skills">
                    <SkillItem icon={faHtml5} text="HTML 5"/>
                    <SkillItem icon={faReact} text="React JS" />
                    <SkillItem icon={faGitAlt} text="Git" />
                    <SkillItem icon={faCss3Alt} text="CSS 3" />
                    <SkillItem icon={faNodeJs} text="Node JS" />
                    <SkillItem icon={faSass} text="Sass" />
                    <SkillItem icon={faJsSquare} text="JavaScript" />
                    <SkillItem icon={faServer} text="Express" />
                    <SkillItem icon={faBootstrap} text="Bootstrap" />

                </div>

            </section>
        </>
    );
}

export default SkillSection;