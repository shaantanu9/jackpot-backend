import { app } from "../app";
import request from "supertest";

describe("Basic Test", () => {
  it("should return true", async () => {
    await request(app)
      .get("/")
      .expect(200)
      .then((response) => {
        expect(response.text).toEqual("Server is working!");
      });
  });
});
