import { render, screen } from "@testing-library/react";
import { it, expect } from "vitest";
import App from "./App";

it("renders welcome message", () => {
  render(<App />);
  expect(screen.getByText("Vite + React")).toBeInTheDocument();
});
