var assert = require("assert");
describe("Utils", () => {
    describe("#equalsIgnoreCase", () => {
        it("CIAO == ciao", () => {
            return assert.equal(true, Utils.equalsIgnoreCase("CIAO", "ciao"));
        });
        it("CIAsO != ciao", () => {
            return assert.equal(false, Utils.equalsIgnoreCase("CIAsO", "ciao"));
        });
        it("CIAO == CIAO", () => {
            return assert.equal(true, Utils.equalsIgnoreCase("CIAO", "CIAO"));
        });
        it("undefined != ciao", () => {
            return assert.equal(false, Utils.equalsIgnoreCase(null, "ciao"));
        });
        it("CIAO != undefined", () => {
            return assert.equal(false, Utils.equalsIgnoreCase("CIAO", null));
        });
    });
    describe("#findAction", () => {
        it("should return undefined", () => {
            assert.equal(null, Utils.findAction("../polcies/controllers/", "GameController", null, "beginMatch"));
        });
        it("should return a function", () => {
            assert.ok(Utils.findAction("../policies/controllers/", "GameController", "policy", "beginMatch"));
        });
        it("(gAme) should return a function", () => {
            assert.ok(Utils.findAction("../policies/controllers/", "gAme", "policy", "beginMatch"));
        });
        it("(game) should return a function", () => {
            assert.ok(Utils.findAction("../policies/controllers/", "game", "policy", "beginMatch"));
        });
    });
    describe("#endsWith", () => {
        it("parametro endsWith etro", () => {
            assert.ok(Utils.endsWith("parametro", "etro"));
        });
        it("undefined endsWith etro", () => {
            assert.equal(false, Utils.endsWith(null, "etro"));
        });
        it("parametro endsWith undefined", () => {
            assert.equal(false, Utils.endsWith("parametro", null));
        });
        it("parametro endsWith erto", () => {
            assert.equal(false, Utils.endsWith("parametro", "erto"));
        });
    });

});
