import './App.css';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './container/Login';
import Register from './container/Register';
import EmailAuth from "./container/EmailAuth";
import Home from "./container/Home";
import React, {useEffect, useState} from "react";
import LoginService from "./helper/LoginService";
import Board from './container/Board';
import Article from "./container/Article";
import MajorBoard from "./container/MajorBoard";

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
                        <Route path="/ssuzalal/board" component={Board}/>
                        <Route path="/ssuzalal/article" component={Article}/>
                        <Route path="/ssuzalal/majorBoard" component={MajorBoard}/>
                        <Route component={Login}/>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
