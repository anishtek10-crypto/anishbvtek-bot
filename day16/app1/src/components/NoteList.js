import NoteItem from "./NoteItem";
function NoteList({ notes, deleteNote, toggleStatus }) {
  const sortedNotes = [...notes].sort((a,b)=>a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
  return (
    <div className="notes-container">
      {sortedNotes.map(note=>(
        <NoteItem key={note.id} note={note} deleteNote={deleteNote} toggleStatus={toggleStatus}/>
      ))}
    </div>
  );
}
export default NoteList;