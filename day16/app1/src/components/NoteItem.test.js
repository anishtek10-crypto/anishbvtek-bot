import {render,screen,fireEvent} from "@testing-library/react";
import NoteItem from "./NoteItem";
test("calls delete on button click",()=>{
    const deleteNote = jest.fn();
    const note = {id:1,title:"Test",status:false};
    render(<NoteItem note={note} deleteNote={deleteNote}/>);
    fireEvent.click(screen.getByText(/delete/i));
    expect(deleteNote).toHaveBeenCalledWith(1);
});
test("clicking yes sets status to true",()=>{
    const toggleStatus=jest.fn();
    const note = {id:1,title:"Test",status:false};
    render(<NoteItem note={note} deleteNote={()=>{}} toggleStatus={toggleStatus}/>);
    fireEvent.click(screen.getByText(/yes/i));
    expect(toggleStatus).toHaveBeenCalledWith(1,true);
});