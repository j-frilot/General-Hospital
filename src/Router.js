import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Doctors from "./components/pages/Doctors";
import Covid from "./components/pages/Covid";

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
