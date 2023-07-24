const NewRecipeIngredients = ({ eachIngr, ingredients, updateIngredients }) => {
  const handleClickDelete = (ev) => {
    ev.preventDefault();
    const findIngredient = ingredients.find((ingr) => ingr === eachIngr);
    const findIngrIndex = ingredients.findIndex((ingr) => ingr === findIngredient);
    updateIngredients(findIngrIndex);
  };
  return (
    <>
      <button className='recipe__preview--ingredients-btn' onClick={handleClickDelete}>
        x
      </button>
      {eachIngr}
    </>
  );
};

export default NewRecipeIngredients;
