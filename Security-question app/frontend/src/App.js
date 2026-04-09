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
  form.forEach((item, index) => {
    if (!item.questionId || !item.answer || !item.confirm) {
      newErrors[index] = "All fields are required";
    } else if (item.answer !== item.confirm) {
      newErrors[index] = "Answers do not match";
    }
  });
   if (newErrors.some((e) => e)) {
    setErrors(newErrors);
    return;
  }
   setErrors([]);
  await sendAnswers(form);
  setSuccess("Saved successfully "); 
  setForm([
    {questionId:"",answer:"",confirm:""},
    {questionId:"",answer:"",confirm:""},
    {questionId:"",answer:"",confirm:""},
    {questionId:"",answer:"",confirm:""},
    {questionId:"",answer:"",confirm:""}
  ]);
  setErrors([]);
  setTimeout(()=>{
    setSuccess("");
  },3000);
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