function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => {
        let output = '';
        data.forEach((user) => {
            output += `
            <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.phone}</td>
            </tr>
            `
        })
        document.getElementById('box').innerHTML = output;
    })
}

getUsers();





document.getElementById('user1').addEventListener
('click', getPostData);

function getPostData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        let output = `<h2>User 1 Posts</h2>`;
        data.forEach((post) => {
            if (post.userId === 1) {
                output += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            `
            } 
        })
        document.getElementById('output').innerHTML = output;
    })
}


document.getElementById('user2').addEventListener
('click', getPost2Data);

function getPost2Data() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        let output = `<h2>User 2 Posts</h2>`;
        data.forEach((post) => {
            if (post.userId === 2) {
                output += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            `
            } 
        })
        document.getElementById('output').innerHTML = output;
    })
}




document.getElementById('user3').addEventListener
('click', getPost3Data);

function getPost3Data() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        let output = `<h2>User 3 Posts</h2>`;
        data.forEach((post) => {
            if (post.userId === 3) {
                output += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            `
            } 
        })
        document.getElementById('output').innerHTML = output;
    })
}




document.getElementById('user4').addEventListener
('click', getPost4Data);

function getPost4Data() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        let output = `<h2>User 4 Posts</h2>`;
        data.forEach((post) => {
            if (post.userId === 4) {
                output += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            `
            } 
        })
        document.getElementById('output').innerHTML = output;
    })
}




document.getElementById('user5').addEventListener
('click', getPost5Data);

function getPost5Data() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        let output = `<h2>User 5 Posts</h2>`;
        data.forEach((post) => {
            if (post.userId === 5) {
                output += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            `
            } 
        })
        document.getElementById('output').innerHTML = output;
    })
}




document.getElementById('user6').addEventListener
('click', getPost6Data);

function getPost6Data() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        let output = `<h2>User 6 Posts</h2>`;
        data.forEach((post) => {
            if (post.userId === 6) {
                output += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            `
            } 
        })
        document.getElementById('output').innerHTML = output;
    })
}



document.getElementById('user7').addEventListener
('click', getPost7Data);

function getPost7Data() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        let output = `<h2>User 7 Posts</h2>`;
        data.forEach((post) => {
            if (post.userId === 7) {
                output += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            `
            } 
        })
        document.getElementById('output').innerHTML = output;
    })
}




document.getElementById('user8').addEventListener
('click', getPost8Data);

function getPost8Data() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        let output = `<h2>User 8 Posts</h2>`;
        data.forEach((post) => {
            if (post.userId === 8) {
                output += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            `
            } 
        })
        document.getElementById('output').innerHTML = output;
    })
}





document.getElementById('user9').addEventListener
('click', getPost9Data);

function getPost9Data() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        let output = `<h2>User 9 Posts</h2>`;
        data.forEach((post) => {
            if (post.userId === 9) {
                output += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            `
            } 
        })
        document.getElementById('output').innerHTML = output;
    })
} 



document.getElementById('user10').addEventListener
('click', getPost10Data);

function getPost10Data() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        let output = `<h2>User 10 Posts</h2>`;
        data.forEach((post) => {
            if (post.userId === 10) {
                output += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            `
            } 
        })
        document.getElementById('output').innerHTML = output;
    })
}









