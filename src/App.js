import React from 'react';
import { useEffect } from 'react';


import { Routes,Route, useLocation  } from "react-router-dom";

import './App.css';
import Home from "./components/Home";



import AOS from "aos";
import "aos/dist/aos.css";
import Digital from './components/Digital';
import Footer from './components/Footer';
AOS.init({
  duration: 1200
});

function App() {



return (
    <div className="App">
     

     <Routes>

<Route exact path="/" element={<Home />} />


</Routes>
<Digital/>


<Footer/>

    </div>


  );
}

export default App;
