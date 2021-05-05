import React from "react";

import Slider from "../sections/Slider";
import SpecialtiesList from "../sections/SpecialtyList";
import Dashboard from "../sections/Dashboard";

const Home = () => {
    return (
        <main className="container">
            <Slider />
            <hr className="hr" />
            <Dashboard />
            <SpecialtiesList />
            <hr className="hr" />
        </main>
    );
};

export default Home;
