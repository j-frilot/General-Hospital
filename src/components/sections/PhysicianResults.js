import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const PhysicianResults = () => {
    const [searchResults, setSearchResults] = useState(null);

    useEffect(() => {
        fetch("http://localhost:4000/api/physicians")
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                setSearchResults(response);
            });
    }, []);

    if (searchResults) {
        return (
            <>
                {searchResults.map((result) => (
                    <div
                        className="results-grid-item result"
                        key={result.physician_id}
                    >
                        <NavLink to="/doctors">
                            <img
                                src={result.photo}
                                alt="physician"
                                className="physician-img"
                            />
                        </NavLink>
                        <NavLink to="/doctors">
                            <h3>
                                {result.first_name} {result.last_name}
                            </h3>
                        </NavLink>
                        <NavLink to="/doctors">
                            <h4>{result.specialty}</h4>
                            <h4 className="bg">Request An Appointment</h4>
                        </NavLink>
                    </div>
                ))}
            </>
        );
    }

    return <div>{searchResults}</div>;
};

export default PhysicianResults;
