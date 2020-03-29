const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("ONG", () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    it("Should be able to create a new ONG", async () => {
        const response = await request(app).post("/ongs").send({
            name: "Yet Another NGO",
            email: "contato@blah.com",
            whatsapp: "99 99 99999-9999",
            city: "Campinas",
            uf: "SP"
        })
        console.log(response.body)
        expect(response.body).toHaveProperty("id")
        expect(response.body.id).toHaveLength(8);
    })

    afterAll(async () => {
        await connection.migrate.rollback();
        await connection.migrate.rollback();
        await connection.destroy();
    })
})