import '../../styles/layout/NewRecipe.scss';
import NewRecipePreview from './NewRecipePreview';

const NewRecipe = ({
  addIngredientValue,
  addIngredients,
  ingrValueInput,
  ingredients,
  addStepValue,
  stepValueInput,
  addSteps,
  steps,
  addNewRecipe,
  recipes,
  addNewTitle,
  newTitle,
  addInitialComment,
  initialComment,
}) => {
  // gathers input value and stores it in ingrValueInput (4)
  const handleChangeIngredient = (ev) => {
    return addIngredientValue(ev.target.value);
  };
  // Adds ingredient to ingredients (5) array
  const handleClickAddIngredient = (ev) => {
    ev.preventDefault();
    return addIngredients(ingrValueInput);
  };

  const handleChangeStep = (ev) => {
    return addStepValue(ev.target.value);
  };

  const handleClickAddStep = (ev) => {
    ev.preventDefault();
    return addSteps(stepValueInput);
  };

  const hangleChangeTitle = (ev) => {
    addNewTitle(ev.target.value);
  };

  const handleChangeInitialComment = (ev) => {
    addInitialComment(ev.target.value);
  };

  const handleClickAddRecipe = (ev) => {
    ev.preventDefault();
    return addNewRecipe();
  };

  return (
    <>
      <form onSubmit={handleClickAddRecipe}>
        <h2>Título</h2>
        <fieldset>
          <input
            type='text'
            name='title'
            placeholder='Título de la receta'
            value={newTitle}
            onInput={hangleChangeTitle}
          />
          <textarea
            name='initialComment'
            id='initialComment'
            cols='40'
            rows='5'
            placeholder='Comentario inicial. Ej: Esta receta, me la enseñó mi madre'
            value={initialComment}
            onInput={handleChangeInitialComment}
          ></textarea>
        </fieldset>
        <h2>Ingredientes</h2>
        <p>
          Escriba el ingrediente deseado, pulse el botón de "añadir" y mire cómo aparece en la sección de ingredientes
          de su receta. Repita el proceso para todos los ingredientes
        </p>

        <fieldset className='form__ingredient--item'>
          <input
            type='text'
            name='ingredient'
            placeholder='ej: 1 kg de patatas'
            onChange={handleChangeIngredient}
            value={ingrValueInput}
          />
          <button onClick={handleClickAddIngredient}>Añadir</button>
        </fieldset>
        {/* <fieldset className='form__ingredient--item'>
        <h3>Ingrediente 1</h3>
        <label htmlFor='quantity'>Cantidad</label>
        <input type='number' name='quantity' id='quantity' placeholder='ej: 2' />
        <label htmlFor='unit'>Unidad (opcional)</label>
        <select name='unit' defaultValue='elige' id='unit'>
          <option hidden disabled value='elige'>
            elige
          </option>
          <option value='gr' className='measure--unit'>
            gr
          </option>
          <option value='kg' className='measure--unit'>
            kg
          </option>
          <option value='ml' className='measure--unit'>
            ml
          </option>
          <option value='l' className='measure--unit'>
            L
          </option>
          <option value='cucharada' className='measure--unit'>
            cucharada
          </option>
          <option value='cucharadita' className='measure--unit'>
            cucharadita
          </option>
        </select>
        <label htmlFor='productSize'>Especificar tamaño (opcional)</label>
        <input type='text' name='productSize' id='productSize' placeholder='ej: mediano, grande...' />
        <label htmlFor='product'>Ingrediente</label>
        <input type='text' name='product' id='product' placeholder='ej: tomate' />
        <label htmlFor='preparationNotes'>Preparación previa (opcional)</label>
        <input type='text' name='preparationNotes' id='preparationNotes' placeholder='ej: triturado' />
      </fieldset> */}
        <fieldset>
          <textarea
            name='step'
            id='step'
            cols='40'
            rows='10'
            placeholder='Lavamos todas las verduras y...'
            value={stepValueInput}
            onChange={handleChangeStep}
          ></textarea>
          <button onClick={handleClickAddStep}>Añadir</button>
        </fieldset>
        <button type='submit'>Añadir receta</button>
      </form>
      <NewRecipePreview ingredients={ingredients} steps={steps} newTitle={newTitle} initialComment={initialComment} />
    </>
  );
};

export default NewRecipe;
