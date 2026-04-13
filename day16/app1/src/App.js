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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    fetchNotes();
  }, []);
  const fetchNotes = async () => {
    setLoading(true);
    try {
      const res = await api.get("/notes");
      setNotes(res.data || []);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to load tasks");
    }
    setLoading(false);
  };
  const addNote = async (note) => {
    try {
      const newNote = {
        ...note,
        createdAt: new Date().toLocaleString("en-IN"),
      };
      await api.post("/notes", newNote);
      fetchNotes();
    } catch (err) {
      console.error(err);
      setError("Failed to add task");
    }
  };
  const deleteNote = async (id) => {
    try {
      await api.delete(`/notes/${id}`);
      fetchNotes(); 
    } catch (err) {
      console.error(err);
      setError("Failed to delete task");
    }
  };
  const toggleStatus = async (id, value) => {
    try {
      const note = notes.find((n) => n.id === id);
      if (!note) return;
      const res = await api.put(`/notes/${id}`, {
        ...note,
        status: value,
      });
      setNotes((prev) =>
        prev.map((n) => (n.id === id ? res.data : n))
      );
    } catch (err) {
      console.error(err);
      setError("Failed to update task");
    }
  };
  const filteredNotes = notes.filter((note) =>
    (note.title || "").toLowerCase().includes(search.toLowerCase())
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
                {error && <p style={{ color: "red" }}>{error}</p>}
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  <NoteList
                    notes={filteredNotes}
                    deleteNote={deleteNote}
                    toggleStatus={toggleStatus}
                  />
                )}
              </>
            }
          />
          <Route
            path="/add"
            element={<NoteForm addNote={addNote} />}
          />
        </Routes>
      </div>
    </Router>
  );
}
export default App;