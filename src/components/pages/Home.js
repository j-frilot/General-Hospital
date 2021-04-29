import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
    // const specialtyPhysicians = [
    //     {
    //         id: 1,
    //         first_name: "clara",
    //         last_name: "burke",
    //         specialty: "maternal, fetal medicine",
    //         img: "../images/face-9.jpg",
    //         gender: "female"
    //     },
    //     {
    //         id: 2,
    //         first_name: "geneva",
    //         last_name: "curtis",
    //         specialty: "cardiology",
    //         img: "../images/face-10.jpg",
    //         gender: "female"
    //     },
    //     {
    //         id: 3,
    //         first_name: "meghan",
    //         last_name: "brewer",
    //         specialty: "gastroenterology",
    //         img: "../images/face-11.jpg",
    //         gender: "female"
    //     },
    //     {
    //         id: 4,
    //         first_name: "vernon",
    //         last_name: "owens",
    //         specialty: "family medicine",
    //         img: "../images/face-12.jpg",
    //         gender: "male"
    //     },
    //     {
    //         id: 5,
    //         first_name: "lynne",
    //         last_name: "green",
    //         specialty: "pediatrics",
    //         img: "../images/face-13.jpg",
    //         gender: "female"
    //     },
    //     {
    //         id: 6,
    //         first_name: "heather",
    //         last_name: "sherman",
    //         specialty: "internal medicine",
    //         img: "../images/face-14.jpg",
    //         gender: "female"
    //     }
    // ];

    // let specialtiesGrid = document.querySelector(".specialties-grid");

    // let specialtiesMap = specialtyPhysicians.map((specialty) => {
    //     return `<div class="specialties-grid-item">
    //                 <img src="${specialty.img}" alt="physician-photo" class="physician-img">
    //                 <p>${specialty.specialty}</p>
    //             </div>`;
    // });
    // specialtiesMap = specialtiesMap.join("");
    // specialtiesGrid.innerHTML = specialtiesMap;

    return (
        <main className="container">
            <section className="banner index-banner"></section>
            <section className="dashboard">
                <div className="dashboard-card">
                    <div className="dashboard-card-header">
                        <h3>
                            <i className="fas fa-user-md icon"></i>{" "}
                            <NavLink to="/doctors"> Find A Doctor</NavLink>
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
                            <NavLink to="/">Appointments</NavLink>
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
            <section className="specialties">
                <h2>Our Specialties</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Mollitia, totam.
                </p>
                <div className="specialties-grid"></div>
            </section>
            <hr className="hr" />
        </main>
    );
};

export default Home;
