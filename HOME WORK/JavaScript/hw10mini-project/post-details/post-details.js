// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста
// (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
let posts = JSON.parse(localStorage.getItem('post'));
let post = posts[posts.length - 1];

let bigDiv = document.createElement('div')
bigDiv.classList.add('container');
document.body.appendChild(bigDiv)

let smallDiv = document.createElement('div')
smallDiv.classList.add('small_container');
bigDiv.appendChild(smallDiv)

createdDiv(smallDiv, post)

let button = document.createElement('button')
button.innerText = 'Comments';
bigDiv.appendChild(button)
let commentsDiv = document.createElement('div')
bigDiv.appendChild(commentsDiv)
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(response => response.json())
    .then(json => {
        json.forEach(comment => {
            let smallCommentDiv = document.createElement('div')
            smallCommentDiv.classList.add('small_comment')
            commentsDiv.appendChild(smallCommentDiv)
            createdDiv(smallCommentDiv, comment)
        });
    })

commentsDiv.classList.toggle('comments')
commentsDiv.classList.add('comments_block')
button.onclick = () => {
    commentsDiv.classList.toggle('comments');

}

function createdDiv(fatherDiv, object) {
    let {userId, postId, id, title, body, email, name} = object

    function createdHeading(nameId, words) {
        let h3 = document.createElement('h3')
        h3.innerText = `${words}: ${nameId} | ID: ${id}`;
        fatherDiv.appendChild(h3)
    }
    (userId) ? createdHeading(userId, 'UserID') : createdHeading(postId, 'PostID')
    function createdParagraph(name, words) {
        let p1 = document.createElement('p')
        p1.innerText = `${words}: ${name}`
        fatherDiv.appendChild(p1);
    }
    (title) ? createdParagraph(title, 'Title') : createdParagraph(name, 'Name');
    let p2 = document.createElement('p')
    p2.innerText = `Body: ${body}`
    fatherDiv.appendChild(p2);
    if (email) {
        let p3 = document.createElement('p')
        p3.innerText = `Email: ${email}`
        fatherDiv.appendChild(p3);
    }
}