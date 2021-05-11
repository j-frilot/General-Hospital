import React from "react";

const ContactForm = () => {
    return (
        <section>
            <div className="form-container">
                <form>
                    <fieldset>
                        <legend>
                            <h1>Send Us A Message</h1>
                        </legend>
                        <input
                            type="text"
                            name="person_first_name"
                            required
                            placeholder="First Name"
                        />
                        <input
                            type="text"
                            name="person_last_name"
                            placeholder="Last Name"
                        />

                        <input
                            type="email"
                            name="email"
                            require
                            placeholder="Email*"
                        />

                        <textarea
                            name="message"
                            type="text"
                            placeholder="Message To General"
                        ></textarea>
                    </fieldset>

                    <input
                        type="submit"
                        value="Apply"
                        // onClick={displayInfo}
                    />
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
