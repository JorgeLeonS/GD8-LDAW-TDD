exports.sum = (a, b) => {
    return {x:a.x + b.x, y:a.y + b.y}
};

exports.sub = (a, b) => {
    return {x:a.x - b.x, y:a.y - b.y}
};

exports.scalar = (a, s) => {
    return {x:a.x*s, y:a.y*s}
};

exports.dot = (a, b) => {
    return (a.x*b.x)+(a.y*b.y)
};