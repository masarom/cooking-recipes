import '../styles/layout/NewRecipe.scss';

const NewRecipe = ({ ingrNum, changeIngrNum, ingrFieldsets }) => {
  const handleIngrNum = (ev) => {
    changeIngrNum(ev.target.value);
  };
    

  return (
    <form>
      <h2>Ingredientes</h2>
      <fieldset>
        <label htmlFor='ingredientCount'>¿Cuántos ingredientes tiene tu receta?</label>
        <input type='number' id='ingredientCount' placeholder='ej: 4' value={ingrNum} onChange={handleIngrNum} />
      </fieldset>
      <fieldset className='form__ingredient--item'>{ingrFieldsets}</fieldset>
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
      <button>Añadir</button>
    </form>
  );
};

export default NewRecipe;
