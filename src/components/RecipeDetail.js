const RecipeDetail = ({ findRecipe }) => {
  // ingredients map
  const ingredients = findRecipe.ingredients.rawList.map((eachIngredient, i) => (
    <li key={i} className='ingredient__list--item'>
      {eachIngredient}
    </li>
  ));
  // elaboration steps map
  const steps = findRecipe.elaboration.steps.map((eachStep, i) => (
    <p key={i} className='elaboration__steps-item'>
      {eachStep}
    </p>
  ));
  if (findRecipe) {
    return (
      <>
        <h2>{findRecipe.title}</h2>
        <img className='recipe__image' src={findRecipe.image} alt={`Foto de ${findRecipe.title}`} />
        <section className='ingredients'>
          <h3>Necesitamos</h3>
          <ul className='ingredient--list'>{ingredients}</ul>
        </section>
        <section className='elaboration__steps'>
          <h3>Elaboración</h3>
          {steps}
        </section>
        <section>
          <p>{findRecipe.elaboration.finalQuote}</p>
        </section>
      </>
    );
  }
};

export default RecipeDetail;
