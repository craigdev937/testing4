/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import { Async } from "../shared/Async";

describe("<Async />", () => {
    test("renders posts if requests succeeds", async () => {
        render(<Async />)
        const listItemElements = 
            await screen.findAllByRole("listitem");
        expect(listItemElements).not.toHaveLength(0);
    })
});





