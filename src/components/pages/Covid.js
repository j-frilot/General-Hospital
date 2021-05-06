import React from "react";
import QandA from "../sections/QandA";
const Covid = () => {
    return (
        <main className="container">
            <section className="covid-banner">
                <div className="covid-banner-text">
                    <h1>COVID-19 Safety Info</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repudiandae ipsam ratione maiores.
                    </p>
                </div>
                <div className="covid-banner-asset">
                    <div className="covid-banner-img"></div>
                </div>
            </section>
            <QandA />
        </main>
    );
};

export default Covid;
