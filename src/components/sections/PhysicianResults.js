import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import { useParams } from "react-router";

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
                        key={result.physicians_id}
                    >
                        <NavLink to={`/physicians/${result.physicians_id}`}>
                            <img
                                src={`images/${result.photo}`}
                                alt="physician"
                                className="physician-img"
                            />
                        </NavLink>
                        <NavLink to={`/physicians/${result.physicians_id}`}>
                            <h3>
                                {result.first_name} {result.last_name}
                            </h3>
                        </NavLink>
                        <NavLink to={`/physicians/${result.physicians_id}`}>
                            <h4>{result.specialty}</h4>
                            <h4 className="bg">Request An Appointment</h4>
                        </NavLink>
                    </div>
                ))}
            </>
        );
    }

    return <></>;
};

export default PhysicianResults;
