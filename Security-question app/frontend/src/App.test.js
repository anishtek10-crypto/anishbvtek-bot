import{render,screen,fireEvent} from "@testing-library/react";
import App from "./App";
test("shows alert if answers do not match",()=>{
    window.alert = jest.fn();
    render(<App/>);
    const answerInputs = screen.getAllByPlaceholderText("Answer");
    const confirmInputs = screen.getAllByPlaceholderText("Confirm");
    fireEvent.change(answerInputs[0],{target:{value:"abc"}});
    fireEvent.change(confirmInputs[0],{target:{value:"xyz"}});
    const button = screen.getByText("Submit");
    fireEvent.click(button);
    expect(window.alert).toHaveBeenCalled();
});
test("shows alert when submitting empty form", () => {
  window.alert = jest.fn();
  render(<App />);
  fireEvent.click(screen.getByText("Submit"));
  expect(window.alert).toHaveBeenCalledWith("Fill all fields");
});
test("user can type in answer input", () => {
  render(<App />);
  const input = screen.getAllByPlaceholderText("Answer")[0];
  fireEvent.change(input, { target: { value: "myAnswer" } });
  expect(input.value).toBe("myAnswer");
});
test("does not submit if any field is missing", () => {
  window.alert = jest.fn();
  render(<App />);
  fireEvent.click(screen.getByText("Submit"));
  expect(window.alert).toHaveBeenCalled();
});
test("show button reveals input text", () => {
  render(<App />);
  const answerInput = screen.getAllByPlaceholderText("Answer")[0];
  const button = screen.getAllByText("Show")[0];
  fireEvent.click(button);
  expect(answerInput.type).toBe("text");
});