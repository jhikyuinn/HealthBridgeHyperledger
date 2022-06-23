import React, { Component} from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Patient from "./components/Patient";
import Recordview from "./components/Recordview";
import './App.css';

function App() {

  return (
          <div className="App">
            <div className="main-content-view">
              <Router>
              <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/patient" exact element={<Patient/>} />
                <Route path="/record" exact element={<Recordview/>} />
              </Routes>
              </Router>
            </div>
          </div>
  );
}

export default App;