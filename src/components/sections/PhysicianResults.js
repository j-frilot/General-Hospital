import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import { useParams } from "react-router";

const PhysicianResults = () => {
    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
        fetch("http://localhost:4000/api/physicians")
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                setSearchResults(response);
            });
    }, []);

    return (
        <ul className="results-ul">
            {searchResults.map((result) => (
                <li className="results-item" key={result.physicians_id}>
                    <NavLink
                        className="results-item-flex"
                        to={`/physicians/${result.physicians_id}`}
                    >
                        <div className="results-item-img">
                            <img
                                src={`images/${result.photo}`}
                                alt="physician"
                                className="physician-img"
                            />
                        </div>
                        <div className="results-item-info ">
                            <span className="info-heading">
                                {result.first_name} {result.last_name} M.D.
                            </span>

                            <span className="info-body">
                                <p>{result.specialty}</p>
                                <p className="bg">Request An Appointment</p>
                            </span>
                        </div>
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default PhysicianResults;
