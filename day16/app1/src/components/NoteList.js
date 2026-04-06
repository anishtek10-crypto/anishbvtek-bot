function NoteList({ notes, deleteNote, toggleStatus }) {
  const sortedNotes = [...notes].sort((a, b) =>
    a.title.toLowerCase().localeCompare(b.title.toLowerCase())
  );
  return (
    <table className="task-table">
      <thead>
        <tr>
          <th>Task</th>
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
              <button
                className="status-btn"
                onClick={() => toggleStatus(note.id, !note.status)}
              >
                {note.status ? "Yes" : "No"}
              </button>
            </td>
            <td>{note.createdAt}</td>
            <td>
              <button
                className="delete-btn"
                onClick={() => deleteNote(note.id)}
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