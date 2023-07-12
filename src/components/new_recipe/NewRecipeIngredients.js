const NewRecipeIngredients = ({ eachIngr, ingredients, updateIngredients }) => {
  const handleClickDelete = (ev) => {
    ev.preventDefault();
    console.log(ev.currentTarget.parentNode.id);
    console.log(ingredients);
    const findIngredient = ingredients.find((ingr) => ingr === eachIngr);
    console.log(findIngredient);
    const findIngrIndex = ingredients.findIndex((ingr) => ingr === findIngredient);
    console.log(findIngrIndex);
    updateIngredients(findIngrIndex);
  };
  return (
    <>
      <button onClick={handleClickDelete}>x</button>
      {eachIngr}
    </>
  );
};

export default NewRecipeIngredients;