import './App.css';
import Header from './mainPage/AppHeader'
import OurProjects from './ourProjects/OurProjects';
import AboutUs from './aboutUs/AboutUs';
import Career from './career/Career';
import Footer from './footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <OurProjects/>
      <AboutUs/>
      <Career/>
      <Footer/>
    </div>
  );
}

export default App;
