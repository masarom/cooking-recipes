import { Link } from 'react-router-dom';
import '../styles/layout/RecipeArticle.scss';

const RecipesArticle = ({eachRecipe}) => {
  return (
    <Link to={'receta/' + eachRecipe.id}>
    <article>
      <img src={eachRecipe.image} alt={`foto de ${eachRecipe.title}`} className="recipe__image"/>
      <h2>{eachRecipe.title}</h2>
      <p>{eachRecipe.initialComment}</p>
    </article>
    </Link>
  );
};

export default RecipesArticle;
