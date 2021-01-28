// Создаем переменную 
const fixedBlock = document.querySelector('.filters-price');
const filters = document.querySelector('.filters');
const container = document.querySelector('.container');
const offsetLeft = container.offsetLeft + 15;
const filtersOffsetTop = filters.offsetTop;
const smallOfset = 20;
const filtersWitch = filters.offsetWidth;

const fixedScrollBlock = () => {
    // Получаем число скрола 
    let scrollDistance = window.scrollY;
    // Пишем условие что если расстояние(число) скролла больше чем граница продукта(filtersOffsetTop) сверху то
    // && и когда scrollDistance будет меньше или равен filtersOffsetHeight тоесть высоте filters + плюсуем отступ от начала сайта который мы хотим сохранить
    if ((scrollDistance > (filtersOffsetTop - smallOfset)) && scrollDistance <= (filters.offsetHeight + filtersOffsetTop)) {
        // Добавляем отступ слева на расстояние отступа слева от контейнера, чтоб элемент не убежал влево на 0
        fixedBlock.style.left = `${offsetLeft}px`
        fixedBlock.style.width = `${filtersWitch}px`
        //Добавляем класс fixed для фиксации элемента
        fixedBlock.classList.add('fixed');
        fixedBlock.classList.remove('absolut');
    } else {
        fixedBlock.style.width = `100%`
        fixedBlock.style.left = `0px`;
        fixedBlock.classList.remove('fixed');
    }

    //Пишем еще одно условие котороем будет понимать что мы находимся в конце и тормозить наш блок
    if (scrollDistance >= (filtersOffsetTop - smallOfset) + filters.offsetHeight - fixedBlock.offsetHeight) {
        fixedBlock.style.width = `100%`
        fixedBlock.classList.add('absolut');
        fixedBlock.classList.remove('fixed');
        fixedBlock.style.left = `0px`;
    }
}

window.addEventListener('scroll', fixedScrollBlock);