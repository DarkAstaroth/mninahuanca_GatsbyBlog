import React from 'react';
import ProjectItem from './projectItem';

const PortfolioSection = () => {

    const projects = [
        {
            imageSRC:"p1",
            alt: 'Administrador de pacientes en ReactJs',
            title: 'Patient Manager',
            description: 'Deserunt velit consequat irure irure ipsum Lorem qui. Ex laborum pariatur nisi laborum id non amet aute ex dolor reprehenderit mollit exercitation. Deserunt nostrud cupidatat proident nulla laborum ut Lorem eiusmod cillum dolore ad.',
            gitURL: '#',
            projectURL: '#'
        }
    ];
    console.log(projects)

    return (
        <>
            <section className="is-text-align-center">
                <div className="content-wrap">
                    <div className="content">
                        <h2>Portfolio</h2>
                    </div>

                    {
                        
                        projects.map(project => (
                            <ProjectItem
                                imageSRC={project.imageSRC}
                                alt={project.alt}
                                title={project.title}
                                description={project.description}
                                gitURL={project.gitURL}
                                projectURL={project.projectURL}
                            />
                        ))
                    }
                </div>
            </section>
        </>
    );
}

export default PortfolioSection;