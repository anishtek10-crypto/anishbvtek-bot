import { useState } from "react";
import { useNavigate } from "react-router-dom";
function NoteForm({ addNote }) {
  const [note, setNote] = useState({
    title: "",
    status: false,
    priority : 0
  });
  const [error, setError] = useState(""); 
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note.title.trim()) {
      setError("Note cannot be empty"); 
      return;
    }
    if(note.title.length>50){
      setError("Task cannot have more than 50 characters");
      return;
    }
    addNote({...note,status:false});
    setNote({ title: "", status: false,priority:0});
    setError("");
    navigate("/"); 
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter task" value={note.title} maxLength={50} onChange={(e) => {setNote({ ...note, title: e.target.value });setError("");}}/>
      <p className={`char-count ${note.title.length>40 && note.title.length <=45 ? "warning":""}${note.title.length > 45 ? "danger" : ""}`}>{note.title.length} / 50 characters</p>
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