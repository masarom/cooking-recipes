const NewRecipeIngredients = ({ eachIngr, ingredients, updateIngredients }) => {
  const handleClickDelete = (ev) => {
    ev.preventDefault();
    const findIngredient = ingredients.find((ingr) => ingr === eachIngr);
    const findIngrIndex = ingredients.findIndex((ingr) => ingr === findIngredient);
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