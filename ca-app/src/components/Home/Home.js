import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const counter = useSelector(state => state);
  console.log("counter vl",counter);
  return (
    <div>
    <h1>Home Page {counter.login.data.state}</h1>
    <button>
    <Link to="/AboutUs">Move to About Us </Link>
    </button>
    </div>
    
  );
};

export default Home;
