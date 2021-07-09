/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import { Greeting } from "./Greeting";

describe("<Greeting />", () => {
    test("renders Hello world as a text.", () => {
        // Arrange.
        render(<Greeting />);
        // Act.  For this example, nothing.
        // Assert
        const helloworldElement = 
           screen.getByText("Hello World!");
        expect(helloworldElement).toBeInTheDocument();
    });
});







