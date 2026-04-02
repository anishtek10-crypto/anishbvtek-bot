import { useState } from "react";
function NoteForm({addNote}){
    const[note,setNotes]= useState({
        title:"",
        status:false
    });
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (!note.title.trim())
            return;
        addNote(note);
        setNotes({title:"",status:false});
    };
    return (
        <form onSubmit = {handleSubmit}>
            <input type = "text"placeholder="Enter note" value={note.title} onChange={(e) => setNotes({...note,title:e.target.value})}/>
            <label>completed:
                <input type = "checkbox" checked ={note.status} onChange={(e) => setNotes({...note,status:e.target.checked})}/>
            </label>
            <input value = {note.status} onChange={(e) => setNotes({title:e.target.value})}/>
            <button>add</button>
        </form>
    );
}
export default NoteForm;