import React from "react";
import { NavLink } from "react-router-dom";
import SpecialtiesList from "../sections/SpecialtyList";
import Slider from "../sections/Slider";

const Home = () => {
    return (
        <main className="container">
            <section className="banner index-banner"></section>

            <section className="dashboard">
                <div className="dashboard-card">
                    <div className="dashboard-card-header">
                        <h3>
                            <i className="fas fa-user-md icon"></i>{" "}
                            <NavLink to="/physicians"> Find A Doctor</NavLink>
                        </h3>
                    </div>
                    <div className="dashboard-card-body">
                        Find the doctor who’s right for you. We are staffed by
                        the nation’s top physicians.
                    </div>
                </div>

                <div className="dashboard-card">
                    <div className="dashboard-card-header">
                        <h3>
                            <i className="fas fa-user-md icon"></i>
                            <NavLink to="/covid"> COVID-19</NavLink>
                        </h3>
                    </div>
                    <div className="dashboard-card-body">
                        <p>
                            COVID-19 vaccinations for are available at no cost.
                        </p>{" "}
                        <p>
                            The General Hospital will allow one visitor per day
                            for inpatients and those in our Emergency
                            Department.
                        </p>
                    </div>
                </div>

                <div className="dashboard-card">
                    <div className="dashboard-card-header">
                        <h3>
                            <i className="fas fa-user-md icon"></i>
                            <NavLink to="/physicians/appointment">
                                Appointments
                            </NavLink>
                        </h3>
                    </div>
                    <div className="dashboard-card-body">
                        Find the doctor who’s right for you. Grady is staffed by
                        the nation’s top physicians, including Grady employed
                        physicians and faculty from Emory and Morehouse schools
                        of medicine.
                    </div>
                </div>
                <div className="dashboard-card">
                    <div className="dashboard-card-header">
                        <h3>
                            <i className="fas fa-user-md icon"></i> Find A
                            Doctor
                        </h3>
                    </div>
                    <div className="dashboard-card-body">
                        Find the doctor who’s right for you. Grady is staffed by
                        the nation’s top physicians, including Grady employed
                        physicians and faculty from Emory and Morehouse schools
                        of medicine.
                    </div>
                </div>
            </section>
            <hr className="hr" />

            <SpecialtiesList />

            <hr className="hr" />
        </main>
    );
};

export default Home;
