import React from "react";
import { NavLink } from "react-router-dom";
import SpecialtiesList from "../sections/SpecialtyList";
import Dashboard from "../sections/Dashboard";

const Home = () => {
    return (
        <main className="container">
            <section className="banner index-banner"></section>

            <hr className="hr" />
            <Dashboard />
            <SpecialtiesList />

            <hr className="hr" />
        </main>
    );
};

export default Home;
