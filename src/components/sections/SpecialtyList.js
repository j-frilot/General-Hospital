import React, { useState, useEffect } from "react";

const SpecialtyList = () => {
    const [specialties, setSpecialties] = useState(null);
    useEffect(() => {
        fetch("http://localhost:4000/api/physicians")
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                setSpecialties(response);
            });
    }, []);

    if (specialties) {
        return (
            <>
                <section className="specialties">
                    <h2>Our Specialties</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Mollitia, totam.
                    </p>

                    <div className="specialties-grid">
                        {specialties.slice(0, 6).map((specialty) => (
                            <div
                                key={specialty.physicians_id}
                                className="specialties-grid-item"
                            >
                                <img
                                    src={`images/${specialty.photo}`}
                                    alt="physician"
                                    className="physician-img"
                                />
                                <p>{specialty.specialty}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </>
        );
    }
    return <></>;
};

export default SpecialtyList;
