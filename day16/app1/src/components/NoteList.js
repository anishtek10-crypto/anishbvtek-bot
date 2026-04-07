function NoteList({ notes, deleteNote, toggleStatus }) {
  const sortedNotes = [...notes].sort((a, b) =>
    a.title.toLowerCase().localeCompare(b.title.toLowerCase())
  );
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      deleteNote(id);
    }
  };
  const handleStatusToggle = (note) => {
    const action = note.status ? "mark as Pending" : "mark as Completed";
    if (window.confirm(`Are you sure you want to ${action}?`)) {
      toggleStatus(note.id, !note.status);
    }
  };
  return (
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
        {sortedNotes.map((note) => (
          <tr key={note.id} className={note.status ? "completed" : ""}>
            <td>{note.title}</td>
            <td>
              <span className={`priority p-${note.priority}`}>{note.priority}</span>
            </td>
            <td>
              <button
                className="status-button"
                onClick={() => handleStatusToggle(note)}
              >
                {note.status ? "Yes" : "No"}
              </button>
            </td>
            <td>{note.createdAt}</td>
            <td>
              <button
                className="delete-button"
                onClick={() => handleDelete(note.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default NoteList;