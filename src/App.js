import React from "react";

import Header from "./components/partials/Header";
import Router from "./Router";
import Footer from "./components/partials/Footer";
import "./components/sections/QandA";
import QandA from "./components/sections/QandA";

function App() {
    return (
        <>
            <QandA />
            <Header />
            <Router />
            <Footer />
        </>
    );
}

export default App;
