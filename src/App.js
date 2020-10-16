import React from 'react';
import NavigationBar from './global/NavigationBar'
import MainPage from './mainPage/MainPage.js'
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./global/Footer"

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <MainPage/>
      <Footer/>
    </div>
  );
} 

export default App;
