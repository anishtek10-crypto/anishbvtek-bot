function NoteList({ notes, deleteNote, toggleStatus }) {
 const sortedNotes = [...notes].sort((a,b)=>b.priority-a.priority);
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      deleteNote(id);
    }
  };
  const getPriorityLabel = (priority)=>{
    if(priority >= 4) return "HIGH";
    if(priority === 3) return "MEDIUM";
    return "LOW";
  };
  const getPriorityClass = (priority)=>{
    if(priority >= 4) return "high";
    if(priority === 3) return "medium";
    return "low";
  };

  const handleStatusToggle = (note) => {
    const action = note.status ? "mark as Pending" : "mark as Completed";
    if (window.confirm(`Are you sure you want to ${action}?`)) {
      toggleStatus(note.id, !note.status);
    }
  };
  return (
    <>      
    <div className="priority-legend">
        <span className="priority-badge high">HIGH</span>
        <span className="priority-badge medium">MEDIUM</span>
        <span className="priority-badge low">LOW</span>
      </div>
      <table className="task-table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedNotes.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No tasks found
              </td>
            </tr>
          ) : (
            sortedNotes.map((note) => (
              <tr key={note.id} className={note.status ? "completed" : ""}>
                <td>{note.title}</td>
                <td>
                  <span
                    className={`priority-badge ${getPriorityClass(note.priority)}`}
                  >
                    {getPriorityLabel(note.priority)}
                  </span>
                </td>
                <td className="status-cell">
                <button
                  className={`status-btn ${
                    note.status ? "completed" : "pending"
                  }`}
                  onClick={() => handleStatusToggle(note)}
                >
                  {note.status ? "Completed" : "Pending"}
                </button>
              </td>
              <td>{note.createdAt}</td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(note.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </>
);
}
export default NoteList;