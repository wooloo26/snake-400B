c = document.getElementById`g`.getContext`2d`
s = [{ x: 1, y: 1 }]
m = [1, 0]
r = _ => Math.random() * 9 | 0
b = (points, targetPoint) => points.some(point => point.x == targetPoint.x & point.y == targetPoint.y)
p = points => { while (b(points, z = { x: r(), y: r() })); return z }
n = _ => f = p(s)
f = p(s)
e = (point) => c.fillRect(point.x, point.y, 1, 1)
setInterval(_ => {
    h = { x: s[0].x + m[0], y: s[0].y + m[1] }
    if ((h.x | h.y) < 0 | h.x > 8 | h.y > 8 | b(s, h)) v
    s = [h, ...s]
    h.x == f.x & h.y == f.y ? n() : s.pop()
    c.clearRect(0, 0, 9, 9)
    c.fillStyle = 'red'
    e(f)
    c.fillStyle = 'blue'
    s.map(e)
}, 99)
onkeydown = e => (k = { ArrowUp: [0, -1], ArrowDown: [0, 1], ArrowLeft: [-1, 0], ArrowRight: [1, 0] }[e.key]) && (s[1] ? s[0].x + k[0] != s[1].x | s[0].y + k[1] != s[1].y : 1) && (m = k)