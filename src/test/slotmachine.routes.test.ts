import { startServer } from "../app";
import request from "supertest";

let server: any;

beforeAll(async () => {
  server = await startServer();
});

afterAll(async () => {
  await new Promise<void>((resolve) => {
    server.close(() => {
      resolve();
    });
  });
});

describe("Slot Machine API", () => {
  const sessionId = Math.random().toString(36).substring(7);

  describe("GET /api/slot-machine/:sessionId", () => {
    it("should return a 404 error for a non-existent session", async () => {
      const response = await request(server).get(
        `/api/slot-machine/${sessionId}`
      );

      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty("data", null);
    });
  });

  describe("POST /api/slot-machine/roll", () => {
    it("should create a new session", async () => {
      const response = await request(server)
        .post("/api/slot-machine/roll")
        .send({ sessionId });

      expect(response.status).toBe(200);
      expect(response.body.data).toHaveProperty("symbols");
      expect(response.body.data).toHaveProperty("updatedCredit");
    });
  });

  describe("DELETE /api/slot-machine/cashout", () => {
    it("should cash out and delete the session", async () => {
      const response = await request(server)
        .delete("/api/slot-machine/cashout")
        .send({ sessionId });

      expect(response.status).toBe(200);
      expect(response.body.data).toHaveProperty("sessionId", sessionId);
    });
  });
});
