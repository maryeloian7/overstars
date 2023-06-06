import './App.css';
import Header from './mainPage/AppHeader'
import OurProjects from './ourProjects/OurProjects';
import AboutUs from './aboutUs/AboutUs';

function App() {
  return (
    <div className="App">
      <Header/>
      <OurProjects/>
      <AboutUs/>
    </div>
  );
}

export default App;
