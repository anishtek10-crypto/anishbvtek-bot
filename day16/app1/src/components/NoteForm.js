import { useState } from "react";
import { useNavigate } from "react-router-dom";
function NoteForm({ addNote }) {
  const [note, setNote] = useState({
    title: "",
    status: false,
    priority: 1,
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note.title.trim()) {
      setError("Task cannot be empty");
      return;
    }
    if (note.title.length > 50) {
      setError("Maximum 50 characters allowed");
      return;
    }
    addNote(note);
    navigate("/");
  };
  const getCharClass = () => {
    if (note.title.length > 45) return "danger";
    if (note.title.length > 40) return "warning";
    return "";
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task"
        value={note.title}
        maxLength={50}
        onChange={(e) => {
          setNote({ ...note, title: e.target.value });
          setError("");
        }}
      />
      <p className={`char-count ${getCharClass()}`}>
        {note.title.length} / 50 characters
      </p>
      <label>
        Done:
        <input
          type="checkbox"
          checked={note.status}
          onChange={(e) =>
            setNote({ ...note, status: e.target.checked })
          }
        />
      </label>
      <label>Priority: {note.priority}</label>
      <input
        type="range"
        min="1"
        max="5"
        value={note.priority}
        onChange={(e) =>
          setNote({ ...note, priority: Number(e.target.value) })
        }
      />
      <button>Add Task</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
export default NoteForm;