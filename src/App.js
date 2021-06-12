import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./components/Detail";
import Navigation from "./components/Navigation";

function App() {
  return (
  <HashRouter>
    {/* Link has to be inside on the router */}
    <Navigation /> 
    <Route path="/" exact={true} component={Home}></Route>
    <Route path="/about" component={About}></Route>
    <Route path="/movie_detail" component={Detail}></Route>
  </HashRouter>
  );
}

export default App;