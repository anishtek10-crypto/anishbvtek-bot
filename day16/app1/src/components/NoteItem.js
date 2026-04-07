function NoteItem({ note, deleteNote, toggleStatus }) {
  return (
    <li>
      <span className={note.status ? "completed" : ""}>{note.title}</span>
      <small style = {{color:"gray",marginLeft:"10px"}}>{note.createdAt}</small>
      <button onClick={() => toggleStatus(note.id, true)}>YES</button>
      <button onClick={() => toggleStatus(note.id, false)}>NO</button>
      <button className="delete-btn" onClick={() => deleteNote(note.id)}>Delete</button>
    </li>
  );
}