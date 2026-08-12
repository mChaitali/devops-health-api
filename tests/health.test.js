const request = require("supertest");
const { app } = require("../src/app");

describe("GET /health", () => {
  test("returns a healthy response with the required contract", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("ok");
    expect(response.body.timestamp).toBeDefined();
    expect(Number.isNaN(Date.parse(response.body.timestamp))).toBe(false);
    expect(response.body.version).toBeDefined();
    expect(response.body.environment).toBeDefined();
  });

  test("returns 404 for an unsupported endpoint", async () => {
    const response = await request(app).get("/does-not-exist");

    expect(response.statusCode).toBe(404);
    expect(response.body.status).toBe("error");
    expect(response.body.error).toBe("Not Found");
  });
});
