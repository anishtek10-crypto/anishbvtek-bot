import {render,screen} from "@testing-library/react";
import NoteList from "./NoteList";
test("render notes",()=>{
    const notes = [
        {id:1,title:"Note 1",status:false},
        {id:2,title:"Note 2",status:true}
    ];
    render(<NoteList notes = {notes} deleteNote={()=>{}}/>);
    expect(screen.getByText(/Note 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Note 2/i)).toBeInTheDocument();
});
test("each note has delete button",async()=>{
    const notes = [
        {id:1,title:"Note 1",status:false},
        {id:2,title:"Note 2",status:true}
    ];
    render(<NoteList notes={notes} deleteNote={() => {}} />);
    const deleteButtons = screen.getAllByText(/delete/i);
    expect(deleteButtons.length).toBe(2);
});