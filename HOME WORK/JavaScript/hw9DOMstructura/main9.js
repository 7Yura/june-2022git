//
// // - є масив
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
// // Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//
// for (const simpson of simpsons) {
//     let divElement = document.createElement('div');
//     divElement.classList.add('member');
//
//     let divName = document.createElement('div');
//     divName.innerText = simpson.name;
//
//     let divSurname = document.createElement('div');
//     divSurname.innerText = simpson.surname
//
//     let divAge = document.createElement('div');
//     divAge.innerText = simpson.age;
//
//     let pInfo = document.createElement('p');
//     pInfo.innerText = simpson.info;
//
//     let img = document.createElement('img');
//     img.src = simpson.photo
//
//
//     divElement.appendChild(divName);
//     divElement.appendChild(divSurname);
//     divElement.appendChild(divAge);
//     divElement.appendChild(pInfo);
//     divElement.appendChild(img);
//     document.body.appendChild(divElement);
// }

//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту


// //
// // Цикл в циклі
// // - Є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// // Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// // Приклад структири знаходиться у файлі example.png
// // ------------------
//
// for (const course of coursesArray) {
//
//     let courseElement = document.createElement('div');
//     let titleElement = document.createElement('h2');
//     titleElement.innerText = course.title;
//
//     let monthDurationElement = document.createElement('div');
//     monthDurationElement.innerText = course.monthDuration;
//     let hourDurationElement = document.createElement('div');
//     hourDurationElement.innerText = course.hourDuration;
//
//     let modulesElement = document.createElement('ul');
//
//     for (const moduleItem of course.modules) {
//         let module = document.createElement('li');
//         module.innerText = moduleItem;
//         modulesElement.appendChild(module);
//     }
//
//     courseElement.appendChild(titleElement);
//     courseElement.appendChild(monthDurationElement);
//     courseElement.appendChild(hourDurationElement);
//     courseElement.appendChild(modulesElement);
//     document.body.appendChild(courseElement);
// }


//
//
// // - створити блок,
// let div = document.createElement('div');
// // - додати йому класи wrap, collapse, alpha, beta
// div.classList.add('wrap');
// div.classList.add('collapse');
// div.classList.add('alpha');
// div.classList.add('beta');
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// div.style.background = 'silver';
// div.style.color = 'red';
// div.style.fontSize = '36px';
// // - додати цей блок в body.
// document.body.appendChild(div);
// // - клонувати його повністю, та додати клон в body.
// document.body.appendChild(div.cloneNode(true));


// // - Є масив:
// //     ['Main','Products','About us','Contacts']
// // Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// // Завдання робити через цикли.
// let array = ['Main', 'Products', 'About us', 'Contacts'];
// let menu = document.getElementsByClassName("menu")[0];
// for (const string of array) {
//     let module = document.createElement('li')
//     module.innerText = string;
//     menu.appendChild(module);
// }


// // - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
// for (const course of coursesAndDurationArray) {
//     let divElement = document.createElement('div');
//     divElement.innerText = `${course.title} ${course.monthDuration}`;
//     document.body.appendChild(divElement);
// }


// // - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// //
// // За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// //     Завдання робити через цикли.
// //
// for (const course of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.classList.add('item');
//     let h1 = document.createElement('h1');
//     h1.innerText = course.title;
//     h1.classList.add('heading');
//     let p = document.createElement('p');
//     p.innerText = course.monthDuration;
//     p.classList.add('description');
//
//     div.appendChild(h1);
//     div.appendChild(p);
//     document.body.appendChild(div);
// }



// //
// //     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
// //
//     document.getElementById('hider').onclick = function() {
//     document.getElementById('text').hidden = true;
// }

//
// //     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// // document.getElementsByName('form1')
// let form1 = document.forms.f1
// form1.onclick = function(e) {
//     e.preventDefault()
//     let age = this.age.value
//     if (age < 18 && age > 0) {
//         document.getElementsByName('form1').
//         console.log('вік меньше 18 років');
//     }
// }

// //2 варіант
// const input = document.createElement('input');
// input.type = 'number';
//
// const button = document.createElement('button');
// button.innerText = 'Click'
//
// document.body.append(input, button);
//
// button.onclick = () => {
//     let value = input.value;
//
//     if (value > 0 && value < 18) {
//         alert('Stop');
//     } else if (value >= 18) {
//         alert('Hello');
//     } else {
//         alert('Go away');
//     }
// }


// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

const input1 = document.createElement('input');
input1.setAttribute('placeholder', 'Enter name');
const input2 = document.createElement('input');
const input3 = document.createElement('input');

const button = document.createElement('button');
button.innerText = 'Click';

document.body.append(input1, input2, input3, button);

button.addEventListener('click', function () {
    let row = input1.value;
    let col = input2.value;
    let elem = input3.value;

    let generator = (tr, td, text) => {


        const htmlTableElement = document.createElement('table');
        document.body.appendChild(htmlTableElement);

        for (let i = 0; i < tr; i++) {
            const tr = document.createElement('tr');
            htmlTableElement.appendChild(tr);

            for (let j = 0; j < td; j++) {
                const td = document.createElement('td');
                td.innerText = `${text}`;
                tr.appendChild(td);
            }
        }

    }
    generator(row, col, elem);
    button.disabled = true;
})

