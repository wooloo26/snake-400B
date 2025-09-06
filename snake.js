d = document
g = 9
r = () => Math.random() * g | 0
p = (points) => {
    do z = { x: r(), y: r() }
    while (points.some(t => t.x == z.x && t.y == z.y))
    return z
}
w = 1
s = [{ x: 1, y: 1 }]
m = { x: 1, y: 0 }
c = d.getElementById('g').getContext('2d')
n = () => f = p(s)
f = p(s)
e = (point) => c.fillRect(point.x * w, point.y * w, w, w)
setInterval(() => {
    h = { x: s[0].x + m.x, y: s[0].y + m.y }
    if ((h.x | h.y) < 0 || h.x >= g || h.y >= g || s.some(t => t.x == h.x && t.y == h.y))
        _
    s = [h, ...s]
    h.x == f.x && h.y == f.y ? n() : s.pop()
    c.clearRect(0, 0, 9, 9)
    c.fillStyle = 'red'
    e(f)
    c.fillStyle = 'blue'
    s.forEach(e)
}, 99)
d.onkeydown = e => {
    k = { ArrowUp: [0, -1], ArrowDown: [0, 1], ArrowLeft: [-1, 0], ArrowRight: [1, 0] }[e.key]
    if (k && (s.length < 2 || s[0].x + k[0] != s[1].x || s[0].y + k[1] != s[1].y))
        m = { x: k[0], y: k[1] }
}