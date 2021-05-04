import React, { useState, useEffect } from "react";

const Dashboard = () => {
    const [dashboard, setDashboard] = useState([]);

    useEffect(() => {
        fetch("")
            .then((res) => res.json())
            .then((res) => {
                setDashboard(res);
            });
    }, []);
    return <div></div>;
};

export default Dashboard;
