import React from 'react';
import NavigationBar from './global/NavigationBar'
import MainPage from './mainPage/MainPage.js'
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./global/Footer"
import SecondPage from './global/SecondPage'
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Route path="/" exact component={SecondPage} />
        <Route path="/main"  component={MainPage} />
        <Footer/>
      </div>
    </Router>

  );
}

export default App;
