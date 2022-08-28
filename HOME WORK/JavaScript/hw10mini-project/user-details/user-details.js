// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
// которая имеет детальную информацию про текущий пост.
let users = JSON.parse(localStorage.getItem('user'));
let user = users[users.length - 1]
console.log(user);

let bigBox = document.createElement('div')
bigBox.classList.add('main_container')
document.body.appendChild(bigBox)

let container = document.createElement('div')
container.classList.add('container')
bigBox.appendChild(container)

function createdBlocks (object,div){
    for (const objectKey in object) {
        if (typeof object[objectKey] !== "object"){
            let p = document.createElement('p');
            let text = objectKey[0].toUpperCase() + objectKey.slice(1) + ': '
            p.innerHTML = `<b>${text}</b> ${object[objectKey]}`
            p.classList.add('user_paragraph')
            div.appendChild(p);
        }
        else{
            let smallContainer = document.createElement('div')
            smallContainer.classList.add('small_container')
            div.appendChild(smallContainer)
            let h5 = document.createElement('h5')
            h5.innerText = objectKey[0].toUpperCase() + objectKey.slice(1) + ':'
            smallContainer.appendChild(h5)
            createdBlocks(object[objectKey],smallContainer)
        }
    }

}
createdBlocks(user, container);

let btn = document.createElement('button');
btn.innerText = 'Title';
btn.classList.add('button')
bigBox.appendChild(btn)
let bigDivPosts = document.createElement('div')
bigDivPosts.classList.add('global_posts')
document.body.appendChild(bigDivPosts)

bigDivPosts.classList.toggle('hidden_block')
btn.onclick = () => {
    bigDivPosts.classList.toggle('hidden_block')
}
fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
    .then(response => response.json())
    .then(json => {
        json.forEach(post => {

            let divPost = document.createElement('div')
            divPost.classList.add('post-title')
            bigDivPosts.appendChild(divPost)

            let h3 = document.createElement('h3')
            h3.classList.add('title_text')
            h3.innerText = post.title[0].toUpperCase() + post.title.slice(1)
            divPost.appendChild(h3)

            let a = document.createElement('a')
            a.innerText = ('Information');
            divPost.appendChild(a)
            a.href = `http://localhost:63342/june-2022git/HOME%20WORK/JavaScript/hw10mini-project/post-details/post-details.html?id=${post.id}`
            a.onclick = () =>{
                let arr = []
                arr.push(post)
                localStorage.setItem('post', JSON.stringify(arr))

            }
        })
    });
