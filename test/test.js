var assert = require("assert");


// Exemple :
// describe("Array", function () {
//     describe("#indexOf()", function () {
//         it("should return -1 when the value is not present", function () {
//         assert.equal([1, 2, 3].indexOf(4), -1);
//         });
//     });
// });


const Player = require("../Player");
const Cell = require('../Cell');
const Tray = require('../Tray');

describe('Player Class', function () {
    it('Player Constructor', function () {
        let p = new Player('nom');
        assert.equal(p.getNom(), 'nom');
        assert.equal(p.getScore(), 0);
        p.setScore(5);
        assert.equal(p.getScore(), 5);
    });
});