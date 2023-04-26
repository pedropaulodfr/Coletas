import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Modulos from './pages/Modulos/Modulos';
import PrivateRoutes from './utils/PrivateRoutes';
import Gerador from './pages/Gerador/Gerador';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/" exact element={<Home />} />
            <Route path="/modulos" element={<Modulos />} />
            <Route path="/gerador" exact element={<Gerador />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
