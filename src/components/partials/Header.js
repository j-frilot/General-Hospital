import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="container">
            <div className="top-nav">
                <ul>
                    <li>
                        <NavLink to="/physicians" className="black-text">
                            Physicians
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/covid" className="black-text">
                            COVID
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="" className="black-text">
                            Appointments
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="logo-row">
                <ul className="logo-list">
                    <li>
                        <NavLink to="/">
                            <img
                                src="/images/hospital-logo.png"
                                alt="hospital-logo"
                                className="img hospital-img"
                            />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <h1 className=" brand-logo red-text center">
                                General Hospital
                            </h1>
                        </NavLink>
                    </li>
                </ul>
                <div>
                    <NavLink
                        to="/physicians"
                        className="black-text right white btn z-depth-0"
                    >
                        Find a Doctor
                    </NavLink>
                    <NavLink to="/" className="red right btn z-depth-0">
                        Appointments
                    </NavLink>
                </div>
            </div>
            <div className="corona">
                <span className="bold">
                    <NavLink to="/covid">
                        <h2>Coronavirus Update</h2>
                    </NavLink>
                </span>
                <span className="corona-toggle">
                    <NavLink to="/covid">
                        <h2>What patients and families need to know.</h2>
                    </NavLink>
                </span>
            </div>
        </header>
    );
};

export default Header;
