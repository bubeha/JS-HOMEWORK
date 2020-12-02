// Задание номер 1
var str1 = "Привет как дела, как жизнь?"
var str2 = "как"


function search(str1, str2) {
    var count = 0;

    for (var i = 0; i < str1.length; i++) {
        var tempStr = str1.substr(i, str2.length);

        if (tempStr === str2) {
            count++;
        }
    }

    return count;
}

console.log(search(str1, str2))



// Задание номер 3

var strСheckIfEndsOne = "Привет как дела?"
var strСheckIfEndsTwo = "ла?"

function checkIfEnds(str1, str2) {
    return strOne.substring(str1.length - str2.length) === str2;
}
console.log(checkIfEnds(strСheckIfEndsOne, strСheckIfEndsTwo));


// Задание номер 4

var strCompareOne = "привет как дела?"

var strCompareTwo = "ПРИВЕТ КАК ДЕЛА?"

function compare(str) {
    return strCompareOne.toLocaleLowerCase === strCompareTwo.toLocaleLowerCase;
}

console.log(compare(strCompareOne, strCompareTwo));


// Задание номер 2
// var strSplit = "    Привет как дела что делаешь?       "

// function strip(str) {

// }

// console.log(strSplit.split(' ').join(' '));



var str = '   Привет как дела что делаешь?   ';
str = str.replace(/ +/g, ' ').trim();
console.log(str);

var str1 = "  Привет как дела что делаешь? "
var result = str1.trim()
console.log(result)

var str5 = '  Привет как дела что делаешь? ';
str5 = str5.substring(2, 30);
var length_of_str5 = str5.length
console.log(str5, length_of_str5);


var strStrip = "  Привет как дела что делаешь? ";

function strip(str) {
    var result = str;
    for (var i = 0; i < str.length; i++) {
        str[i] === " ";
        result = str.substring(++i);
    }
    return result;
}

console.log(strip(strStrip));