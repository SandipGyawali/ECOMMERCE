import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Message, Pagination } from "../components/Nav/Message";
import "@testing-library/jest-dom";
import { afterEach, beforeEach } from "node:test";

describe("Error Message", () => {
  it("renders default error state", () => {
    render(<Message />);
    screen.debug();
    expect(screen.getByTestId("message-container")).toBeInTheDocument();
  });
});

describe("pagination test", () => {
  beforeEach(() => {
    vi.mock("./range", () => {
      return { range: () => [1, 2, 3, 4, 5] };
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders the page", () => {
    render(<Pagination total={50} limit={10} currentPage={1} />);
    expect(screen.getAllByTestId("page-container")[0]).toHaveTextContent("1");
    expect(screen.getAllByTestId("page-container").length).toBe(5);
  });

  it("should emit clicked page", () => {
    const handleClick = vi.fn();
    render(
      <Pagination
        total={50}
        limit={10}
        currentPage={1}
        selectPage={handleClick}
      />
    );
    fireEvent.click(screen.getAllByTestId("page-container")[0]);
    expect(handleClick).toHaveBeenCalledOnce();
  });
});
