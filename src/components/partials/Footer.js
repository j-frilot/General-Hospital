import React from "react";
// import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    // const [links, setLinks] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:4000/api/footer`)
    //         .then((response) => response.json())
    //         .then((response) => {
    //             console.log(response);
    //             setLinks(response);
    //         });
    // }, []);

    return (
        <footer>
            <section className="footer-grid">
                <div className="footer-grid-item">
                    <h3>Contact Us</h3>
                    <ul className="contact-ul">
                        <li>
                            <p>123 main Street</p>
                        </li>
                        <li>
                            <p>codeville ms 12012</p>
                        </li>
                        <li>
                            <p>(555)-555-5555</p>
                        </li>
                        <li>
                            <a href="/">
                                <p>directions</p>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer-grid-item">
                    <h3>General Hospital</h3>
                    <ul className="contact-ul">
                        <li>
                            <NavLink to="/contact-us">
                                <p>Contact Us</p>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/covid">
                                <p>Covid-19 Info</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/physicians">
                                <p>Our Physicians</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/appointments">
                                <p>Appointments</p>
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="footer-grid-item">
                    <h3>Helpful Links</h3>
                    <ul className="contact-ul">
                        <li>
                            <a href="https://www.cdc.gov/">
                                Centers for Disease Control & Intervention
                            </a>
                        </li>
                        <li>
                            <a href="https://msdh.ms.gov/">
                                Mississippi Department of Health
                            </a>
                        </li>
                        <li>
                            <a href="https://coronavirus.jhu.edu/map.html">
                                John Hopkins Corona Resourse Center
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-grid-item">
                    <h3>Other</h3>
                    <ul className="contact-ul">
                        <li>
                            <p>Donate</p>
                        </li>
                        <li>
                            <p>Subscribe To Newsletter</p>
                        </li>
                        <li>
                            <a href="/">
                                <p> Facebook</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="copy-right">
                <p>
                    Sources: CDC, Mississippi Department of Health, John Hopkins
                    University
                </p>
            </section>
        </footer>
    );
};

export default Footer;
