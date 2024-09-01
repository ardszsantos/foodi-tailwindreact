
import './App.css';
import NavBar from './components/navbar';
import HeroSection from './components/heroSection';
import PopularCategories from './components/popCategories';
import DishesSection from './components/dishesSection';
import TestimonialsSection from './components/testimonials';

function App() {
  return (
    <div className="App">
      <NavBar/>      
      <HeroSection/>
      <PopularCategories/>
      <DishesSection/>
      <TestimonialsSection/>
    </div>
  );
}

export default App;
