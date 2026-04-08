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
  res.send(questions);
});
 app.post("/answers", (req, res) => {
  const answers = req.body;
  const fileData = fs.readFileSync(
    path.join(__dirname, "data", "answer.json")
  );
  const existing = JSON.parse(fileData);
  const newData = answers.map((item) => ({
    id: Date.now() + Math.random(),
    questionId: item.questionId,
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
if (process.env.NODE_ENV !== "test") {
  app.listen(5000, () => {
    console.log("Server started on port 5000");
  });
}
module.exports = app;
 