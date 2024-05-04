import React from 'react'
import Navbar from './Navbar'
import About from "./About";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MenuCard from './MenuCard';

const Home = () => {
  return (
    <>
  

      <div style={{ position: "absolute", top: "120px", left: "40px" }}>
        <h2> Find Your Peace In SereNova!!</h2>
        <div>
          <p style={{
            color: "black",
            position: "absolute",
            top: "50px",
            left: "20px",
            zIndex: 1

          }}>
            In this safe space,
            <br /> your story matters, your voice is heard.
            <br /> Take that first step towards healing and transformation
            today!!
          </p>
        </div>

        <div style={{ position: "relative", top: "150px", left: "0px" }} ><MenuCard /></div>
        <div >
          <div class="card"  >
           
            <div class="card-body" >
              <h5 class="card-title">Not sure where to start?</h5>
              <p class="card-text">Take a free test & get immediate result </p>
              <a href="#" class="btn btn-primary">Start free assesement</a>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Home
