const baseEndpoint = 'http://www.recipepuppy.com/api';
const proxy = `https://cors-anywhere.herokuapp.com/`;
const form = document.querySelector('form.search');
const recipesGrid = document.querySelector('.recipes');

async function fetchRecipes(query) {
  const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
  const data = await res.json();
  return data;
}

async function handleSubmit(event) {
  event.preventDefault();
  const el = event.currentTarget;
  fetchAndDisplay(form.query.value);
}

async function fetchAndDisplay(query) {
  form.submit.disabled = true;
  const recipes = await fetchRecipes(query);
  form.submit.disabled = false;
  displayRecipes(recipes.results);
}

function displayRecipes(recipes) {
  const html = recipes.map(
    recipe => `<div class="recipe">
      <h2>${recipe.title}</h2>
      <p>${recipe.ingredients}</p>
      <a href="${recipe.href}" class="link">View Recipe →</a>
    </div>`
  );
  recipesGrid.innerHTML = html.join('');
}

form.addEventListener('submit', handleSubmit);
fetchAndDisplay('pizza');

const handleModal = (event) => {
    const id = currentId;
    hp = HP;
    innerModal.innerHTML = 
    `<div class="card">
        <div class="card-title">
            <h1 class="capitalize">${currentPokemon.name}</h1>
            <span>${hp} HP</span>
        </div>
        <div class="card-body">
            <div class="img-container">
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${('00' + id).slice(-3)}.png" alt="A pokemon named: ${currentPokemon.name}">
            </div>
        </div>
    </div>`;
    outerModal.classList.add('open');
}

submit.addEventListener('click', handleModal);

outerModal.addEventListener('click', event => {
    const isOutside = !event.target.closest('.modal-inner');
    if (isOutside) {
    outerModal.classList.remove('open');
    }
});