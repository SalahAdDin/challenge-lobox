import { render, screen } from "@application/utils/test-utils";

import DropdownList from "./DropdownList";

const DUMMY_ERROR = "Connection Error with 400 code.";

describe("Error", () => {
  it("should render the error widget with the given message", () => {
    const view = render(<DropdownList />);
    expect(view).toBeTruthy();

    const container = screen.getByRole("alert");
    const message = screen.getByText(DUMMY_ERROR);

    expect(container).toBeInTheDocument();
    expect(message).toBeInTheDocument();
  });
});
