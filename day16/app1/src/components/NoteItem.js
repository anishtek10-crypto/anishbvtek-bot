function NoteItem({ note, deleteNote, toggleStatus }) {
  return (
    <li>
      <span className={note.status ? "completed" : ""}>{note.title}</span>
      <button onClick={() => toggleStatus(note.id, true)}>YES</button>
      <button onClick={() => toggleStatus(note.id, false)}>NO</button>
      <button className="delete-btn" onClick={() => deleteNote(note.id)}>Delete</button>
    </li>
  );
}
export default NoteItem;