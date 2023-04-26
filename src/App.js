import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Modulos from './pages/Modulos/Modulos'
import PrivateRoutes from './utils/PrivateRoutes';


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route elements={<PrivateRoutes />} >
            <Route exact path="/" component={Home} />
            <Route path="/modulos" component={Modulos} />
          </Route>
          <Route path="/login"><Login /></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
