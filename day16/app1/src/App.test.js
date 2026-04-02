import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
test("adds and deletes note", async () => {
  render(<App />);
  fireEvent.change(screen.getByPlaceholderText(/enter note/i), {
    target: { value: "New Note" },
  });
  fireEvent.click(screen.getByText(/add/i));
  const note = await screen.findByText(/New Note,created/i);
  expect(note).toBeInTheDocument();
  fireEvent.click(screen.getByText(/delete/i));
  expect(screen.queryByText(/New Note,created/i)).not.toBeInTheDocument();
});