const cartProductsList = document.querySelector('.cart-content__list');
const ACTION = {
    PLUS: 'plus',
    MINUS: 'minus'
};

let price = 0;

// Удаление пробелов строки;
const priceWithoutSpaces = (str) => {
    return str.replace(/\s/g, '');
};

// Переводиться обратно из строки без пробелов в строку с пробелами которые определяються автоматически с помощью регулярок
const normalPrice = (str) => {
    return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};

const totalPriceWrapper = document.querySelector('.fullprice');

const setTotalPrice = (value) => {
    totalPriceWrapper.textContent = `${normalPrice(value)} BYN`;
    totalPriceWrapper.dataset.value = value;
};

const calculateSeparateItem = (productItem, action) => {
    const input = productItem.querySelector('.input');
    switch (action) {
        case ACTION.PLUS:
            input.value++
            setTotalPrice(Number(totalPriceWrapper.dataset.value) + Number(input.dataset.price));
            break;
        case ACTION.MINUS:
            setTotalPrice(Number(totalPriceWrapper.dataset.value) - Number(input.dataset.price));
            input.value--
            break;
    }

    getItemSubTotalPrice = (input) => Number(input.value) * Number(input.dataset.price);
    productItem.querySelector('.cart-product__ttlprice').textContent = `${getItemSubTotalPrice(input)} BYN`;
};

const init = () => {
    let price = 0;
    getItemSubTotalPrice = (input) => Number(input.value) * Number(input.dataset.price);
    [...document.querySelectorAll('.cart-content__item')].forEach((productItem) => {
        price += getItemSubTotalPrice(productItem.querySelector('.input'));

    });

    setTotalPrice(price);
}


cartProductsList.addEventListener('click', (e) => {
    if (e.target.classList.contains('minus')) {
        const input = e.target.closest('.cart-product').querySelector('.input')
        if (Number(input.value) !== 1) {
            calculateSeparateItem(
                e.target.closest('.cart-product'),
                ACTION.MINUS
            );
        }
    }
    if (e.target.classList.contains('plus')) {
        calculateSeparateItem(
            e.target.closest('.cart-product'),
            ACTION.PLUS
        );
    }
});