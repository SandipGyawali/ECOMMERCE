import { screen, render } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Line from "../components/SideBar/Line";
import Option from "../components/SideBar/Option";
import SideBar from "../components/SideBar/SideBar";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("Side Bar Option and Line Compoenent Test", () => {
  // mock for the components import

  beforeEach(() => {
    vi.mock("@fortawesome/react-fontawesome", () => ({
      FontAwesomeIcon: () => <span>Icon</span>,
    }));
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders the line component", () => {
    render(<Line />);

    const lineElement = screen.getByTestId("line");
    expect(lineElement).toBeInTheDocument();
  });

  it("renders the option component", () => {
    // checks for the link and the icon
    render(
      <MemoryRouter>
        <Option name={"mockName"} icon={"mockIcon"} />
      </MemoryRouter>
    );

    const nameElement = screen.getByText("mockName");
    expect(nameElement).toBeInTheDocument();

    // here for the icon the font awesome is mocked with the span icon that we define above
    const iconElement = screen.getByText("Icon");
    expect(iconElement).toBeInTheDocument();
  });
});

describe("SideBar Component", () => {
  const mockStore = configureStore();

  let store;
  const initialState = {
    sideBar: {
      show: false,
    },
  };

  beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = vi.fn();
  });

  it("renders the sidebar when 'show' is true", () => {
    store = mockStore({
      sideBar: {
        show: true,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <SideBar />
        </MemoryRouter>
      </Provider>
    );

    const sidebar = screen.getByTestId("sidebar");
    expect(sidebar).toHaveAttribute(`data-visible`, "true");
  });

  it("does not render the sidebar when 'show' is false", () => {
    store = mockStore({
      sideBar: {
        show: false,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <SideBar />
        </MemoryRouter>
      </Provider>
    );

    const sideBar = screen.getByTestId("sidebar");
    expect(sideBar).toHaveAttribute("data-visible", "false");
  });
});
