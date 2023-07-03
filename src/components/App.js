import { Routes, Route } from 'react-router-dom';
import '../styles/App.scss';
import Header from './Header';
import AboutUs from './AboutUs';
import WeeklyPlanner from './WeeklyPlanner';
import NewRecipe from './NewRecipe';

const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={'home'}></Route>
      <Route path='/quienes-somos' element={<AboutUs/>}></Route>
      <Route path='/planificador-semanal' element={<WeeklyPlanner/>}></Route>
      <Route path='/nueva-receta' element={<NewRecipe/>}></Route>
    </Routes>
      
    </>
  );
};

export default App;
