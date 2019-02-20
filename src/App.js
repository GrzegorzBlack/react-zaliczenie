import React, { Component } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Catalog from "./components/Catalog/Catalog";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        {/* */}
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/catalog" component={Catalog} />
          <Route path="/about" component={About} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
