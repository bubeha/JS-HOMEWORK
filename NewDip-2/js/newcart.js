class Cart {

    render() {

        const productsStore = localStorageUtils.getProducts();
        let htmlCatalog = '';

        CATALOG.forEach(({ id, name, price, imgLeft, }) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                             <li class="cart-content__item">
                                <article class="cart-content__product cart-product">
                                    <img src="${imgLeft}" alt="macbook" class="cart-product__img">
                                    <div class="cart-product__text">
                                        <h3 class="cart-product__title">${name}</h3>
                                        <div class="cart-product__clarifying">
                                            <span class="cart-product__price">${price} BYN</span>
                                            <div class="cart-product__quantity">
                                                <button type="button" class="cart-product__minus minus">-</button>
                                                <input class="cart-product__value input" data-price="${price}" type="text" value='1'>
                                                <button type="button" class="cart-product__plus plus">-</button>
                                            </div>
                                            <div class="cart-product__ttlprice">${price} BYN</div>
                                        </div>
                                    </div>
                                    <button onclick="productsPage.handleSetLocationStorage(this, '${id}')" class="cart-product__delete" aria-label="Удалить товар"></button>
                                </article>
                            </li> 
                `;
            }
        });
        const html =
            `
        <ul class="cart-content__list" data-simplebar>
            ${htmlCatalog}
        </ul>
        `;
        const ROOT__CART = document.getElementById('cart-content__list');
        ROOT__CART.innerHTML = html;
    }
}

const cartPage = new Cart();
cartPage.render();






