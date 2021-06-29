import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const MainSection = () => {
    return (
        <section className="is-text-align-center is-framed section-main">
            <div className="content-wrap">
                <div className="content">
                    <StaticImage className="profile" src="../images/foto2.jpg" alt="mninahuanca"/>
                    <br />
                    <br />
                    <h1>
                        Hi, I am Manuel <br />
                        FrontEnd Developer <br />
                        based in Bolivia
                    </h1>

                    <p>Building simple and beautiful things for complex interfaces is what I enjoy most about my work. I am also interested in crafting beautiful minimal products and exploring new worlds.</p>

                    <p>
                        I’m <a class="link-1 green" href="#" target="_blank">tweeting</a>, taking 
                        <a class="link-1 green" href="#" target="_blank"> photos</a> and pushing my
                        <a class="link-1 green" href="#" target="_blank">codes</a> for you.
                    </p>

                    <p>For collaboration or questions; <br />
                        <a class="link-2 green" href="mailto:mninahuanca3@gmail.com">mninahuanca3@gmail.com</a></p>
                    <a class="button bold uppercase" href="#">View my porftolio</a>
                </div>
            </div>
        </section>
    );
}

export default MainSection;