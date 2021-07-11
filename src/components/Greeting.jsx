import React from "react";
import { Output } from "../shared/Output";

export const Greeting = () => {
    const [changedText, setChangedText] = React.useState(false);
    const changeTextHandler = () => {
        setChangedText(true);
    };
    return (
        <React.Fragment>
            <h1>Hello World!</h1>
            {!changedText && <Output>It's good to see you!</Output>}
            {changedText && <Output>Changed!</Output>}
            <button
                onClick={changeTextHandler}
                >Change Text!
            </button>
        </React.Fragment>
    );
};



