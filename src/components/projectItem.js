import React from 'react';

const ProjectItem = ({ imageSRC, title, description, gitURL, projectURL }) => {

    // const image = data.allFile.edges[0].node.childImageSharp.fluid;
    console.log("hola")
    return (
        <div>
            {/* <StaticImage class="projectImage" src="" alt="Adminstracion de Pacientes con ReactJs" /> */}
            {/* <Img className="projectImage" fluid={image} /> */}
            <h3>{title}</h3>
            <p>{description}</p>
            <div>
                <a href={gitURL} className="button"><i className="icon-github-circled"></i>Repository</a>
                <a href={projectURL} className="button"><i className="icon-laptop"></i>View Project</a>
            </div>
            <hr />
        </div>
    );
}

export default ProjectItem;