import logo from './logo.svg';
import './App.css';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './container/Login';
import Register from './container/Register';
import EmailAuth from "./container/EmailAuth";
import Home from "./container/Home";
import React, {useEffect, useState} from "react";
import PrivateRoute from "./helper/PrivateRoute";
import LoginService from "./helper/LoginService";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        LoginService.isLoggedIn().then(result => {
            setLoggedIn(result);
        }).catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <div>
            <Router>
                <div className="container">
                    <Switch>
                        <Route component={loggedIn ? Home : Login} exact path="/"/>
                        <Route path="/ssuzalal/login" component={Login}/>
                        <Route path="/ssuzalal/register" component={Register}/>
                        <Route exact path="/ssuzalal/home" component={Home}/>
                        <Route path="/ssuzalal/emailAuth" component={EmailAuth}/>
                        <Route component={Login}/>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
