// const checkEmail = (email) => {
//     const emailArr = email.split('@');
//     if (emailArr.length !==2){
//         return false
//     }
//     const [name, fullDomain] = emailArr;
//     const [beforeDot, afterDot] = fullDomain.split('.');
//     // if (beforeDot.length<2 || !afterDot ||!name){
//     //     return false
//     // }
//     // return true
//
//     return !(beforeDot.length < 2 || !afterDot || !name);
//
// }
//
// console.log(checkEmail('gs.s'));


// const arr = [1, 2, 3, 4, 5, 25, 6, 7, 8]
// // const numbers = arr.map((value, index)=>value+index);
// const numbers = arr.map((value) => value * 2);
// const numbers1 = arr.filter((value) => value % 2);
// // console.log(numbers1);
// // const arr2 = [1,2,3]
// //
// // const arr3 = [...arr2, 4,5,6]
// // console.log(arr3);
// const reduce1 = arr.reduce((acc, value) => [...acc, value * 2], []);
// const reduce2 = arr.reduce((acc, value) => !(value % 2) ? [...acc, value] : acc, []);
// const reduce3 = arr.reduce((acc, value) => value % 2 ? [...acc, value * 2] : acc, []);
//
// const arr = [1, 2, 3, 4, 5, 25, 6, 7, 8]
// const sum = arr.reduce((prev, next) => prev + next, 0);
// const max = arr.reduce((acc, value) => acc > value ? acc : value);
//
// const users = [
//     {'name': 'max', age: 18},
//     {'name': 'oleg', age: 45},
//     {'name': 'olha', age: 30},
//     {'name': 'kira', age: 14},
// ]
//
// const userMinAge = users.reduce((acc, value) => {
//     if (acc.age > value.age) {
//         return value
//     }else
//         return acc
// });
// console.log(userMinAge);
//
//
//
// const minMax = (...nums) => {
//     let min = nums[0]
//     let max = nums[0]
//     nums.forEach(value => {
//         if (min > value) {
//             min = value
//         }
//         if (max < value) {
//             max = value
//         }
//
//     })
//     return {max, min};
// }
//
// const minMaxres = minMax(1,2,3,23,-12,45);
// console.log(minMaxres);


// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
// let symb = "о", str = "Астрономия это наука о небесных объектах";

// const count = (str, search) => str.split('').reduce((acc, value) => value === search ? acc + 1 : acc, 0)
//
// const count1 = count('Астрономия это наука о небесных объектах', 'о');
//
// console.log(count1);
//

//
// const reverse = (arr) => {
//     const res = []
//     while (arr.length) {
//         res.push(arr.pop())
//     }
//     return res
// }
//
// console.log(reverse([1, 2, 3, 4, 5]));


// const counter = () => {
//     let count = 0
//     // return {
//     //     getCount:()=>++count
//     // }
//
//     return [
//         ()=>++count,
//         ()=>{
//         count=0
//         }
//     ]
//
//
// }
// const [getCount, reset] = counter();
// console.log(getCount());
// console.log(getCount());
// console.log(getCount());
// console.log(getCount());
// console.log(getCount());
//
// reset()
//
// console.log(getCount());
// console.log(getCount());
// console.log(getCount());
//
// // const {getCount:counter1} = counter();
// // // const counter2 = counter();
// // console.log(counter1());
// // console.log(counter1());
// //
// // // console.log(counter2());
// //
// // console.log(counter1());
// // console.log(counter1());
// // console.log(counter1());
// //


// const objs = [
//     {name: 'max', age: 18},
//     {house: 25, street: 15},
//     {car: true}
// ]
// const arr = [1,2,3]
// const arr2 = [1,2,3]
// // const keys = objs.reduce((acc, value)=>[...acc, ...Object.keys(value)],[]);
// const keys = objs.reduce((acc, value)=>{
//
//     for (let key of Object.values(value)) {
//         acc.push(key)
//     }
//
//     return acc
// }, []);
// console.log(keys);
// // console.log(Object.keys(objs[0]));
// // Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str,
// // залишивши у ній n слів. let str = "Сила тяжести приложена к центру масс тела";
// // document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
//
// const cutString = (st,n) => {
//     return st.split(' ').slice(0, n).join(' ')
// }
//
// console.log(cutString('Сила тяжести приложена к центру масс тела', 2));


const capitalize = (st) => st.split(' ').map(word=>`${word[0].toUpperCase()}${word.slice(1)}`).join(' ')

console.log(capitalize('Сила тяжести приложена к центру масс тела'));
