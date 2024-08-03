
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('matrixCanvas');
    const context = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const rainDrops = Array(Math.floor(columns)).fill(1);

    const draw = () => {
        context.fillStyle = 'rgba(255, 255, 255, 0.95)';
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.fillStyle = '#0F0';
        context.font = fontSize + 'px monospace';
        for (let i = 0; i < rainDrops.length; i++) {
            const text = '$';
            context.fillText(text, i * fontSize, rainDrops[i] * fontSize);
            if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                rainDrops[i] = 0;
            }
            rainDrops[i]++;
        }
    };

    setInterval(draw, 50);
});

window.onresize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};
    