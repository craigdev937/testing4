/**
 * @jest-environment jsdom
 */
 import React from "react";
 import { render, screen } from "@testing-library/react";
 import { Main } from "../components/Main";
 
 test("renders learn react link", () => {
     render(<Main />);
     const linkElement = screen.getByText(/learn react/i);
     expect(linkElement).toBeInTheDocument();
 });
 
 
 
 
 
 
//  describe("Main", () => {
//      test("renders Main component", () => {
//          render(<Main />);
//          screen.debug();
//      })
//  });


// import React from "react";
// import ReactDOM from "react-dom";
// import { Main } from "../components/Main";

// it("renders without crashing", () => {
//     const main = document.createElement("main");
//     ReactDOM.render(<Main />, main);
// })








