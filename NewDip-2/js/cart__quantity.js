class CartQuantity {
    render(count) {
        const htmlCatalogQuantity =
            `
        <span class="cart__quantity">${count}</span>
            `;

        const ROOT__QUANTITY = document.querySelector('.cart__text');

        const html =
            `
            <div class="cart__text">Корзина
                    ${htmlCatalogQuantity}
        </div>
    `;

        ROOT__QUANTITY.innerHTML = html;

        const cart = document.querySelector('.cart');
        count > 0 ? cart.classList.add('active') : cart.classList.remove('active')
    }
}

const cartQuantity = new CartQuantity();
// Нам вернеться массив товаров
const productsStore = localStorageUtils.getProducts();

cartQuantity.render(productsStore.length);


