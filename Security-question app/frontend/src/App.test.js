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