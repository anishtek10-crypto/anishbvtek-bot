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
    const newNote = {
      ...note,
      createdAt:new Date().toLocaleString(),
    };
    await api.post("/notes",newNote);
    fetchNotes();
  };
  const deleteNote = async (id) => {
    await api.delete(`/notes/${id}`);
    fetchNotes();
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