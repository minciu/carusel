import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';

import './App.css';

function App() {
  const[suggestions,setSuggestions]=useState([])

  useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(data=>{
setSuggestions(data);
})
  }
  );
  return(
    <div className="container">
      <h6 className="text-muted">Restaurants</h6>
      

      </div>
  )

}

export default App;
