const request = require("supertest");
const app = require("../server"); 
describe("GET /questions", () => {
  it("should return status 200", async () => {
    const res = await request(app).get("/questions");
    expect(res.statusCode).toBe(200);
  });
  it("should return an array", async () => {
    const res = await request(app).get("/questions");
    expect(Array.isArray(res.body)).toBe(true);
  });
  it("each question should have id", async () => {
    const res = await request(app).get("/questions");
    expect(res.body[0]).toHaveProperty("id");
  });
  it("each question should have text", async () => {
    const res = await request(app).get("/questions");
    expect(res.body[0]).toHaveProperty("text");
  });
});
describe("POST /answers", () => {
  it("should save answers and return success message", async () => {
    const res = await request(app)
      .post("/answers")
      .send([
        {
          questionId: 1,
          answer: "test-answer"
        }
      ]);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message");
  });
});
 
 
