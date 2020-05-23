import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

import UserLogin from "./components/user-login.component";
import UserRegister from "./components/user-register.component";
import RoomLogin from "./components/room-login.component";
import RoomRegister from "./components/room-register.component";
import Room from "./components/room.component";

function App() {
  return (
    <Router>
      <div className="container">
        
        <br/>
        <Route path="/" exact component={UserLogin} />
        <Route path="/register" component={UserRegister} />
        <Route path="/room-login" component={RoomLogin} />
        <Route path="/room-register" component={RoomRegister} />
        <Route path="/room/:room" component={Room} />
      </div>
    </Router>
  );
}

export default App;
