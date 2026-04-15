import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import axios from "axios";
 
jest.mock("axios");
 
test("renders initial inputs", () => {
  render(<App />);
  const inputs = screen.getAllByRole("textbox");
  expect(inputs.length).toBe(2);
});
 
test("adds new item field", () => {
  render(<App />);
 
  const addButton = screen.getByText("Add Item");
  fireEvent.click(addButton);
 
  const inputs = screen.getAllByRole("textbox");
  expect(inputs.length).toBe(4);
});
 
test("allows typing in inputs", () => {
  render(<App />);
 
  const inputs = screen.getAllByRole("textbox");
 
  fireEvent.change(inputs[0], { target: { value: "Pen" } });
  fireEvent.change(inputs[1], { target: { value: "10" } });
 
  expect(inputs[0].value).toBe("Pen");
  expect(inputs[1].value).toBe("10");
});
 
test("submits form and shows order ID", async () => {
  axios.post.mockResolvedValue({ data: { id: 1 } });
 
  render(<App />);
 
  const inputs = screen.getAllByRole("textbox");
 
  fireEvent.change(inputs[0], { target: { value: "Pen" } });
  fireEvent.change(inputs[1], { target: { value: "10" } });
 
  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);
 
  const result = await screen.findByText("Order ID: 1");
  expect(result).toBeInTheDocument();
});
 
test("multiple items submission", async () => {
  axios.post.mockResolvedValue({ data: { id: 2 } });
 
  render(<App />);
 
  const addButton = screen.getByText("Add Item");
  fireEvent.click(addButton);
 
  const inputs = screen.getAllByRole("textbox");
 
  fireEvent.change(inputs[0], { target: { value: "Pen" } });
  fireEvent.change(inputs[1], { target: { value: "10" } });
 
  fireEvent.change(inputs[2], { target: { value: "Book" } });
  fireEvent.change(inputs[3], { target: { value: "20" } });
 
  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);
 
  const result = await screen.findByText("Order ID: 2");
  expect(result).toBeInTheDocument();
});
 