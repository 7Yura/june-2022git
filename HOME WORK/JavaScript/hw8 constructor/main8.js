// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone
//
// }
// let user1 = new User(22, 'vania', 'Ivanov', 'sv1@gmail.com', 234555663);
// let user2 = new User(26, 'peta', 'petrov', 'sv2@gmail.com', 22334555666);
// let user3 = new User(31, 'vala', 'vanina', 'sv3@gmail.com', 23454555663);
// let user4 = new User(28, 'ola', 'osyrova', 'sv4@gmail.com', 23455655667);
// let user5 = new User(223, 'anna', 'Lopata', 'sv5@gmail.com', 23423555664);
// let user6 = new User(210, 'kola', 'lov', 'sv6@gmail.com', 23455553668);
// let user7 = new User(61, 'tola', 'pot', 'sv7@gmail.com', 234656555665);
// let user8 = new User(83, 'sofa', 'tuk', 'sv8@gmail.com', 23884555668);
// let user9 = new User(24, 'anton', 'pup', 'sv9@gmail.com', 234552345663);
// let user10 = new User(46, 'lena', 'lol', 'sv10@gmail.com', 23487555667);
// let Use = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];
// console.log(Use);
//
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filter = Use.filter(value => !(value.id % 2));
// console.log(filter);
//
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// console.log(Use.sort((a, b) => a.id - b.id));

//
// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// // створити пустий масив, наповнити його 10 об'єктами Client
// function Client(id, name, surname, email, phone,order) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order
//     }
//
// let user1 = new Client(21, 'vana', 'ivanov', 'qwerty@net', 121341234, ['milk','brad','orange']);
// let user2 = new Client(21, 'vana', 'ivanov', 'qwerty@net', 121341234, ['milk','brad','orange']);
// let user3 = new Client(21, 'vana', 'ivanov', 'qwerty@net', 121341234, ['milk','brad','orenge','asd']);
// let user4 = new Client(21, 'vana', 'ivanov', 'qwerty@net', 121341234, ['milk','brad','orenge','sdsdf']);
// let user5 = new Client(21, 'vana', 'ivanov', 'qwerty@net', 121341234, ['milk','brad','orenge','asd']);
// let user6 = new Client(21, 'vana', 'ivanov', 'qwerty@net', 121341234, ['milk','brad','orenge','adad','sda']);
// let user7 = new Client(21, 'vana', 'ivanov', 'qwerty@net', 121341234, ['milk','brad','orenge']);
// let user8 = new Client(21, 'vana', 'ivanov', 'qwerty@net', 121341234, ['milk','brad','orenge','orenge','adad']);
// let user9 = new Client(21, 'vana', 'ivanov', 'qwerty@net', 121341234, ['milk','brad','orenge','orenge','aad']);
// let user10 = new Client(21, 'vana', 'ivanov', 'qwerty@net', 121341234, ['milk','brad','orenge']);
// let user = [];
//
//     user.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
// console.log(user);

// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// console.log(user.sort((a, b) => a.order.length - b.order.length));


// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(модель, виробник, рік_випуску, максимальна_швидкість, обєм_двигуна) {
//     this.модель = модель;
//     this.виробник = виробник;
//     this.рік_випуску = рік_випуску;
//     this.максимальна_швидкість = максимальна_швидкість;
//     this. обєм_двигуна= обєм_двигуна
//
//
// }
//
// let cars = new Car('mazda', 'mazda-motors', 2022, 300, 3);
// cars.drive=function () {
//     console.log(`їдемо зі швидкістю ${this.максимальна_швидкість} на годину`);
// }
// console.log(cars);
// cars.drive();
// cars.info=function () {
//     console.log(`модель - ${this.модель} ,  виробник- ${this.виробник} , рік_випуску-${this.рік_випуску} ,максимальна_швидкість-${this.максимальна_швидкість} км,
//    обєм_двигуна- ${this. обєм_двигуна} кВт`);
// }
// cars.info()


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car {
//
//     constructor(модель, виробник, рік_випуску, максимальна_швидкість, обєм_двигуна) {
//
//         this.модель = модель;
//         this.виробник = виробник;
//         this.рік_випуску = рік_випуску;
//         this.максимальна_швидкість = максимальна_швидкість;
//         this.обєм_двигуна = обєм_двигуна
//
//     }
// }
//
// let cars = new Car('mazda', 'mazda-motors', 2022, 300, 3);
// cars.drive=function () {
//     console.log(`їдемо зі швидкістю ${this.максимальна_швидкість} на годину`);
// }
// console.log(cars);
// cars.drive();
// cars.info=function () {
//     console.log(`модель - ${this.модель} ,  виробник- ${this.виробник} , рік_випуску-${this.рік_випуску} ,максимальна_швидкість-${this.максимальна_швидкість} км,
//    обєм_двигуна- ${this. обєм_двигуна} кВт`);
// }
// cars.info()
// cars.increaseMaxSpeed = function (newSpeed) {
//     this.максимальна_швидкість = newSpeed;
//     console.log(`максимальна  швидкаість - ${this.максимальна_швидкість} км`);
// };
// cars.increaseMaxSpeed(400);
// cars.changeYear=function (newValue) {
//     this.рік_випуску = newValue;
//     console.log(`рік випуску- ${this.рік_випуску}`);
// }
//
// class Cars1 extends Car{
//     constructor(модель, виробник, рік_випуску, максимальна_швидкість, обєм_двигуна,водій) {
//         super(модель, виробник, рік_випуску, максимальна_швидкість, обєм_двигуна);
//         this.водій = водій;
//     }
// }
//
// let cars2 = new Cars1('mazda', 'mazda-motors', 2022, 300, 3,{name:'Вася',saneme: 'Кіт'})
// console.log(cars2);


//
// // -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// class Попелюшка {
//     constructor(імя, вік, розмір_ноги) {
//         this.імя = імя;
//         this.вік = вік;
//         this.розмір_ноги = розмір_ноги
//
//     }
//
// }
// let pop1= new Попелюшка('нася',2,4)
// let pop2= new Попелюшка('нася',2,4)
// let pop3= new Попелюшка('нася',2,4)
// let pop4= new Попелюшка('нася',2,4)
// let pop5= new Попелюшка('нася',2,4)
// let pop6= new Попелюшка('аня',3,23)
// let pop7= new Попелюшка('нася',2,4)
// let pop8= new Попелюшка('нася',2,4)
// let pop9= new Попелюшка('нася',2,4)
// let pop10= new Попелюшка('нася',2,4)
// let pop = [pop1, pop2, pop3, pop4, pop5, pop6, pop7, pop8, pop9, pop10];
// console.log(pop);
//
// class princ {
//     constructor(імя, вік, розмір_ноги) {
//         this.імя = імя;
//         this.вік = вік;
//         this.розмір_ноги=розмір_ноги
//     }
// }
// let princ1=new princ('аня',3,23)
// console.log(princ1);
// for (let i = 0; i < pop.length; i++) {
//     const popElement = pop[i];
//     if(princ1.розмір_ноги===pop[i].розмір_ноги){
//         console.log(popElement,'принц знайшов свою попелюшку');
//     }
// }
// let find= pop.find(value => value.розмір_ноги===princ1.розмір_ноги)
//     console.log(find,'принц знайшов свою попелюшку');
