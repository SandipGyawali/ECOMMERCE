import { screen, render, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import SignIn from "../pages/SignIn";
import { MemoryRouter } from "react-router-dom";

describe("SignIn Page", () => {
  it("renders the SignIn form", () => {
    render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );
    expect(screen.getByPlaceholderText(/Enter Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter Password/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Confirm Password/i)
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  it("validates form fields and shows error messages", async () => {
    render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );

    const submitButton = screen.getByRole("button", { name: /Submit/i });

    fireEvent.click(submitButton);

    expect(
      await screen.findByText(/Valid Email is required/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/Password is required/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/Password must be same/i)
    ).toBeInTheDocument();
  });

  it("renders the google button and other elements correctly", () => {
    render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );

    // mock console.log
    const consoleSpy = vi.spyOn(console, "log");

    // check google sign-in button
    const googleBtn = screen.getByRole("button", {
      name: /Sign In With Google/i,
    });
    expect(googleBtn).toBeInTheDocument();
    fireEvent.click(googleBtn);

    expect(consoleSpy).toHaveBeenCalledWith("THis is google button");

    //restore the original console.log
    consoleSpy.mockRestore();

    // Check "New to Site?" text
    expect(screen.getByText(/New to Site?/i)).toBeInTheDocument();

    // Check "Create an Account" link
    const createAccountLink = screen.getByRole("link", {
      name: /Create an Account/i,
    });
    expect(createAccountLink).toBeInTheDocument();
    expect(createAccountLink.getAttribute("href")).toBe("/signup");
  });
});
