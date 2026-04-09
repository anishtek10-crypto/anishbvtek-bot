import React,{ useEffect, useState } from "react";
import { getQuestions, sendAnswers } from "./api";
import QuestionRow from "./components/QuestionRow";
import "./form.css";
function App() {
  const [questions, setQuestions] = useState([]);
  const [errors,setErrors] = useState([]);
  const [success,setSuccess] = useState("");
  const [form, setForm] = useState([
    { questionId:"",answer:"",confirm:"" },
    { questionId:"",answer:"",confirm:"" },
    { questionId:"",answer:"",confirm:"" },
    { questionId:"",answer:"",confirm:"" },
    { questionId:"",answer:"",confirm:"" },
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
  let newErrors = [];
  for (let i = 0; i < form.length; i++) {
    const item = form[i];
    const question = questions.find(q => q.id === Number(item.questionId));
    if (!item.questionId || !item.answer || !item.confirm) {
      newErrors[i] = "All fields are required";
      continue;
    }
    if (item.answer !== item.confirm) {
      newErrors[i] = "Answers do not match";
      continue;
    }
     if (question?.type === "text" && /\d/.test(item.answer)) {
      newErrors[i] = "Only text allowed (no numbers)";
      continue;
    }
     if (question?.type === "number" && !/^\d+$/.test(item.answer)) {
      newErrors[i] = "Only numbers allowed";
      continue;
    }
  }
  setErrors(newErrors);
   if (newErrors.some(e => e)) return;
  await sendAnswers(form);
  setSuccess("Saved successfully");
  setForm([
    { questionId:"",answer:"",confirm:"" },
    { questionId:"",answer:"",confirm:"" },
    { questionId:"",answer:"",confirm:"" },
    { questionId:"",answer:"",confirm:"" },
    { questionId:"",answer:"",confirm:"" }
  ]);
  setTimeout(() => {
    setSuccess("");
  }, 3000);
}
const isValid = form.every(
  item=>
    item.questionId &&
    item.answer &&
    item.confirm &&
    item.answer === item.confirm
) && !errors.some(e=>e); 
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
          error={errors[i]}
        />
      ))}
      <button className="submit-button" onClick={handleSubmit} disabled={!isValid} style={{
        backgroundColor:isValid ? "#007bff" : "#ccc",
        cursor : isValid ? "pointer" : "not-allowed",
        opacity : isValid ? 1:0.7
      }}>Submit</button>
      {success && (
        <p style={{
          color:"green",
          marginTop:"10px",
          textAlign:"center",
          fontWeight:"500"
        }}>{success}</p>
      )}
    </div>
  );
}
export default App;