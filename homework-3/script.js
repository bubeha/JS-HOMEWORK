// Пузырьковая сортировка: концепция 1

// создаем функцию bubbleSortConcept1 с двумя циклами
// для реализации такой концепции мы при каждом выполнений интеграции   
//уменьшаем "границу"(максимальное количество значений в массиве) на одну еденицу потому что мы уже знаем что этот элемент как 
//бы содержит отсортировочное значение(тоесть он уже стоит на своем месте)

function bubbleSortConcept1(arr) { // создаем функцию bubbleSortConcept1 с двумя циклами
    for (let j = arr.length - 1; j > 0; j--) {  // создаем цикл который будет после каждой проверки уменьшать наш массив на 1 значение тем самым убирать уже отсартировонное значение
        for (let i = 0; i < j; i++) {       // создаем еще один цикл при котором если сравниваемое значение больше или равно того с которым сравниваем мы передивагем сравниваемое значение за то с которым сравнили
            if (arr[i] > arr[i + 1]) {       //
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
}

// Пузырьковая сортировка: концепция 2

function bubbleSortConcept2(arr) {
    let swapped;

    do {
        swapped = false;
        console.log(arr);
        arr.forEach((item, index) => {
            if (item > arr[index + 1]) { // Проходим по всему массиву и сравниваем текущий элемент со следующим.
                let temp = item; // Если текущий элемент больше следующего, меняем их местами.
                arr[index] = arr[index + 1];
                arr[index + 1] = temp;
                swapped = true; // Если обмен произошел, проходим по массиву с начала.
            }
        })
    } while (swapped); // Мы знаем, что массив отсортирован, когда обменов уже не будет.
}





// Написать функцию fill, которая принимает в качестве параметров длину массива и любое значение.
// Функция должна вернуть новый массив с указанной длиной и все элементы должны быть указанным значением.

var newArray = [];
function fill(lengthArray, anyValue) {

    for (var i = 0; i < lengthArray; i++) {
        newArray.push(anyValue);
    }
    return newArray;
}

fill(9, 1);
console.log(newArray);


// Написать функцию reverse, которая принимает в качестве параметров массив и 
// возвращает новый, точно такой же, только с элементами в обратном порядке.

var reverseArray = [1, 2, 3, 4, 5];
function reverse(array) {
    var newReverseArray = [];
    for (var i = array.length - 1; i >= 0; i--) {
        newReverseArray.push(array[i]);
    }
    return newReverseArray;
}

console.log(reverse(reverseArray));

// Написать функцию compact, которая принимает в качестве параметров массив, 
// и возвращает новый, в котором нет значений false, undefined, пустых строк, нулей и null.

var compactArray = [1, false, 4, undefined, 6, null, false, 8];
function compact(array) {
    var newCompactArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i]) {
            newCompactArray.push(array[i]);
        }
        return newCompactArray;
    }
}
console.log(compact(compactArray));


// Написать функцию isEqual, которая принимает в качестве параметров два массива и проверяет их идентичность. 
// Напоминаю, что массивы - это ссылочные типы данных и простая проверка на равенство двух переменных не сработает. 

var arrayOne = [1, 2, 4, 5, 6];
var arrayTwo = [1, 2, 4, 5, 6];

function isEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        console.error("Длинна массива не идентична")
        return false;
    }
    for (var i = arr1.length; i--;) {
        if (arr1[i] !== arr2[i]) {
            console.error("Разные значения массива, массивы не идентичны")
            return false;
        }
    }
    console.log("Массивы идентичны");
    return true;
}
console.log(isEqual(arrayOne, arrayTwo));


// Написать функцию intersection, которая принимает в качестве параметров два массива, 
// и возвращает новый, который содержит элементы, встречающиеся в обоих массивах.

var arrayOne = [1, 2, 4, 7, 6];
var arrayTwo = [1, 3, 4, 5, 6];

function intersection(arr1, arr2) {
    newArray = [];
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[i]) {
                newArray.push(arr1[i]);
                break;
            }
        }
    }
    return newArray;
}

console.log(intersection(arrayOne, arrayTwo));


















