import RecipesArticle from './RecipeArticle';
import '../styles/layout/RecipeList.scss';

const RecipesList = ({ recipes }) => {
  //map recipes
  const recipesLi = recipes.map((eachRecipe, i) => (
    <li key={eachRecipe.id} className={`recipe__list--item ${'item'+i}`}>
      <RecipesArticle eachRecipe={eachRecipe} i={i}/>
    </li>
  ));
  return (
    <ul className='recipe__list'>
      {recipesLi}
    </ul>
  );
};

export default RecipesList;
