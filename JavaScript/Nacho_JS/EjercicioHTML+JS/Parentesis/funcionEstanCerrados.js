

export function estanCerrados(array) {

    const stack = [];
    const pares = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let char of array) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else if (char in pares) {
            if (stack.pop() !== pares[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(estanCerrados("()(){[}]{}"));