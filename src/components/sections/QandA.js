import React, { useState, useEffect } from "react";
import Collapsible from "react-collapsible";
import { FaAngleDown } from "react-icons/fa";

const QandA = () => {
    const [stats, setStats] = useState([]);
    useEffect(() => {
        fetch("https://corona.lmao.ninja/v3/covid-19/states")
            .then((response) => response.json())
            .then((response) => {
                setStats(response);
            });
    }, []);

    const down = "banana";

    return (
        <section className="container covid-stat-section">
            {stats.map((state) => (
                <div className="covid-stat-item">
                    <Collapsible
                        key={state.state}
                        trigger={`${state.state}`}
                        className="covid-stat-heading"
                    >
                        <ul className="covid-stat-body">
                            <li>
                                <p>Total cases: {state.cases}</p>
                            </li>
                            <li>
                                <p>New cases today: {state.todayCases}</p>
                            </li>
                            <li>
                                <p>Total Deaths: {state.deaths}</p>
                            </li>
                            <li>
                                <p>
                                    Deaths Per Million:{" "}
                                    {state.deathsPerOneMillion}
                                </p>
                            </li>
                            <li>
                                <p>Last Updated: {state.updated}</p>
                            </li>
                            <li>
                                <p></p>Total Population: {state.population}
                            </li>
                            <li></li>
                        </ul>
                    </Collapsible>
                </div>
            ))}
        </section>
    );
};

export default QandA;
