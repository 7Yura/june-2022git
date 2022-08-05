// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// s = (a, b) => a * b;
// console.log(s(10, 20));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// s_kola = r => 3.14 * r * r;
// console.log(s_kola(23));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// s_cil = (h, r) => 2 * 3.14 * h * r;
// console.log(s_cil(10, 5));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let x = [12, 'sd', 'df', 'qw'];
//
// function arrays(mas) {
//     for (const ma of mas) {
//         console.log(ma);
//
//     }
// }
//
// arrays(x);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function par(text) {
//     document.write(`<div>${text}</div>`);
// }
// par(`<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, quod.</p>`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// function spysok(el) {
//     document.write(`<ul>
// <li>${el}</li>
// <li>${el}</li>
// <li>${el}</li>
// </ul>`)
// }
// spysok('html');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function spysok(el,x) {
//     document.write(`<ul>`);
//     for (let i = 0; i < x; i++) {
//         document.write(`<li>${el}</li>`);
//     }
//     document.write(`<ul>`);
// }
// spysok('html',3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function spis(...spi) {
//     document.write(`<ul>`);
//     for (let i = 0; i < spi.length; i++) {
//         const spiElement = spi[i];
//         document.write(`<li>${spiElement}</li>`);
//     }
//     document.write(`</ul>`);
// }
//
// spis(34, 56, 'html', true, 34, 45, 'top');

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// let masa = [
//     {id: 23, name: 'ivan', age: 23},
//     {id: 23, name: 'ivan', age: 23},
//     {id: 23, name: 'ivan', age: 23}
// ];
// function foo(masa1) {
//     for (const masaElement of masa1) {
//         document.write('<div>${masaElement}</div>' );
//     }
// }
// foo(masa);

// - створити функцію яка повертає найменьше число з масиву
// function  namber (...x) {
//     let min = Math.min(...x);
//     console.log(min);
// }
// namber(74, 35, 45, 67, 32);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function  namber (...x){
//     let sum = 0;
//     for (let i = 0; i < x.length; i++) {
//         const x1 = x[i];
//         sum+=x1;
//     }
//     return sum;
// }
// console.log(namber(23, 35, 45, 67, 32,23));
