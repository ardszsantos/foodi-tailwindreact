
import './App.css';
import NavBar from './components/navbar';
import HeroSection from './components/heroSection';
import PopularCategories from './components/popCategories';
import DishesSection from './components/dishesSection';

function App() {
  return (
    <div className="App">
      <NavBar/>      
      <HeroSection/>
      <PopularCategories/>
      <DishesSection/>
    </div>
  );
}

export default App;
