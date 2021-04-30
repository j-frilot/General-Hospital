import React, { useState, useEffect } from "react";

const Covid = () => {
    // const [covidStateResults, setCovidStateResults] = useState(null);

    // useEffect(() => {
    //     fetch("https://corona.lmao.ninja/v2/states?sort=&yesterday=")
    //         .then((response) => response.json())
    //         .then((response) => {
    //             console.log(response);
    //             setCovidStateResults(response);
    //         });
    // }, []);

    return (
        <main className="container">
            <section className="banner covid-banner"></section>
            <hr className="hr" />{" "}
        </main>
    );
};

export default Covid;
