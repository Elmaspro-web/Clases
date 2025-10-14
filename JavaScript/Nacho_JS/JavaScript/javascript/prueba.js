

let n = 101;
const res = [];
for (let i = 0; i < 4; i++) {
    const root = Math.floor(Math.sqrt(n));
    res.push(root);
    n -= root * root;
    if (n === 0) break;
}
console.log(res)