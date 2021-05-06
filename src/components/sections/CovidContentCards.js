import React, { useState, useEffect } from "react";

const CovidContentCards = () => {
    const [covidContent, setCovidContent] = useState([]);
    useEffect(() => {
        fetch("http://localhost:4000/api/content/covid")
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                setCovidContent(response);
            });
    }, []);

    return (
        <section className="covid-content">
            <div className=" covid-content-section">
                <h1>{covidContent[0][0]}</h1>
                <ul>
                    <li>
                        <p>{covidContent.text_one}</p>
                    </li>
                    <li>
                        <p>{covidContent.text_two}</p>
                    </li>
                </ul>
            </div>

            <div className=" covid-content-section"></div>

            <div className=" covid-content-section">
                <h1>{covidContent.heading_one}</h1>
                <ul>
                    <li>
                        <p>{covidContent.text_one}</p>
                    </li>
                    <li>
                        <p>{covidContent.text_two}</p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default CovidContentCards;
