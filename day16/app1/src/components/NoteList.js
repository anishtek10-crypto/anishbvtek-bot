function NoteList({ notes, deleteNote, toggleStatus }) {
  const sortedNotes = [...notes].sort((a, b) => b.priority - a.priority);
  return (
    <table className="task-table">
      <thead>
        <tr>
          <th>Task</th>
          <th>Priority</th>
          <th>Status</th>
          <th>Created</th>
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
            <tr key={note.id}>
              <td>{note.title}</td>
              <td>
                <span className={`priority p-${note.priority}`}>
                  {note.priority}
                </span>
              </td>
              <td>
                <button
                  className={note.status ? "status done" : "status pending"}
                  onClick={() => toggleStatus(note.id, !note.status)}
                >
                  {note.status ? "Completed" : "Pending"}
                </button>
              </td>
              <td>{note.createdAt}</td>
              <td>
                <button onClick={() => deleteNote(note.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
export default NoteList;