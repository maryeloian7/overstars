import './App.css';
import Header from './mainPage/AppHeader'
import OurProjects from './ourProjects/OurProjects';
import AboutUs from './aboutUs/AboutUs';
import Career from './career/Career';

function App() {
  return (
    <div className="App">
      <Header/>
      <OurProjects/>
      <AboutUs/>
      <Career/>
    </div>
  );
}

export default App;
