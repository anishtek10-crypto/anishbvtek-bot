import { useState } from "react";
function NoteForm({ addNote }) {
  const [note, setNote] = useState({
    title: "",
    status: false
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note.title.trim()) return;
    addNote(note);
    setNote({ title: "", status: false });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter note" value={note.title} onChange={(e) =>setNote({ ...note, title: e.target.value })}/>
      <label>
        Done:
        <input type="checkbox" checked={note.status} onChange={(e)=> setNote({ ...note, status: e.target.checked })}/>
      </label>
      <button>Add</button>
    </form>
  );
}
export default NoteForm;