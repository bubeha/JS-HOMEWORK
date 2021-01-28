class Cart {
    products = [];

    constructor() {
        const ids = localStorageUtils.getProducts();

        if (Array.isArray(ids) && ids.length > 0) {
            const products = CATALOG.filter(item => ids.includes(item.id));

            this.products = products;
        }
    }

    get count() {
        return this.products.length;
    }

    toggleProduct(product) {
        const condition = this.products.some(item => item.id === product.id);

        if (condition) {
            this.products = this.products.filter((item) => item.id !== product.id);
        } else {
            this.products.push(product);
        }

        localStorageUtils.putProducts(product.id);

        // emit server
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 300);
        })
    }

    render() {

        const productsStore = localStorageUtils.getProducts();
        let htmlCatalog = '';

        this.products.forEach(({ id, name, price, imgLeft, }) => {
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
                                <button class="cart-product__delete" aria-label="Удалить товар"></button>
                            </article>
                        </li>
            `;
        });

        const ROOT__CART = document.getElementById('cart-content__list');

        ROOT__CART.innerHTML = htmlCatalog;
    }
}

const cartPage = new Cart();
cartPage.render();
