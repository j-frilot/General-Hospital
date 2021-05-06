import React from "react";

const Footer = () => {
    return (
        <footer>
            <section className="footer-grid">
                <div className="footer-grid-item">
                    <h3>Contact Us</h3>
                    <ul className="contact-ul">
                        <li>125 Main Street</li>
                        <li>Codeville, MS 12012</li>
                        <li>(555) 555-5555</li>
                        <li>
                            <a href="/">Directions</a>
                        </li>
                        <li>
                            <a href="/">Other Locations</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-grid-item">
                    <h3>About General</h3>
                    <ul className="contact-ul">
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>News</li>
                        <li>Physicians</li>
                    </ul>
                </div>
                <div className="footer-grid-item">
                    <h3>Helpful Links</h3>
                    <ul className="contact-ul">
                        <li>CDC</li>
                        <li>COVID</li>
                        <li>Physicians</li>
                        <li>Make an appointment</li>
                    </ul>
                </div>
                <div className="footer-grid-item">
                    <h3>Other</h3>
                    <ul className="contact-ul">
                        <li>Donate</li>
                        <li>Subscribe To Newsletter</li>
                        <li>
                            <a href="/">Facebook</a>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="copy-right">
                Sources: CDC, Mississippi Department of Health, John Hopkins
                University
            </section>
        </footer>
    );
};

export default Footer;
