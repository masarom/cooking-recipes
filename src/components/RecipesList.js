import RecipesArticle from "./RecipeArticle";
import '../styles/layout/RecipeList.scss';

const RecipesList = ({recipes}) => {
    const recipesLi = recipes.map((eachRecipe) => (
      <li key={eachRecipe.id} className="recipe__list--item">
        <RecipesArticle eachRecipe={eachRecipe} />
      </li>
));
  return (
    <ul className="recipe__list">
      {recipesLi}
    </ul>
  );
}

export default RecipesList;