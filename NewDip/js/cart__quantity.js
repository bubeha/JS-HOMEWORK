class CartQuantity {
    render() {
        const htmlCatalogQuantity =
            `
        <span class="cart__quantity">${cartPage.count}</span>
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
        cartPage.count > 0 ? cart.classList.add('active') : cart.classList.remove('active')
    }
}

const cartQuantity = new CartQuantity();

cartQuantity.render();


