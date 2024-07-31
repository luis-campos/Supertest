import request from "supertest";
import { expect } from "chai";

const BASE_URL = "https://pokeapi.co/api/v2";

describe("get Pokemons", () => {
  it("should return a list of pokemons", async () => {
    const response = await request(BASE_URL).get("/pokemon/");

    expect(response.status).to.be.eq(200);
    expect(response.body.results.length).to.be.greaterThan(0);
  });

  it("should return a list of 10 pokemons", async () => {
    const response = await request(BASE_URL).get("/pokemon?limit=10");

    expect(response.status).to.be.eq(200);
    expect(response.body.results.length).to.be.eq(10);
  });

  it("should return a specific pokemon by name", async () => {
    const response = await request(BASE_URL).get("/pokemon/pikachu");


    expect(response.status).to.be.eq(200)
    expect(response.body.name).to.be.eq("pikachu");
  });

  it("should return a specific pokemon by id", async () => {
    const response = await request(BASE_URL).get("/pokemon/1");

    expect(response.status).to.be.eq(200)
    expect(response.body.name).to.be.eq("bulbasaur");
  });
  
});