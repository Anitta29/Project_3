import logo from './logo.svg';
import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Listings from './pages/Listings';
import Home from './pages/Home';
import NavBar from './components/Navbar';

function App() {
  return (
   <React.Fragment>
     <Router>
       <NavBar/>
       <Switch>
<Route path="/listings" component={Listings}></Route>
<Route path="/" component={Home}></Route>       
       </Switch>
       {/* <Footer/> */}

       


     </Router>
   </React.Fragment>
  );
}

export default App;
