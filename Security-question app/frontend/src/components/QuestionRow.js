import React from "react";
function QuestionRow({ index, row, update, allQuestions, form }) {
  const selectedQuestions = form.map(f => f.question);
  return (
    <div style={{ marginBottom: "10px" }}>
            <select
        value={row.question}
        onChange={(e) => update(index, "question", e.target.value)}
      >
        <option value="">Select Question</option>
        {allQuestions
          .filter(q => !selectedQuestions.includes(q) || q === row.question)
          .map((q, i) => (
            <option key={i} value={q}>
              {q}
            </option>
          ))}
      </select>
      <input
        type="password"
        placeholder="Answer"
        value={row.answer}
        onChange={(e) => update(index, "answer", e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm"
        value={row.confirm}
        onChange={(e) => update(index, "confirm", e.target.value)}
      />
    </div>
  );
}
export default QuestionRow;