const URL = "http://localhost:5000";
export async function getQuestions() {
  const response = await fetch(URL + "/questions");
  return response.json();
}
export async function sendAnswers(data) {
  const response = await fetch(URL + "/answers", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
}