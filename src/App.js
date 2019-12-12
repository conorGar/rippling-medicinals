import React from 'react';
import './App.css';
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
import LoginForm from './Pages/AdminSignin/AdminSignin'
import { login, signUp, getProfile } from './services/apiService'
import authService from './services/authService'



export default class App extends React.Component  {

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
      const fetchUser = await getProfile()
      this.setState(() => {
        return {
          isSignedIn: authService.isAuthenticated(),
          user: fetchUser
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

  render(){
    const { isSignedIn, user } = this.state

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
          path="/blogs"
          component={Blogs}
        />


        <Route
          exact
          path="/product/:id"
          component={ProductPage}
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
            ​{' '}
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


        <Footer />

      </div>
    );
  }
}

