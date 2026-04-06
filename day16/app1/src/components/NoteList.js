import NoteItem from "./NoteItem";
function NoteList({ notes, deleteNote, toggleStatus }) {
  const sortedNotes = [...notes].sort((a,b)=>a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
  return (
    <ul>
      {sortedNotes.map(note=>(
        <NoteItem key={note.id} note={note} deleteNote={deleteNote} toggleStatus={toggleStatus}/>))}
    </ul>
  );
}
export default NoteList;