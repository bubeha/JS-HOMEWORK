/**
 *
 * Дан массив people с объектами, которые содерержат в себе имя и работу человека.
 *
 * - Добавить <h1> элемент на страницу для каждого из имени человека 
 * - Добавить <h2> элемент на страницу для каждой из работ человека
 *
 * Весь HTML должен идти в <div> с id="content"
 *
 * <div id="content">
 *      <h1>{Имя}</h1>
 *      <h2>{Работа}</h2>
 *      .....
 * </div>
 */
function exerciseOne(arrayOfPeople) {
  const content = document.querySelector("#content");
  people.forEach(people => {
    const name = document.createElement('h1'),
      job = document.createElement('h2');
    name.textContent = people.name;
    job.textContent = people.job;
    content.appendChild(name);
    content.appendChild(job);
    document.body.appendChild(content)
  })
}

/**
 *
 * Создайте список покупок. Используйте unordered list.
 *
 * Весь HTML должен идти в <div> с id="content"
 *
 */
function exerciseTwo(shopping) {
  const shoppingList = document.createElement('ul');
  const content = document.querySelector("#content");
  content.appendChild(shoppingList);
  shopping.forEach(item => {
    shoppingListItem = document.createElement('li');
    shoppingListItem.textContent = item;
    shoppingList.appendChild(shoppingListItem);
    document.body.appendChild(content)
  })
}

/**
    Дан массив с книгами
    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];
    Пройдитесь по массиву.
    - Для каждой книги создайте <p> элемент с названием книги и ее автором и добавьте на страницу.
    - Используйте <ul> и <li> для отображения книг.
    - Добавьте <img> для каждой книги с ее обложкой.
    - Измените стиль книги в зависимости от того прочитана она (зеленый) или нет (красный).
**/

function exerciseThree(books) {
  // создали список для всех книг
  const booksList = document.createElement('ul');
  // нашли див по айди где будет храниться список книг
  const content = document.querySelector("#content");
  // Добавили список книг в див
  content.appendChild(booksList);
  // Через функцию forEach проходимся по всем объектам
  books.forEach(item => {
    // Создаем блок li для каждой книги
    const booksListItem = document.createElement('li');
    // Добавляем блок li в блок ul
    booksList.appendChild(booksListItem);
    // Создаем блок p в котором будем хранить название книги и имя автора
    const booksInf = document.createElement('p');
    // Добавляем блок p в li
    booksListItem.appendChild(booksInf);
    // Создаем для блока p блок h1 где будем хранить название книги
    const booksTitle = document.createElement('h1');
    // Добавляем в блок p title h1 с названием книги 
    booksInf.appendChild(booksTitle);
    // Указываем что h1 = title в объекте(тоесть в h1 будет отображаться имя обьекта(книги))
    booksTitle.textContent = item.title;
    // Создаем для блока p блок h3 где будем хранить имя автора книги
    const booksAuthor = document.createElement('h3');
    // Добавляем в блок p author h3 с именами авторов
    booksInf.appendChild(booksAuthor);
    // Указываем что h1 = title в объекте(тоесть в h1 будет отображаться имя обьекта(книги))
    booksAuthor.textContent = item.author;
    // создаем блок с изображениями 
    const bookImg = document.createElement('img');
    // указываем путь к изображению по автору книги 
    bookImg.src = `img/${item.author}.jpg`;
    bookImg.style.width = "440px";
    bookImg.style.height = "460px";
    // Добавляем изображения в блок li
    booksListItem.appendChild(bookImg);
    // создаем проверку. если книга прочитанна(alreadyRead: true) то цвет фона Зеленый
    if (item.alreadyRead) {
      booksListItem.style.backgroundColor = 'green';
      // если не прочитана (alreadyRead: false) то цвет фона Красный
    } else {
      booksListItem.style.backgroundColor = 'red';
    }
    booksList.style.display = 'flex';
    booksList.style.justifyContent = 'space-between';
    booksListItem.style.listStyleType = 'none'
    booksListItem.style.padding = '20px'
    booksInf.style.display = 'flex';
    booksInf.style.flexDirection = 'column';
    booksInf.style.alignItems = 'center';
  })
}
//
//
//
//
// НЕ РЕДАКТИРОВАТЬ ВСЕ ЧТО НИЖЕ
//
//
//
//

const people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

const shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

exerciseThree(books);