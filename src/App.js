import React from "react";
import { Route } from "react-router-dom";

import "./App.css";

import UserList from "./components/UserList";


 import Profile from "./components/profile/Profile";

function App() {
  return (
    <div className="App">
       <Route exact path="/" component={UserList} />
      <Route
        exact
        path="/users/:id"
        render={(props) => <Profile {...props} />}
      />
      
    </div>
  );
}

export default App;
