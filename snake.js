(() => {
    var d = document, r = Math.random, n = 20, s = 20, snake = [{ x: 10, y: 10 }], dir = { x: 1, y: 0 }, food, ctx = d.getElementById('game').getContext('2d'), respawn = () => food = { x: r() * n | 0, y: r() * n | 0 };
    respawn();


    setInterval(() => {
        let head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };
        if ((head.x | head.y) < 0 || head.x >= n || head.y >= n || snake.some(t => t.x == head.x && t.y == head.y))
            throw 1;

        snake.unshift(head);
        head.x == food.x && head.y == food.y ? respawn() : snake.pop();

        ctx.clearRect(0, 0, 400, 400);
        ctx.fillStyle = 'red';
        ctx.fillRect(food.x * s, food.y * s, s, s);
        ctx.fillStyle = 'green';
        snake.forEach((seg, i) => (ctx.globalAlpha = i ? .7 : 1, ctx.fillRect(seg.x * s, seg.y * s, s, s)));
        ctx.globalAlpha = 1;
    }, 120);

    d.onkeydown = e => {
        let k = { ArrowUp: [0, -1], ArrowDown: [0, 1], ArrowLeft: [-1, 0], ArrowRight: [1, 0] }[e.key];
        if (k && (snake.length < 2 || snake[0].x + k[0] != snake[1].x || snake[0].y + k[1] != snake[1].y))
            dir = { x: k[0], y: k[1] };
    };
})()



