// Получаем все наши кнопки 
const button = document.querySelectorAll("button");
// Получаем наш экранн
const screen = document.querySelector(".calculator__screen");
// Получаем 2 экран который выше
const subScreen = document.querySelector(".calculator__subscreen");
// Максимальное количество чисел на экране
const MAX_SCREEN_LENGTH = 16;
// Пишем что Атрибут равен С для сокращения и понимания в коде 
const CLEAR_VALUE = "C";
// Пишем что Атрибут равен точка для сокращения и понимания в коде 
const DOT_OPERATOR = ".";
const EQUALS_OPERATOR = "=";
// Создаем констранту со всеми нашему операторами
const PLUS_OPERATOR = "+";
const MINUS_OPERATOR = "-";
const MULTIPLY_OPERATOR = "*";
const DIVIDE_OPERATOR = "/";
const OPERATORS = [PLUS_OPERATOR, MINUS_OPERATOR, MULTIPLY_OPERATOR, DIVIDE_OPERATOR];


// Обьявляем новую функцию для сокращеия кода! 
function addTextToScreens(text) {
    // Получаем текущую кнопку на которую мы нажали
    // Пришем что хотим на экране видеть то что занесено в value
    screen.textContent += text;
    // // но у нас сейчас вводиться только одно число на экран, 
    // а надо чтоб вводились все друг за другом поэтому добавляем += 
    subScreen.textContent += text;
}

// Создаем две переменные левую все что до + права все что после 
let left;
let right;
// заводим переменную последнего оператора 
let lastOperator;
//Проходмся по всем кнопкам при помощи forEach
button.forEach(button => {
    //Пишем что при нажатии кнопки мы хотим получить эту же кнопку на экране
    button.addEventListener("click", () => {
        // Ограничиваем число символов на экране до 16 
        if (screen.textContent.length > MAX_SCREEN_LENGTH) {
            return;
        }
        // получаем валью один раз чтоб потом записывать константу 
        // везде и не дублировать, после меняем все ифы 
        const buttonValue = button.getAttribute("value")
        const isLastOperator = OPERATORS.includes(subScreen.textContent.slice(-1));
        if (buttonValue) {
            // Добавили кнопку С 
            if (buttonValue === CLEAR_VALUE) {
                screen.textContent = "";
                subScreen.textContent = "";

                // Очищаем переменные которые связаны с текущими операциями
                left = undefined;
                right = undefined;
                lastOperator = undefined;

                return;
            }

            if (lastOperator === EQUALS_OPERATOR) {
                screen.textContent = buttonValue;
                subScreen.textContent += buttonValue;
                lastOperator = undefined;

                return;
            }

            // если есть какое то значение слева то мы 
            // присваеваем нашему главному экрану buttonValue(тоесть ту цифру что мы ввели)
            if (left !== undefined

                // Проверяем является ли последний символ оператором
                // Для этого созадем массив с оператарами и проверяем находиться ли этот оператор в массиве
                && isLastOperator) {
                screen.textContent = buttonValue;
                subScreen.textContent += buttonValue;

                return;
            }
            // Сократили благодаря function addTextToScreens
            addTextToScreens(buttonValue);
        }

        // делаем тоже самое что и с вэлью сокращаем 
        const buttonOperator = button.getAttribute("operator");
        // Добавили точку
        if (buttonOperator) {
            // Проверяем что точка это точка
            if (buttonOperator === DOT_OPERATOR) {
                // Точку нельзя поставить первой, перед ней должна быть цифра
                if (!screen.textContent.includes(DOT_OPERATOR)
                    // Точка должна быть одна
                    && screen.textContent.length !== 0) {
                    addTextToScreens(buttonOperator);

                }
                return;
            }
            // При помощи метода slice удаляем последний символ(тоесть точку) из строки указав конечный индекс на еденицу меньше длинны строки для верхнего экрана
            if (subScreen.textContent.slice(-1) === ".") {
                subScreen.textContent = subScreen.textContent.slice(0, subScreen.textContent.length - 1)
            }
            // для нижнего экрана
            if (screen.textContent.slice(-1) === ".") {
                screen.textContent = screen.textContent.slice(0, screen.textContent.length - 1)
            }
            // Делаем так чтоб при нажатии на + не сумировалло числа каждый раз а плюс можно было нажать только дин раз
            // || Предотвращаем ввод оператора первым
            if (isLastOperator || subScreen.textContent.length === 0 ||
                (left === undefined && buttonOperator === EQUALS_OPERATOR)) {
                return;
            }

            // нужно сделать так чтоб если жмем 1+2 и жмем еще один раз + то выводило результат 1+2 
            // если у нас с лева есть значение то мы записываем вправо то что у нас в главном скрине 
            if (left !== undefined) {
                right = +screen.textContent

                switch (lastOperator) {
                    case PLUS_OPERATOR:
                        screen.textContent = left + right;
                        break;
                    case MINUS_OPERATOR:
                        screen.textContent = left - right;
                        break;
                    case MULTIPLY_OPERATOR:
                        screen.textContent = left * right;
                        break;
                    case DIVIDE_OPERATOR:
                        screen.textContent = left / right;
                        break;
                    default:
                        return;
                }


                // Пишем для кнопки = 
                if (buttonOperator === EQUALS_OPERATOR) {
                    subScreen.textContent = "";

                    left = undefined;
                    right = undefined;
                    lastOperator = buttonOperator;

                    return;
                }

            }
            //Пишем что лево это то что на экране слева и скрин текст 
            //контент переводим из строки в чилсо при помощи + перед скриномА
            left = +screen.textContent;
            lastOperator = buttonOperator;
            // Добавили плюс на верхний экран
            subScreen.textContent += buttonOperator;
        }
    })
});





// если точка стоит последним символом то при нажатии на оператор она должна проподать если мы вводим оператор 
