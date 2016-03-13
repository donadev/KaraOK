var request = require('supertest');
var assert = require("assert");
describe("GameController", () => {
    describe("#beginMatch()", () => {
        it("should return the opponent", (done) => {
            request(sails.hooks.http.app)
                .post("/game/beginMatch/")
                .expect("Content-Type", "application/json; charset=utf-8")
                .expect((res) => {
                        let body = res.body;
                        assert.ok(body.id);
                        assert.ok(body.username);
                        assert.ok(body.createdAt);
                        assert.ok(body.updatedAt);
                        return body.id && body.username && body.createdAt && body.updatedAt;
                })
                .expect(200, done);
        });
    });
});
