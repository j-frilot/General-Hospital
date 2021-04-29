import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Physicians from "./components/pages/Physicians";
import Covid from "./components/pages/Covid";
import Doctor from "./components/pages/Doctor";

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/physicians" component={Physicians} />
            <Route exact path="/covid" component={Covid} />
            <Route exact path="/physicians/:id" component={Doctor} />
        </Switch>
    );
};

export default Router;
