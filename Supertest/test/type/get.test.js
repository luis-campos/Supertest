import request from "supertest";
import { expect } from "chai";

const BASE_URL = "https://pokeapi.co/api/v2";

describe("get Types", () => {
  it("should return a list of pokemons type", async () => {
    const response = await request(BASE_URL).get("/type/");

    expect(response.status).to.be.eq(200);
    expect(response.body.results.length).to.be.greaterThan(0);
    expect(response.body.results).to.be.a("array");
  });

  it("should return a specific type by name", async () => {
    const response = await request(BASE_URL).get("/type/flying");

    expect(response.status).to.be.eq(200);
    expect(response.body.name).to.be.a("string")
    expect(response.body.name).to.be.eq("flyin");
  });

  it("should return a specific type by id", async () => {
    const response = await request(BASE_URL).get("/type/5");

    expect(response.status).to.be.eq(200);
    expect(response.body.name).to.be.a("string")
    expect(response.body.name).to.be.eq("ground");
  });
});
