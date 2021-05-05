import React from "react";
import SpecialtiesList from "../sections/SpecialtyList";
import Dashboard from "../sections/Dashboard";

const Home = () => {
    return (
        <main>
            {/*<Slider />*/}
            <section className="hero">
                <div className="hero-content">
                    <h1>BANNER</h1>
                </div>
            </section>
            <hr className="hr" />
            <Dashboard />
            <SpecialtiesList />
            <hr className="hr" />
        </main>
    );
};

export default Home;
