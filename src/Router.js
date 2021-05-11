import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Physicians from "./components/Physicians/Physicians";
import Covid from "./components/Covid/Covid";
import Doctor from "./components/Physicians/Doctor";
import Appointment from "./components/pages/Appointment";

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/physicians" component={Physicians} />
            <Route exact path="/covid" component={Covid} />
            <Route exact path="/physicians/:id" component={Doctor} />
            <Route exact path="/appointment" component={Appointment} />
        </Switch>
    );
};

export default Router;
