import React from "react";
import SpecialtiesList from "../sections/SpecialtyList";
import Dashboard from "../sections/Dashboard";

const Home = () => {
    return (
        <main>
            <section className="hero">
                <div className="hero-content"></div>
            </section>
            <hr className="hr" />
            <Dashboard />
            <SpecialtiesList />
            <hr className="hr" />
        </main>
    );
};

export default Home;
