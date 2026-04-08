const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const app = express();
app.use(cors());
app.use(express.json());
app.get("/questions", (req, res) => {
  const data = fs.readFileSync(
    path.join(__dirname, "data", "question.json")
  );
  const questions = JSON.parse(data);
  const result = questions.map((q) => q.text);
  res.send(result);
});
app.post("/answers", (req, res) => {
  const answers = req.body;
  const fileData = fs.readFileSync(
    path.join(__dirname, "data", "answer.json")
  );
  const existing = JSON.parse(fileData);
  const newData = answers.map((item) => ({
    id: Date.now() + Math.random(),
    question: item.question,
    answer: item.answer,
    createdAt: new Date(),
  }));
  const finalData = [...existing, ...newData];
  fs.writeFileSync(
    path.join(__dirname, "data", "answer.json"),
    JSON.stringify(finalData, null, 2)
  );
  res.send({ message: "data saved" });
});
app.listen(5000, () => {
  console.log("Server started on port 5000");
});