//hooks
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
//components
import Header from './Header';
import AboutUs from './AboutUs';
import WeeklyPlanner from './WeeklyPlanner';
import NewRecipe from './new_recipe/NewRecipe';
import recipesJSON from '../services/recipes.json';
///styles
import '../styles/App.scss';
import RecipesList from './RecipesList';

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
  // 8 Add new Recipe
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
  // New Recipe STEPS
  const addStepValue = (value) => {
    setStepValueInput(value);
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
  }
  // new INITIAL COMMENT
  const addInitialComment = (comment) => {
    setInitialComment(comment);
  }
  // Add NEW RECIPE
  const addNewRecipe = () => {
    const clonedNewRecipe = {
      ...newRecipe,
      title: newTitle,
      initialComment: initialComment,
      ingredients: { rawList: ingredients },
      elaboration: { steps: steps },
    };
    setNewRecipe(clonedNewRecipe);
    setRecipes([...recipes, clonedNewRecipe])
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<RecipesList recipes={recipes} />}></Route>
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
            />
          }
        ></Route>
      </Routes>
    </>
  );
};

export default App;
