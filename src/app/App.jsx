import React from "react";
import "./App.css";
import { Greeting } from "../components/Greeting";
import { Async } from "../shared/Async";

export const App = () => {
    return (
        <React.Fragment>
            <Async />
            <Greeting />
        </React.Fragment>
    );
};




