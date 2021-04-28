import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Doctors from "./Doctors";
import Covid from "./Covid";

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/doctors" component={Doctors} />
            <Route exact path="/covid" component={Covid} />
        </Switch>
    );
};

export default Router;
