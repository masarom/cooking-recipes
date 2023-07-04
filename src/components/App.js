//hooks
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
  const [ingrNum, setIngrNum] = useState(0);
  const [ingrFieldsets, setIngrFielsets] = useState([]);

  //useEffect to control add new ingredients

  useEffect(() => {
    const fieldsets = [];
    for(let i = 1; i <= ingrNum; i++) {
      fieldsets.push(
          <input type='text' key={i} id={'ingr'+i} placeholder={`Ingrediente ${i}`} />
      );
    }
    console.log(fieldsets);
    setIngrFielsets(fieldsets);
  }, [ingrNum])

  const changeIngrNum = (value) => {
    const number = parseInt(value);
    setIngrNum(number);
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
          element={<NewRecipe ingrNumber={ingrNum} changeIngrNum={changeIngrNum} ingrFieldsets={ingrFieldsets} />}
        ></Route>
      </Routes>
    </>
  );
};

export default App;
