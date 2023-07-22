//hooks
import { Routes, Route, useLocation, matchPath } from 'react-router-dom';
import { useState } from 'react';
//components
import Header from './Header';
import AboutUs from './AboutUs';
import WeeklyPlanner from './WeeklyPlanner';
import NewRecipe from './new_recipe/NewRecipe';
import recipesJSON from '../services/recipes.json';
import RecipesList from './RecipesList';
import RecipeDetail from './RecipeDetail';
///styles
import '../styles/App.scss';
import Footer from './Footer';
import Hero from './Hero';

const App = () => {
  // states
  // 1 to save all recipes
  const [recipes, setRecipes] = useState(recipesJSON);
  // 2 to save last input ingredient value
  const [ingrValueInput, setIngrValueInput] = useState('');
  // 3 to save ingredients array
  const [ingredients, setIngredients] = useState([]);
  // 4 to save last input steps value
  const [stepValueInput, setStepValueInput] = useState('');
  // 5 to save recipe steps
  const [steps, setSteps] = useState([]);
  // 6 to save recipe title
  const [newTitle, setNewTitle] = useState('');
  // 7 to save initial comment
  const [initialComment, setInitialComment] = useState('');
  // 8 to save Image
  const [newImage, setNewImage] = useState('');
  // 9 Add new Recipe
  const [newRecipe, setNewRecipe] = useState({
    id: '',
    title: '',
    image: '',
    initialComment: '',
    ingredients: {
      rawList: [],
    },
    elaboration: {
      steps: [],
    },
    finalQuote: '¡Que aproveche!',
  });

  //New recipe INGREDIENTS
  const addIngredientValue = (value) => {
    setIngrValueInput(value);
  };
  const addIngredients = (ingredient) => {
    if (!ingredients.includes(ingredient)) {
      const clonedIngredients = [...ingredients];
      clonedIngredients.push(ingredient);
      setIngredients(clonedIngredients);
    }
  };
  // update Ingredients
  const updateIngredients = (index) => {
    if (index !== -1) {
      const clonedIngr = [...ingredients];
      clonedIngr.splice(index, 1);
      setIngredients(clonedIngr);
    }
  };

  // New Recipe STEPS
  const addStepValue = (value) => {
    setStepValueInput(value);
  };

  // update Steps
  const updateSteps = (index) => {
    if (index !== -1) {
      const clonedSteps = [...steps];
      clonedSteps.splice(index, 1);
      setSteps(clonedSteps);
    }
  };

  const addSteps = (step) => {
    if (!steps.includes(step)) {
      const clonedSteps = [...steps];
      clonedSteps.push(step);
      setSteps(clonedSteps);
    }
  };
  // new TITLE
  const addNewTitle = (title) => {
    setNewTitle(title);
  };
  // new INITIAL COMMENT
  const addInitialComment = (comment) => {
    setInitialComment(comment);
  };

  // new IMAGE (url)
  const addNewImage = (image) => {
    setNewImage(image);
  };

  // Add NEW RECIPE
  const addNewRecipe = () => {
    const clonedNewRecipe = {
      ...newRecipe,
      id: crypto.randomUUID(),
      title: newTitle,
      initialComment: initialComment,
      image: newImage,
      ingredients: { rawList: ingredients },
      elaboration: { steps: steps },
    };
    setNewRecipe(clonedNewRecipe);
    setRecipes([...recipes, clonedNewRecipe]);
  };

  // DYMANIC ROUTES for RecipeDetail
  const { pathname } = useLocation();
  const routeData = matchPath('receta/:recipeId', pathname);
  const recipeId = routeData?.params.recipeId;
  const findRecipe = recipes.find((eachRecipe) => eachRecipe.id === recipeId);

  return (
    <div className='body__container'> 
      <section className='body__container--content'>
      
        <Header />
        <main className='main'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <Hero />
                  <RecipesList recipes={recipes} />
                </>
              }
            ></Route>
            <Route path='/quienes-somos' element={<AboutUs />}></Route>
            <Route path='/planificador-semanal' element={<WeeklyPlanner />}></Route>
            <Route
              path='/nueva-receta'
              element={
                <NewRecipe
                  /* one input only */
                  addIngredientValue={addIngredientValue}
                  ingrValueInput={ingrValueInput}
                  addIngredients={addIngredients}
                  ingredients={ingredients}
                  addStepValue={addStepValue}
                  stepValueInput={stepValueInput}
                  addSteps={addSteps}
                  steps={steps}
                  addNewRecipe={addNewRecipe}
                  recipes={recipes}
                  addNewTitle={addNewTitle}
                  newTitle={newTitle}
                  addInitialComment={addInitialComment}
                  initialComment={initialComment}
                  addNewImage={addNewImage}
                  newImage={newImage}
                  updateIngredients={updateIngredients}
                  updateSteps={updateSteps}
                />
              }
            ></Route>
            <Route path='receta/:recipeId' element={<RecipeDetail findRecipe={findRecipe} />}></Route>
          </Routes>
        </main>
        <Footer />
      </section> 
    </div>
  
  );
};

export default App;
