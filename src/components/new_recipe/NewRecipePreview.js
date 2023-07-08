import NewRecipeIngredients from './NewRecipeIngredients';

const NewRecipePreview = ({ ingredients }) => {
  const ingredientsLi = ingredients.map((eachIngr, i) => (
    <li key={i} className='ingredient__list--item'>
      <NewRecipeIngredients eachIngr={eachIngr} />
    </li>
  ));

  return (
    <section className='recipe__preview'>
      <article className="recipe__preview--ingredients">
          <h2>Ingredientes</h2>
          <ul className='ingredient__list'>{ingredientsLi}</ul>
      </article>
      <article className='recipe__preview--steps'>
        <h2>Elaboración</h2>
        <ul></ul>
      </article>
    </section>
  );
};

export default NewRecipePreview;
