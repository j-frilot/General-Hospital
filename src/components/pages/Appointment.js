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
        <div>
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
                                    <option value="1">Steven Santiago</option>
                                    <option value="2">Jan Sharp</option>
                                    <option value="3">Joy Mckenzie</option>
                                    <option value="4">Sophie Mccormik</option>
                                    <option value="5">Dave Morrison</option>
                                    <option value="6">Leigh Morton</option>
                                    <option value="7">Jamie Rodgers</option>
                                    <option value="8">Horace Roberts</option>
                                    <option value="9">Clara Burke</option>
                                    <option value="10">Geneva Curtis</option>
                                    <option value="11">Meghan Brewer</option>
                                    <option value="12">Vernon Owens</option>
                                    <option value="13">Lynn Greene</option>
                                    <option value="14">Heather Sherman</option>
                                    <option value="15">Johnathan</option>
                                    <option value="16">Joe Chandler</option>
                                    <option value="17">Angeline Collins</option>
                                </optgroup>
                            </select>

                            <input
                                type="date"
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
                                type="tel"
                                name="telephone"
                                required
                                placeholder="Telephone 123-456-789*"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
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
        </div>
    );
};

export default Appointment;
