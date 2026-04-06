function NoteItem({ note, deleteNote, toggleStatus }) {
  return (
    <li>
      <span className={note.status ? "completed" : ""}>{note.title}</span>
      <button onClick={() => toggleStatus(note.id, true)}>YES</button>
      <button onClick={() => {
        const confirmAction = window.confirm("Are you sure you want to mark this as NOT completed?");
        if (confirmAction) {
          toggleStatus(note.id, false);
    }
  }}
>
  NO
</button>
      <button className="delete-btn" onClick={() =>{
        const confirmDelete = window.confirm("are you sure you want to DELETE this task");
        if (confirmDelete){
          deleteNote(note.id)}}}>Delete</button></li>);
        }
export default NoteItem;