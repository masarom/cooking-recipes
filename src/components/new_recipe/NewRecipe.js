import '../../styles/layout/NewRecipe.scss';
import NewRecipeForm from './NewRecipeForm';
import NewRecipePreview from './NewRecipePreview';

const NewRecipe = ({
  addNewTitle,
  newTitle,
  addInitialComment,
  initialComment,
  addIngredientValue,
  addIngredients,
  ingrValueInput,
  ingredients,
  addStepValue,
  stepValueInput,
  addSteps,
  steps,
  recipes,
  addNewRecipe,
  addNewImage,
  newImage,
  updateIngredients,
  updateSteps,
}) => {
  return (
    <section className='new__recipe'>
      <h2 className='new__recipe--title'>Añadir nueva receta</h2>
      <section className='new__recipe--content'>
        <NewRecipeForm
          addNewTitle={addNewTitle}
          newTitle={newTitle}
          addInitialComment={addInitialComment}
          initialComment={initialComment}
          addIngredientValue={addIngredientValue}
          addIngredients={addIngredients}
          ingrValueInput={ingrValueInput}
          ingredients={ingredients}
          addStepValue={addStepValue}
          stepValueInput={stepValueInput}
          addSteps={addSteps}
          steps={steps}
          recipes={recipes}
          addNewRecipe={addNewRecipe}
          addNewImage={addNewImage}
          newImage={newImage}
          updateIngredients={updateIngredients}
          updateSteps={updateSteps}
        />
        <NewRecipePreview
          newTitle={newTitle}
          newImage={newImage}
          initialComment={initialComment}
          ingredients={ingredients}
          updateIngredients={updateIngredients}
          steps={steps}
          updateSteps={updateSteps}
        />
      </section>
    </section>
  );
};

export default NewRecipe;
