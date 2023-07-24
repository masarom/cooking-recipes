import { Link } from 'react-router-dom';
import '../styles/layout/RecipeArticle.scss';



const RecipesArticle = ({eachRecipe, i}) => {
  return (
        <Link to={'receta/' + eachRecipe.id} className='recipe__link'>
          <article className='recipe__article'>
            <div className={'recipe__article--image item' + i } style={{ backgroundImage: `url(${eachRecipe.image})` }}></div>
            {/* <img src={eachRecipe.image} alt={`foto de ${eachRecipe.title}`} className='recipe__article--image' /> */}
            <h2 className='recipe__article--title'>{eachRecipe.title}</h2>
            <p className='recipe__article--excerpt'>{eachRecipe.initialComment}</p>
          </article>
        </Link>
  );
};

export default RecipesArticle;
