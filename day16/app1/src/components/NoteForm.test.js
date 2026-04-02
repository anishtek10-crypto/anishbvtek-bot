import { render, screen, fireEvent } from "@testing-library/react";
import NoteForm from "./NoteForm";
test("adds note on submit", () => {
  const addNote = jest.fn();
  render(<NoteForm addNote={addNote} />);
  fireEvent.change(screen.getByPlaceholderText(/enter note/i), {
    target: { value: "Test Note" },
  });
  fireEvent.click(screen.getByText(/add/i));
  expect(addNote).toHaveBeenCalledTimes(1);
  expect(addNote).toHaveBeenCalledWith({title: "Test Note",status: false});
});
test("do not add empty note",()=>{
    const addNote = jest.fn();
    render(<NoteForm addNote={addNote}/>);
    fireEvent.click(screen.getByText(/add/i));
    expect(addNote).not.toHaveBeenCalled();
});