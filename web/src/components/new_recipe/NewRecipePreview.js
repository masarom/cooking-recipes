import NewRecipeIngredients from './NewRecipeIngredients';
import NewRecipeSteps from './NewRecipeSteps';
import ButtonGoBack from '../buttons/ButtonGoBack';
import defaultImage from '../../images/defaultImage.jpeg';
import '../../styles/layout/NewRecipePreview.scss';

const NewRecipePreview = ({
  ingredients,
  steps,
  newTitle,
  newImage,
  initialComment,
  updateIngredients,
  updateSteps,
}) => {
  const ingredientsLi = ingredients.map((eachIngr, i) => (
    <li key={i} id={i + 1} className='item'>
      <NewRecipeIngredients eachIngr={eachIngr} ingredients={ingredients} updateIngredients={updateIngredients} />
    </li>
  ));
  const stepsLi = steps.map((eachStep, i) => (
    <li key={i} id={i + 1} className='item'>
      <NewRecipeSteps eachStep={eachStep} steps={steps} updateSteps={updateSteps} />
    </li>
  ));
  return (
    <>
      <section className='recipe__preview'>
        <h2 className='recipe__preview--title'>{newTitle || 'Título de la receta'}</h2>
        <div className='image--container'>
          <img className='recipe__preview--image' src={newImage || defaultImage} alt={`Imagen de ${newTitle}`} />
        </div>
        <p className='recipe__preview--initialComment'>{initialComment || 'Comentario inicial de la receta'}</p>
        <article className='recipe__preview--ingredients'>
          <h2 className='recipe__preview--ingredients-title'>Ingredientes</h2>
          <ul className='recipe__preview--ingredients-list'>{ingredientsLi}</ul>
        </article>
        <article className='recipe__preview--elaboration'>
          <h2 className='recipe__preview--elaboration-title'>Elaboración</h2>
          <ul className='recipe__preview--elaboration-list'>{stepsLi}</ul>
        </article>
        <article className='recipe__preview--finalQuote'>
          <p>¡Que aproveche!</p>
        </article>
        <div className='btn-back'>
          <ButtonGoBack />
        </div>
      </section>
    </>
  );
};

export default NewRecipePreview;
