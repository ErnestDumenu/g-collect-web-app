import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route,Routes, Link } from "react-router-dom";
// import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardUser1 from "./components/board-user1.component";
// import BoardModerator from "./components/board-moderator.component";
// import BoardAdmin from "./components/board-admin.component";

import { logout } from "./actions/auth.js";
import { clearMessage } from "./actions/message.js";
import { history } from './helpers/browserHistory.js';
import logo from './images/GarbageTruck.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };

    history.listen((location) => {
      props.dispatch(clearMessage()); // clear message when changing location
    });
  }

  componentDidMount() {
    const user = this.props.user;

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
        
      });
      // console.log('User logged In ' + user.toJSON())
    }
  }

  logOut() {
    this.props.dispatch(logout());
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <Router history={history}>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark bg-navbar">
            <img className=" ms-4 rounded-circle " src={logo} height="50px" width="60px" alt="Logo"/>
            <Link to={"/"} className="navbar-brand">
              G-Collect
            </Link>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/home"} className="nav-link">
                  Home
                </Link>
              </li>

              {showModeratorBoard && (
                <li className="nav-item">
                  <Link to={"/mod"} className="nav-link">
                    Moderator Board
                  </Link>
                </li>
              )}

              {showAdminBoard && (
                <li className="nav-item">
                  <Link to={"/admin"} className="nav-link">
                    Admin Board
                  </Link>
                </li>
              )}

              {currentUser && (
                <li className="nav-item">
                  <Link to={"/user"} className="nav-link">
                    User
                  </Link>
                </li>
              )}
            </div>

            {currentUser ? (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    {currentUser.name}
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/login" className="nav-link " onClick={this.logOut}>
                    Log Out
                  </a>
                </li>
              </div>
            ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/register"} className="nav-link ">
                    Sign Up
                  </Link>
                </li>
              </div>
            )}
          </nav>

          <div className="container ">
            {/* <BrowserRouter> */}
            
            <Routes>
              <Route  path="/"  element={<Home/>} />
              <Route  path="/login" element={<Login/>} />
              <Route  path="/register" element={<Register/>} />
              <Route  path="/profile" element={<Profile/>} />
              <Route path="/user" element={<BoardUser/>} />
              {/* <Route path="/mod" component={BoardModerator} /> */}
              {/* <Route path="/admin" component={BoardAdmin} /> */}
            </Routes>
            {/* </BrowserRouter> */}
          </div>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(App);
