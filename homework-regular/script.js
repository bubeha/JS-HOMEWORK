//========================1================================
// function haveNumber() {
//     console.log(/\d/.test('Прив2т'));
//     console.log(/\d/.test('Привет'));
// }
// haveNumber()
function haveNumber(string) {
    const regex = /\d/;
    return result = regex.test(string);
}
console.log(haveNumber('Прив2т'));
console.log(haveNumber('Привет'));


//========================2================================
// function findTime(str) {
//     console.log(str.match(/\b[0-2]?\d:[0-5]\d\b/mg));
// }
// findTime('Breakfast at 09:00 in the room 123:456')
function findTime(string) {
    const rexeg = /\b[0-2]?\d:[0-5]\d\b/mg;
    return result = string.match(rexeg);
}
console.log(findTime('Breakfast at 09:00 in the room 123:456'));


//========================3================================
arr = ['City', 'Apps', 'Call', 'Grodno']
// function ArrayFilter(arr) {
//     console.log(arr.filter(arrayItem => !/^C/.test(arrayItem)));
// }
// ArrayFilter(arr);
function ArrayFilter(arr) {
    const rexeg = /^C/;
    return result = arr.filter(arrayItem => !rexeg.test(arrayItem));
}
console.log(ArrayFilter(arr));



//========================4================================
// function includeAC() {
//     console.log(/a.*c/.test('abcd'))
//     console.log(/a.*c/.test('abd'));
// }
// includeAC();
function includeAC(string) {
    const rexeg = /a.*c/;
    return result = rexeg.test(string);
}
console.log(includeAC('abcd'));
console.log(includeAC('abd'));
