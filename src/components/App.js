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
  const [steps, SetSteps] = useState([]);
  const addIngredientValue = (value) => {
    setIngrValueInput(value);
  };
  const addIngredients = (ingredient) => {
    if (!ingredients.includes(ingredient)) {
      ingredients.push(ingredient);
      setIngredients([...ingredients]);
    }
  }

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
            />
          }
        ></Route>
      </Routes>
    </>
  );
};

export default App;
