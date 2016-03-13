var request = require('supertest');
var assert = require("assert");
describe("GameController", () => {
    describe("#beginMatch()", () => {
        it("should return the opponent", (done) => {
            request(sails.hooks.http.app)
                .post("/game/beginMatch/")
                .set("sails.sid", "sdfsd")
                .expect("Content-Type", "application/json; charset=utf-8")
                .expect((res) => {
                        let body = res.body;
                        assert.ok(body.success);
                        assert.notEqual(body.opponent, {});
                        assert.ok(body.opponent);
                        return body.success && body.opponent;
                })
                .expect(200, done);
        });
    });
});
