import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [links, setLinks] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4000/api/header/`)
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                setLinks(response);
            });
    }, []);

    return (
        <header>
            <NavLink to="/covid" className="covid-alert">
                <p className="covid-toggle">COVID-19 Alert: </p>
                <p>
                    Important information for patients and families regarding
                    COVID-19 and vaccines.
                </p>
            </NavLink>
            <div className="container header-content">
                <div className="logo-row">
                    <NavLink to="/">
                        <img
                            src="/images/hospital-logo.png"
                            alt="hospital-logo"
                            className="img hospital-img"
                        />
                    </NavLink>

                    <NavLink to="/">
                        <h1 className=" brand-logo ">General Hospital</h1>
                    </NavLink>
                </div>
                {links.splice(0, 1).map((link) => (
                    <div key={link.id} className="nav-bar">
                        <NavLink to="/physicians" className="nav-item">
                            {link.link_one}
                        </NavLink>
                        <NavLink to="/covid" className="nav-item">
                            {link.link_two}
                        </NavLink>
                        <NavLink to="/appointment" className="nav-item">
                            {link.link_three}
                        </NavLink>
                        <NavLink to="/contact-us" className="nav-item">
                            {link.link_four}
                        </NavLink>
                        <NavLink to="/" className="nav-item">
                            {link.link_five}
                        </NavLink>
                    </div>
                ))}
            </div>
        </header>
    );
};

export default Header;
