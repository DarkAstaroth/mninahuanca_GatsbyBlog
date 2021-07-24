import React from 'react';
import { Formik, Form, Field } from 'formik';

const ContactForm = () => {
    return (
        <div class="Form">
            <Formik>
                <Form>
                    <div className="">
                        <Field
                            name="text"
                            className="inputForm"
                            placeholder="Name" />
                        <Field
                            name="email"
                            className="inputForm"
                            placeholder="Email"
                        />
                        <Field
                            className="inputForm"
                            component="textarea"
                            rows="4" value={""}
                            placeholder="Message"
                        ></Field>

                        <button className="button ">Send Message</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default ContactForm;