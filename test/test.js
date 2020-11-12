const assert = require("assert");


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

/* =================================== TEST CLASS PLAYER ========================================= */

describe('Player Class', function() {
    it('Player Constructor', function() {
        let p = new Player('nom');
        assert.strictEqual(p.getNom(), 'nom');
        assert.strictEqual(p.getScore(), 0);
        p.setScore(5);
        assert.strictEqual(p.getScore(), 5);
    });
});

/* =================================== TEST CLASS CELL ========================================= */

describe('Cell Class', function() {
    it('Cell Constructor', function() {
        let c = new Cell(3, true);
        assert.strictEqual(c.getValue(), 3);
        assert.strictEqual(c.getIsEnabled(), true);
        c.setIsEnabled(false);
        assert.strictEqual(c.getIsEnabled(), false);
    });
});

/* =================================== TEST CLASS CHRONO ========================================= */

describe('Chrono Class', function() {
    it('Chrono Constructor', function() {
        let ch = new Chrono(4, 15);
        assert.strictEqual(ch.getTime(), 4);
        assert.strictEqual(ch.getSubScore(), 15);
        assert.strictEqual(ch.getCurrentTime(), 0);
        ch.setSubScore(3);
        ch.setCurrentTime(5);
        assert.strictEqual(ch.getSubScore(), 3);
        assert.strictEqual(ch.getCurrentTime(), 5);
    });

    it('Function ChronoStart', function() {
        let ch2 = new Chrono(4, 15);
        ch2.ChronoStart();
    });
});

/* =================================== TEST CLASS GAME ========================================= */

describe('Game Class', function() {
    it('Game Constructor', function() {
        let cp = new Player('test');
        let cp2 = new Player('test2');
        let chg = new Chrono(2, 8);
        let g = new Game(1, cp, "verticale", chg);
        assert.strictEqual(g.getCountTurn(), 1);
        assert.strictEqual(g.getCurrentPlayer(), cp);
        assert.strictEqual(g.getMode(), "verticale");
        assert.strictEqual(g.getChrono(), chg);
        assert.strictEqual(g.getPlayer(), cp);
        assert.strictEqual(g.getPlayer2(), cp2);
        g.setCountTurn(2);
        g.setCurrentPlayer(cp2);
        g.setMode("horizontale");
        assert.strictEqual(g.getCountTurn(), 2);
        assert.strictEqual(g.getCurrentPlayer(), cp2);
        assert.strictEqual(g.getMode(), "horizontale");
    });

    it('Function ChangePlayer', function() {
        let cp = new Player('test');
        let cp2 = new Player('test2');
        let chg = new Chrono(2, 8);
        let g2 = new Game(1, cp, "verticale", chg, cp, cp2);
        g2.changePlayer(cp2);
        assert.strictEqual(g2.getCurrentPlayer(), cp2);
    });

    it('Function ChangeScore', function() {
        let cp = new Player('test');
        let chg = new Chrono(2, 8);
        let g2 = new Game(1, cp, "verticale", chg, cp, cp2);
        g2.changeScore(2);
        assert.strictEqual(g2.getCurrentPlayer().getScore(), 2);
    });

    it('Function ChangeTour', function() {
        let cp = new Player('test');
        let cp2 = new Player('test2');
        let chg = new Chrono(2, 8);
        let g2 = new Game(1, cp, "verticale", chg, cp, cp2);
        g2.changeTour(cp2);
        assert.strictEqual(g2.getMode(), "horizontale");
        assert.strictEqual(g2.getCurrentPlayer(), cp2);
        assert.strictEqual(g2.getCountTurn(), 2);
    });
});

/* =================================== TEST CLASS TRAY ========================================= */

describe('Tray Class', function() {
    it('Tray Constructor', function() {
        let t = new Tray(5);
        assert.strictEqual(t.getSize(), 5);
        t.setSize(6);
        assert.strictEqual(t.getSize(), 6);
    });
});

/* =================================== TEST CLASS TRAYFACTORY ========================================= */

describe('TrayFactory Class', function() {
    it('TrayFactory Constructor', function() {
        let tf1 = new Tray(1)
        let tf = new TrayFactory(tf1);
        assert.strictEqual(tf.getTray(), tf1);
    });
});