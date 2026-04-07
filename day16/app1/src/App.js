import {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import api from "./api";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import Navbar from "./components/Navbar";
import "./App.css";
function App() {
  const [notes, setNotes] = useState([]);
  const [search,setSearch] = useState("");
  useEffect(() => {
    fetchNotes();
  }, []);
  const fetchNotes = async () => {
    try {
      const res = await api.get("/notes");
      setNotes(res.data);
    } catch (err) {
      console.error("Error fetching notes:", err);
    }
  };
  const addNote = async (note) => {
    try {
      const newNote = { ...note, createdAt: new Date().toLocaleString() };
      await api.post("/notes", newNote);
      fetchNotes(); 
    } catch (err) {
      console.error("Error adding note:", err);
    }
  };
  const deleteNote = async (id) => {
    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((n) => n.id !== id)); 
    } catch (err) {
      console.error("Error deleting note:", err);
    }
  };
  const toggleStatus = async (id, value) => {
    try {
      const note = notes.find((n) => n.id === id);
      const res = await api.put(`/notes/${id}`, { ...note, status: value });
      setNotes((prev) => prev.map((n) => (n.id === id ? res.data : n)));
    } catch (err) {
      console.error("Error toggling status:", err);
    }
  };
  const filteredNotes = notes.filter((note)=>
    note.title.toLowerCase().includes(search.toLowerCase())
  );
  const totalTasks = filteredNotes.length;
  const completedTasks = filteredNotes.filter((n) => n.status).length;
  const pendingTasks = filteredNotes.filter((n)=>!n.status).length;
  const highPriorityTasks = filteredNotes.filter((n)=>n.priority>=4).length;
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
                  type="text"
                  placeholder="Search task"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="search-input"
                />
                <div className="dashboard">
                  <div className="card total">Total: {totalTasks}</div>
                  <div className="card completed">Completed: {completedTasks}</div>
                  <div className="card pending">Pending: {pendingTasks}</div>
                  <div className="card high">High: {highPriorityTasks}</div>
                </div>
                <NoteList
                  notes={filteredNotes}
                  deleteNote={deleteNote}
                  toggleStatus={toggleStatus}
                />
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