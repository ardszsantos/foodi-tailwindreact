
import './App.css';
import NavBar from './components/navbar';
import HeroSection from './components/heroSection';
import PopularCategories from './components/popCategories';
import DishesSection from './components/dishesSection';
import TestimonialsSection from './components/testimonials';
import OurStoryServices from './components/storyServices';
import FooterComponent from './components/footer';

function App() {
  return (
    <div className="App">
      <NavBar/>      
      <HeroSection/>
      <PopularCategories/>
      <DishesSection/>
      <TestimonialsSection/>
      <OurStoryServices/>
      <FooterComponent/>
    </div>
  );
}

export default App;
