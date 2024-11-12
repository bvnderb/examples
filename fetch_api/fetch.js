// const url = 'https://jsonplaceholder.typicode.com/todos';
// fetch(url)
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(e => console.log(e));

// HTTP VERB (GET) (POST,DELETE,PUT)


// SUBPROBLEMS

// Create a basic HTML structure
// Create a javascript file with logic
// Find endpoint API
// Consume endpoint API
// Display data in HTML using an iteration
// make iteration
// create HTML node (id)
// node.innerHTML (+=)
// Analyse array of objects structure (which attributes are available)
// Done

const url = 'http://localhost:3000/posts';
function fetchData() {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const display = document.getElementById('display');
            for (let i = 0; i < data.length; i++) {
                display.innerHTML += `<h1>Title: ${data[i].title}</h1> <p>Likes: ${data[i].likes}, Views: ${data[i].views}</p><br>`;
            }

        })
        .catch(e => console.log(e));
}


const btnReset = document.getElementById('clear');
btnReset.addEventListener('click', () => {
    display.innerHTML = '';
})

const btnReload = document.getElementById('reload');
btnReload.addEventListener('click', fetchData);

fetchData();