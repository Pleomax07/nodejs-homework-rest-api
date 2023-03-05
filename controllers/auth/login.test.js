const express = require("express");
const request = require("supertest");
const mongoose = require("mongoose");
jest.setTimeout(15000)
const login = require("./login");

mongoose.set("strictQuery", false);
const { DB_HOST } = process.env;

const app = express();

app.post("/login", login);

describe("test register controller", () => {
  beforeAll(() => app.listen(3000));
  mongoose.connect(DB_HOST)

  //   beforeAll(() => {
  //     app.listen(3000, () => {
  //         console.log("Server running. Use our API on port: 3000");
  //       });
  //     mongoose
  //     console.log()
  //       .connect(process.env.DB_HOST)
  //       .then(() => {
  //         console.log("Database connection successful");
  //       })
  //       .catch((error) => {
  //         console.log(error.message);
  //       });
  //   });
  //   afterAll(() => {
  //     mongoose.connection.close();
  //   });

  test("login test", async () => {
    const user = { email: "123w456@123.ua", password: "12345678" };
    const response = await request(app).post("/login").send(user);
    console.log(response)
    expect(response.status).toBe(200);
  });
});
