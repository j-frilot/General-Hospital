import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const Doctor = () => {
    const [doctorInfo, setDoctorInfo] = useState({});

    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:4000/api/physicians/${id}`)
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                setDoctorInfo(response);
            });
    }, [id]);

    return (
        <>
            <main className="container">
                <div className="doctor-top">
                    <div className="doctor-top-name">
                        <h2>
                            Dr. {doctorInfo.first_name} {doctorInfo.last_name}{" "}
                        </h2>
                    </div>
                    <div className="doctor-top-info">
                        <div className="doctor-top-info-image">
                            <img
                                src={`/images/${doctorInfo.photo}`}
                                alt="physician"
                                className="physician-img"
                            />
                        </div>
                        <div className="doctor-top-info">
                            <ul>
                                <li>
                                    <p>Specialty: {doctorInfo.specialty}</p>
                                </li>
                                <li>
                                    <p>Office Number: {doctorInfo.telephone}</p>
                                </li>
                                <li>
                                    <p>Office Number: {doctorInfo.office}</p>
                                </li>
                                <li>
                                    <p>School: {doctorInfo.education}</p>
                                    <li>
                                        <h3>
                                            About Dr. {doctorInfo.last_name}
                                        </h3>
                                        <p className="bio">{doctorInfo.info}</p>
                                    </li>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="doctor-bottom"></div>
            </main>
        </>
    );
};

export default Doctor;
