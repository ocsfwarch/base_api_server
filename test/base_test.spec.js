/**
 * Defines the testing for the base case.
 *
 */
const { expect } = require("chai");
const supertest = require("supertest");
const app = require("../src/app");
const testStructure = {
  data: {
    title: "test title",
    description: "this is a test data structure",
    results: "SUCCESS",
  },
};

describe("GET /test", () => {
  it("responds with 200 and a test data structure", () => {
    return supertest(app).get("/test").expect(200, testStructure);
  });
});
