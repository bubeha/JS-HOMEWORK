// 1. Нужно связать item с li(создать новые li) у нас есть 3 картинки, должно появиться 3 li/ свяжем item(картинки) и li через setAttribute data-index


// Создаем переменную, находим все продукты
const products = document.querySelectorAll('.product');

// Создаем проверку если продукт существуем то тогда выполняем данный код
if (products) {
    // Проходим по всем элементам
    products.forEach(el => {
        let currentProduct = el;
        // Создаем переменную находим item
        const imageSwitchItems = currentProduct.querySelectorAll('.image-switch__item');
        // Создаем переменную находим pagination
        const imagePagination = currentProduct.querySelector('.image-pagination');
        //Добавим проверку на количество imageSwicthItems. если меньше одного то и функция не нужна
        if (imageSwitchItems.length > 1) {
            //Проходимся по всем items. Передаем el и index. index нужен что бы связать элементы
            imageSwitchItems.forEach((el, index) => {
                // Добавляем каждому image-switch__item  data-index: его индекс;
                el.setAttribute('data-index', index);
                // Создаем li в imagePagination и совмещаем их с data-index; += стоит для добавление li а не перезаписи!
                // При помощи шаблонной строки ${} пишем условие, что если Index равен 0 то мы добавим класс для ховера!
                imagePagination.innerHTML += `<li class="image-pagination__item ${index == 0 ? 'image-pagination__item--active' : ''}" data-index="${index}"></li>`;
                // Добавим обработчик событий по наведению мыши
                el.addEventListener('mouseenter', (e) => {
                    //Ищем все image-pagination__item, проходимся по каждому с помощью forEach и удаляем класс image-pagination__item--active при наведении
                    currentProduct.querySelectorAll('.image-pagination__item').forEach(el => { el.classList.remove('image-pagination__item--active') });
                    // Ищем все image-pagination__item, тем item и li у которых data-index равен дабавляем класс image-pagination__item--active
                    currentProduct.querySelector(`.image-pagination__item[data-index="${e.currentTarget.dataset.index}"]`).classList.add('image-pagination__item--active');
                });

                el.addEventListener('mouseleave', (e) => {
                    currentProduct.querySelectorAll('.image-pagination__item').forEach(el => { el.classList.remove('image-pagination__item--active') });
                    // пишем что у 0 data index должен появиться класс image-pagination__item--active когда мы уводим мыш 
                    currentProduct.querySelector(`.image-pagination__item[data-index="0"]`).classList.add('image-pagination__item--active');
                });
            });
        }
    });
}