import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <NavLink to="/covid" className="covid-alert">
                <h1 className="covid-toggle">COVID-19 Alert: </h1>
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

                <div className="nav-bar">
                    <NavLink to="/physicians">Physicians</NavLink>

                    <NavLink to="/covid">COVID</NavLink>

                    <NavLink to="">Appointments</NavLink>
                    <NavLink to="/physicians">Find a Doctor</NavLink>
                    <NavLink to="/">Appointments</NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;
