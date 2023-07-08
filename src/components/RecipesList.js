import RecipesArticle from "./RecipeArticle";

const RecipesList = ({recipes}) => {
    const recipesLi = recipes.map((eachRecipe) => (
      <li key={eachRecipe.id}>
        <RecipesArticle eachRecipe={eachRecipe} />
      </li>
));
  return (
    <ul>
      {recipesLi}
    </ul>
  );
}

export default RecipesList;