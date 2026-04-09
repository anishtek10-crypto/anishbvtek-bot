import React, { useState } from "react";
function QuestionRow({ index,row,update,allQuestions,form,error }) {
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
            maxLength={50}
            onChange={(e) =>
              update(index, "answer", e.target.value)
            }
            style={{ flex: 1, height: "38px" }}
          />
          <div style = {{ fontSize:"12px",color:"#555"}}>{(row.answer || "").length}/50</div>
          <input
            type={show ? "text" : "password"}
            placeholder="Confirm"
            value={row.confirm || ""}
            maxLength={50}
            onChange={(e) =>
              update(index, "confirm", e.target.value)
            }
            style={{ flex: 1, height: "38px" }}
          />
          <div style = {{ fontSize:"12px",color:"#555"}}>{(row.confirm || "").length}/50</div>
          <button className="toggle-button"
            type="button"
            onClick={() => setShow(prev => !prev)}
            style={{
              height: "38px",
              padding: "0 12px",
              cursor: "pointer"
            }}
          >
            {show ? "Hide":"Show"}
          </button>
          {error && (
            <p style ={{color:"red",fontSize:"12px",marginTop:"5px"}}>{error}</p>
          )}
        </div>
      </div>
    </div>
  );
}
export default QuestionRow;