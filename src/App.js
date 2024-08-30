
import './App.css';
import NavBar from './components/navbar';
import HeroSection from './components/heroSection';
import PopularCategories from './components/popCategories';

function App() {
  return (
    <div className="App">
      <NavBar/>      
      <HeroSection/>
      <PopularCategories/>
    </div>
  );
}

export default App;
