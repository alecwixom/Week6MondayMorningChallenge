let r = 0
function squareRoot (x) {
    r = (Math.sqrt(x) + 1) ** 2
    if (Number.isInteger(r)) {
        return r
    } else {
        let a = -1
        return a
    }
}
console.log(squareRoot(16))