import React from 'react';
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import Menu from './Menu';
import {Routes,Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './index.css';
import  Footer from './Footer'

const App = () => {
    
  return(
    <>
      <Menu/>
      <Routes>
        <Route exact path='/' Component={Home}></Route>
        <Route exact path='/service' Component={Service}></Route>
        <Route exact path='/about' Component={About}></Route>
        <Route exact path='/contact' Component={Contact}></Route>
        
      </Routes>
      <Footer/>
    </>
  )
};
export default App;