import React from "react";
import ContactForm from "./ContactForm";
import Visitors from "./Visitors";

const Contact = () => {
    return (
        <main className="container contact">
            <Visitors />
            <ContactForm />
        </main>
    );
};

export default Contact;
