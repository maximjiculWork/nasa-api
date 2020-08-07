import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import AppDescription from "./AppDescription";
import MainGenerator from "./MainGenerator";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={AppDescription} />
        <Route path="/nasa-pod" component={MainGenerator} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
