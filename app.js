const baseEndPoint = 'http://www.recipepuppy.com/api';

async function fetchRecipes(query) {
    const res = await fetch(`https://cors-anywhere.herokuapp.com/${baseEndPoint}?=${query}`)
    const data = await res.json();
}

fetchRecipes();