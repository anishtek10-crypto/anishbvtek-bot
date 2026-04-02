import { useState } from "react";
function NoteForm({addNote}){
    const[note,setNotes]= useState({
        title:"My Note",
        status:"created"
    });
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (!note.title.trim())
            return;
        addNote(note);
        setNotes({});
    };
    return (
        <form onSubmit = {handleSubmit}>
            <input placeholder="Enter note" value={note.title} onChange={(e) => setNotes({...note,title:e.target.value})}/>
            <input value = {note.status} onChange={(e) => setNotes({title:e.target.value})}/>
            <button>add</button>
        </form>
    );
}
export default NoteForm;