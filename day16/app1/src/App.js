import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import api from "./api";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import Navbar from "./components/Navbar";
import "./App.css";
function App() {
  const [notes, setNotes] = useState([]);
  const [sortAsc, setSortAsc] = useState(true);
  useEffect(() => {
    fetchNotes();
  }, []);
  const fetchNotes = async () => {
    try {
      const res = await api.get("/notes");
      setNotes(res.data);
    } catch (err) {
      console.error("Failed to fetch notes:", err);
    }
  };
  const addNote = async (note) => {
    try {
      const newNote = { ...note, createdAt: new Date().toLocaleString() };
      await api.post("/notes", newNote);
      fetchNotes();
    } catch (err) {
      console.error("Failed to add note:", err);
    }
  };
  const deleteNote = async (id) => {
    try {
      await api.delete(`/notes/${id}`);
      fetchNotes();
    } catch (err) {
      console.error("Failed to delete note:", err);
    }
  };
  const toggleStatus = async (id, value) => {
    try {
      const note = notes.find((n) => n.id === id);
      const res = await api.put(`/notes/${id}`, { ...note, status: value });
      setNotes((prev) => prev.map((n) => (n.id === id ? res.data : n)));
    } catch (err) {
      console.error("Failed to update status:", err);
    }
  };
  const sortNotes = () => {
    const sorted = [...notes].sort((a, b) =>
      sortAsc ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text)
    );
    setNotes(sorted);
    setSortAsc(!sortAsc);
  };
  return (
    <Router>
      <Navbar sortNotes={sortNotes} sortAsc={sortAsc} />
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              <NoteList
                notes={notes}
                deleteNote={deleteNote}
                toggleStatus={toggleStatus}
              />
            }
          />
          <Route path="/add" element={<NoteForm addNote={addNote} />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;