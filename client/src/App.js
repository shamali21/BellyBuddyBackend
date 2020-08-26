import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";


import Navbar from "./components/navbar.component";
import MenuList from "./components/menu-list.component";
import EditMenu from "./components/edit-menu.component";
import CreateMenu from "./components/create-menu.component";
import CreateUser from "./components/create-user.component";


function App() {
  
  return (
    <Router>
      <div className="container">
    <Navbar />
    <br/>
    <Route path="/" exact component={MenuList} />
    <Route path="/edit/:id" component={EditMenu} />
    <Route path="/create" component={CreateMenu} />
    <Route path="/user" component={CreateUser} />
    </div>
    </Router>
  );
}

export default App;
