const RecipeDetail = () => {
  return (
<>
<h2>Título de la receta</h2>
<section className="ingredients">
    <h3>Necesitamos</h3>
    {/* map con el array de ingredientes */}
    <ul>
        <li>ingrediente 1</li>
        <li>ingrediente 2</li>
        <li>ingrediente 3</li>
        <li>ingrediente 4</li>
        <li>ingrediente 5</li>
        <li>ingrediente 6</li>
    </ul>
</section>
<section className="elaboration__steps">
    <h3>Elaboración</h3>
    <p>este es el paso 1 de la receta</p>
    <p>este es el paso 2 de la receta</p>
    <p>este es el paso 3 de la receta</p>
    <p>este es el paso 4 de la receta</p>
    <p>este es el paso 5 de la receta</p>
    <p>este es el paso 6 de la receta</p>
    <p>este es el paso 7 de la receta</p>
    <p>este es el paso 8 de la receta</p>
    <p>este es el paso 9 de la receta</p>
</section>

</>
  );
}

export default RecipeDetail;