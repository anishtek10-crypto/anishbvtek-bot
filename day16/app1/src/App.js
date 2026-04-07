import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import api from "./api";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import Navbar from "./components/Navbar";
import "./App.css";
function App() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetchNotes();
  }, []);
  const fetchNotes = async () => {
    try {
      const res = await api.get("/notes");
      setNotes(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  const addNote = async (note) => {
    try {
      const newNote = {
        ...note,
        createdAt: new Date().toLocaleString(),
      };
      await api.post("/notes", newNote);
      fetchNotes();
    } catch (err) {
      console.error(err);
    }
  };
  const deleteNote = async (id) => {
    await api.delete(`/notes/${id}`);
    setNotes(notes.filter((n) => n.id !== id));
  };
  const toggleStatus = async (id, value) => {
    const note = notes.find((n) => n.id === id);
    const res = await api.put(`/notes/${id}`, {
      ...note,
      status: value,
    });
    setNotes(notes.map((n) => (n.id === id ? res.data : n)));
  };
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );
  const total = filteredNotes.length;
  const completed = filteredNotes.filter((n) => n.status).length;
  const pending = filteredNotes.filter((n) => !n.status).length;
  const high = filteredNotes.filter((n) => n.priority >= 4).length;
  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <input
                  className="search-input"
                  placeholder="Search task..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <div className="dashboard">
                  <div className="card">Total: {total}</div>
                  <div className="card green">Completed: {completed}</div>
                  <div className="card orange">Pending: {pending}</div>
                  <div className="card red">High Priority: {high}</div>
                </div>
                <NoteList
                  notes={filteredNotes}
                  deleteNote={deleteNote}
                  toggleStatus={toggleStatus}
                />
              </>
            }
          />
          <Route path="/add" element={<NoteForm addNote={addNote} />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;