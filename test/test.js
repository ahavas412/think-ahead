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
const Chrono = require('../Chrono');
const Game = require('../Game');
const Tray = require('../Tray');
const TrayFactory = require('../TrayFactory');

describe('Player Class', function() {
    it('Player Constructor', function() {
        let p = new Player('nom');
        assert.equal(p.getNom(), 'nom');
        assert.equal(p.getScore(), 0);
        p.setScore(5);
        assert.equal(p.getScore(), 5);
    });
});

/* =================================== TEST CLASS CELL ========================================= */

describe('Cell Class', function() {
    it('Cell Constructor', function() {
        let c = new Cell(3, true);
        assert.equal(c.getValue(), 3);
        assert.equal(c.getIsEnabled(), true);
        c.setIsEnabled(false);
        assert.equal(c.getIsEnabled(), false);
    });
});

/* =================================== TEST CLASS CHRONO ========================================= */

describe('Chrono Class', function() {
    it('Chrono Constructor', function() {
        let ch = new Chrono(4, 15);
        assert.equal(ch.getTime(), 4);
        assert.equal(ch.getSubScore(), 15);
        ch.setSubScore(3);
        assert.equal(ch.getSubScore(), 3);
    });
});

/* =================================== TEST CLASS GAME ========================================= */

describe('Game Class', function() {
    it('Game Constructor', function() {
        let cp = new Player('test');
        let cp2 = new Player('test2');
        let chg = new Chrono(2, 8);
        let g = new Game(1, cp, "verticale", chg);
        assert.equal(g.getCountTurn(), 1);
        assert.equal(g.getCurrentPlayer(), cp);
        assert.equal(g.getMode(), "verticale");
        assert.equal(g.getChrono(), chg);
        g.setCountTurn(2);
        g.setCurrentPlayer(cp2);
        g.setMode("horizontale");
        assert.equal(g.getCountTurn(), 2);
        assert.equal(g.getCurrentPlayer(), cp2);
        assert.equal(g.getMode(), "horizontale");
    });
});

/* =================================== TEST CLASS TRAY ========================================= */

describe('Tray Class', function() {
    it('Tray Constructor', function() {
        let p = new Player('test');
        let p2 = new Player('test2');
        let t = new Tray(p, p2, 5);
        assert.equal(t.getPlayer1(), p);
        assert.equal(t.getPlayer2(), p2);
        assert.equal(t.getSize(), 5);
        p.setSize(6);
        assert.equal(p.getSize(), 6);
    });
});

/* =================================== TEST CLASS TRAYFACTORY ========================================= */

describe('TrayFactory Class', function() {
    it('TrayFactory Constructor', function() {
        let pt = new Player('test');
        let pt2 = new Player('test2');
        let tf1 = new Tray(pt, pt2, 1)
        let tf = new TrayFactory();
        assert.equal(tf.getTray(), tf1);
    });
});