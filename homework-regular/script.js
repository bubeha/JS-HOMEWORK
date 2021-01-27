//========================1================================
function haveNumber() {
    console.log(/\d/.test('Прив2т'));
    console.log(/\d/.test('Привет'));
}
haveNumber()



//========================2================================
function findTime(str) {
    console.log(str.match(/\b[0-2]?\d:[0-5]\d\b/mg));
}
findTime('Breakfast at 09:00 in the room 123:456')



//========================3================================
arr = ['City', 'Apps', 'Call', 'Grodno']

function ArrayFilter(arr) {
    console.log(arr.filter(arrayItem => !/^C/.test(arrayItem)));
}
ArrayFilter(arr);



//========================4================================
function includeAC() {
    console.log(/a.*c/.test('abcd'))
    console.log(/a.*c/.test('abd'));
}

includeAC();
