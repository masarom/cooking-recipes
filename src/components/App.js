//hooks
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
//components
import Header from './Header';
import AboutUs from './AboutUs';
import WeeklyPlanner from './WeeklyPlanner';
import NewRecipe from './NewRecipe';
import recipesJSON from '../services/recipes.json';
///styles
import '../styles/App.scss';
import RecipesList from './RecipesList';

const App = () => {
  const [recipes, setRecipes] = useState(recipesJSON);
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<RecipesList recipes={recipes}/>}></Route>
      <Route path='/quienes-somos' element={<AboutUs/>}></Route>
      <Route path='/planificador-semanal' element={<WeeklyPlanner/>}></Route>
      <Route path='/nueva-receta' element={<NewRecipe/>}></Route>
    </Routes>
    </>
  );
};

export default App;
