
const jokeBtn = document.getElementById('jokeBtn')
const jokeDOM = document.getElementById('joke')

jokeBtn.addEventListener("click", generateJoke)

generateJoke()

async function generateJoke() {
    const config  = {
        headers: {
            Accept: "application/json",
        }, 
    }

    //Sıralı, senkronize gerçekleşmesini sağlar then gibi
    const res = await fetch("https://icanhazdadjoke.com/", config) 
    const data = await res.json();

    jokeDOM.innerHTML = data.joke;
}

/*
function generateJoke() {
    const config  = {
        headers: {
            Accept: "application/json",
        }, 
    }

    fetch("https://icanhazdadjoke.com/", config)
        .then( (res) => res.json() ) 
        .then( (data) => {
            jokeDOM.innerHTML = data.joke
        })
} 
*/