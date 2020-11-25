var a = [1, 2];
var b = [3, 5];

function findLong(a, b) {
    var long = ((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2) ** (1 / 2);
    return long;
}

console.log(findLong(a, b));
