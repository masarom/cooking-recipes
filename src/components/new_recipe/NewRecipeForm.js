import '../../styles/layout/NewRecipeForm.scss';

const NewRecipeForm = ({
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

  const handleChangeImage = (ev) => {
    addNewImage(ev.target.value);
  };

  const handleClickAddRecipe = (ev) => {
    ev.preventDefault();
    return addNewRecipe();
  };
  return (
    <form className='form' onSubmit={handleClickAddRecipe}>
      <fieldset className='form__info'>
        <h2 className='form__info--title'>Título</h2>
        <input
          type='text'
          className='form__info--input'
          name='title'
          placeholder='Título de la receta'
          value={newTitle}
          onInput={hangleChangeTitle}
        />
        <label className='form__info--initialComment' htmlFor='initialComment'>
          Comentario inicial
        </label>
        <textarea
          className='form__info--textarea'
          name='initialComment'
          id='initialComment'
          cols='40'
          rows='5'
          placeholder='Ej: Esta receta me la enseñó mi madre'
          value={initialComment}
          onInput={handleChangeInitialComment}
        ></textarea>
      </fieldset>
      <fieldset className='form__image'>
        <label className='form__image--title' htmlFor='image'>
          Imagen de presentación
        </label>
        <input
          type='url'
          className='form__image--input'
          name='image'
          id='image'
          placeholder='Ej: https://google.es'
          value={newImage}
          onInput={handleChangeImage}
        />
      </fieldset>
      <fieldset className='form__ingredients'>
        <h2 className='form__ingredients--title'>Ingredientes</h2>
        <p className='form__ingredients--text'>
          Escribe el ingrediente deseado y pulsa el botón de "añadir". Aparecerá en la sección de "Ingredientes":
        </p>
        <input
          type='text'
          className='form__ingredients--input'
          name='ingredient'
          placeholder='ej: 1 kg de patatas'
          onChange={handleChangeIngredient}
          value={ingrValueInput}
        />
        <button className='form__ingredients--btn' onClick={handleClickAddIngredient}>
          Añadir
        </button>
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
      <fieldset className='form__elaboration'>
        <label className='form__elaboration--title' htmlFor='step'>
          Elaboración
        </label>
        <p className='form__elaboration--text'>
          Escribe un paso de la receta y pulsa el botón de "añadir". Aparecerá en la sección de "Elaboración":
        </p>
        <textarea
          className='form__elaboration--textarea'
          name='step'
          id='step'
          cols='40'
          rows='10'
          placeholder='Lavamos todas las verduras y...'
          value={stepValueInput}
          onChange={handleChangeStep}
        ></textarea>
        <button className='form__elaboration--btn' onClick={handleClickAddStep}>
          Añadir
        </button>
      </fieldset>
      <button className='form__submit' type='submit'>
        Añadir receta
      </button>
    </form>
  );
};

export default NewRecipeForm;