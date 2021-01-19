import {render, fireEvent} from "@testing-library/react";
import {Checkbox} from "../Checkbox";
import React from "react";

test("Selecting checkbox", () => {
    const {getByLabelText} = render(<Checkbox />);
    const checkbox = getByLabelText(/unchecked/);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
});