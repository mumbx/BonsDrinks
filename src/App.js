import React from "react";
import Index from "./components/pages/Index";
import Header from "./components/Header/Header";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Drinks from "./components/pages/Drinks/Drinks";
import "./App.css";
import Contact from "./components/pages/Contact/Contact";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />

          <Switch>
          <Route path="/" exact> <Index /> </Route> 
          <Route path="/drinks" exact> <Drinks /> </Route>
          <Route path="/contato" exact> <Contact /> </Route>           

          </Switch>

          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
