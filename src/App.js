import React from 'react';
import './App.css';
import { Elements, StripeProvider } from 'react-stripe-elements';


import Home from './Pages/Home/Home'
import { Route } from "react-router-dom";
import ProtectedRoute from './Components/ProtectedRoute'

import Header from './Components/Header'
import AboutUs from './Pages/AboutUs/AboutUs'
import Contact from './Pages/Contact/Contact'
import Footer from './Components/Footer'
import ProductPage from './Pages/ProductPage/ProductPage'
import ShopPage from './Pages/Shop/ShopPage'
import Blogs from './Pages/Blog/Blogs'
import BlogPost from './Pages/Blog/BlogPost'
import WriteBlog from './Pages/WriteBlog/WriteBlog'
import ProductCreate from './Pages/ProductCreate/ProductCreate'
import ProductEdit from './Pages/ProductEdit/ProductEdit'
import LoginForm from './Pages/AdminSignin/AdminSignin'
import { login, signUp, getProfile } from './services/apiService'
import authService from './services/authService'
import CheckoutForm from './Components/CheckoutForm/CheckoutForm';



export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      user: {},
      isSignedIn: false,
      showLoginForm: 'loginform-hide',
    }
  }
  componentDidMount = async () => {
    try {
      //const fetchUser = await getProfile()
      this.setState(() => {
        return {
          isSignedIn: authService.isAuthenticated()
          //user: fetchUser
        }
      })
    } catch (error) {
      throw error
    }
  }


  loginUser = async credentials => {
    try {
      const user = await login(credentials)
      this.setState(state => {
        return {
          isSignedIn: true,
          user: user
        }
      })
    } catch (error) {
      throw error
    }
  }

  render() {
    const { isSignedIn, user } = this.state

    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Gupter&display=swap" rel="stylesheet"></link>

        <link href="https://fonts.googleapis.com/css?family=Dosis&display=swap" rel="stylesheet"></link>
        <Header />

        <StripeProvider apiKey="pk_test_fXAZTVvySOsNDXUS5Uf6FFb600A1D1OPT8">
          <Elements>
            <CheckoutForm totalCost={20} />
          </Elements>
        </StripeProvider>
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
          path="/blogs"
          component={Blogs}
        />


        <Route
          exact
          path="/product/:id"
          render={props => (
            <ProductPage {...props} isSignedIn={isSignedIn} />
          )}
        />

        <Route
          exact
          path="/blog/:id"
          component={BlogPost}
        />

        <Route
          exact
          path="/blogs/post"
          component={WriteBlog}
        />
        <div>
          <ProtectedRoute
            path="/create/product"
            user={user}
            component={ProductCreate}
          />
          {' '}
        </div>
        <div>
          <ProtectedRoute
            path="/edit/product/:id"
            user={user}
            component={ProductEdit}
          />
          {' '}
        </div>

        {/* <Route 
        exact
        path="/create/product"
        component={ProductCreate}
        /> */}

        <Route
          exact
          path="/admin/signin"
          render={props => (
            <LoginForm {...props} handleLogin={this.loginUser} />
          )}
        />


        <Footer
          isSignedIn={isSignedIn}
        />

      </div>
    );
  }
}

