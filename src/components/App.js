import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        {/* Route for Movies component */}
        <Route path="/movies">
          <Movies />
        </Route>

        {/* Route for Directors component */}
        <Route path="/directors">
          <Directors />
        </Route>

        {/* Route for Actors component */}
        <Route path="/actors">
          <Actors />
        </Route>

        {/* Route for Home component */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
