import ButtonGoBack from './buttons/ButtonGoBack';
import '../styles/layout/RecipeDetail.scss';

const RecipeDetail = ({ findRecipe }) => {
  // ingredients map
  const ingredients = findRecipe.ingredients.rawList.map((eachIngredient, i) => (
    <li key={i} className='item'>
      {eachIngredient}
    </li>
  ));
  // elaboration steps map
  const steps = findRecipe.elaboration.steps.map((eachStep, i) => (
    <li key={i} className='item'>
      {eachStep}
    </li>
  ));
  if (findRecipe) {
    return (
      <section className='recipe'>
        <h2 className='recipe__title'>{findRecipe.title}</h2>
        <div className='recipe__image' style={{ backgroundImage: `url(${findRecipe.image})` }}></div>
        <section className='recipe__initialComment'>{findRecipe.initialComment}</section>
        <section className='recipe__ingredients' id='#ingredients'>
          <h3 className='recipe__ingredients--title'>Necesitamos</h3>
          <ul className='recipe__ingredients--list'>{ingredients}</ul>
        </section>
        <section className='recipe__elaboration' id='#elaboration'>
          <h3 className='recipe__elaboration--title'>Elaboración</h3>
          <ul className='recipe__elaboration--list'>{steps}</ul>
        </section>
        <section>
          <p>{findRecipe.elaboration.finalQuote}</p>
        </section>
        <ButtonGoBack />
      </section>
    );
  }
};

export default RecipeDetail;
