
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { afterEach } from "vitest";
import UnitTestButton from "./UnitTestButton";

afterEach(() => {
  cleanup();
});

describe("UnitTestButton", () => {
  it("renders the Add to Cart button", () => {
    render(<UnitTestButton onClick={() => {}} />);

    expect(
      screen.getByRole("button", { name: "Add to Cart" })
    ).toBeInTheDocument();
  });

  it("calls the click handler when clicked", () => {
    const handleClick = vi.fn();

    render(<UnitTestButton onClick={handleClick} />);

    fireEvent.click(
      screen.getByRole("button", { name: "Add to Cart" })
    );

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
