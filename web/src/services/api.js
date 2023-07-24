const getRecipes = async () => {
  const response = await fetch(`http://localhost:4000/api/recipes`);
  const dataJSON = await response.json();
  return dataJSON;
};

const addRecipe = (newRecipe) => {
    return fetch('http://localhost:4000/api/recipes/add', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newRecipe),
    });
}

const objectApi = {
  getRecipes: getRecipes,
  addRecipe: addRecipe
};

export default objectApi;
