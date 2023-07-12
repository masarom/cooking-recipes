import NewRecipeIngredients from './NewRecipeIngredients';
import NewRecipeSteps from './NewRecipeSteps';

const NewRecipePreview = ({ ingredients, steps, newTitle, initialComment, updateIngredients, updateSteps }) => {
  const ingredientsLi = ingredients.map((eachIngr, i) => (
    <li key={i} id={i + 1} className='ingredient__list--item'>
      <NewRecipeIngredients eachIngr={eachIngr} ingredients={ingredients} updateIngredients={updateIngredients} />
    </li>
  ));
  const stepsLi = steps.map((eachStep, i) => (
    <li key={i} id={i + 1} className='step__list--item'>
      <NewRecipeSteps eachStep={eachStep} steps={steps} updateSteps={updateSteps} />
    </li>
  ));
  return (
    <section className='recipe__preview'>
      <h2 className='title'>{newTitle}</h2>
      <p>{initialComment}</p>
      <article className='recipe__preview--ingredients'>
        <h2>Ingredientes</h2>
        <ul className='ingredient__list'>{ingredientsLi}</ul>
      </article>
      <article className='recipe__preview--steps'>
        <h2>Elaboración</h2>
        <ul className='step__list'>{stepsLi}</ul>
      </article>
    </section>
  );
};

export default NewRecipePreview;
