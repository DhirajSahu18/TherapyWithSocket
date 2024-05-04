import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>


       <Router>   
       <Navbar title="SereNova"/>  
        <Routes>
        <Route exact path="/" element={ <Home/>}> 
          </Route>
          <Route exact path="/About" element={  <About/>}>
          </Route>  
          <Route exact path="/Login" element={  <Login/>}>
          </Route>
        </Routes>
  
    </Router>
    </>
  );
}

export default App;
// style={{ backgroundColor: '#CAE4FA', height: '100vh' }}
