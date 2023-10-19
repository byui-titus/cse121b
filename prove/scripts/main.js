
async function fetchJoke() {
    const response = await fetch("https://icanhazdadjoke.com", {
    headers: {
        Accept: "application/json",
    },
    });
    const data = response.json();
    return data;
}

async function writeJoke() {
    let  {joke} = await fetchJoke();
    let jokeContainer = document.getElementById("joke");
    jokeContainer.textContent = joke;
}
function SaveJoke() {
    let jokeText = document.getElementById('joke').textContent;
    let reviewText = document.getElementById('review').value;
    reviewedJoke = {
        joke: jokeText,
        review: reviewText,
    }
    document.getElementById('review').value = '';
    list.push(reviewedJoke);
    return reviewedJoke;
}

function writeJokeBelow(joke) {
    article = document.createElement('article');
    header = document.createElement('h3');
    p = document.createElement('p');

    header.textContent = joke.joke;
    p.textContent = joke.review;

    article.appendChild(header);
    article.appendChild(p);
    document.getElementById('storedReviews').appendChild(article);
}

function toLocal() {
    localStorage.setItem('jokes', JSON.stringify(list));
}

function fromLocal() {
    return JSON.parse(localStorage.getItem('jokes'));
}
async function newJoke() {
    joke = SaveJoke();
    writeJokeBelow(joke);
    toLocal();
    await writeJoke();
}

try {
    var list = fromLocal();
    list.forEach(writeJokeBelow);
}
catch (exception_var) {
    var list = []
}
writeJoke();
document.getElementById("newJoke").addEventListener("click", newJoke);