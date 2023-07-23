import '../../styles/layout/NewRecipe.scss';
import NewRecipeForm from './NewRecipeForm';
import NewRecipePreview from './NewRecipePreview';

const NewRecipe = ({
  addNewTitle,
  newTitle,
  addInitialComment,
  initialComment,
  handleInputValue,
  addValue,
  ingrValueInput,
  ingredients,
  stepValueInput,
  steps,
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
          handleInputValue={handleInputValue}
          addValue={addValue}
          ingrValueInput={ingrValueInput}
          stepValueInput={stepValueInput}
          addNewRecipe={addNewRecipe}
          addNewImage={addNewImage}
          newImage={newImage}
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
