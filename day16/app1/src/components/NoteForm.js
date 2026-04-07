import { useState } from "react";
import { useNavigate } from "react-router-dom";
function NoteForm({ addNote }) {
  const [note, setNote] = useState({
    title: "",
    status: false,
    priority : 3
  });
  const [error, setError] = useState(""); 
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note.title.trim()) {
      setError("Note cannot be empty"); 
      return;
    }
    addNote(note);
    setNote({ title: "", status: false,priority:3});
    setError("");
    navigate("/"); 
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter note" value={note.title} onChange={(e) => {setNote({ ...note, title: e.target.value });setError("");}}/>
      <label>
        Done:
        <input type="checkbox" checked={note.status} onChange={(e) => setNote({ ...note, status: e.target.checked })}/>
      </label>
      <div className="priority-slider">
        <label>priority:{note.priority}</label>
        <input type="range" min = "1" max = "5"value={note.priority} onChange={(e) => setNote({ ...note, priority: Number(e.target.value)})}/>
      </div>
      <button>Add</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
export default NoteForm;