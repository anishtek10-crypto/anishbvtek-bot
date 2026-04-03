import { useState } from "react";
function NoteForm({ addNote }) {
  const [note, setNote] = useState({
    title: "",
    status: false
  });
  const [error, setError] = useState(""); 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note.title.trim()) {
      setError("Note cannot be empty"); 
      return;
    }
    addNote(note);
    setNote({ title: "", status: false });
    setError(""); 
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter note" value={note.title} onChange={(e) => {setNote({ ...note, title: e.target.value });setError("");}}/>
      <label>
        Done:
        <input type="checkbox" checked={note.status} onChange={(e) => setNote({ ...note, status: e.target.checked })}/>
      </label>
      <button>Add</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
export default NoteForm;