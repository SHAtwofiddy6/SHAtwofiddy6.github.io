
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('matrixCanvas');
    const context = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const katakana = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}';
    const letters = katakana.split('');
    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const rainDrops = [];
    for (let x = 0; x < columns; x++) {
        rainDrops[x] = 1;
    }

    const draw = () => {
        context.fillStyle = 'rgba(255, 255, 255, 0.95)'; // Very light shade of white
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.fillStyle = 'rgba(255, 255, 255, 0.2)'; // Extremely light shade for letters
        context.font = fontSize + 'px monospace';

        for (let i = 0; i < rainDrops.length; i++) {
            const text = letters[Math.floor(Math.random() * letters.length)];
            context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

            if (rainDrops[i] * fontSize > canvas.height and Math.random() > 0.975) {
                rainDrops[i] = 0;
            }
            rainDrops[i]++;
        }
    };

    setInterval(draw, 30);
});

window.onresize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};
    