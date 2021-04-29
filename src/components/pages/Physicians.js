import React from "react";
import PhysicianResults from "../sections/PhysicianResults";

const Physicians = (props) => {
    return (
        <main className="container">
            <section className="banner-container">
                <div className="banner physicians-banner"></div>
                <div className="physicians-banner-body">
                    <h2>Find A Doctor</h2>
                    <hr />
                </div>
            </section>
            <hr className="hr" />

            <section className="directory directory-grid">
                <div className="search">
                    <h3>Filter Results</h3>
                    <form
                        action="#!"
                        className="doctor-filter"
                        id="doctor-filter"
                    >
                        <div className="form-group">
                            <label htmlFor="search-name">Search By Name</label>
                            <input
                                type="text"
                                id="search-name"
                                className="form-input"
                                name="name"
                                placeholder="Search Name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="search_specialty">
                                Find by Specialty
                            </label>
                            <select
                                name="specialty"
                                className="form-input"
                                id="search-specialty"
                            >
                                <option value="#!">All Specialties</option>
                                <option value="anesthesiology">
                                    Anesthesiology
                                </option>
                                <option value="cardiology">Cardiology</option>
                                <option value="dermatology">Dermatology</option>
                                <option value="family-medicine">
                                    Family Medicine
                                </option>
                                <option value="gastroenterology">
                                    Gastroenterology
                                </option>
                                <option value="general-surgery">
                                    General Surgery
                                </option>
                                <option value="gynecology">Gynecology</option>
                                <option value="internal-medicine">
                                    Internal Medicine
                                </option>
                                <option value="maternal-fetal-medicine">
                                    Maternal &amp Fetal Medicine
                                </option>
                                <option value="nephrology">Nephrology</option>
                                <option value="neurology">Neurology</option>
                                <option value="neuro-surgery">
                                    Neuro Surgery
                                </option>
                                <option value="pediatrics">Pediatrics</option>
                                <option value="podietry">Podietry</option>
                                <option value="pulmonology">Pulmonology</option>
                                <option value="urology">Urology</option>
                            </select>
                        </div>

                        <div className="form-group radio-gender">
                            <label htmlFor="search_specialty">
                                Find By Gender
                            </label>
                            <input
                                className="radio-input"
                                type="radio"
                                name="gender"
                                id="gender-none"
                                value="#!"
                            />
                            <label
                                className="radio-label"
                                htmlFor="gender-none"
                            >
                                No Preference
                            </label>
                            <input
                                className="radio-input"
                                type="radio"
                                name="gender"
                                id="gender-female"
                                value="Female"
                            />
                            <label
                                className="radio-label"
                                htmlFor="gender-female"
                            >
                                Female Physicians
                            </label>
                            <input
                                className="radio-input"
                                type="radio"
                                name="gender"
                                id="gender-male"
                                value="Male"
                            />
                            <label
                                className="radio-label"
                                htmlFor="gender-male"
                            >
                                Male Physicians
                            </label>
                        </div>

                        <div className="form-group">
                            <button className="btn-submit btn">Filter</button>
                        </div>

                        <input
                            type="hidden"
                            name="action"
                            value="filter_find_a_doctor"
                        />
                    </form>
                </div>

                <div className="results">
                    <div className="alphabet">
                        <a href="#!" className="all">
                            All
                        </a>
                        <a href="#!" className="a">
                            A
                        </a>
                        <a href="#!" className="b">
                            B
                        </a>
                        <a href="#!" className="c">
                            C
                        </a>
                        <a href="#!" className="d">
                            D
                        </a>
                        <a href="#!" className="e">
                            E
                        </a>
                        <a href="#!" className="f">
                            F
                        </a>
                        <a href="#!" className="g">
                            G
                        </a>
                        <a href="#!" className="h">
                            H
                        </a>
                        <a href="#!" className="i">
                            I
                        </a>
                        <a href="#!" className="j">
                            J
                        </a>
                        <a href="#!" className="k">
                            K
                        </a>
                        <a href="#!" className="l">
                            L
                        </a>
                        <a href="#!" className="m">
                            M
                        </a>
                        <a href="#!" className="n">
                            N
                        </a>
                        <a href="#!" className="o">
                            O
                        </a>
                        <a href="#!" className="p">
                            P
                        </a>
                        <a href="#!" className="q">
                            Q
                        </a>
                        <a href="#!" className="r">
                            R
                        </a>
                        <a href="#!" className="s">
                            S
                        </a>
                        <a href="#!" className="t">
                            T
                        </a>
                        <a href="#!" className="u">
                            U
                        </a>
                        <a href="#!" className="v">
                            V
                        </a>
                        <a href="#!" className="w">
                            W
                        </a>
                        <a href="#!" className="x">
                            X
                        </a>
                        <a href="#!" className="y">
                            Y
                        </a>
                        <a href="#!" className="z">
                            Z
                        </a>
                    </div>
                    <div className="results-grid">
                        <PhysicianResults />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Physicians;
