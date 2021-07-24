import React from 'react';
import ContactForm from './contactForm';

const ContantSection = () => {
    return (
        <>
            <section className="is-text-align-center">
                <div className="content-wrap">
                    <div className="content">
                        <h2>Contact</h2>
                        <p>Are you working on something great? I would love to help make it happen! Drop me a letter and start your project right now! Just do it.</p>
                    </div>
                    <ContactForm />
                </div>

            </section>
        </>
    );
}

export default ContantSection;