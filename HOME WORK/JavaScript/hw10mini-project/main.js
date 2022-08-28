// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        let big = document.createElement('div');
        big.classList.add('big');
        document.body.appendChild(big);
        json.forEach(users => {
            let div = document.createElement('div');
            div.classList.add('div');
            big.appendChild(div);
            let h2 = document.createElement('h2')
            h2.innerText = `${users.id}. ${users.name}`
            let a = document.createElement('a')
            a.innerText = 'Details';
            a.href = `user-details/user-details.html?id=${users.id}`
            a.onclick = () => {
                let arr = [];
                arr.push(users)
                localStorage.setItem('user', JSON.stringify(arr))

            };
            div.append(h2, a);

        })
    })




//
// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так,
// что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)

