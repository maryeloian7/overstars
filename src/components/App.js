import "./App.css";
import GameName from "./gameName/GameName";
import MainView from "./mainView/MainView";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainView />} />
        </Routes>
        <Routes>
          <Route path="/Game" element={<GameName />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
