//Создаем класс LocalStorageUtils
class LocalStorageUtils {
    // У элементов есть ключ которы будет использоваться нескошлько раз, поэтому при помощи constructor выносим его в свойство 
    constructor() {
        this.keyName = 'products';
    }
    // Записываем 2 метода позволяющие получить все продукты которые находяться в локальном хранилище 
    getProducts() {
        // Для получения из локального хранилища вызываем метод localStorage.getItem
        // Если есть какое то значение в localStorage то вернеться строка, иначе null для этого делаем проверку
        const productsLocalStorage = localStorage.getItem(this.keyName);
        // Если не null то переводим строку в массив 
        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage);
        }
        // Иначе возвращаем пустой массив
        return [];
    }
    // Для добавление какого либо нового продукта в локальное хранилище при помощи Id
    putProducts(id) {
        // 1. Нужно посмотреть что вообще было в локальном хранилище и добавить новый ид (Для того чтоб посмотреть все продукты у нас есть getProducts)
        // Создаем новую переменную
        let products = this.getProducts(price);
        let pushProduct = false;
        // При обновлении страницы у нас еще раз добавляються id/ Поэтому мы пишем проверку, если данный ид уже добавлен в хранилище то мы удалим
        const index = products.indexOf(id);
        if (index === -1) {
            // Пушим новый ид который нам передался в массив products
            products.push(id);
            pushProduct = true;
        } else {
            // При помощи splice удаляем повторяющийся индекс из массива
            products.splice(index, 1)
        }

        // Устанавливаем в локальное хранилище/ указываем ключи(куда мы хотим установить, и что мы хотим установить)
        // Мы неможем указать что хотим установить products потому что это массив, а локально хранилище принимает только строку
        // Поэтому используем JSON.stringify
        localStorage.setItem(this.keyName, JSON.stringify(products));

        return { pushProduct, products }
    }
}
// Для того чтоб использовать класс делаем экземпляр класса LocalStorageUtils
const localStorageUtils = new LocalStorageUtils();


