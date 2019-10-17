import React from 'react';
import './App.css';
import Home from './Pages/Home/Home'
import { Route } from "react-router-dom";
import Header from './Components/Header'
import AboutUs from './Pages/AboutUs/AboutUs'
import Contact from './Pages/Contact/Contact'
import Footer from './Components/Footer'
import ProductPage from './Pages/ProductPage/ProductPage'
import ShopPage from './Pages/Shop/ShopPage'

function App() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css?family=Dosis&display=swap" rel="stylesheet"></link>
      <Header />
      <Route
        exact
        path="/"
        component={Home}
      />

      <Route
        exact
        path="/about"
        component={AboutUs}
      />

      <Route
        exact
        path="/contact"
        component={Contact}
      />

      <Route
        exact
        path="/shop"
        component={ShopPage}
      />

      <Route
        exact
        path="/product/1"
        component={ProductPage}
      />
      <Footer />

    </div>
  );
}

export default App;
