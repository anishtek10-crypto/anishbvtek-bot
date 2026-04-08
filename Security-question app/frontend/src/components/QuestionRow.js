import React, { useState } from "react";
function QuestionRow({ index, row, update, allQuestions, form }) {
  const [show, setShow] = useState(false);
  const selectedQuestions = form
    .map(f => Number(f.questionId))
    .filter(Boolean);
  return (
    <div style={{ marginBottom: "10px" }}>
      <select
        value={row.questionId || ""}
        onChange={(e) =>
          update(index, "questionId", Number(e.target.value))
        }
      >
        <option value="">Select Question</option>
        {allQuestions
          .filter(
            q =>
              !selectedQuestions.includes(q.id) ||
              q.id === Number(row.questionId)
          )
          .map(q => (
            <option key={q.id} value={q.id}>
              {q.text}
            </option>
          ))}
      </select>
      <div style={{ marginTop: "8px" }}>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <input
            type={show ? "text" : "password"}
            placeholder="Answer"
            value={row.answer || ""}
            onChange={(e) =>
              update(index, "answer", e.target.value)
            }
            style={{ flex: 1, height: "38px" }}
          />
          <input
            type={show ? "text" : "password"}
            placeholder="Confirm"
            value={row.confirm || ""}
            onChange={(e) =>
              update(index, "confirm", e.target.value)
            }
            style={{ flex: 1, height: "38px" }}
          />
          <button
            type="button"
            onClick={() => setShow(prev => !prev)}
            style={{
              height: "38px",
              padding: "0 12px",
              cursor: "pointer"
            }}
          >
            {show ? "Hide" : "Show"}
          </button>
        </div>
      </div>
    </div>
  );
}
export default QuestionRow;