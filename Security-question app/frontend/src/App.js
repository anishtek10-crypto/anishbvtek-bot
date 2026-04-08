import React,{ useEffect, useState } from "react";
import { getQuestions, sendAnswers } from "./api";
import QuestionRow from "./components/QuestionRow";
import "./form.css";
function App() {
  const [questions, setQuestions] = useState([]);
  const [form, setForm] = useState([
    { question:"",answer:"",confirm:"" },
    { question:"",answer:"",confirm:"" },
    { question:"",answer:"",confirm:"" },
    { question:"",answer:"",confirm:"" },
    { question:"",answer:"",confirm:"" },
  ]);
  useEffect(() => {
    loadQuestions();
  }, []);
  async function loadQuestions() {
    const data = await getQuestions();
    setQuestions(data);
  }
  function updateRow(index, type, value) {
    const copy = [...form];
    copy[index][type] = value;
    setForm(copy);
  }
  async function handleSubmit() {
    for (let item of form) {
      if (!item.question || !item.answer || !item.confirm) {
        alert("Fill all fields");
        return;
      }
      if (item.answer !== item.confirm) {
        alert("Answers do not match");
        return;
      }
    }
    await sendAnswers(form);
    alert("Saved successfully");
  }
  return (
    <div className="container">
      <h2>Security Questions</h2>
      {form.map((_, i) => (
        <QuestionRow
          key={i}
          index={i}
          form={form}
          row={form[i]}
          allQuestions={questions}
          update={updateRow}
        />
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
export default App;