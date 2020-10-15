class TrayFactory
{
    generateTray() {
        
    }

    generateNumber(min = -10, max = 15) {
        return Math.random() * (max - min) + min;
    }
}