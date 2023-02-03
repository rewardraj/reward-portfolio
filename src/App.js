import React from "react";
import Home from "./Components/Pages/Home/Home";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./Styles/globalStyles";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Home />
    </Router>
   
  );
}

export default App;
