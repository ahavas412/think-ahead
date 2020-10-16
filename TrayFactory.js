class TrayFactory
{
    generateTray() {
        
    }

    generateNumber(min = -10, max = 15) {
        return Math.random() * (max - min) + min;
    }
}


try {
    module.exports = Player;
} catch {
    // Utile pour importer les classes à testé et ne pas crash en navigateur
}