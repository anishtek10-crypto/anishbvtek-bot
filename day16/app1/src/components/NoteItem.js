function NoteItem({note,deleteNote,toggleStatus}){
    return(
        <li>
            <span className={note.status ? "completed":""}>{note.title}</span>
            <button onClick={()=>toggleStatus(note.id,true)}>yes</button>
            <button onClick={()=>toggleStatus(note.id,false)}>no</button>
            <button className="delete-button"onClick = {() => deleteNote(note.id)}>Delete</button>
        </li>
    );
}
export default NoteItem;



