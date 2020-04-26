import React, {
  useState,
  useEffect
} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Slider from "react-slick";

function App() {
  const [suggestions,setSuggestions]=useState([])


  useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(data=>{
  setSuggestions(data);
})
  });
  let settings = {
    infinite: false,
    speed: 1000,
    arrows:true,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 960,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 2
        }
    }
  ]
  }
  
      return (
        <div className="container">
            
            {suggestions.length===0?(
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            ):(
                <Slider {...settings}>
                {suggestions.map(current=>(
                        <div className="out" key={current.id}>
                            <div className="card">
                                <img className alt={"names here"} src={`https://source.unsplash.com/random/${current.id}`}  />
                                <div className="card-body">
                                
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            )}
        </div>
    );
}

export default App;
