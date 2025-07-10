import userEvent from "@testing-library/user-event";
import { ColumnValues, TableRow } from "./TableRow";
import { render, screen } from "@testing-library/react";

const columnValues: ColumnValues[] = [
  {
    value: "John",
    columnSize: 1,
  },
  {
    value: "28",
    columnSize: 1,
  },
  {
    value: "London",
    columnSize: 1,
  },
  {
    value: "Alive",
    columnSize: 1,
  },
  {
    value: "Episode 1",
    columnSize: 1,
  },
];

describe("TableRow", () => {
  test("should render column values as expected", () => {
    render(<TableRow columnValues={columnValues} onClick={vi.fn()} />);

    // Check that the icon is correctly displayed
    expect(screen.getByTestId("KeyboardArrowDownIcon"));

    for (const value of columnValues) {
      expect(screen.getByText(value.value)).toBeInTheDocument();
    }
  });

  test("should render different icon when 'selected' prop provided", () => {
    render(<TableRow columnValues={columnValues} onClick={vi.fn()} selected />);

    // Check that the icon is correctly displayed
    expect(screen.getByTestId("KeyboardArrowUpIcon")).toBeInTheDocument();
  });

  test("when the row is clicked, the onClick callback should be called", async () => {
    const onClick = vi.fn();

    render(<TableRow columnValues={columnValues} onClick={onClick} />);

    // Check that the icon is correctly displayed
    expect(screen.getByTestId("KeyboardArrowDownIcon")).toBeInTheDocument();

    await userEvent.click(screen.getByText("John"));

    expect(onClick).toHaveBeenCalled();
  });
});
