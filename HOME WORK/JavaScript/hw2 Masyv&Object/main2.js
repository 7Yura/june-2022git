// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let library = ['twen', 'cow', 24, 'nois', 'mause', 'red', 34, 'horse', 'home', true];
console.log(library);
console.log(library[8]);
console.log(library[0]);
console.log(library[4]);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {title: 'Flesh', pageCount: 300, genre: 'fantastika'};
console.log(book1);
let book2 = {title: 'Posledniy iz magikan', pageCount: 450, genre: 'prygody'};
console.log(book2);
let book3 = {title: 'Velyka borotba', pageCount: 500, genre: 'istoria'};
console.log(book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let book4 = {
    title: 'Big bird', pageCount: 400, genre: 'drama',
    authors: [
        {name: 'Antonov', age: 26},
        {name: 'Povar', age: 43},
        {name: 'kostenko', age: 26}
    ]
};
console.log(book4);
console.log(book4.authors[1].name)
let book5 = {
    title: 'Klop', pageCount: 300, genre: 'raskaz',
    authors: [
        {name: 'Moll', age: 31},
        {name: 'Palka', age: 46}
    ]
};
console.log(book5);
console.log(book5.pageCount);
let book6 = {
    title: 'Puding', pageCount: 2, genre: 'recept',
    authors: [
        {name: 'Nafania', age: 5},
        {name: 'Ivanov', age: 26}
    ]
};
console.log(book6);

// - Створити масив з 10 об'єктами Шкі описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let spisok = [
    {name: 'Petr', username: 'Petrov', password: 10},
    {name: 'Ivan', username: 'Ivanov', password: 13},
    {name: 'Nikolay', username: 'Nikolaev', password: 56},
    {name: 'Ivan', username: 'Franko', password: 31},
    {name: 'Vasiliy', username: 'Gonta', password: 45},
    {name: 'lesia', username: 'Horush', password: 56},
    {name: 'Tatiana', username: 'Ledneva', password: 43},
    {name: 'Mavr', username: 'Dobrodiy', password: 23},
    {name: 'Svetlana', username: 'Holodna', password: 98},
    {name: 'Anton', username: 'Percheniy', password: 76}
];
console.log(spisok);
console.log(spisok[0].username, spisok[0].password);
console.log(spisok[1].username, spisok[1].password);
console.log(spisok[2].username, spisok[2].password);
console.log(spisok[3].username, spisok[3].password);
console.log(spisok[4].username, spisok[4].password);
console.log(spisok[5].username, spisok[5].password);
console.log(spisok[6].username, spisok[6].password);
console.log(spisok[7].username, spisok[7].password);
console.log(spisok[8].username, spisok[8].password);
console.log(spisok[9].username, spisok[9].password);


