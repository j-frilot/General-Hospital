import Axios from "axios";
import React, { useState } from "react";

const Appointment = () => {
    const [patient_first_name, setPatientFirstName] = useState("");
    const [patient_last_name, setPatientLastName] = useState("");
    const [physicians_id, setPhysiciansId] = useState("");
    const [appointment_date, setAppointmentDate] = useState("");
    const [insurance, setInsurance] = useState("");
    const [telephone, setTelephone] = useState("");
    const [comments, setComments] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    const displayInfo = () => {
        console.log(
            patient_first_name,
            patient_last_name,
            physicians_id,
            appointment_date,
            insurance,
            telephone,
            comments,
            height,
            weight
        );
        Axios.post(`http://localhost:4000/api/appointments/makeappointment`, {
            patient_first_name: patient_first_name,
            patient_last_name: patient_last_name,
            physicians_id: physicians_id,
            appointment_date: appointment_date,
            insurance: insurance,
            telephone: telephone,
            comments: comments,
            height: height,
            weight: weight
        }).then((res) => {
            console.log(res);
            console.log(res.data);
        });
    };

    return (
        <>
            <main className="container form-container">
                <div className="form-container">
                    <form>
                        <fieldset>
                            <legend>Schedule An Appointment</legend>
                            <input
                                type="text"
                                name="patient_first_name"
                                required
                                placeholder="First Name"
                                onChange={(event) => {
                                    setPatientFirstName(event.target.value);
                                }}
                            />
                            <input
                                type="text"
                                name="patient_last_name"
                                required
                                placeholder="Last Name"
                                onChange={(event) => {
                                    setPatientLastName(event.target.value);
                                }}
                            />
                            <label htmlFor="job">Physician:</label>
                            <select
                                type="number"
                                id="physician-select"
                                name="physicians_id"
                                required
                                placeholder="Doctor Id *"
                                onChange={(event) => {
                                    setPhysiciansId(event.target.value);
                                }}
                            >
                                <optgroup label="Physicians">
                                    <option value="1">John</option>
                                    <option value="2">Bob</option>
                                    <option value="3">Joe</option>
                                </optgroup>
                            </select>

                            <input
                                type="text"
                                name="appointment_date"
                                required
                                placeholder="Appointment Date"
                                onChange={(event) => {
                                    setAppointmentDate(event.target.value);
                                }}
                            />

                            <input
                                type="text"
                                name="insurance"
                                required
                                placeholder="Name Of Insurance"
                                onChange={(event) => {
                                    setInsurance(event.target.value);
                                }}
                            />
                            <input
                                type="text"
                                name="telephone"
                                required
                                placeholder="Telephone Number *"
                                onChange={(event) => {
                                    setTelephone(event.target.value);
                                }}
                            />
                            <textarea
                                name="comments"
                                type="text"
                                placeholder="Message To Doctor Not required"
                                onChange={(event) => {
                                    setComments(event.target.value);
                                }}
                            ></textarea>
                            <input
                                type="number"
                                name="height"
                                placeholder="Height(in) Not required. If unknown, input '00'."
                                onChange={(event) => {
                                    setHeight(event.target.value);
                                }}
                            />
                            <input
                                type="number"
                                name="weight"
                                placeholder="Weight(lbs) Not required. If unknown, input '00'."
                                onChange={(event) => {
                                    setWeight(event.target.value);
                                }}
                            />
                        </fieldset>

                        <input
                            type="submit"
                            value="Apply"
                            onClick={displayInfo}
                        />
                    </form>
                </div>
            </main>
        </>
    );
};

export default Appointment;
