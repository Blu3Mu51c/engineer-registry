const request = require("supertest");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const app = require("../app");
const Engineer = require("../models/engineer");

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

afterEach(async () => {
  await Engineer.deleteMany();
});

describe("Engineer API", () => {
  it("should create a new engineer", async () => {
    const res = await request(app).post("/api/engineers").send({
      name: "Alice",
      specialty: "Civil",
      yearsExperience: 5,
      available: true,
    });
    expect(res.status).toBe(201);
    expect(res.body.name).toBe("Alice");
  });

  it("should list all engineers", async () => {
    await Engineer.create({ name: "Bob", specialty: "Electrical" });
    const res = await request(app).get("/api/engineers");
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(1);
    expect(res.body[0].name).toBe("Bob");
  });

  it("should get one engineer by id", async () => {
    const eng = await Engineer.create({ name: "Charlie", specialty: "Mechanical" });
    const res = await request(app).get(`/api/engineers/${eng._id}`);
    expect(res.status).toBe(200);
    expect(res.body.name).toBe("Charlie");
  });

  it("should update an engineer", async () => {
    const eng = await Engineer.create({ name: "Dave", specialty: "Software" });
    const res = await request(app)
      .put(`/api/engineers/${eng._id}`)
      .send({ yearsExperience: 10 });
    expect(res.status).toBe(200);
    expect(res.body.yearsExperience).toBe(10);
  });

  it("should delete an engineer", async () => {
    const eng = await Engineer.create({ name: "Eve", specialty: "Civil" });
    const res = await request(app).delete(`/api/engineers/${eng._id}`);
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Engineer deleted");
  });
});
