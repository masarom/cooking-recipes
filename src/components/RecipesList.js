import RecipesArticle from "./RecipeArticle";

const RecipesList = ({recipes}) => {
    console.log(recipes);
    const recipesLi = recipes.map((eachRecipe) => {console.log(eachRecipe);return (
      <li key={eachRecipe.id}>
        <RecipesArticle eachRecipe={eachRecipe} />
      </li>
)});
  return (
    <ul>
      {recipesLi}
    </ul>
  );
}

export default RecipesList;