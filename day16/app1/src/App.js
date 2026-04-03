import { useState, useEffect } from "react";
import api from "./api";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import "./App.css";
function App() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetchNotes();
  }, []);
  const fetchNotes = async () => {
    const res = await api.get("/notes");
    setNotes(res.data);
  };
  const addNote = async (note) => {
    const res = await api.post("/notes", note);
    setNotes(prev => [...prev, res.data]);
  };
  const deleteNote = async (id) => {
    await api.delete(`/notes/${id}`);
    setNotes(prev => prev.filter(n => n.id !== id));
  };
  const toggleStatus = async (id, value) => {
    const note = notes.find(n => n.id === id);
    const res = await api.put(`/notes/${id}`, {...note,status: value});
    setNotes(prev =>prev.map(n => n.id === id ? res.data : n));
  };
  return (
    <div className="app-container">
      <h1>Notes App</h1>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} toggleStatus={toggleStatus}/>
    </div>
  );
}
export default App;