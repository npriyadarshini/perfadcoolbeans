import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Purchase from "./components/purchase";
import Signup from "./components/signup";
import Home from "./components/home";


ReactDOM.render(
  <Router basename="/perfadcoolbeans">
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="purchase" element={<Purchase />} />
        <Route path="signup" element={<Signup />} />
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  </Router>,
  //<App />,
  document.getElementById("root")
);
